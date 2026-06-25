// BeyondCodeSection.jsx

const pillars = [
  {
    title: "BUILDER",
    tagline: "CREATING SOLUTIONS",
    desc: "Whether it's a website, a business process, or a practical challenge, I enjoy building solutions that create value, solve problems, and create opportunities.",
    accent: "text-[#CAEF45]",
    glow: "rgba(202,239,69,0.15)",
    borderHover: "hover:border-[#CAEF45]/40",
    sizeClass: "col-span-1 md:col-span-3", // Wide footprint
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 21V7.5A1.5 1.5 0 0 1 6 6h12a1.5 1.5 0 0 1 1.5 1.5V21M9 21V12h6v9"
        />
      </svg>
    ),
  },
  {
    title: "ENTREPRENEUR",
    tagline: "REAL-WORLD EXPERIENCE",
    desc: "Running a gas retail business has taught me customer service, operations, sales, and the importance of delivering value consistently.",
    accent: "text-[#5B9CF6]",
    glow: "rgba(91,156,246,0.15)",
    borderHover: "hover:border-[#5B9CF6]/40",
    sizeClass: "col-span-1 md:col-span-3", // Wide footprint
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    ),
  },
  {
    title: "DEVELOPER",
    tagline: "DIGITAL EXPERIENCES",
    desc: "I build websites and web applications using modern technologies, combining functionality, usability, and clean implementation.",
    accent: "text-[#B07EF0]",
    glow: "rgba(176,126,240,0.15)",
    borderHover: "hover:border-[#B07EF0]/40",
    sizeClass: "col-span-1 md:col-span-3", // Balanced secondary footprint
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 18 22 12 16 6M8 6 2 12l6 6"
        />
      </svg>
    ),
  },
  {
    title: "PROBLEM SOLVER",
    tagline: "UNDERSTAND FIRST",
    desc: "I believe the best solutions come from understanding the problem. I ask questions, study systems, and focus on solving root causes.",
    accent: "text-[#F0A644]",
    glow: "rgba(240,166,68,0.15)",
    borderHover: "hover:border-[#F0A644]/40",
    sizeClass: "col-span-1 md:col-span-3", // Balanced secondary footprint
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 9.75 15 4.5m0 0h-3m3 0v3m-6 6L4.5 19.5m0 0h3m-3 0v-3"
        />
      </svg>
    ),
  },
];

export default function BeyondCodeSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 lg:px-16 border-t border-border/40 bg-background">
      {/* Dynamic Cyber Ambient Glow */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(202,239,69,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(91,156,246,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ================= HEADER SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-mono text-[11px] uppercase tracking-[4px] text-primary">
                WHO I AM
              </span>
            </div>
            <h2
              className="font-display uppercase leading-[0.9] text-foreground tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 7.5vw, 96px)" }}
            >
              BEYOND <br />
              <span
                className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 0 30px rgba(202,239,69,0.25))",
                }}
              >
                THE CODE.
              </span>
            </h2>
          </div>
          <div className="relative max-w-md lg:mb-2 pl-6 border-l-2 border-primary/20">
            <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed">
              Technology is only one part of my journey. Alongside web
              development, I run a retail gas business, repair electronic
              devices, and continuously explore how systems, businesses, and
              people work. These experiences shape the way I approach every
              challenge: with curiosity, practical thinking, and a commitment to
              building meaningful solutions.
            </p>
          </div>
        </div>

        {/* ================= PILLARS BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className={`group relative rounded-[2rem] p-8 md:p-10 bg-card/40 backdrop-blur-md border border-border/60 ${pillar.borderHover} transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-1 ${pillar.sizeClass}`}
            >
              {/* Dynamic Internal Corner Glow */}
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: pillar.glow }}
              />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <div
                    className={`p-3 rounded-xl bg-muted/60 border border-border/40 ${pillar.accent} transition-transform duration-500 group-hover:scale-110`}
                  >
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[9px] tracking-[2.5px] uppercase text-muted-foreground/60 bg-muted/30 px-2.5 py-1 rounded-md border border-border/20">
                    {pillar.tagline}
                  </span>
                </div>

                <h3 className="font-display uppercase text-lg tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {pillar.title}
                </h3>
              </div>

              <p className="font-mono text-[12px] leading-relaxed text-muted-foreground/85 tracking-tight max-w-xl">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= PHILOSOPHY BLOCK ================= */}
        <div className="group relative rounded-[2.5rem] border border-border/50 bg-card/20 p-8 md:p-16 mb-16 overflow-hidden transition-all duration-300 hover:bg-card/40">
          <div className="max-w-4xl relative z-10">
            <div className="font-mono text-[11px] tracking-[4px] uppercase text-primary mb-6">
              MY PHILOSOPHY
            </div>

            <h3 className="font-display uppercase text-3xl md:text-5xl tracking-tight mb-8 text-foreground">
              Understanding Problems
              <br />
              Before Solving Them.
            </h3>

            <p className="font-mono text-xs md:text-sm text-muted-foreground leading-relaxed max-w-3xl">
              I believe great solutions begin with understanding. Whether I'm
              building a web application, improving a business process, or
              solving a technical challenge, I start by asking questions,
              learning how the system works, and identifying the real problem.
              My goal is not simply to build products; my goal is to create
              solutions that make a meaningful difference.
            </p>
          </div>
        </div>

        {/* ================= CORE DRIVERS MAP (MISSION/VISION/MOTTO) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Mission */}
          <div className="group relative rounded-[2rem] p-8 bg-card/20 border border-border/50 flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:bg-card/40">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[3px] text-muted-foreground/60 mb-4 flex items-center gap-1.5">
                <span className="text-primary">//</span> MISSION
              </div>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                To solve problems, create opportunities, and build a better
                future through{" "}
                <span className="text-foreground font-medium border-b border-primary/40">
                  innovation, business, technology
                </span>
                , and continuous learning.
              </p>
            </div>
            <svg
              className="w-4 h-4 text-muted-foreground/30 ml-auto group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>

          {/* Vision */}
          <div
            className="group relative rounded-[2rem] p-8 bg-[#0C0D08] border border-primary/10 flex flex-col justify-between min-h-[220px] transition-all duration-300"
            style={{ boxShadow: "0 10px 40px -15px rgba(202,239,69,0.03)" }}
          >
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[3px] text-primary mb-4 flex items-center gap-1.5">
                <span>//</span> VISION
              </div>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                To become an{" "}
                <span className="text-foreground font-medium">
                  inventor, entrepreneur, investor
                </span>
                , and business leader who creates solutions that improve lives,
                generate opportunities, and leave a lasting impact.
              </p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-primary ml-auto shadow-[0_0_12px_#CAEF45] animate-ping" />
          </div>

          {/* High Impact Motto */}
          <div
            className="relative rounded-[2rem] p-8 bg-primary overflow-hidden flex flex-col justify-between min-h-[220px] group transition-all duration-500 hover:scale-[1.01]"
            style={{ boxShadow: "0 20px 40px -10px rgba(202,239,69,0.25)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-background/5 blur-2xl group-hover:scale-125 transition-transform duration-700" />

            <div className="font-mono text-[10px] uppercase tracking-[3px] text-primary-foreground/60 relative z-10">
              // MOTTO
            </div>
            <p className="font-display text-3xl leading-none text-primary-foreground uppercase tracking-tighter mt-8 relative z-10">
              BUILDING THE FUTURE, <br />
              <span className="text-background/80">ONE STEP AT A TIME.</span>
            </p>
            <div className="w-8 h-[1px] bg-primary-foreground/30 mt-4 relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
