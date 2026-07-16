import { AnimatePresence, motion } from "motion/react";
import { SITE } from "../../data/siteConfig";

function LoadingScreen({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
            transition: {
              duration: 0.8,
              ease: "easeInOut",
            },
          }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div
              className="relative flex items-center justify-center w-14 h-14 rounded-2xl overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(202,239,69,0.16), #050505 75%)",
                border: "1px solid rgba(202,239,69,0.25)",
                boxShadow:
                  "0 0 20px var(--lime-soft), 0 0 40px var(--lime-subtle), inset 0 0 12px var(--lime-subtle)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(202,239,69,0.08), transparent 60%)",
                }}
              />
              <img
                src={SITE.logo}
                alt=""
                aria-hidden="true"
                className="relative z-10 w-10 h-10 object-contain"
                width="40"
                height="40"
                style={{
                  filter:
                    "drop-shadow(0 0 6px rgba(202,239,69,0.9)) drop-shadow(0 0 14px rgba(202,239,69,0.4)) brightness(1.08)",
                }}
              />
            </div>

            <div className="flex flex-col">
              <span
                className="font-display font-semibold leading-none text-foreground"
                style={{ fontSize: "2rem", letterSpacing: "0.22em" }}
              >
                SHARPMAN
              </span>
              <span
                className="text-xs uppercase tracking-[0.35em] text-primary/70"
              >
                {SITE.tagline}
              </span>
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="mt-10 h-[2px] w-64 overflow-hidden rounded-full bg-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-center font-mono text-[10px] tracking-[0.45em] uppercase text-primary/60"
          >
            DESIGN. CODE. ELEVATE.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
