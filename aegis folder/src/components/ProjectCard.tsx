"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.58, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] backdrop-blur-xl transition hover:-translate-y-2 hover:border-neon-cyan/60 hover:shadow-glow"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white transition hover:border-neon-cyan hover:text-neon-cyan"
          >
            <Github className="h-4 w-4" />
            Code
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-4 py-2 text-sm font-semibold text-void transition hover:bg-white"
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </a>
        </div>
      </div>
    </motion.article>
  );
}
