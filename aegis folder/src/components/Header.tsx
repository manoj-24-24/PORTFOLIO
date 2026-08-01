"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { id: "about", label: "whoami" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "achievements", label: "achievements" },
  { id: "github", label: "github" },
  { id: "contact", label: "contact" }
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-void/70 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-neon-cyan/40 bg-neon-cyan/10 font-mono text-sm font-bold text-neon-cyan shadow-glow">
            MK
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">{portfolio.name}</span>
            <span className="hidden text-xs text-slate-400 sm:block">{portfolio.location}</span>
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 text-sm capitalize text-slate-300 transition hover:bg-white/10 hover:text-neon-cyan"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={portfolio.resumeUrl}
          className="rounded-full border border-neon-purple/50 bg-neon-purple/10 px-4 py-2 text-sm font-medium text-white shadow-purpleGlow transition hover:-translate-y-0.5 hover:border-neon-cyan hover:bg-neon-cyan/10"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
}
