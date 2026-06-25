// AboutSection.jsx
const values = [
  {
    label: "INDEPENDENCE",
    desc: "I build my own path — no waiting, no excuses.",
  },
  { label: "INNOVATION", desc: "Always asking: how can this be better?" },
  { label: "INTEGRITY", desc: "Honest work. Honest communication. Always." },
  {
    label: "GROWTH",
    desc: "Every project, every challenge — a chance to improve.",
  },
];

const IMGS = [
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/service1.png",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/service2.png",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/service3.png",
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/service4.png",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-background"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Changed items-start to lg:items-stretch to force equal height columns */}
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start lg:items-stretch relative z-10">
        {/* LEFT CONTAINER */}
        <div className="flex-1 flex flex-col justify-center max-w-sm">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              ABOUT ME
            </span>
          </div>

          <h2
            className="font-display uppercase leading-none mb-6 text-foreground"
            style={{ fontSize: "clamp(2.8rem, 6vw, 76px)" }}
          >
            MORE THAN{" "}
            <span
              className="text-primary"
              style={{ textShadow: "0 0 28px rgba(202,239,69,0.45)" }}
            >
              CODE.
            </span>
          </h2>

          <p className="font-mono font-light text-sm leading-relaxed mb-4 text-muted-foreground">
            I'm{" "}
            <span className="text-foreground font-medium">Oyenuga Joshua</span>,
            founder of{" "}
            <span className="text-primary font-medium">Sharpman</span> — a web
            developer, entrepreneur, and problem solver based in{" "}
            <span className="text-primary">Ikorodu, Lagos, Nigeria</span>.
          </p>

          <p className="font-mono font-light text-sm leading-relaxed mb-4 text-muted-foreground">
            I design and build modern websites, web applications, and digital
            experiences that help businesses grow online. My journey into
            technology began about three years ago, and deepened through a{" "}
            <span className="text-foreground">
              six-month Full Stack Development program
            </span>{" "}
            at Digital World Tech Academy — where I learned HTML, CSS,
            JavaScript, and PHP.
          </p>

          <p className="font-mono font-light text-sm leading-relaxed mb-10 text-muted-foreground">
            I'm currently focused on{" "}
            <span className="text-primary">
              React and the modern JavaScript ecosystem
            </span>
            , building scalable, production-ready digital products. Every
            project is an opportunity to learn, improve, and build something{" "}
            <span className="text-primary">meaningful</span>.
          </p>

          {/* Values grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {values.map((v) => (
              <div
                key={v.label}
                className="group p-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-200"
              >
                <div className="w-1.5 h-1.5 bg-primary rounded-full mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="font-mono font-semibold text-[10px] uppercase tracking-[1.5px] mb-1 text-foreground">
                  {v.label}
                </div>
                <div className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                  {v.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTAINER — Mosaic layout fixed to match height dynamically */}
        <div className="flex-1 w-full min-h-[450px] lg:min-h-full">
          <div className="grid grid-cols-2 gap-3 h-full">
            <div className="row-span-2 rounded-3xl overflow-hidden relative">
              <img
                src={IMGS[0]}
                alt="workspace"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden relative">
              <img
                src={IMGS[1]}
                alt="design"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3 relative">
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={IMGS[2]}
                  alt="code"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={IMGS[3]}
                  alt="build"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
