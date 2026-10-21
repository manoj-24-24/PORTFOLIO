"use client";

import { ArrowDown, Download, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";
import { Typewriter } from "@/components/Typewriter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-emerald-400/30 bg-void/70 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-emerald-300 backdrop-blur sm:text-xs">
            <span className="text-emerald-300 opacity-60">root@manoj-k:~$</span>
            <span>
              <span className="opacity-60">&#123;</span>{" "}
              <span className="[text-shadow:0_0_16px_rgba(16,185,129,0.55)]">
                welcome to {portfolio.name} portfolio
              </span>{" "}
              <span className="opacity-60">&#125;</span>
            </span>
            <motion.span
              aria-hidden
              className="inline-block h-3.5 w-2 bg-emerald-300"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: "linear" }}
            />
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            {portfolio.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
            {portfolio.title}
          </p>
          <div className="mt-4 min-h-9 font-mono text-lg text-neon-cyan sm:text-xl">
            <Typewriter words={portfolio.typedRoles} />
          </div>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {portfolio.about}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neon-cyan px-6 py-3 font-semibold text-void shadow-glow transition hover:-translate-y-1 hover:bg-white"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={portfolio.resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-neon-purple/50 bg-white/[0.06] px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-neon-cyan hover:text-neon-cyan"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[conic-gradient(from_180deg,rgba(34,211,238,.35),rgba(168,85,247,.45),rgba(56,189,248,.35),rgba(34,211,238,.35))] opacity-80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-neon-cyan/40 bg-white/[0.06] p-3 shadow-glow backdrop-blur-xl">
            <img
              src={portfolio.profileImage}
              alt={`${portfolio.name} profile`}
              className="aspect-[4/5] w-full rounded-[1.4rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-void/70 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon-cyan/15 text-neon-cyan">
                  <ShieldCheck className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-semibold text-white">{portfolio.education}</p>
                  <p className="text-sm text-slate-400">{portfolio.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
