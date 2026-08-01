"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="relative z-10 px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-neon-cyan">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
