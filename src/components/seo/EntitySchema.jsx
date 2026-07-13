/* ================================================================
   EntitySchema.jsx — Renders the global entity graph as JSON-LD.

   Include once in App.jsx or Home.jsx.
   This establishes the Person → Brand → Website relationship.
   ================================================================ */

import { useEffect } from "react";
import {
  PERSON,
  ORGANIZATION,
  BRAND,
  WEBSITE,
  PROFESSIONAL_SERVICE,
  LOCAL_BUSINESS,
  FAQ_ITEMS,
  SITE,
} from "../../data/siteConfig";

const SCHEMA_ID = "sharpman-entity-schema";

function removeExistingSchema() {
  const existing = document.getElementById(SCHEMA_ID);
  if (existing) existing.remove();
}

function injectSchema(json) {
  const script = document.createElement("script");
  script.id = SCHEMA_ID;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(json, null, 0);
  document.head.appendChild(script);
}

export default function EntitySchema() {
  useEffect(() => {
    removeExistingSchema();

    const entityGraph = {
      "@context": "https://schema.org",
      "@graph": [
        PERSON,
        ORGANIZATION,
        BRAND,
        WEBSITE,
        PROFESSIONAL_SERVICE,
        LOCAL_BUSINESS,
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        },
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE.url}/#webpage`,
          url: SITE.url,
          name: "Sharpman — Web Developer in Lagos, Nigeria | Oyenuga Joshua",
          isPartOf: { "@id": `${SITE.url}/#website` },
          about: { "@id": PERSON["@id"] },
          description: PERSON.description,
          dateModified: new Date().toISOString().split("T")[0],
          datePublished: "2024-01-01",
          inLanguage: "en",
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": `${SITE.url}/#breadcrumblist`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: SITE.url,
            },
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE.url}/#profilepage`,
          url: SITE.url,
          name: "Oyenuga Joshua — Sharpman | Full Stack Web Developer in Lagos, Nigeria",
          description:
            "Professional profile of Oyenuga Joshua (Sharpman), a full stack web developer in Lagos, Nigeria specializing in React, Laravel, PHP, and digital solutions.",
          mainEntity: { "@id": PERSON["@id"] },
          dateModified: new Date().toISOString().split("T")[0],
        },
      ],
    };

    injectSchema(entityGraph);

    return () => removeExistingSchema();
  }, []);

  return null;
}
