import { AnimatePresence, motion } from "motion/react";
import { SITE } from "../../data/siteConfig";

const letters = "SHARPMAN".split("");

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(6px)",
            transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(202,239,69,0.04) 0%, transparent 60%)",
            }}
          />

          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            <div
              className="relative flex items-center justify-center w-16 h-16 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(202,239,69,0.12), #0a0a0a 70%)",
                border: "1px solid rgba(202,239,69,0.2)",
                boxShadow:
                  "0 0 24px var(--lime-soft), 0 0 48px var(--lime-subtle), inset 0 0 12px var(--lime-subtle)",
              }}
            >
              <img
                src={SITE.logo}
                alt=""
                aria-hidden="true"
                className="relative z-10 w-10 h-10 object-contain"
                width="40"
                height="40"
                style={{
                  filter:
                    "drop-shadow(0 0 6px rgba(202,239,69,0.8)) drop-shadow(0 0 14px rgba(202,239,69,0.3))",
                }}
              />
            </div>

            {/* Breathing glow ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(202,239,69,0.08), inset 0 0 20px rgba(202,239,69,0.04)",
                  "0 0 40px rgba(202,239,69,0.15), inset 0 0 30px rgba(202,239,69,0.08)",
                  "0 0 20px rgba(202,239,69,0.08), inset 0 0 20px rgba(202,239,69,0.04)",
                ],
              }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Brand name — staggered letter reveal */}
          <div className="flex items-center gap-[0.35em] mb-3 overflow-hidden">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-3xl sm:text-4xl tracking-[0.18em] text-foreground"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Expanding center line */}
          <motion.div
            className="relative h-px w-48 mb-5 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="absolute inset-y-0 left-1/2 -translate-x-1/2 bg-primary/40"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="font-mono text-[10px] tracking-[0.5em] uppercase text-primary/50"
          >
            {SITE.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
