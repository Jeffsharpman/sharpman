// AboutSection.jsx
import IMG0 from "../../assets/service4.png";
import IMG1 from "../../assets/service1.png";
import IMG2 from "../../assets/service2.png";
import IMG3 from "../../assets/service3.png";

const features = [
  {
    label: "FAST DELIVERY",
    desc: "On time, every time. Speed without sacrifice.",
  },
  {
    label: "RELIABLE QUALITY",
    desc: "Clean, maintainable code. Best practices. Industry standards.",
  },
  {
    label: "RESPONSIVE DESIGN",
    desc: "Pixel-perfect on every device. Mobile-first approach.",
  },
  {
    label: "GROWTH FOCUSED",
    desc: "Solutions built for real business impact and scalability.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-background"
    >
      {/* Futuristic Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(202,239,69,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(202,239,69,0.03) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative z-10">
        {/* LEFT — Story & Features */}
        <div className="flex-1 flex flex-col justify-center max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary neon-text">
              THE SHARPMAN JOURNEY
            </span>
          </div>

          <h2
            className="font-display uppercase leading-none mb-6 text-foreground"
            style={{ fontSize: "clamp(2.8rem, 6.5vw, 78px)" }}
          >
            IT'S NOT JUST{" "}
            <span
              className="text-primary neon-text"
              style={{
                textShadow: `
                  0 0 35px rgba(202,239,69,0.55),
                  0 0 70px rgba(202,239,69,0.3)
                `,
              }}
            >
              CODE
            </span>
          </h2>

          <p className="font-mono text-base leading-relaxed mb-6 text-muted-foreground">
            I'm <span className="text-primary font-medium">Oyenuga Joshua</span>
            , founder of Sharpman — a digital solutions brand based in{" "}
            <span className="text-primary">Ikorodu, Lagos, Nigeria</span>.
          </p>

          <p className="font-mono text-base leading-relaxed mb-12 text-muted-foreground">
            With a strong foundation in PHP &amp; OOP and growing expertise in
            modern JavaScript (React, Next.js), I create purposeful digital
            experiences that help businesses grow, become visible, and thrive
            online.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div
                key={f.label}
                className="group p-6 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-primary rounded-full mb-4 group-hover:scale-110 transition-transform" />
                <div className="font-mono font-semibold text-sm uppercase tracking-widest mb-2 text-foreground">
                  {f.label}
                </div>
                <div className="font-mono text-sm leading-snug text-muted-foreground">
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Image Mosaic */}
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4" style={{ height: "560px" }}>
            {/* Large Left Image */}
            <div className="row-span-2 rounded-3xl overflow-hidden relative group">
              <img
                src={IMG0}
                alt="Sharpman — Digital workspace and development environment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="font-mono text-xs tracking-widest text-primary">
                  CURRENT FOCUS
                </div>
                <div className="font-display text-2xl text-white">
                  REACT + NEXT.JS
                </div>
              </div>
            </div>

            {/* Top Right */}
            <div className="rounded-3xl overflow-hidden relative group">
              <img
                src={IMG1}
                alt="Modern web design process"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Bottom Right Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden relative group">
                <img
                  src={IMG2}
                  alt="Clean code development workflow"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="rounded-3xl overflow-hidden relative group">
                <img
                  src={IMG3}
                  alt="Digital solutions architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
