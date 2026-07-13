import { motion } from "motion/react";

const items = [
  "WEBSITES",
  "WEB APPS",
  "UI/UX DESIGN",
  "E-COMMERCE",
  "PROBLEM SOLVING",
  "RELIABLE QUALITY",
  "ENTREPRENEUR",
  "BUILDER BY NATURE",
  // duplicate set for seamless loop
  "WEBSITES",
  "WEB APPS",
  "UI/UX DESIGN",
  "E-COMMERCE",
  "PROBLEM SOLVING",
  "RELIABLE QUALITY",
  "ENTREPRENEUR",
  "BUILDER BY NATURE",
];

export default function MarqueeSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden py-0 bg-card border-y border-border"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-r from-card to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-l from-card to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap py-4">
        {items.map((label, i) => (
          <span key={i} className="flex items-center gap-3 mx-7">
            <span className="font-mono text-[11px] uppercase tracking-[3px] font-medium text-muted-foreground">
              {label}
            </span>
            <span className="font-mono text-xs text-primary opacity-70">&#9670;</span>
          </span>
        ))}
      </div>
    </motion.section>
  );
}
