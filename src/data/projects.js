/* ================================================================
   projects.js — Central project registry.

   Every project on the site is defined here ONCE.
   All components, schemas, SEO, and links pull from this file.

   To add a new project:
   1. Add an entry to the PROJECTS array below.
   2. That's it. SEO, schema, breadcrumbs, internal links,
      and Open Graph are all generated automatically.
   ================================================================ */

import { SITE, PERSON, ORGANIZATION } from "./siteConfig";

/* ── HELPERS ────────────────────────────────────────────────── */

/** Generate a URL-safe slug from a project name. */
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Build the canonical anchor URL for a project (SPA architecture). */
function projectUrl(slug) {
  return `${SITE.url}/#project-${slug}`;
}

/** Generate a unique meta description for a project. */
function generateDescription(project) {
  const techList = project.technologies.join(", ");
  return `${project.name} — a ${project.category.toLowerCase()} built by Oyenuga Joshua (Sharpman), a full stack web developer in Lagos, Nigeria. ${project.shortDesc} Technologies: ${techList}.`;
}

/** Generate a unique title tag for a project. */
function generateTitle(project) {
  return `${project.name} — Case Study by Oyenuga Joshua | Sharpman`;
}

/* ── PROJECT REGISTRY ───────────────────────────────────────── */

export const PROJECTS = [
  {
    id: "novatask",
    name: "NOVATASK",
    slug: slugify("NOVATASK"),
    category: "PERSONAL PROJECT",
    client: "Personal",
    tagline: "BUILD. ORGANISE. ELEVATE.",
    shortDesc:
      "A task management application built with React. Designed to help users organise their work, manage priorities, and stay productive with a clean, fast, focused UI.",
    fullDesc:
      "NovaTask is a personal project that demonstrates Sharpman's ability to build practical, production-ready web applications. The app helps users manage tasks, set priorities, and stay organised throughout their workday. Built entirely with React, it features a clean interface, fast interactions, and a focus on productivity. NovaTask showcases modern frontend architecture, state management, and responsive design — proving that even simple tools can be built to an enterprise standard.",
    businessOutcome:
      "Demonstrates Sharpman's capability to deliver fast, focused web applications that solve real productivity challenges for individuals and teams.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/novatodos.png",
    imageAlt:
      "NovaTask — A modern task management application built with React by Sharpman, full stack web developer in Lagos Nigeria",
    liveUrl: "https://novatodos.netlify.app/",
    githubUrl: null,
    color: "#CAEF45",
    featured: true,
    dateCreated: "2024-06-01",
    relatedProjects: ["quickgrab", "sharpman-site"],
  },
  {
    id: "quickgrab",
    name: "QUICKGRAB",
    slug: slugify("QUICKGRAB"),
    category: "PHP PROJECT",
    client: "Business Platform",
    tagline: "FOOD. ORDER. DIGITAL.",
    shortDesc:
      "A food ordering and e-commerce platform built with PHP. QuickGrab helps businesses accept online orders and digitise their operations.",
    fullDesc:
      "QuickGrab is a PHP-powered food ordering and e-commerce platform designed to help Nigerian businesses move their operations online. The platform enables restaurants and food vendors to accept orders through a digital storefront, manage menus, process orders, and connect with customers on the internet. Built with PHP, it demonstrates Sharpman's backend development skills and understanding of real-world business requirements. QuickGrab is a practical solution that bridges the gap between traditional food businesses and the digital economy.",
    businessOutcome:
      "Enables food businesses to accept online orders, digitise operations, and reach customers beyond their physical location — a critical need in Nigeria's growing food-tech space.",
    technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/quickgrab.png",
    imageAlt:
      "QuickGrab — A PHP-powered food ordering and e-commerce platform for Nigerian businesses, built by Sharpman web developer Lagos",
    liveUrl: "https://quickgrab.oyenugajoshua.com/",
    githubUrl: null,
    color: "#F0A644",
    featured: true,
    dateCreated: "2024-03-01",
    relatedProjects: ["zesthaven", "novatask"],
  },
  {
    id: "sharpman-site",
    name: "SHARPMAN SITE",
    slug: slugify("SHARPMAN SITE"),
    category: "PORTFOLIO",
    client: "Sharpman Brand",
    tagline: "DESIGN. CODE. ELEVATE.",
    shortDesc:
      "This portfolio — built in React to represent the Sharpman brand and tell the story of Oyenuga Joshua as a builder, developer, and entrepreneur.",
    fullDesc:
      "The Sharpman Portfolio is a single-page React application that serves as the digital home for the Sharpman brand. Built with React 19, Tailwind CSS 4, and Vite, it showcases Oyenuga Joshua's work, skills, and philosophy as a full stack web developer. The site features a dark futuristic design with neon lime accents, responsive layouts, accessibility-first architecture, and enterprise-grade SEO. It is designed to demonstrate exactly what Sharpman delivers for clients — fast, beautiful, well-structured websites that rank and convert.",
    businessOutcome:
      "Establishes the Sharpman brand online, demonstrates technical capability to potential clients, and serves as a living example of the quality Sharpman delivers.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/sharpman.png",
    imageAlt:
      "Sharpman Portfolio — A modern developer portfolio built with React and Tailwind CSS by Oyenuga Joshua, web developer in Lagos Nigeria",
    liveUrl: "https://sharpman.netlify.app/",
    githubUrl: null,
    color: "#5B9CF6",
    featured: true,
    dateCreated: "2024-01-01",
    relatedProjects: ["novatask", "zesthaven"],
  },
  {
    id: "zesthaven",
    name: "ZESTHAVEN",
    slug: slugify("ZESTHAVEN"),
    category: "RESTAURANT SITE",
    client: "Restaurant Business",
    tagline: "FOOD. MENU. DIGITAL.",
    shortDesc:
      "A modern Nigerian restaurant website for a bukka serving slow stews, smoky grills, and hand-pounded yam in Lekki, Lagos.",
    fullDesc:
      "ZestHaven is a restaurant website built for a modern Nigerian bukka in Lekki, Lagos. The site showcases the restaurant's menu, atmosphere, and brand identity through a clean, appetising design. Built with React, it features responsive layouts that work beautifully on mobile — where most Nigerian diners browse — and fast loading times that keep hungry customers engaged. ZestHaven demonstrates Sharpman's ability to build industry-specific websites that help restaurants, bukkas, and food businesses establish a professional online presence and attract more customers.",
    businessOutcome:
      "Gives a local Nigerian restaurant a professional online presence, showcases the menu digitally, and helps attract customers through a modern, mobile-first website.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/zesthaven.png",
    imageAlt:
      "ZestHaven — A modern Nigerian restaurant website built by Sharpman, web developer in Lagos Nigeria",
    liveUrl: "https://zesthaven.netlify.app/",
    githubUrl: null,
    color: "#ef6c22",
    featured: true,
    dateCreated: "2024-08-01",
    relatedProjects: ["quickgrab", "sharpman-site"],
  },
  {
    id: "magicstitch",
    name: "MAGICSTITCH",
    slug: slugify("MAGICSTITCH"),
    category: "FASHION SITE",
    client: "Fashion Brand",
    tagline: "FASHION. STYLE. DIGITAL.",
    shortDesc:
      "A modern Nigerian fashion website for a boutique showcasing trendy clothing and accessories in Lekki, Lagos.",
    fullDesc:
      "MagicStitch is a fashion website built for a modern Nigerian boutique in Lekki, Lagos. The site showcases the brand's collection, style, and identity through a clean, appealing design. Built with React, it features responsive layouts that work beautifully on mobile — where most Nigerian shoppers browse — and fast loading times that keep customers engaged. MagicStitch demonstrates Sharpman's ability to build industry-specific websites that help fashion brands establish a professional online presence and attract more customers.",
    businessOutcome:
      "Gives a local Nigerian fashion brand a professional online presence, showcases the collection digitally, and helps attract customers through a modern, mobile-first website.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5"],
    image:
      "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/magicstitch.png",
    imageAlt:
      "MagicStitch — A modern Nigerian fashion website built by Sharpman, web developer in Lagos Nigeria",
    liveUrl: "https://magicstitch.netlify.app/",
    githubUrl: null,
    color: "#D4AF37",
    featured: true,
    dateCreated: "2024-08-01",
    relatedProjects: ["quickgrab", "sharpman-site"],
  },
];

