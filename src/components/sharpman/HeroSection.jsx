import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { SITE } from "../../data/siteConfig";
import useScrollTo from "../../hooks/useScrollTo";
import Button from "../UI/Button";
import Badge from "../UI/Badge";
import Particles from "../UI/Particles";
import GlowBlob from "../UI/GlowBlob";
import { HeroReveal } from "../UI/ScrollReveal";

const pills = [
  { v: "BUILDER", l: "By Nature" },
  { v: "LAGOS", l: "Nigeria" },
  { v: "OPEN", l: "To Work" },
];

export default function HeroSection() {
  const scrollTo = useScrollTo();

  return (
    <section
      className="min-h-screen flex flex-col relative overflow-hidden pt-20 bg-background"
      id="hero"
      aria-label="Hero"
    >
      <Particles />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <GlowBlob size="xl" className="top-1/3 right-1/3 w-140 h-140" blur="140px" opacity={1} />
      <GlowBlob size="md" className="bottom-0 left-1/4 w-85 h-85" blur="100px" opacity={1} />

      <div className="flex-1 flex flex-col lg:flex-row items-center px-6 md:px-10 lg:px-16 pt-4 pb-6 gap-8 relative">
        <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
          <HeroReveal delay={0.2}>
            <Badge variant="solid" className="mb-7 w-fit font-mono text-[10px] uppercase tracking-[3px] !px-3.5 !py-2 !rounded-full border border-primary/20 bg-primary/7 text-primary">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" aria-hidden="true" />
              Digital Solutions · Ikorodu, Lagos NG
            </Badge>
          </HeroReveal>

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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8"
          >
            <Button
              href={`mailto:${SITE.email}`}
              variant="primary"
              size="lg"
              className="font-mono font-semibold text-xs uppercase tracking-[2px] !px-7 !py-4 !rounded-2xl"
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
                <ArrowUpRight size={10} className="text-primary" />
              </span>
            </Button>

            <Button
              href="#projects"
              variant="outline"
              size="lg"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#projects");
              }}
              className="font-mono text-xs uppercase tracking-[2.5px] !px-6 !py-4 !rounded-2xl !border-border hover:!border-primary/60 !text-muted-foreground hover:!text-primary group"
            >
              VIEW MY WORK
              <span
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                →
              </span>
            </Button>
          </motion.div>

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
              >
                <Badge variant="solid" className="!px-4 !py-2.5 !rounded-xl bg-secondary border border-border font-mono text-[10px]">
                  <span className="font-display text-primary text-base leading-none">
                    {s.v}
                  </span>
                  <span className="uppercase tracking-[1px] text-muted-foreground">
                    {s.l}
                  </span>
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>

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

            <div className="relative w-full flex justify-center lg:justify-end">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="absolute w-[720px] h-[720px] rounded-full bg-primary/8 blur-[180px]" />
                <div className="absolute w-[600px] h-[360px] border border-primary/20 rounded-full rotate-[18deg]" />
                <div className="absolute w-[520px] h-[320px] border border-primary/30 rounded-full -rotate-[18deg]" />
                <div className="absolute w-[420px] h-[260px] border border-primary/15 rounded-full rotate-[45deg]" />
              </div>

              <motion.img
                src={SITE.heroImage}
                alt="Sharpman Hero Artwork"
                draggable={false}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="
                w-full
                object-contain
                drop-shadow-[0_0_60px_var(--accent-glow)]
                "
              />
            </div>
          </div>

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
