/* ================================================================
   ProjectSchema.jsx — Renders JSON-LD for a specific project.

   Include once per project view, or in ProjectSection to emit
   schema for all projects simultaneously.
   ================================================================ */

import { useEffect } from "react";
import { PROJECTS, generateProjectSchema, generateProjectBreadcrumb } from "../../data/projects";

const SCHEMA_ID_PREFIX = "sharpman-project-schema";

function removeExistingSchema(id) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
}

function injectSchema(id, json) {
  removeExistingSchema(id);
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(json, null, 0);
  document.head.appendChild(script);
}

/**
 * Emits JSON-LD for ALL projects in the registry.
 * Include <ProjectSchemas /> once in ProjectSection or Home.
 */
export function ProjectSchemas() {
  useEffect(() => {
    const cleanup = [];

    PROJECTS.forEach((project) => {
      const schemaId = `${SCHEMA_ID_PREFIX}-${project.slug}`;
      const schema = generateProjectSchema(project);
      const breadcrumb = generateProjectBreadcrumb(project);

      injectSchema(schemaId, schema);
      injectSchema(`${schemaId}-breadcrumb`, breadcrumb);

      cleanup.push(() => {
        removeExistingSchema(schemaId);
        removeExistingSchema(`${schemaId}-breadcrumb`);
      });
    });

    return () => cleanup.forEach((fn) => fn());
  }, []);

  return null;
}

/**
 * Emits JSON-LD for a single project by ID.
 * Include <ProjectSchema id="novatask" /> for a detail view.
 */
export default function ProjectSchema({ id }) {
  useEffect(() => {
    const project = PROJECTS.find((p) => p.id === id);
    if (!project) return;

    const schemaId = `${SCHEMA_ID_PREFIX}-${project.slug}`;
    injectSchema(schemaId, generateProjectSchema(project));
    injectSchema(`${schemaId}-breadcrumb`, generateProjectBreadcrumb(project));

    return () => {
      removeExistingSchema(schemaId);
      removeExistingSchema(`${schemaId}-breadcrumb`);
    };
  }, [id]);

  return null;
}
