// AboutSection.jsx
const IMGS = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=700&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=350&fit=crop",
];

const features = [
  {
    label: "FAST DELIVERY",
    desc: "On time, every time. Speed without sacrifice.",
  },
  {
    label: "RELIABLE QUALITY",
    desc: "Clean code. Best practices. Industry standards.",
  },
  {
    label: "RESPONSIVE DESIGN",
    desc: "Perfect on every device. Mobile-first by default.",
  },
  {
    label: "GROWTH FOCUSED",
    desc: "Built for real-world impact. Technology that serves your goals.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-background"
    >
      {/* Faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start relative z-10">
        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center max-w-sm">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              MORE THAN CODE
            </span>
          </div>

          <h2
            className="font-display uppercase leading-none mb-5 text-foreground"
            style={{ fontSize: "clamp(2.8rem, 6vw, 76px)" }}
          >
            IT'S A{" "}
            <span
              className="text-primary"
              style={{ textShadow: "0 0 28px rgba(202,239,69,0.45)" }}
            >
              LIFESTYLE
            </span>
          </h2>

          <p className="font-mono font-light text-sm leading-relaxed mb-4 text-muted-foreground">
            I'm{" "}
            <span className="text-foreground font-medium">Oyenuga Joshua</span>{" "}
            — a web developer and digital solutions builder based in{" "}
            <span className="text-primary">Ikorodu, Lagos, Nigeria</span>.
          </p>

          <p className="font-mono font-light text-sm leading-relaxed mb-10 text-muted-foreground">
            I design and build digital experiences that blend creativity,
            technology, and strategy. My work isn't just about pixels — it's
            about <span className="text-primary">purpose</span>. I help
            businesses and individuals establish a stronger presence online
            through modern websites, web applications, and technology-driven
            solutions.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-6">
            {features.map((f) => (
              <div
                key={f.label}
                className="group p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono font-semibold text-[10px] uppercase tracking-[1.5px] mb-1 text-foreground">
                  {f.label}
                </div>
                <div className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 2×2 mosaic */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-3" style={{ height: "520px" }}>
            <div className="row-span-2 rounded-3xl overflow-hidden">
              <img
                src={IMGS[0]}
                alt="Modern workspace setup — Sharpman digital studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={IMGS[1]}
                alt="Web design and development process"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMGS[2]}
                  alt="Coding and development — clean code workflow"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={IMGS[3]}
                  alt="Digital architecture and technology solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
