"use client";

import { motion } from "framer-motion";
import { Cpu, Database, ShieldAlert } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

const icons = [Cpu, Database, ShieldAlert];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Full-stack foundations with cybersecurity depth.">
      <div className="grid gap-5 lg:grid-cols-3">
        {portfolio.skills.map((group, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-purple/60 hover:shadow-purpleGlow"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-neon-purple/10 text-neon-purple">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-xl font-semibold text-white">{group.category}</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-sm text-slate-200 transition hover:border-neon-cyan hover:text-neon-cyan"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
