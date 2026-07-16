import { motion } from "motion/react";
import Marquee from "../UI/Marquee";

const items = [
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
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-r from-card to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-linear-to-l from-card to-transparent" />

      <Marquee
        items={items}
        separator={
          <span className="font-mono text-xs text-primary opacity-70">&#9670;</span>
        }
        className="!border-y-0 !bg-transparent !py-4"
      />
    </motion.section>
  );
}
