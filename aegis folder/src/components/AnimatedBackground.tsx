"use client";

import { motion } from "framer-motion";

const columns = Array.from({ length: 34 }, (_, index) => index);
const glyphs = ["0", "1", "M", "K", "SEC", "WEB", "BCA", "NET"];

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.2),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.22),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.12),transparent_28%)]" />
      <div className="absolute inset-0 bg-cyber-grid bg-[size:44px_44px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      <div className="absolute inset-0 opacity-[0.08]">
        {columns.map((column) => (
          <motion.div
            key={column}
            className="absolute top-[-40%] flex flex-col gap-4 font-mono text-xs text-neon-cyan"
            style={{ left: `${column * 3}%` }}
            animate={{ y: ["0%", "160%"] }}
            transition={{
              duration: 9 + (column % 8),
              repeat: Infinity,
              ease: "linear",
              delay: column * 0.18
            }}
          >
            {Array.from({ length: 18 }, (_, glyphIndex) => (
              <span key={glyphIndex}>{glyphs[(column + glyphIndex) % glyphs.length]}</span>
            ))}
          </motion.div>
        ))}
      </div>
      {Array.from({ length: 18 }, (_, index) => (
        <motion.span
          key={index}
          className="absolute h-1.5 w-1.5 rounded-full bg-neon-cyan shadow-[0_0_18px_rgba(34,211,238,.9)]"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 29) % 100}%`
          }}
          animate={{
            y: [0, -28, 0],
            x: [0, index % 2 ? 18 : -18, 0],
            opacity: [0.18, 0.8, 0.18]
          }}
          transition={{
            duration: 5 + (index % 5),
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-void/10 via-void/72 to-void" />
    </div>
  );
}
