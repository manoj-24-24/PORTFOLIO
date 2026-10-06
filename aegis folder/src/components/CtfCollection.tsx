"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock, ExternalLink, ShieldCheck, Terminal, Users } from "lucide-react";
import type { ReactNode } from "react";
import { portfolio, type CtfEntry } from "@/data/portfolio";
import { Section } from "@/components/Section";

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function BadgeCard({ entry, index }: { entry: CtfEntry; index: number }) {
  return (
    <motion.a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-cyan/50 hover:shadow-glow"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
        <img
          src={entry.image}
          alt={entry.title}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute left-3 top-3 rounded-full border border-neon-cyan/40 bg-void/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan backdrop-blur">
          Badge
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
          <div>
            <p className="text-lg font-semibold text-white">{entry.title}</p>
            {entry.earned ? (
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                Earned {entry.earned}
              </p>
            ) : null}
          </div>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-300">{entry.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {entry.skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-neon-cyan">
          View badge
          <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.a>
  );
}

function RoomRow({ entry, index }: { entry: CtfEntry; index: number }) {
  return (
    <motion.a
      href={entry.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-purple/50 hover:shadow-purpleGlow"
    >
      <div className="relative overflow-hidden border-b border-white/10 bg-void/60">
        <img
          src={entry.image}
          alt={entry.title}
          className="h-24 w-full object-cover object-left transition duration-700 group-hover:scale-[1.02] sm:h-auto sm:object-center"
        />
        <span className="absolute left-3 top-3 hidden rounded-full border border-neon-purple/40 bg-void/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-neon-purple backdrop-blur sm:inline-block">
          Room
        </span>
      </div>
      <div className="flex flex-col gap-5 p-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="flex items-start gap-3">
            <Terminal className="mt-0.5 h-5 w-5 shrink-0 text-neon-purple" />
            <div>
              <p className="text-lg font-semibold text-white">{entry.title}</p>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                {entry.duration ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {entry.duration}
                  </span>
                ) : null}
                {entry.learners ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    {entry.learners} learners
                  </span>
                ) : null}
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{entry.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.skills.map((skill) => (
              <Chip key={skill}>{skill}</Chip>
            ))}
          </div>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-neon-purple">
          View room
          <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </motion.a>
  );
}

export function CtfCollection() {
  const { ctf } = portfolio;
  const badges = ctf.entries.filter((entry) => entry.kind === "badge");
  const rooms = ctf.entries.filter((entry) => entry.kind === "room");

  return (
    <Section
      id="ctf"
      eyebrow="CTF & Labs"
      title="Hands-on security training with TryHackMe."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
      >
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
          <p className="text-sm leading-6 text-slate-300">
            <span className="font-semibold text-white">{ctf.platform}</span>{" "}
            <span className="font-mono text-neon-cyan">@{ctf.handle}</span> - {ctf.summary}
          </p>
        </div>
        <a
          href={ctf.profileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neon-cyan/20"
        >
          Visit profile
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.div>

      <div className="space-y-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BadgeCheck className="h-5 w-5 text-neon-cyan" />
            <h3 className="text-xl font-semibold text-white">Earned badges</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {badges.map((entry, index) => (
              <BadgeCard key={entry.title} entry={entry} index={index} />
            ))}
          </div>
        </div>

        {rooms.length ? (
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Terminal className="h-5 w-5 text-neon-purple" />
              <h3 className="text-xl font-semibold text-white">Completed rooms</h3>
            </div>
            <div className="grid gap-5">
              {rooms.map((entry, index) => (
                <RoomRow key={entry.title} entry={entry} index={index} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
