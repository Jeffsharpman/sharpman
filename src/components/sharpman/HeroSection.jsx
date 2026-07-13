import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import useScrollTo from "../../hooks/useScrollTo";

const HERO_IMG =
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/hero.png";

const pills = [
  { v: "BUILDER", l: "By Nature" },
  { v: "LAGOS", l: "Nigeria" },
  { v: "OPEN", l: "To Work" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
};

export default function HeroSection() {
  const scrollTo = useScrollTo();

  return (
    <section
      className="min-h-screen flex flex-col relative overflow-hidden pt-20 bg-background"
      aria-label="Hero"
    >
      {/* Dot grid - decorative */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Glow blobs - decorative */}
      <div
        className="absolute top-1/3 right-1/3 w-140 h-140 rounded-full blur-[140px] pointer-events-none bg-primary/5"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-1/4 w-85 h-85 rounded-full blur-[100px] pointer-events-none bg-primary/4"
        aria-hidden="true"
      />

      <div className="flex-1 flex flex-col lg:flex-row items-center px-6 md:px-10 lg:px-16 pt-4 pb-6 gap-8 relative">
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-7 px-3.5 py-2 rounded-full bg-primary/7 border border-primary/20 w-fit"
          >
            <span
              className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              Digital Solutions · Ikorodu, Lagos NG
            </span>
          </motion.div>

          {/* Heading */}
          <h1
            className="font-display uppercase leading-[0.88] mb-6"
            style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block text-foreground"
            >
              BUILDER.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="block text-primary"
              style={{
                textShadow:
                  "0 0 50px var(--lime-glow), 0 0 100px var(--lime-soft)",
              }}
            >
              ENTREPRENEUR.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block text-foreground"
            >
              PROBLEM SOLVER.
            </motion.span>
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="font-mono font-light text-sm leading-relaxed max-w-sm mb-8 text-muted-foreground"
          >
            I help businesses and individuals create{" "}
            <span className="text-primary font-medium">
              modern digital experiences
            </span>{" "}
            through technology, innovation, and practical problem solving.
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
          >
            <a
              href="mailto:buildwithsharpman@gmail.com"
              className="flex items-center gap-3 font-mono font-semibold text-xs uppercase tracking-[2px] px-7 py-4 rounded-2xl text-primary-foreground bg-primary hover:brightness-105 transition-all duration-200"
              style={{
                boxShadow:
                  "0 0 36px var(--lime-glow), 0 4px 20px var(--lime-soft)",
              }}
            >
              START YOUR PROJECT
              <span
                className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center"
                aria-hidden="true"
              >
                <ArrowUpRight size={10} color="#CAEF45" />
              </span>
            </a>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#projects");
              }}
              className="group font-mono text-xs uppercase tracking-[2.5px] px-6 py-4 rounded-2xl border border-border hover:border-primary/60 text-muted-foreground hover:text-primary flex items-center gap-2 transition-all duration-300"
            >
              VIEW MY WORK
              <span
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </motion.div>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex gap-3 flex-wrap"
          >
            {pills.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.08, duration: 0.4 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border"
              >
                <span className="font-display text-primary text-base leading-none">
                  {s.v}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[1px] text-muted-foreground">
                  {s.l}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex flex-col items-center lg:items-end gap-4 relative z-10 w-full lg:w-auto"
        >
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-95 h-95 sm:w-107.5 sm:h-107.5 rounded-full border border-primary/50 blur-2xl pointer-events-none bg-primary/6"
              aria-hidden="true"
              style={{
                boxShadow:
                  "0 0 50px var(--lime-soft), inset 0 0 50px var(--lime-subtle)",
              }}
            />

            {/* Founder Card */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="
                  absolute
                  top-10
                  left-0
                  z-30
                  rounded-3xl
                  border
                  border-primary/20
                  bg-card/70
                  backdrop-blur-xl
                  px-5
                  py-4
                  shadow-[0_0_30px_rgba(202,239,69,.15)]
    "
            >
              <p className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
                Founder
              </p>

              <h3 className="font-display text-lg">SHARPMAN</h3>

              <p className="font-mono text-[11px] text-muted-foreground">
                Digital Solutions
              </p>
            </motion.div> */}

            {/* Status Card */}

            {/* <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="
                  absolute
                  bottom-0
                  right-2
                  z-30
                  rounded-3xl
                  border
                  border-primary/20
                  bg-card/70
                  backdrop-blur-xl
                  px-5
                  py-4
                  shadow-[0_0_30px_rgba(202,239,69,.15)]
                "
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                <span className="font-mono text-[10px] uppercase tracking-[2px] text-primary">
                  Available
                </span>
              </div>

              <h3 className="font-display mt-3">Remote</h3>

              <p className="font-mono text-[11px] text-muted-foreground">
                Freelance • Contract
              </p>
            </motion.div> */}

            {/* ===========================================
                      HERO ARTWORK
                =========================================== */}

            <div className="relative w-full flex justify-center lg:justify-end">
              {/* Background Glow */}

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[720px] h-[720px] rounded-full bg-primary/8 blur-[180px]" />

                <div className="absolute w-[600px] h-[360px] border border-primary/20 rounded-full rotate-[18deg]" />

                <div className="absolute w-[520px] h-[320px] border border-primary/30 rounded-full -rotate-[18deg]" />

                <div className="absolute w-[420px] h-[260px] border border-primary/15 rounded-full rotate-[45deg]" />
              </div>

              {/* Hero Artwork */}

              <motion.img
                src={HERO_IMG}
                alt="Sharpman Hero Artwork"
                draggable={false}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="
                w-full
                object-contain
                drop-shadow-[0_0_60px_rgba(202,239,69,.18)]
                "
              />
            </div>
          </div>

          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="rounded-2xl px-5 py-4 font-mono text-[11px] self-start lg:self-auto max-w-55 bg-card border border-border"
            style={{ boxShadow: "0 0 24px var(--lime-subtle)" }}
          >
            <div className="mb-1 text-muted-foreground">{"// sharpman()"}</div>
            <div>
              <span className="text-primary">let</span>{" "}
              <span className="text-foreground">ideas</span>{" "}
              <span className="text-muted-foreground">= create();</span>
            </div>
            <div>
              <span className="text-primary">let</span>{" "}
              <span className="text-foreground">code</span>{" "}
              <span className="text-muted-foreground">= build();</span>
            </div>
            <div>
              <span className="text-primary">return</span>{" "}
              <span className="text-foreground">success</span>
              <span className="text-muted-foreground">;</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="flex justify-center pb-6 gap-2 items-center"
        aria-hidden="true"
      >
        <div className="w-4 h-4 text-muted-foreground">
          <ArrowDown size={16} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
