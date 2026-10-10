"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Terminal, Wrench } from "lucide-react";
import {
  portfolio,
  type SecurityFinding,
  type SecuritySeverity
} from "@/data/portfolio";
import { Section } from "@/components/Section";

const SEVERITY_STYLES: Record<SecuritySeverity, string> = {
  Critical: "border-rose-400/40 bg-rose-400/10 text-rose-200",
  High: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  Medium: "border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan"
};

function EvidencePanel({ entry }: { entry: SecurityFinding["evidence"][number] }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-void/60">
      <div className="flex items-center gap-3 border-b border-white/10 px-3 py-2">
        <span aria-hidden className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </span>
        <span className="truncate font-mono text-[11px] text-slate-500">
          {entry.image.split("/").pop()}
        </span>
      </div>
      <img src={entry.image} alt={entry.caption} loading="lazy" className="w-full" />
      <figcaption className="border-t border-white/10 px-3 py-2.5 text-xs leading-5 text-slate-400">
        {entry.caption}
      </figcaption>
    </figure>
  );
}

function FindingCard({ finding, index }: { finding: SecurityFinding; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl"
    >
      <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
        <div className="flex flex-col gap-4 border-b border-white/10 bg-void/40 p-4 sm:p-5 lg:border-b-0 lg:border-r">
          {finding.evidence.map((entry) => (
            <EvidencePanel key={entry.image} entry={entry} />
          ))}
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-8">
          <span
            className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${SEVERITY_STYLES[finding.severity]}`}
          >
            <ShieldAlert className="h-3.5 w-3.5" />
            {finding.severity} risk
          </span>
          <h3 className="mt-4 text-2xl font-semibold leading-snug text-white">
            {finding.title}
          </h3>
          <p className="mt-2 flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <Terminal className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{finding.target}</span>
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-300">{finding.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {finding.techniques.map((technique) => (
              <span
                key={technique}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300"
              >
                {technique}
              </span>
            ))}
          </div>
          <p className="mt-5 flex gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-3 text-xs leading-5 text-emerald-100">
            <Wrench className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            <span>
              <span className="font-semibold">Fix: </span>
              {finding.fix}
            </span>
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function SecurityTests() {
  return (
    <Section
      id="hacks"
      eyebrow="Offensive Security"
      title="Break it, then harden it. Findings from hands-on web application testing."
    >
      <div className="space-y-6">
        {portfolio.securityFindings.map((finding, index) => (
          <FindingCard key={finding.title} finding={finding} index={index} />
        ))}
      </div>
    </Section>
  );
}
