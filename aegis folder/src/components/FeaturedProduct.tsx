"use client";

import { motion } from "framer-motion";
import { AppWindow, ArrowUpRight, FileText } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

export function FeaturedProduct() {
  const product = portfolio.featuredProduct;

  return (
    <Section id="aegis-guard" eyebrow={product.role} title={`${product.name} is being built as a next-generation cybersecurity platform.`}>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-white/[0.055] shadow-[0_0_55px_rgba(16,185,129,0.22)] backdrop-blur-xl"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[260px] overflow-hidden bg-void">
            <img
              src={product.image}
              alt={`${product.name} app logo`}
              className="h-full min-h-[260px] w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-void/10 to-void/80" />
          </div>
          <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            <h3 className="text-3xl font-black text-white sm:text-5xl">{product.name}</h3>
            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              {product.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {product.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-100"
                >
                  {highlight}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={product.appUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-emerald-400/35 bg-emerald-400/10 p-4 text-emerald-100 transition hover:-translate-y-1 hover:bg-emerald-400 hover:text-void hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <AppWindow className="h-5 w-5" />
                  Open App
                </span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={product.documentUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cyan-300/35 bg-cyan-300/10 p-4 text-cyan-100 transition hover:-translate-y-1 hover:bg-cyan-300 hover:text-void hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]"
              >
                <span className="flex items-center gap-3 font-semibold">
                  <FileText className="h-5 w-5" />
                  Document
                </span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
