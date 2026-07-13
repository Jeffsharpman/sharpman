/* ================================================================
   ProjectSEOMeta.jsx — Dynamically sets <head> meta tags
   for a specific project (title, description, OG, Twitter).

   Include once per project detail view/modal.
   For the current SPA, it updates meta when a project is "active."
   ================================================================ */

import { useEffect } from "react";
import { PROJECTS_WITH_SEO } from "../../data/projects";
import { SITE } from "../../data/siteConfig";

function setMeta(property, content, attribute = "property") {
  if (!content) return;

  let el =
    document.head.querySelector(`meta[${attribute}="${property}"]`) ||
    document.head.querySelector(`meta[name="${property}"]`);

  if (!el) {
    el = document.createElement("meta");
    if (attribute === "property") {
      el.setAttribute("property", property);
    } else {
      el.setAttribute("name", property);
    }
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function setCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Restores the default homepage meta tags.
 * Call when the user navigates back to the top of the page.
 */
export function restoreHomeMeta() {
  document.title =
    "Sharpman — Web Developer in Lagos, Nigeria | Oyenuga Joshua";
  setCanonical(SITE.url);
  setMeta("title", "Sharpman — Web Developer in Lagos, Nigeria | Oyenuga Joshua");
  setMeta(
    "description",
    "Sharpman is the personal brand of Oyenuga Joshua, a full stack web developer in Lagos, Nigeria. Specializing in React, Laravel, PHP, custom websites, web applications, and digital solutions for businesses across Nigeria."
  );
  setMeta("og:url", SITE.url, "property");
  setMeta(
    "og:title",
    "Sharpman — Web Developer in Lagos, Nigeria | Oyenuga Joshua",
    "property"
  );
  setMeta(
    "og:description",
    "Sharpman is the personal brand of Oyenuga Joshua, a full stack web developer in Lagos, Nigeria. Building modern websites, web applications, and digital solutions that help businesses grow online.",
    "property"
  );
  setMeta("og:image", SITE.ogImage, "property");
  setMeta("twitter:url", SITE.url, "name");
  setMeta(
    "twitter:title",
    "Sharpman — Web Developer in Lagos, Nigeria | Oyenuga Joshua",
    "name"
  );
  setMeta(
    "twitter:description",
    "Sharpman is the personal brand of Oyenuga Joshua, a full stack web developer in Lagos, Nigeria. Building modern websites, web applications, and digital solutions.",
    "name"
  );
  setMeta("twitter:image", SITE.ogImage, "name");
}

/**
 * Sets meta tags for a specific project.
 */
export function setProjectMeta(projectId) {
  const project = PROJECTS_WITH_SEO.find((p) => p.id === projectId);
  if (!project) {
    restoreHomeMeta();
    return;
  }

  const { seo } = project;

  document.title = seo.title;
  setCanonical(seo.canonical);
  setMeta("title", seo.title);
  setMeta("description", seo.description);
  setMeta("author", seo.author);
  setMeta("robots", seo.robots);
  setMeta("og:type", "article", "property");
  setMeta("og:url", seo.ogUrl, "property");
  setMeta("og:title", seo.title, "property");
  setMeta("og:description", seo.description, "property");
  setMeta("og:image", seo.ogImage, "property");
  setMeta("og:image:alt", seo.ogImageAlt, "property");
  setMeta("twitter:card", "summary_large_image", "name");
  setMeta("twitter:url", seo.ogUrl, "name");
  setMeta("twitter:title", seo.title, "name");
  setMeta("twitter:description", seo.description, "name");
  setMeta("twitter:image", seo.twitterImage, "name");
}

/**
 * Component that watches a projectId prop and sets meta accordingly.
 * Restores home meta on unmount.
 */
export default function ProjectSEOMeta({ projectId }) {
  useEffect(() => {
    if (projectId) {
      setProjectMeta(projectId);
    }
    return () => restoreHomeMeta();
  }, [projectId]);

  return null;
}
