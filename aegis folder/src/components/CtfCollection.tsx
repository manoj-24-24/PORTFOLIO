"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Clock,
  ExternalLink,
  Hourglass,
  Lock,
  Radar,
  ShieldCheck,
  Terminal,
  Users
} from "lucide-react";
import {
  portfolio,
  type CtfAccent,
  type CtfEntry,
  type CtfPlatform
} from "@/data/portfolio";
import { Section } from "@/components/Section";

type Theme = {
  hover: string;
  tile: string;
  text: string;
  chip: string;
  blob: string;
  bar: string;
  button: string;
  divider: string;
};

const THEMES: Record<CtfAccent, Theme> = {
  cyan: {
    hover: "hover:border-neon-cyan/45 hover:shadow-glow",
    tile: "border-neon-cyan/30 bg-gradient-to-br from-neon-cyan/25 to-neon-blue/5 text-neon-cyan",
    text: "text-neon-cyan",
    chip: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan",
    blob: "bg-neon-cyan/20",
    bar: "from-neon-cyan/80 via-neon-blue/40",
    button: "border-neon-cyan/40 bg-neon-cyan/10 hover:bg-neon-cyan/20",
    divider: "via-neon-cyan/30"
  },
  emerald: {
    hover: "hover:border-emerald-400/45 hover:shadow-[0_0_40px_rgba(16,185,129,0.28)]",
    tile: "border-emerald-400/30 bg-gradient-to-br from-emerald-400/25 to-emerald-500/5 text-emerald-300",
    text: "text-emerald-300",
    chip: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
    blob: "bg-emerald-400/20",
    bar: "from-emerald-400/80 via-emerald-500/40",
    button: "border-emerald-400/40 bg-emerald-400/10 hover:bg-emerald-400/20",
    divider: "via-emerald-400/30"
  },
  purple: {
    hover: "hover:border-neon-purple/45 hover:shadow-purpleGlow",
    tile: "border-neon-purple/30 bg-gradient-to-br from-neon-purple/25 to-neon-pink/5 text-neon-purple",
    text: "text-neon-purple",
    chip: "border-neon-purple/30 bg-neon-purple/10 text-neon-purple",
    blob: "bg-neon-purple/20",
    bar: "from-neon-purple/80 via-neon-pink/40",
    button: "border-neon-purple/40 bg-neon-purple/10 hover:bg-neon-purple/20",
    divider: "via-neon-purple/30"
  }
};

const ICONS: Record<string, LucideIcon> = {
  tryhackme: ShieldCheck,
  hackthebox: Radar,
  letsdefend: Lock
};

function EntryCard({ entry, theme }: { entry: CtfEntry; theme: Theme }) {
  const KindIcon = entry.kind === "badge" ? BadgeCheck : Terminal;

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      className="group/entry relative block overflow-hidden rounded-2xl border border-white/10 bg-void/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/25"
    >
      <img
        src={entry.image}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover object-left opacity-[0.14] blur-[7px] transition duration-700 group-hover/entry:scale-[1.15] group-hover/entry:opacity-[0.24]"
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-y-4 left-0 w-px bg-gradient-to-b ${theme.bar} to-transparent`}
      />
      <div className="relative">
        <div className="flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] ${theme.text}`}
          >
            <KindIcon className="h-3.5 w-3.5" />
            {entry.kind === "badge" ? "Badge" : "Room"}
          </span>
          <ExternalLink className="h-3.5 w-3.5 text-slate-500 transition group-hover/entry:-translate-y-0.5 group-hover/entry:translate-x-0.5 group-hover/entry:text-white" />
        </div>
        <p className="mt-2 text-sm font-semibold leading-5 text-white">{entry.title}</p>
        {entry.duration || entry.learners || entry.earned ? (
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-400">
            {entry.duration ? (
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {entry.duration}
              </span>
            ) : null}
            {entry.learners ? (
              <span className="inline-flex items-center gap-1">
                <Users className="h-3 w-3" />
                {entry.learners}
              </span>
            ) : null}
            {entry.earned ? <span>Earned {entry.earned}</span> : null}
          </div>
        ) : null}
        <p className="mt-2 text-xs leading-5 text-slate-300">{entry.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {entry.skills.map((skill) => (
            <span
              key={skill}
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${theme.chip}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function PlatformCard({ platform, index }: { platform: CtfPlatform; index: number }) {
  const theme = THEMES[platform.accent];
  const Icon = ICONS[platform.id] ?? ShieldCheck;
  const label = platform.handle ? `@${platform.handle}` : "Profile coming soon";
  const count = platform.entries.length;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition duration-500 sm:p-6 ${theme.hover}`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full blur-3xl ${theme.blob}`}
      />
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r ${theme.bar} to-transparent`}
      />

      <div className="relative flex items-start gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition duration-500 group-hover:scale-105 ${theme.tile}`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-lg font-semibold text-white">{platform.name}</p>
          <p className={`truncate font-mono text-[11px] uppercase tracking-[0.18em] ${theme.text}`}>
            {label}
          </p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${theme.chip}`}
        >
          {count ? `${count} logged` : "Soon"}
        </span>
      </div>

      <div className="relative my-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent">
        <span
          aria-hidden
          className={`absolute inset-y-0 left-0 w-16 bg-gradient-to-r ${theme.divider} to-transparent`}
        />
      </div>

      <p className="relative text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
        {platform.tagline}
      </p>
      <p className="relative mt-2 text-sm leading-6 text-slate-300">{platform.blurb}</p>

      <div className="relative mt-5 flex flex-1 flex-col gap-4">
        {platform.entries.length ? (
          platform.entries.map((entry) => (
            <EntryCard key={entry.title} entry={entry} theme={theme} />
          ))
        ) : (
          <div className="relative flex h-full min-h-[190px] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-dashed border-white/15 bg-void/30 p-6 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-cyber-grid opacity-40 [background-size:26px_26px]"
            />
            <Hourglass className={`relative h-5 w-5 ${theme.text}`} />
            <p className="relative text-sm font-medium text-white">No entries logged yet</p>
            <p className="relative text-xs leading-5 text-slate-400">{platform.placeholder}</p>
            <span
              className={`relative rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${theme.chip}`}
            >
              Coming soon
            </span>
          </div>
        )}
      </div>

      <a
        href={platform.profileUrl ?? platform.platformUrl}
        target="_blank"
        rel="noreferrer"
        className={`relative mt-5 inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 ${theme.button}`}
      >
        {platform.profileUrl ? "View profile" : `Explore ${platform.name}`}
        <ExternalLink className="h-4 w-4" />
      </a>
    </motion.article>
  );
}

export function CtfCollection() {
  return (
    <Section
      id="ctf"
      eyebrow="CTF & Labs"
      title="Hands-on security training on TryHackMe, Hack The Box, and LetsDefend."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {portfolio.ctfPlatforms.map((platform, index) => (
          <PlatformCard key={platform.id} platform={platform} index={index} />
        ))}
      </div>
    </Section>
  );
}
