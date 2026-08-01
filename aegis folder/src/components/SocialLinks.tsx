"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const links = [
  { label: "GitHub", href: portfolio.githubUrl, icon: Github },
  { label: "LinkedIn", href: portfolio.linkedinUrl, icon: Linkedin },
  { label: "Email", href: `mailto:${portfolio.email}`, icon: Mail }
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 backdrop-blur transition hover:-translate-y-1 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow"
        >
          <Icon className="h-5 w-5 transition group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
