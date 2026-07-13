/* ================================================================
   Breadcrumbs.jsx — Accessible breadcrumb navigation + JSON-LD.

   Usage:
     <Breadcrumbs />                          → Home only
     <Breadcrumbs items={[{ label, href }]} /> → Custom trail
   ================================================================ */

import { useEffect } from "react";
import { SITE } from "../../data/siteConfig";

function removeExistingSchema() {
  const el = document.getElementById("sharpman-breadcrumb-schema");
  if (el) el.remove();
}

function injectSchema(items) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE.url}/#breadcrumblist`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.href.startsWith("http")
        ? item.href
        : `${SITE.url}${item.href}`,
    })),
  };

  const script = document.createElement("script");
  script.id = "sharpman-breadcrumb-schema";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema, null, 0);
  document.head.appendChild(script);
}

const HOME = { label: "Home", href: SITE.url };

export default function Breadcrumbs({ items = [] }) {
  const trail = [HOME, ...items];

  useEffect(() => {
    removeExistingSchema();
    injectSchema(trail);
    return () => removeExistingSchema();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground"
    >
      <ol className="flex items-center gap-1.5 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
        {trail.map((item, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li
              key={item.label}
              className="flex items-center gap-1.5"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              {i > 0 && (
                <span className="text-border" aria-hidden="true">/</span>
              )}
              {isLast ? (
                <span
                  className="text-primary"
                  aria-current="page"
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="hover:text-primary transition-colors duration-200"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </a>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
