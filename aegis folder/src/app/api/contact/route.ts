import { mkdir, readFile, writeFile } from "node:fs/promises";
import tls from "node:tls";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

type StoredMessage = Required<ContactPayload> & {
  id: string;
  createdAt: string;
};

const emailPattern = /^\S+@\S+\.\S+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function encodeBase64(value: string) {
  return Buffer.from(value, "utf8").toString("base64");
}

function escapeMailText(value: string) {
  return value.replace(/\r?\n/g, "\r\n").replace(/^\./gm, "..");
}

async function saveMessage(message: StoredMessage) {
  const dataDir = path.join(process.cwd(), "data");
  const filePath = path.join(dataDir, "contact-messages.json");

  await mkdir(dataDir, { recursive: true });

  let messages: StoredMessage[] = [];

  try {
    const existing = await readFile(filePath, "utf8");
    messages = JSON.parse(existing) as StoredMessage[];
  } catch {
    messages = [];
  }

  messages.unshift(message);
  await writeFile(filePath, JSON.stringify(messages, null, 2), "utf8");
}

function readSmtpResponse(socket: tls.TLSSocket) {
  return new Promise<string>((resolve, reject) => {
    let data = "";

    function cleanup() {
      socket.off("data", onData);
      socket.off("error", onError);
    }

    function onError(error: Error) {
      cleanup();
      reject(error);
    }

    function onData(chunk: Buffer) {
      data += chunk.toString("utf8");
      const lines = data.trimEnd().split(/\r?\n/);
      const lastLine = lines[lines.length - 1] || "";

      if (/^\d{3} /.test(lastLine)) {
        cleanup();
        resolve(data);
      }
    }

    socket.on("data", onData);
    socket.on("error", onError);
  });
}

async function sendSmtpCommand(socket: tls.TLSSocket, command: string, expectedCodes: string[]) {
  socket.write(`${command}\r\n`);
  const response = await readSmtpResponse(socket);

  if (!expectedCodes.some((code) => response.startsWith(code))) {
    throw new Error(response.trim());
  }

  return response;
}

async function forwardToEmail(message: StoredMessage) {
  const gmailUser = process.env.GMAIL_USER?.trim();
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");

  if (!gmailUser || !gmailAppPassword) {
    return { configured: false, delivered: false, message: "" };
  }

  const socket = tls.connect({
    host: "smtp.gmail.com",
    port: 465,
    servername: "smtp.gmail.com"
  });

  try {
    await new Promise<void>((resolve, reject) => {
      socket.once("secureConnect", resolve);
      socket.once("error", reject);
    });

    const greeting = await readSmtpResponse(socket);
    if (!greeting.startsWith("220")) {
      throw new Error(greeting.trim());
    }

    await sendSmtpCommand(socket, "EHLO localhost", ["250"]);
    await sendSmtpCommand(socket, "AUTH LOGIN", ["334"]);
    await sendSmtpCommand(socket, encodeBase64(gmailUser), ["334"]);
    await sendSmtpCommand(socket, encodeBase64(gmailAppPassword), ["235"]);
    await sendSmtpCommand(socket, `MAIL FROM:<${gmailUser}>`, ["250"]);
    await sendSmtpCommand(socket, `RCPT TO:<${gmailUser}>`, ["250", "251"]);
    await sendSmtpCommand(socket, "DATA", ["354"]);

    const emailBody = [
      `From: "Manoj K Portfolio" <${gmailUser}>`,
      `To: ${gmailUser}`,
      `Reply-To: ${message.name} <${message.email}>`,
      `Subject: Portfolio Contact: ${message.subject}`,
      "MIME-Version: 1.0",
      "Content-Type: text/plain; charset=UTF-8",
      "",
      `Name: ${message.name}`,
      `Sender Email: ${message.email}`,
      `Subject: ${message.subject}`,
      "",
      "Message:",
      message.message
    ].join("\r\n");

    socket.write(`${escapeMailText(emailBody)}\r\n.\r\n`);
    const deliveryResponse = await readSmtpResponse(socket);

    if (!deliveryResponse.startsWith("250")) {
      throw new Error(deliveryResponse.trim());
    }

    await sendSmtpCommand(socket, "QUIT", ["221"]);

    return {
      configured: true,
      delivered: true,
      message: "Email sent through Gmail."
    };
  } catch (error) {
    return {
      configured: true,
      delivered: false,
      message: error instanceof Error ? error.message : "Gmail delivery failed."
    };
  } finally {
    socket.destroy();
  }
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  const message: StoredMessage = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: clean(body?.name),
    email: clean(body?.email),
    subject: clean(body?.subject),
    message: clean(body?.message)
  };

  if (!message.name || !message.email || !message.subject || !message.message) {
    return NextResponse.json(
      { ok: false, error: "Please complete every field before sending." },
      { status: 400 }
    );
  }

  if (!emailPattern.test(message.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  await saveMessage(message);
  const emailResult = await forwardToEmail(message);

  if (emailResult.configured && !emailResult.delivered) {
    return NextResponse.json(
      {
        ok: false,
        stored: true,
        emailConfigured: true,
        emailDelivered: false,
        error: `Message was saved, but Gmail delivery failed: ${emailResult.message || "Please check your Gmail app password settings."}`
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    stored: true,
    emailConfigured: emailResult.configured,
    emailDelivered: emailResult.delivered
  });
}
