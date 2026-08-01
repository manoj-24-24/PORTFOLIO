import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070f",
        ink: "#090d1a",
        neon: {
          blue: "#38bdf8",
          cyan: "#22d3ee",
          purple: "#a855f7",
          pink: "#ec4899"
        }
      },
      boxShadow: {
        glow: "0 0 35px rgba(34, 211, 238, 0.35)",
        purpleGlow: "0 0 45px rgba(168, 85, 247, 0.32)"
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(rgba(56,189,248,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,.12) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular"]
      }
    }
  },
  plugins: []
};

export default config;
