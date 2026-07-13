import { motion } from "motion/react";

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
}) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {text}
    </motion.p>
  );
}
