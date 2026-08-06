import { mkdir, readFile, writeFile } from "node:fs/promises";
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

async function forwardToEmail(message: StoredMessage) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim() || "Manoj Portfolio <onboarding@resend.dev>";

  if (!apiKey) return { configured: true, delivered: false, message: "RESEND_API_KEY is missing." };
  if (!to) return { configured: true, delivered: false, message: "CONTACT_TO_EMAIL is missing." };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: message.email,
      subject: `Portfolio Contact: ${message.subject}`,
      text: `Name: ${message.name}\nSender Email: ${message.email}\nSubject: ${message.subject}\n\n${message.message}`
    })
  });

  const result = (await response.json().catch(() => null)) as { id?: string; message?: string; error?: string } | null;

  if (!response.ok) {
    return { configured: true, delivered: false, message: result?.message || result?.error || response.statusText };
  }

  return { configured: true, delivered: true, message: result?.id || "Email sent through Resend." };
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
        error: `Message was saved, but email delivery failed: ${emailResult.message || "Please check your Resend settings."}`
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
