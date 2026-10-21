"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Eye, FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

function PdfBadge() {
  return (
    <div className="relative shrink-0">
      <div className="absolute -inset-3 rounded-[1.6rem] bg-rose-500/20 blur-2xl" />
      <div className="relative grid h-16 w-16 place-items-center rounded-2xl border border-rose-400/40 bg-rose-400/10 text-rose-200 shadow-[0_0_35px_rgba(244,63,94,0.28)]">
        <FileText className="h-8 w-8" strokeWidth={1.6} />
      </div>
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-rose-400/40 bg-void px-2 py-0.5 font-mono text-[10px] font-bold tracking-[0.18em] text-rose-200">
        PDF
      </span>
    </div>
  );
}

export function Documentation() {
  const doc = portfolio.documentation;

  return (
    <Section id="documentation" eyebrow="Documentation" title={doc.title}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-[0_0_55px_rgba(244,63,94,0.12)] backdrop-blur-xl transition hover:border-rose-400/40 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-cyber-grid bg-[size:36px_36px] opacity-[0.06]" />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 flex-col gap-6 sm:flex-row sm:items-start">
            <PdfBadge />
            <div className="min-w-0">
              <p className="break-words font-mono text-xs uppercase tracking-[0.18em] text-rose-200 sm:text-sm">
                {doc.tagline}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {doc.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {doc.meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-void/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.12em] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
                {doc.contents.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-rose-400/25 bg-rose-400/10 px-3 py-1 text-xs text-rose-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center lg:w-auto lg:flex-col lg:items-stretch xl:flex-row">
            <a
              href={doc.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="group/view flex items-center justify-between gap-6 rounded-2xl border border-neon-cyan/40 bg-neon-cyan/10 px-5 py-4 font-semibold text-neon-cyan transition hover:-translate-y-1 hover:bg-neon-cyan hover:text-void hover:shadow-glow"
            >
              <span className="flex items-center gap-3">
                <Eye className="h-5 w-5" />
                View
              </span>
              <ArrowUpRight className="h-4 w-4 transition group-hover/view:translate-x-0.5 group-hover/view:-translate-y-0.5" />
            </a>
            <a
              href={doc.fileUrl}
              download={doc.fileName}
              className="group/download flex items-center justify-between gap-6 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 font-semibold text-white transition hover:-translate-y-1 hover:border-neon-cyan hover:text-neon-cyan"
            >
              <span className="flex items-center gap-3">
                <Download className="h-5 w-5" />
                Download
              </span>
              <ArrowUpRight className="h-4 w-4 transition group-hover/download:translate-x-0.5 group-hover/download:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
