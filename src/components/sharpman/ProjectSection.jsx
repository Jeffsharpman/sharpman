const projects = [
  {
    num: "01", name: "NOVATASK", category: "PERSONAL", tag: "BUILD. INNOVATE. ELEVATE.",
    desc: "A task management interface built for speed and clarity — minimal UI, keyboard-first workflow, dark mode native.",
    image: "https://media.base44.com/images/public/6a30604c3df093c4f7f94ba2/23940907a_file_00000000d29071f79efe447a2b4fa74f.png",
    color: "#CAEF45",
  },
  {
    num: "02", name: "SHARPMAN SITE", category: "PORTFOLIO", tag: "DESIGN. CODE. ELEVATE.",
    desc: "This portfolio — cyberpunk precision engineering meets brand power. Sharp, functional, unforgettable.",
    image: "https://media.base44.com/images/public/6a30604c3df093c4f7f94ba2/607f41951_file_000000008f3871f5876d900554df5424.png",
    color: "#5B9CF6",
  },
  {
    num: "03", name: "GRIDLOCK STUDIO", category: "CLIENT", tag: "DIGITAL BOOST.",
    desc: "Brand identity and coded interface for a creative studio. Systematic design, custom motion, production-ready.",
    image: "https://media.base44.com/images/public/6a30604c3df093c4f7f94ba2/1f4a7909b_file_00000000ded0720cb85a54a8f0a000fb.png",
    color: "#B07EF0",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="sticky w-full flex justify-center px-4 sm:px-8 md:px-16"
      style={{ top: 96 + index * 20, zIndex: 10 + index }}
    >
      <div className="w-full" style={{ maxWidth: "900px" }}>
        <div className="overflow-hidden rounded-3xl border"
          style={{
            borderColor: project.color + "30",
            backgroundColor: "#0C0F08",
            boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px ${project.color}10`,
          }}>
          <div className="flex flex-col md:flex-row" style={{ minHeight: "440px" }}>

            {/* Image */}
            <div className="relative md:w-[55%] overflow-hidden" style={{ minHeight: "260px" }}>
              <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" style={{ minHeight: "260px" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 55%, #0C0F08 100%)" }} />
              <div className="absolute top-4 left-4">
                <span className="font-mono text-[10px] uppercase tracking-[3px] px-3 py-1.5 rounded-full border"
                  style={{ color: project.color, borderColor: project.color + "50", backgroundColor: project.color + "18" }}>
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-[45%] flex flex-col justify-between p-7 md:p-10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[3px] mb-3" style={{ color: project.color }}>
                  {project.tag}
                </div>
                <div className="font-display leading-none mb-1 select-none"
                  style={{ fontSize: "clamp(4rem, 8vw, 96px)", color: project.color + "28" }}>
                  {project.num}
                </div>
                <h3 className="font-display uppercase text-3xl md:text-4xl mt-1 mb-3 text-foreground">
                  {project.name}
                </h3>
                <p className="font-mono font-light text-sm leading-relaxed mb-8 text-muted-foreground">
                  {project.desc}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[3px] border rounded-full hover:bg-primary/10 transition-colors duration-200"
                  style={{ color: project.color, borderColor: project.color }}
                >
                  VIEW PROJECT
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <div className="flex-1 h-px" style={{ backgroundColor: project.color + "20" }} />
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-background" style={{ paddingBottom: "6rem" }}>

      {/* Header */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">OUR WORK</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(3rem, 12vw, 140px)", lineHeight: 0.88 }}>
            PROJECTS
          </h2>
          <p className="font-mono text-sm max-w-xs text-muted-foreground">
            Scroll. Stop. <span className="text-primary">Engage.</span><br />
            — Sharpman, The Creative Catalyst
          </p>
        </div>
      </div>

      {/* Stacking cards */}
      {projects.map((project, i) => (
        <ProjectCard key={project.num} project={project} index={i} />
      ))}
    </section>
  );
}