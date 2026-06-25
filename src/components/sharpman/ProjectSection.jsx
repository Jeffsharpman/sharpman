// ProjectsSection.jsx
const projects = [
  {
    num: "01",
    name: "NOVATASK",
    category: "PERSONAL PROJECT",
    tag: "BUILD. ORGANISE. ELEVATE.",
    desc: "A task management application built with React. Designed to help users organise their work, manage priorities, and stay productive — clean UI, fast, and focused.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/project1.png",
    tech: "React",
    color: "#CAEF45",
    href: "https://novatodos.netlify.app/",
  },
  {
    num: "02",
    name: "QUICKGRAB",
    category: "PHP PROJECT",
    tag: "FOOD. ORDER. DIGITAL.",
    desc: "A food ordering and e-commerce platform built with PHP. QuickGrab helps businesses accept online orders and digitise their operations — connecting them with customers on the internet.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/project2.png",
    tech: "PHP",
    color: "#F0A644",
    href: "https://quickgrab.oyenugajoshua.com/",
  },
  {
    num: "03",
    name: "SHARPMAN SITE",
    category: "PORTFOLIO",
    tag: "DESIGN. CODE. ELEVATE.",
    desc: "This portfolio — built in React to represent the Sharpman brand and tell the story of Oyenuga Joshua as a builder, developer, and entrepreneur.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/project3.png",
    tech: "React",
    color: "#5B9CF6",
    href: "https://sharpman.netlify.app/",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="sticky w-full flex justify-center px-4 sm:px-8 md:px-16"
      style={{ top: 96 + index * 20, zIndex: 10 + index }}
    >
      <div className="w-full" style={{ maxWidth: "900px" }}>
        <div
          className="overflow-hidden rounded-3xl border"
          style={{
            borderColor: project.color + "30",
            backgroundColor: "#0C0F08",
            boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 0 1px ${project.color}10`,
          }}
        >
          <div
            className="flex flex-col md:flex-row"
            style={{ minHeight: "440px" }}
          >
            {/* Image */}
            <div
              className="relative md:w-[55%] overflow-hidden"
              style={{ minHeight: "260px" }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top"
                style={{ minHeight: "260px" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to right, transparent 55%, #0C0F08 100%)",
                }}
              />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span
                  className="font-mono text-[10px] uppercase tracking-[3px] px-3 py-1.5 rounded-full border"
                  style={{
                    color: project.color,
                    borderColor: project.color + "50",
                    backgroundColor: project.color + "18",
                  }}
                >
                  {project.category}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-[2px] px-2 py-1.5 rounded-full border"
                  style={{ color: "#888", borderColor: "#333" }}
                >
                  {project.tech}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="md:w-[45%] flex flex-col justify-between p-7 md:p-10">
              <div>
                <div
                  className="font-mono text-[10px] uppercase tracking-[3px] mb-3"
                  style={{ color: project.color }}
                >
                  {project.tag}
                </div>
                <div
                  className="font-display leading-none mb-1 select-none"
                  style={{
                    fontSize: "clamp(4rem, 8vw, 96px)",
                    color: project.color + "28",
                  }}
                >
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
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[10px] uppercase tracking-[3px] border rounded-full hover:bg-primary/10 transition-colors duration-200"
                  style={{ color: project.color, borderColor: project.color }}
                >
                  VIEW PROJECT
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: project.color + "20" }}
                />
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: `0 0 10px ${project.color}`,
                  }}
                />
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
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">THINGS I'VE BUILT</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(3rem, 12vw, 140px)", lineHeight: 0.88 }}
          >
            PROJECTS
          </h2>
          <p className="font-mono text-sm max-w-xs text-muted-foreground">
            Built from scratch. Shipped for real.<br />
            <span className="text-primary">Every one solves a problem.</span>
          </p>
        </div>
      </div>
      {projects.map((project, i) => (
        <ProjectCard key={project.num} project={project} index={i} />
      ))}
    </section>
  );
}