"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const THEME_STORAGE_KEY = "manoj-k-theme";

type Theme = "dark" | "light";

type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.dataset.theme = theme;
}

export function ThemeToggle() {
  // Theme starts as "dark" so the first client render matches the server HTML.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    setTheme(stored === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);

    const switchTheme = () => {
      applyTheme(next);
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* storage unavailable (private mode) - theme still applies for this session */
      }
    };

    const doc = document as ViewTransitionDocument;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (doc.startViewTransition && !reduceMotion) {
      doc.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  };

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      aria-label={isDark ? "Switch to day theme" : "Switch to night theme"}
      title={isDark ? "Day theme" : "Night theme"}
      className="group relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-neon-cyan/30 bg-white/[0.04] text-neon-cyan shadow-glow transition hover:-translate-y-0.5 hover:border-neon-cyan/70 hover:bg-neon-cyan/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.55 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.55 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="grid place-items-center"
        >
          {isDark ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
