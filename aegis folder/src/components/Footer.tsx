import { portfolio } from "@/data/portfolio";
import { SocialLinks } from "@/components/SocialLinks";

const navItems = ["home", "about", "skills", "projects", "achievements", "github", "contact"];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-semibold text-white">{portfolio.name}</p>
          <p className="mt-2 text-sm text-slate-400">
            Copyright {new Date().getFullYear()} {portfolio.name}. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {navItems.map((item) => (
            <a key={item} href={`#${item}`} className="text-sm capitalize text-slate-400 transition hover:text-neon-cyan">
              {item}
            </a>
          ))}
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
