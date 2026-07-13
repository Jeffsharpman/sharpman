import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    name: "NOVATASK",
    category: "PERSONAL PROJECT",
    tag: "BUILD. ORGANISE. ELEVATE.",
    desc: "A task management application built with React. Designed to help users organise their work, manage priorities, and stay productive — clean UI, fast, and focused.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/novatodos.png",
    imageAlt: "NovaTask — A modern task management application built with React by Sharpman",
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
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/Quicgrab.jpg",
    imageAlt: "QuickGrab — A PHP-powered food ordering and e-commerce platform for Nigerian businesses",
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
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/sharpman.png",
    imageAlt: "Sharpman Portfolio — A modern developer portfolio built with React and Tailwind CSS",
    tech: "React",
    color: "#5B9CF6",
    href: "https://sharpman.netlify.app/",
  },
  {
    num: "04",
    name: "ZESTHAVEN",
    category: "RESTAURANT SITE",
    tag: "FOOD. MENU. DIGITAL.",
    desc: "A modern Nigerian bukka serving slow stews, smoky grills, and hand-pounded yam in Lekki, Lagos.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/ZestHaven%20.jpg",
    imageAlt: "ZestHaven — A modern Nigerian restaurant website built by Sharpman",
    tech: "React",
    color: "#ef6c22",
    href: "https://zesthaven.netlify.app/",
  },
];

function ProjectCard({ project, index }) {
  return (
    <article
      className="sticky w-full flex justify-center px-4 sm:px-8 md:px-16"
      style={{
        top: `${120 + index * 35}px`,
        zIndex: 10 + index,
      }}
    >
      <div
        className="w-full pb-20 sm:pb-24 md:pb-32"
        style={{ maxWidth: "860px" }}
      >
        <div
          className="overflow-hidden rounded-2xl border transition-all duration-300"
          style={{
            borderColor: project.color + "25",
            boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px ${project.color}10`,
          }}
        >
          {/* Main Grid */}
          <div className="flex flex-col md:grid md:grid-cols-12 md:h-95">
            {/* Image Side */}
            <div className="relative h-55 md:h-full md:col-span-6 overflow-hidden bg-muted">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover object-top"
                loading="lazy"
                width="430"
                height="380"
              />
              {/* Responsive Gradient Bleed Scrims - decorative */}
              <div
                className="absolute inset-0 hidden md:block"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to right, transparent 50%, #0C0F08 100%)",
                }}
              />
              <div
                className="absolute inset-0 block md:hidden"
                aria-hidden="true"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, #0C0F08 100%)",
                }}
              />
            </div>

            {/* Content Side */}
            <div className="md:col-span-6 flex flex-col justify-between p-6 md:p-8 bg-card">
              <div>
                {/* Badges */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-mono text-[9px] uppercase tracking-[2px] px-2.5 py-0.5 rounded-full border"
                    style={{
                      color: project.color,
                      borderColor: project.color + "30",
                      backgroundColor: project.color + "10",
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[1.5px] px-2 py-0.5 rounded-full border border-neutral-800 text-neutral-400 bg-neutral-900/40">
                    {project.tech}
                  </span>
                </div>

                <div
                  className="font-mono text-[9px] uppercase tracking-[2.5px] mb-2"
                  style={{ color: project.color }}
                >
                  {project.tag}
                </div>

                <div className="relative flex items-baseline justify-between mt-1 mb-2">
                  <h3 className="font-display uppercase text-xl md:text-2xl font-bold tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <span
                    className="font-display font-black leading-none select-none text-[32px] md:text-[40px]"
                    style={{ color: project.color + "18" }}
                    aria-hidden="true"
                  >
                    {project.num}
                  </span>
                </div>

                <p className="font-mono font-light text-xs leading-relaxed text-muted-foreground max-w-sm line-clamp-3 md:line-clamp-4">
                  {project.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3 mt-6 relative z-30">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-mono text-[9px] uppercase tracking-[2.5px] border rounded-full transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    color: project.color,
                    borderColor: project.color,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      project.color + "15")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  VIEW PROJECT
                  <ArrowUpRight size={10} aria-hidden="true" />
                </a>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: project.color + "15" }}
                  aria-hidden="true"
                />
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: `0 0 8px ${project.color}`,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative bg-background pb-12" aria-labelledby="projects-heading">
      {/* Title Header Block */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
            THINGS I&apos;VE BUILT
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            id="projects-heading"
            className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(3rem, 12vw, 140px)", lineHeight: 0.88 }}
          >
            PROJECTS
          </h2>
          <p className="font-mono text-sm max-w-xs text-muted-foreground">
            Built from scratch. Shipped for real.
            <br />
            <span className="text-primary">Every one solves a problem.</span>
          </p>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative w-full flex flex-col items-center">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
