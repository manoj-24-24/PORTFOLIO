"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setStatus("");
  }

  async function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setError("Please complete every field before sending.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        emailConfigured?: boolean;
        emailDelivered?: boolean;
      };

      if (!response.ok || !result.ok) {
        setError(result.error || "Message could not be sent. Please try again.");
        return;
      }

      setStatus(
        result.emailConfigured && result.emailDelivered
          ? "Message sent successfully. I will reply through email."
          : "Message saved locally. Add Gmail app password settings to receive it in your email inbox."
      );
      setForm(initialForm);
    } catch {
      setError("Message could not be sent. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Start a conversation about internships, projects, or security work.">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold text-white">{portfolio.contact.name}</h3>
          <div className="mt-6 space-y-3">
            <a href={`mailto:${portfolio.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-void/40 p-4 text-slate-300 transition hover:border-neon-cyan hover:text-neon-cyan">
              <Mail className="h-5 w-5" />
              {portfolio.email}
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-void/40 p-4 text-slate-300">
              <MapPin className="h-5 w-5 text-neon-purple" />
              {portfolio.location}
            </div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={submitForm}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              suppressHydrationWarning
              type="text"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Name"
              className="rounded-xl border border-white/10 bg-void/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-neon-cyan focus:shadow-glow"
            />
            <input
              suppressHydrationWarning
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-void/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-neon-cyan focus:shadow-glow"
            />
          </div>
          <input
            suppressHydrationWarning
            type="text"
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            placeholder={portfolio.contact.subjectPlaceholder}
            className="mt-4 w-full rounded-xl border border-white/10 bg-void/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-neon-cyan focus:shadow-glow"
          />
          <textarea
            suppressHydrationWarning
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder={portfolio.contact.messagePlaceholder}
            rows={6}
            className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-void/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-neon-cyan focus:shadow-glow"
          />
          {error ? <p className="mt-3 text-sm text-red-300">{error}</p> : null}
          {status ? <p className="mt-3 text-sm text-neon-cyan">{status}</p> : null}
          <button
            suppressHydrationWarning
            disabled={sending}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neon-cyan px-6 py-3 font-semibold text-void shadow-glow transition hover:-translate-y-1 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            <Send className="h-4 w-4" />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
