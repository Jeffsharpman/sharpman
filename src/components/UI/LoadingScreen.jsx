import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SITE } from "../../data/siteConfig";

const letters = "SHARPMAN".split("");

function LoadingScreen({ done }) {
  const [systemLog, setSystemLog] = useState("SYS_INIT_SEQUENCE");

  // Cyclical diagnostic telemetry text mimicking a real boot system
  useEffect(() => {
    if (done) return;
    const logs = [
      "SYS_INIT_SEQUENCE",
      "DECRYPTING_ASSETS...",
      "ESTABLISHING_LINK...",
      "GRID_MATRIX_ONLINE",
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % logs.length;
      setSystemLog(logs[idx]);
    }, 450);
    return () => clearInterval(interval);
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background select-none overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px) brightness(1.2)",
            transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
          }}
        >
          {/* Cybernetic Tech Grid Layer */}
          <div
            className="absolute inset-0 pointer-events-none bg-[size:24px_24px]"
            style={{
              backgroundImage: `linear-gradient(to_right, var(--lime-subtle) 1px, transparent 1px), linear-gradient(to_bottom, var(--lime-subtle) 1px, transparent 1px)`,
            }}
          />

          {/* Dynamic Core Radial Aura */}
          <div
            className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-100"
            style={{
              background: `radial-gradient(circle at center, var(--lime-soft) 0%, transparent 55%)`,
            }}
          />

          {/* Core Logo Assembly Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative p-5 mb-10"
          >
            {/* Cyber Container Frame Corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/60" />

            {/* Glowing Structural Center Ring */}
            <div
              className="relative flex items-center justify-center w-20 h-20 rounded-xl border border-border/40 bg-slate-950 backdrop-blur-md shadow-2xl [background-size:8px_8px]"
              style={{
                backgroundImage: `radial-gradient(var(--lime-subtle) 1.5px, transparent 1.5px)`,
              }}
            >
              {/* Active scanline layer that sweeps during boot */}
              <motion.div
                className="absolute inset-x-0 top-0 h-[2px] pointer-events-none"
                style={{
                  background: `linear-gradient(to right, transparent, var(--primary), transparent)`,
                }}
                animate={{ y: [0, 76], opacity: [1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />

              <img
                src={SITE.logo}
                alt={`${SITE.name} Brand Icon`}
                className="relative z-10 h-[92%] w-[92%] object-contain"
                draggable={false}
                style={{ filter: "drop-shadow(0 0 8px var(--lime-glow))" }}
              />

              {/* Internal HUD crosshair markers */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-px h-1 bg-primary/40" />
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-px h-1 bg-primary/40" />
            </div>

            {/* Pulsing Outer Shield Echo */}
            <motion.div
              className="absolute inset-0 border border-primary/20 rounded-xl pointer-events-none"
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Staggered Matrix Character Input */}
          <div className="flex items-center gap-[0.25em] mb-4 overflow-hidden">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="font-display text-4xl sm:text-5xl font-extrabold tracking-[0.12em] text-foreground"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Telemetry Log Counter Assembly */}
          <div className="flex flex-col items-center gap-2 w-56 text-center">
            {/* Split Progress Databar */}
            <div className="relative h-[2px] w-full bg-muted overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 bg-primary"
                initial={{ left: "0%", width: "0%" }}
                animate={{
                  left: ["0%", "25%", "60%", "0%"],
                  width: ["15%", "40%", "20%", "15%"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Live Terminal Output Monitor */}
            <motion.span
              key={systemLog}
              initial={{ opacity: 0.4, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-mono text-[9px] font-semibold tracking-[0.35em] text-muted-foreground dark:text-primary/60 uppercase"
            >
              [{systemLog}]
            </motion.span>
          </div>

          {/* Subordinate Brand Mission Descriptor */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="absolute bottom-10 font-mono text-[8px] tracking-[0.6em] uppercase text-foreground"
          >
            {SITE.tagline}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
