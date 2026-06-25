// AboutSection.jsx

const IMGS = [
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/independence.jpg",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/innovation.jpg",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/integrity.jpg",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/growth.jpg",
];

const labels = ["INDEPENDENCE", "INNOVATION", "INTEGRITY", "GROWTH"];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-background border-t border-border/40"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <div className="flex flex-col justify-center h-full">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
                ABOUT SHARPMAN
              </span>
            </div>

            <h2
              className="font-display uppercase leading-[0.9] mb-8 text-foreground tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 6vw, 80px)" }}
            >
              MORE THAN{" "}
              <span
                className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                style={{ textShadow: "0 0 30px rgba(202,239,69,.25)" }}
              >
                CODE.
              </span>
            </h2>

            <div className="space-y-5 max-w-xl">
              <p className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
                I'm{" "}
                <span className="text-foreground font-medium">
                  Oyenuga Joshua
                </span>
                , founder of{" "}
                <span className="text-primary font-medium">Sharpman</span> — a
                digital solutions brand focused on helping businesses and
                individuals build a stronger online presence through technology.
              </p>

              <p className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
                My journey into web development started about three years ago
                and became significantly more focused after completing a
                six-month Full Stack Development program at Digital World Tech
                Academy.
              </p>

              <p className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
                Today, I build websites, web applications, admin systems,
                dashboards, and digital products using modern technologies,
                combining creativity, strategy, and clean code to solve
                real-world problems.
              </p>

              <p className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
                Sharpman is built on a simple belief:{" "}
                <span className="text-primary underline decoration-primary/20 decoration-2 underline-offset-4 font-medium">
                  technology should create opportunities, elevate brands, and
                  help people move forward.
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT IMAGE COLUMN ================= */}
        <div className="flex items-center justify-center h-full">
          <div className="relative w-full max-w-[460px] h-full flex items-center justify-center">
            {/* Soft Ambient Card Glow Container */}
            <div
              className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(202,239,69,.15), transparent 70%)",
              }}
            />

            {/* Structured 2x2 Bento Cards Grid */}
            <div className="grid grid-cols-2 gap-3 w-full self-center">
              {IMGS.map((src, i) => (
                <div
                  key={labels[i]}
                  className="group relative overflow-hidden rounded-2xl aspect-[9/16] bg-card/40 border border-border/40 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 shadow-md"
                >
                  {/* Card Image */}
                  <img
                    src={src}
                    alt={labels[i]}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* High Contrast Gradient Overlay scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Title Label Layer */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="font-display text-[11px] md:text-xs text-white/90 tracking-[2.5px] uppercase block truncate transition-colors duration-300 group-hover:text-primary">
                      {labels[i]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
