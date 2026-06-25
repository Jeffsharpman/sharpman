// AboutSection.jsx

const values = [
  {
    label: "INDEPENDENCE",
    desc: "I build my own path — no waiting, no excuses.",
  },
  {
    label: "INNOVATION",
    desc: "Always asking: how can this be better?",
  },
  {
    label: "INTEGRITY",
    desc: "Honest work. Honest communication. Always.",
  },
  {
    label: "GROWTH",
    desc: "Every project, every challenge — a chance to improve.",
  },
];

const IMGS = [
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/independence.jpg",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/innovation.jpg",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/integrity.jpg",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/growth.jpg",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-background"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-stretch">
        {/* LEFT */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
                ABOUT SHARPMAN
              </span>
            </div>

            <h2
              className="font-display uppercase leading-none mb-8 text-foreground"
              style={{ fontSize: "clamp(3rem, 6vw, 80px)" }}
            >
              MORE THAN{" "}
              <span
                className="text-primary"
                style={{
                  textShadow: "0 0 30px rgba(202,239,69,.45)",
                }}
              >
                CODE.
              </span>
            </h2>

            <div className="space-y-5">
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                I'm{" "}
                <span className="text-foreground font-medium">
                  Oyenuga Joshua
                </span>
                , founder of{" "}
                <span className="text-primary font-medium">Sharpman</span> — a
                digital solutions brand focused on helping businesses and
                individuals build a stronger online presence through technology.
              </p>

              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                My journey into web development started about three years ago
                and became significantly more focused after completing a
                six-month Full Stack Development program at Digital World Tech
                Academy.
              </p>

              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Today, I build websites, web applications, admin systems,
                dashboards, and digital products using modern technologies,
                combining creativity, strategy, and clean code to solve
                real-world problems.
              </p>

              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Sharpman is built on a simple belief:
                <span className="text-primary">
                  {" "}
                  technology should create opportunities, elevate brands, and
                  help people move forward.
                </span>
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {values.map((value) => (
              <div
                key={value.label}
                className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/80"
              >
                <div className="w-2 h-2 bg-primary rounded-full mb-3" />

                <h4 className="font-mono text-[11px] tracking-[2px] uppercase text-foreground mb-2">
                  {value.label}
                </h4>

                <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex h-full">
          <div className="grid grid-cols-2 gap-4 w-full">
            {IMGS.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px]"
                style={{
                  background: "#050505",
                  border: "1px solid rgba(202,239,69,0.08)",
                  boxShadow:
                    "0 10px 40px rgba(0,0,0,.35), 0 0 30px rgba(202,239,69,.03)",
                }}
              >
                <img
                  src={img}
                  alt={values[index].label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,.65), rgba(0,0,0,.15), transparent)",
                  }}
                />

                {/* Value Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div
                    className="font-display text-lg tracking-[3px] text-white"
                    style={{
                      textShadow: "0 0 15px rgba(0,0,0,.5)",
                    }}
                  >
                    {values[index].label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
