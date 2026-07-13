/* ================================================================
   InternalLinks.jsx — Renders related project links with
   descriptive anchor text (never "Click Here" or "View").

   Usage:
     <InternalLinks currentProjectId="novatask" limit={3} />
   ================================================================ */

import { ArrowUpRight } from "lucide-react";
import { getRelatedProjects } from "../../data/projects";

const ANCHOR_TEMPLATES = [
  (p) => `Explore ${p.name}`,
  (p) => `View ${p.name} Case Study`,
  (p) => `${p.name} — ${p.category}`,
  (p) => `${p.name} Project`,
  (p) => `See the ${p.name} Website`,
];

function getAnchorText(project, index) {
  const template = ANCHOR_TEMPLATES[index % ANCHOR_TEMPLATES.length];
  return template(project);
}

export default function InternalLinks({ currentProjectId, limit = 3 }) {
  const related = getRelatedProjects(currentProjectId, limit);

  if (related.length === 0) return null;

  return (
    <div className="mt-8">
      <h4 className="font-mono text-[10px] uppercase tracking-[3px] text-primary mb-4">
        RELATED PROJECTS
      </h4>
      <div className="flex flex-col gap-2">
        {related.map((project, i) => (
          <a
            key={project.id}
            href={`#project-${project.slug}`}
            className="group flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary/30 bg-card/40 transition-all duration-200"
          >
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: project.color }}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-foreground group-hover:text-primary transition-colors duration-200 block truncate">
                {getAnchorText(project, i)}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[1px] text-muted-foreground">
                {project.category}
              </span>
            </div>
            <ArrowUpRight
              size={12}
              className="text-muted-foreground group-hover:text-primary shrink-0 transition-colors duration-200"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
