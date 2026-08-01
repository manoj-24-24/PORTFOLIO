"use client";

import { motion } from "framer-motion";
import { Award, Flag, Trophy } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Certifications, CTF practice, hackathons, and learning milestones.">
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-neon-cyan" />
            <h3 className="text-2xl font-semibold text-white">Certifications</h3>
          </div>
          <div className="space-y-3">
            {portfolio.certifications.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-xl border border-neon-cyan/15 bg-neon-cyan/10 text-slate-200">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-video w-full object-cover"
                  />
                ) : null}
                <div className="p-4">
                  <p className="font-semibold text-white">{item.title}</p>
                  {item.description ? (
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-neon-purple" />
            <h3 className="text-2xl font-semibold text-white">Milestones</h3>
          </div>
          <div className="space-y-3">
            {portfolio.achievements.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-xl border border-white/10 bg-void/40 text-slate-300">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-video w-full object-cover"
                  />
                ) : null}
                <div className="flex gap-3 p-4">
                  <Flag className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    {item.description ? (
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
