"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Terminal } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

export function About() {
  return (
    <Section id="about" eyebrow="whoami" title={portfolio.aboutHeadline}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-neon-cyan/25 bg-[#030712]/90 shadow-glow backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-neon-cyan/20 bg-white/[0.04] px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-neon-cyan">
              <Terminal className="h-4 w-4" />
              manoj@portfolio:~$
            </div>
          </div>
          <div className="p-6 font-mono">
            <p className="text-sm text-neon-cyan">
              <span className="text-emerald-300">manoj@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-neon-purple">~</span>
              <span className="text-slate-500">$</span> whoami
            </p>
            <p className="mt-5 text-base leading-8 text-slate-300">{portfolio.about}</p>
            <p className="mt-5 text-sm text-neon-cyan">
              status: <span className="text-emerald-300">building secure systems</span>
            </p>
          </div>
          <div className="grid gap-3 px-6 pb-6 text-sm text-slate-300">
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-void/40 p-4">
              <GraduationCap className="h-5 w-5 text-neon-cyan" />
              {portfolio.education}
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-void/40 p-4">
              <MapPin className="h-5 w-5 text-neon-purple" />
              {portfolio.location}
            </div>
          </div>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2">
          {portfolio.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-glow"
            >
              <p className="font-mono text-4xl font-black text-white">{stat.value}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400 group-hover:text-neon-cyan">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
