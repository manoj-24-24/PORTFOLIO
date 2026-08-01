"use client";

import { motion } from "framer-motion";
import { Github, GitFork, Star } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { Section } from "@/components/Section";

export function GitHubSection() {
  return (
    <Section id="github" eyebrow="GitHub" title="Repository showcase for code, learning, and security practice.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.a
          href={portfolio.githubUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group rounded-2xl border border-white/10 bg-white/[0.055] p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-cyan/60 hover:shadow-glow"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-neon-cyan">
              <Github className="h-9 w-9" />
            </span>
            <div>
              <p className="text-2xl font-semibold text-white">{portfolio.name}</p>
              <p className="text-slate-400">{portfolio.githubUrl.replace("https://", "")}</p>
            </div>
          </div>
          <p className="mt-6 leading-7 text-slate-300">
            Explore projects, security notes, and coding practice repositories connected to web development and cybersecurity growth.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/10 bg-void/40 p-4">
              <Star className="mb-3 h-5 w-5 text-neon-purple" />
              <p className="font-mono text-2xl font-bold text-white">{portfolio.projects.length}+</p>
              <p className="text-sm text-slate-400">Projects</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-void/40 p-4">
              <GitFork className="mb-3 h-5 w-5 text-neon-cyan" />
              <p className="font-mono text-2xl font-bold text-white">{portfolio.repositories.length}+</p>
              <p className="text-sm text-slate-400">Repositories</p>
            </div>
          </div>
        </motion.a>
        <div className="grid gap-4">
          {portfolio.repositories.map((repo, index) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-neon-purple/60 hover:shadow-purpleGlow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-lg font-semibold text-white">{repo.name}</h3>
                  <p className="mt-2 text-slate-400">{repo.description}</p>
                </div>
                <Github className="h-5 w-5 shrink-0 text-neon-cyan" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {repo.technologies.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
}