/* ── DERIVED DATA (auto-generated, never edit manually) ────── */

/** Map of project id -> full project object for O(1) lookups. */
export const PROJECT_MAP = Object.fromEntries(
  PROJECTS.map((p) => [p.id, p])
);

/** Auto-generate SEO metadata for every project. */
export const PROJECTS_WITH_SEO = PROJECTS.map((project) => ({
  ...project,
  seo: {
    title: generateTitle(project),
    description: generateDescription(project),
    canonical: projectUrl(project.slug),
    ogUrl: projectUrl(project.slug),
    ogImage: project.image || SITE.ogImage,
    ogImageAlt: project.imageAlt,
    twitterImage: project.image || SITE.ogImage,
    author: PERSON.name,
    publisher: ORGANIZATION.name,
    themeColor: SITE.themeColor,
    robots: "index, follow",
  },
}));

/** Get a project by ID. */
export function getProject(id) {
  return PROJECT_MAP[id] || null;
}

/** Get related projects for a given project ID. */
export function getRelatedProjects(id, limit = 3) {
  const project = PROJECT_MAP[id];
  if (!project) return [];
  return project.relatedProjects
    .map((rid) => PROJECT_MAP[rid])
    .filter(Boolean)
    .slice(0, limit);
}

/** Get all featured projects. */
export function getFeaturedProjects() {
  return PROJECTS.filter((p) => p.featured);
}

/** Generate Schema.org CreativeWork JSON-LD for a project. */
export function generateProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl(project.slug)}#creativework`,
    name: project.name,
    alternateName: project.name.toLowerCase().replace(/\s+/g, ""),
    url: projectUrl(project.slug),
    description: project.fullDesc,
    image: project.image || SITE.ogImage,
    thumbnailUrl: project.image || SITE.ogImage,
    dateCreated: project.dateCreated,
    dateModified: new Date().toISOString().split("T")[0],
    author: { "@id": PERSON["@id"] },
    creator: { "@id": ORGANIZATION["@id"] },
    publisher: { "@id": ORGANIZATION["@id"] },
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl(project.slug),
    },
    about: {
      "@type": "Thing",
      name: project.category,
    },
    keywords: [
      project.name,
      "Oyenuga Joshua",
      "Sharpman",
      "web developer Lagos",
      "web developer Nigeria",
      ...project.technologies,
    ].join(", "),
    inLanguage: SITE.language,
    isAccessibleForFree: true,
    ...(project.liveUrl && {
      mainEntity: {
        "@type": "WebApplication",
        name: project.name,
        url: project.liveUrl,
        applicationCategory: "WebApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    }),
  };
}

/** Generate BreadcrumbList JSON-LD for a project. */
export function generateProjectBreadcrumb(project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${projectUrl(project.slug)}#breadcrumblist`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${SITE.url}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: projectUrl(project.slug),
      },
    ],
  };
}
