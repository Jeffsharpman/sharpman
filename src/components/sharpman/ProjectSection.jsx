// ProjectsSection.jsx
import React from "react";

const projects = [
  {
    num: "01",
    name: "NOVATASK",
    category: "PERSONAL PROJECT",
    tag: "BUILD. ORGANISE. ELEVATE.",
    desc: "A task management application built with React. Designed to help users organise their work, manage priorities, and stay productive — clean UI, fast, and focused.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/novatodos.png",
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
    "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/quickgrab.png",
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
    tech: "React",
    color: "#5B9CF6",
    href: "https://sharpman.netlify.app/",
  },
  {
    num: "04",
    name: " ZestHaven",
    category: "RESTAURANT SITE",
    tag: "FOOD. MENU. DIGITAL.",
    desc: "A modern Nigerian bukka serving slow stews, smoky grills, and hand-pounded yam in Lekki, Lagos.",
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/zesthaven.png.png",
    tech: "React",
    color: "#ef6c22",
    href: "https://zesthaven.netlify.app/",
  },
];

function ProjectCard({ project, index }) {
  return (
    <div
      className="sticky w-full flex justify-center px-4 sm:px-8 md:px-16"
      style={{
        top: `${120 + index * 35}px`, // Slightly increased gap for scannability
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
            backgroundColor: "#0C0F08",
            boxShadow: `0 30px 80px rgba(0,0,0,0.9), 0 0 0 1px ${project.color}10`,
          }}
        >
          {/* Main Grid: Hard-locked height on desktop screens */}
          <div className="flex flex-col md:grid md:grid-cols-12 md:h-95">
            {/* Image Side (Left Column) */}
            <div className="relative h-55 md:h-full md:col-span-6 overflow-hidden bg-[#0a0d07]">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-top"
              />
              {/* Responsive Gradient Bleed Scrims */}
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  background:
                    "linear-gradient(to right, transparent 50%, #0C0F08 100%)",
                }}
              />
              <div
                className="absolute inset-0 block md:hidden"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 50%, #0C0F08 100%)",
                }}
              />
            </div>

            {/* Content Message Side (Right Column) */}
            <div className="md:col-span-6 flex flex-col justify-between p-6 md:p-8 bg-[#0C0F08]">
              {/* Header Context Layout */}
              <div>
                {/* Badges placed neatly on the message side */}
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
                  <h3 className="font-display uppercase text-xl md:text-2xl font-bold tracking-tight text-white">
                    {project.name}
                  </h3>
                  <span
                    className="font-display font-black leading-none select-none text-[32px] md:text-[40px]"
                    style={{ color: project.color + "18" }}
                  >
                    {project.num}
                  </span>
                </div>

                <p className="font-mono font-light text-xs leading-relaxed text-neutral-400 max-w-sm line-clamp-3 md:line-clamp-4">
                  {project.desc}
                </p>
              </div>

              {/* Action Buttons Footer Row */}
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
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
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
                  style={{ backgroundColor: project.color + "15" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: project.color,
                    boxShadow: `0 0 8px ${project.color}`,
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
    <section id="projects" className="relative bg-background pb-12">
      {/* Title Header Block */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 bg-primary rounded-full" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
            THINGS I'VE BUILT
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
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

      {/* Stacked Cards Tracking Container */}
      <div className="relative w-full flex flex-col items-center">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
