/* ================================================================
   ProjectSection.jsx — Renders all projects from the central
   registry. Never hardcode projects here.

   Uses: PROJECTS_WITH_SEO from src/data/projects.js
   Features: Internal links, per-project schema, breadcrumbs
   ================================================================ */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_WITH_SEO } from "../../data/projects";
import { ProjectSchemas } from "../seo/ProjectSchema";
import Breadcrumbs from "../seo/Breadcrumbs";
import InternalLinks from "../seo/InternalLinks";

function ProjectCard({ project, index }) {

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="sticky w-full flex justify-center px-4 sm:px-8 md:px-16"
      style={{
        top: `${120 + index * 35}px`,
        zIndex: 10 + index,
      }}
      itemScope
      itemType="https://schema.org/CreativeWork"
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
                itemProp="image"
              />
              {/* Gradient overlays - decorative */}
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
                    {project.technologies[0]}
                  </span>
                </div>

                <div
                  className="font-mono text-[9px] uppercase tracking-[2.5px] mb-2"
                  style={{ color: project.color }}
                  itemProp="keywords"
                >
                  {project.tagline}
                </div>

                <div className="relative flex items-baseline justify-between mt-1 mb-2">
                  <h3
                    className="font-display uppercase text-xl md:text-2xl font-bold tracking-tight text-foreground"
                    itemProp="name"
                  >
                    {project.name}
                  </h3>
                  <span
                    className="font-display font-black leading-none select-none text-[32px] md:text-[40px]"
                    style={{ color: project.color + "18" }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p
                  className="font-mono font-light text-xs leading-relaxed text-muted-foreground max-w-sm line-clamp-3 md:line-clamp-4"
                  itemProp="description"
                >
                  {project.shortDesc}
                </p>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[8px] uppercase tracking-[1.5px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Internal links */}
                <InternalLinks
                  currentProjectId={project.id}
                  limit={2}
                />
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3 mt-6 relative z-30">
                <a
                  href={project.liveUrl}
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
                  itemProp="url"
                >
                  VIEW {project.name} WEBSITE
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
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative bg-background pb-12"
      aria-labelledby="projects-heading"
    >
      {/* Emit JSON-LD for ALL projects */}
      <ProjectSchemas />

      {/* Title Header Block */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-20 pt-20 md:pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-2 h-2 bg-primary rounded-full" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
            THINGS I&apos;VE BUILT
          </span>
        </motion.div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.h2
            id="projects-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(3rem, 12vw, 140px)", lineHeight: 0.88 }}
          >
            PROJECTS
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm max-w-xs text-muted-foreground"
          >
            Built from scratch. Shipped for real.
            <br />
            <span className="text-primary">Every one solves a problem.</span>
          </motion.p>
        </div>

        {/* Breadcrumbs */}
        <div className="mt-4">
          <Breadcrumbs items={[{ label: "Projects", href: "#projects" }]} />
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative w-full flex flex-col items-center">
        {PROJECTS_WITH_SEO.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
