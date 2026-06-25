// HeroSection.jsx
const HERO_IMG =
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/hero.png";

const pills = [
  { v: "BUILDER", l: "By Nature" },
  { v: "LAGOS", l: "Nigeria" },
  { v: "OPEN", l: "To Work" },
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden pt-20 bg-background">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(202,239,69,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-1/3 right-1/3 w-140 h-140 rounded-full blur-[140px] pointer-events-none bg-primary/5" />
      <div className="absolute bottom-0 left-1/4 w-85 h-85 rounded-full blur-[100px] pointer-events-none bg-primary/4" />

      <div className="flex-1 flex flex-col lg:flex-row items-center px-6 md:px-10 lg:px-16 pt-4 pb-6 gap-8 relative">
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center z-10 max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-7 px-3.5 py-2 rounded-full bg-primary/7 border border-primary/20 w-fit">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              Digital Solutions · Ikorodu, Lagos NG
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display uppercase leading-[0.88] mb-6"
            style={{ fontSize: "clamp(3rem, 8.5vw, 7rem)" }}
          >
            <span className="block text-foreground">BUILDER.</span>
            <span
              className="block text-primary"
              style={{
                textShadow:
                  "0 0 50px rgba(202,239,69,0.5), 0 0 100px rgba(202,239,69,0.2)",
              }}
            >
              ENTREPRENEUR.
            </span>
            <span className="block text-foreground">PROBLEM SOLVER.</span>
          </h1>

          {/* Subtext */}
          <p className="font-mono font-light text-sm leading-relaxed max-w-sm mb-8 text-muted-foreground">
            I help businesses and individuals create{" "}
            <span className="text-primary font-medium">
              modern digital experiences
            </span>{" "}
            through technology, innovation, and practical problem solving.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <a
              href="mailto:buildwithsharpman@gmail.com"
              className="flex items-center gap-3 font-mono font-semibold text-xs uppercase tracking-[2px] px-7 py-4 rounded-2xl text-primary-foreground bg-primary hover:brightness-105 transition-all duration-200"
              style={{
                boxShadow:
                  "0 0 36px rgba(202,239,69,0.45), 0 4px 20px rgba(202,239,69,0.2)",
              }}
            >
              START YOUR PROJECT
              <span className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 9L9 1M9 1H3M9 1V7"
                    stroke="#CAEF45"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>

            {/* Secondary CTA - Futuristic Link */}
            <a
              href="#projects"
              className="group font-mono text-xs uppercase tracking-[2.5px] px-6 py-4 rounded-2xl border border-border hover:border-primary/60 text-muted-foreground hover:text-primary flex items-center gap-2 transition-all duration-300"
            >
              VIEW MY WORK
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Pills */}
          <div className="flex gap-3 flex-wrap">
            {pills.map((s) => (
              <div
                key={s.l}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-secondary border border-border"
              >
                <span className="font-display text-primary text-base leading-none">
                  {s.v}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[1px] text-muted-foreground">
                  {s.l}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-4 relative z-10 w-full lg:w-auto">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute w-95 h-95 sm:w-107.5 sm:h-107.5 rounded-full border border-primary/50"
              style={{
                boxShadow:
                  "0 0 50px rgba(202,239,69,0.25), inset 0 0 50px rgba(202,239,69,0.04)",
              }}
            />
            <div className="absolute w-95 h-95 sm:w-107.5 sm:h-107.5 rounded-full blur-2xl bg-primary/6" />

            {/* Floating badge — top left */}
            <div
              className="absolute -top-2 -left-6 z-20 rounded-2xl px-3 py-2 bg-card border border-primary/30"
              style={{ boxShadow: "0 0 20px rgba(202,239,69,0.15)" }}
            >
              <div className="font-mono text-primary text-[9px] uppercase tracking-[2px]">
                Founder
              </div>
              <div className="font-display text-sm leading-tight text-foreground">
                SHARPMAN
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div
              className="absolute -bottom-2 -right-6 z-20 rounded-2xl px-3 py-2 bg-card border border-primary/30"
              style={{ boxShadow: "0 0 20px rgba(202,239,69,0.15)" }}
            >
              <div className="font-mono text-primary text-[9px] uppercase tracking-[2px]">
                Available Now
              </div>
              <div className="font-display text-sm leading-tight text-foreground">
                REMOTE
              </div>
            </div>

            {/* Circle image */}
            <div className="w-82.5 h-82.5 sm:w-97.5 sm:h-97.5 rounded-full overflow-hidden relative">
              <img
                src={HERO_IMG}
                alt="Oyenuga Joshua — Sharpman"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at center, transparent 50%, #0A0A0A 100%)",
                }}
              />
            </div>
          </div>

          {/* Code snippet */}
          <div
            className="rounded-2xl px-5 py-4 font-mono text-[11px] self-start lg:self-auto max-w-55 bg-secondary border border-border"
            style={{ boxShadow: "0 0 24px rgba(202,239,69,0.06)" }}
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
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-6 gap-2 items-center">
        <div className="w-4 h-4 text-muted-foreground">
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M8 3v10M4 9l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
