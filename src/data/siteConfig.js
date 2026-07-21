/* ================================================================
   siteConfig.js — Single source of truth for ALL site-wide data.

   Every component, every schema block, every meta tag should
   reference this file. Never duplicate this data elsewhere.
   ================================================================ */

/* ── SOCIAL PROFILES (defined first — referenced by entities) ── */

export const SOCIAL = {
  github: "https://github.com/Jeffsharpman",
  linkedin: "https://www.linkedin.com/in/oyenuga-joshua-058434417",
  instagram: "https://www.instagram.com/sharpman_dev",
  twitter: "https://x.com/sharpman_dev",
  youtube: "https://youtube.com/@sharpman_dev",
  tiktok: "https://www.tiktok.com/@sharpman.dev",
  facebook: "https://www.facebook.com/",
};

/* ── SITE CONFIG ────────────────────────────────────────────── */

export const SITE = {
  name: "Sharpman",
  shortName: "Sharpman",
  tagline: "Design. Code. Elevate.",
  url: "https://sharpman.netlify.app",
  ogImage: "https://sharpman.netlify.app/sharpman-og-image.png",
  logo: "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/sharp-logo.svg",
  favicon:
    "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/sharp-favicon.svg",
  heroImage:
    "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/hero.png",
  themeColor: "#080C0A",
  locale: "en_US",
  localeAlt: "en_NG",
  language: "en",
  email: "buildwithsharpman@gmail.com",
  phone: "+234-907-028-1022",
  phoneDisplay: "+234 907 028 1022",
  whatsappUrl: "https://wa.link/3fl6df",
  foundingDate: "2024",
  googleSiteVerification: "UMRK_ShfxZ8gTzdrV2c6TOM-E-_H5D_4wsR22k9BX28",
};

/* ── PERSON ENTITY ──────────────────────────────────────────── */

export const PERSON = {
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: "Oyenuga Joshua",
  alternateName: ["Sharpman", "BuildWithSharpman"],
  url: SITE.url,
  image: SITE.ogImage,
  description:
    "Oyenuga Joshua, known professionally as Sharpman, is a full stack web developer and entrepreneur based in Ikorodu, Lagos, Nigeria, building modern websites, web applications, and digital solutions that help businesses grow online.",
  jobTitle: "Full Stack Web Developer",
  honorificPrefix: "",
  knowsAbout: [
    "Web Development",
    "Full Stack Development",
    "React",
    "Laravel",
    "PHP",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Livewire",
    "Filament",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "E-commerce Development",
    "Responsive Web Design",
    "Web Application Development",
    "Digital Solutions",
    "Business Automation",
  ],
  knowsLanguage: ["English", "Yoruba"],
  nationality: { "@type": "Country", name: "Nigeria" },
  birthPlace: {
    "@type": "Place",
    name: "Ikorodu, Lagos, Nigeria",
  },
  homeLocation: {
    "@type": "Place",
    name: "Ikorodu, Lagos, Nigeria",
    geo: { "@type": "GeoCoordinates", latitude: 6.61, longitude: 3.46 },
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ikorodu",
    addressLocality: "Lagos",
    addressRegion: "Lagos State",
    addressCountry: "NG",
  },
  geo: { "@type": "GeoCoordinates", latitude: 6.61, longitude: 3.46 },
  email: SITE.email,
  telephone: SITE.phone,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Website Development",
          description:
            "Modern, responsive business websites built to establish online presence and convert visitors.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Application Development",
          description:
            "Custom web applications, admin dashboards, business management systems, and productivity tools.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-commerce Solutions",
          description:
            "Online stores and ordering platforms that digitize businesses and drive sales.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design Implementation",
          description:
            "Clean, user-focused interfaces designed with clarity, usability, and real-world flow.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Website Maintenance & Redesign",
          description:
            "Ongoing website support, updates, and redesigns to keep digital presences current and effective.",
        },
      },
    ],
  },
  sameAs: Object.values(SOCIAL),
};

/* ── ORGANIZATION ENTITY ────────────────────────────────────── */

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: "BuildWithSharpman",
  url: SITE.url,
  logo: SITE.logo,
  image: SITE.ogImage,
  description:
    "Sharpman is a digital solutions brand by Oyenuga Joshua, specializing in modern websites, web applications, and technology-driven digital solutions for businesses across Lagos and Nigeria.",
  foundingDate: SITE.foundingDate,
  founder: { "@id": PERSON["@id"] },
  address: PERSON.address,
  geo: PERSON.geo,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    contactType: "customer service",
    email: SITE.email,
    availableLanguage: ["English", "Yoruba"],
    areaServed: ["NG"],
  },
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "Country", name: "Nigeria" },
  ],
  sameAs: Object.values(SOCIAL),
};

/* ── BRAND ENTITY ───────────────────────────────────────────── */

export const BRAND = {
  "@type": "Brand",
  "@id": `${SITE.url}/#brand`,
  name: SITE.name,
  alternateName: "BuildWithSharpman",
  url: SITE.url,
  logo: SITE.logo,
  image: SITE.ogImage,
  description: `${SITE.name} — ${SITE.tagline} A digital solutions brand helping businesses establish a stronger online presence through modern websites and technology-driven solutions.`,
  founder: { "@id": PERSON["@id"] },
};

/* ── WEBSITE ENTITY ─────────────────────────────────────────── */

export const WEBSITE = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  description:
    "Sharpman is the personal web development brand of Oyenuga Joshua, building modern websites, web applications, and digital solutions for businesses across Lagos, Nigeria.",
  publisher: { "@id": ORGANIZATION["@id"] },
  author: { "@id": PERSON["@id"] },
  inLanguage: SITE.language,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ── PROFESSIONAL SERVICE ───────────────────────────────────── */

export const PROFESSIONAL_SERVICE = {
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#professionalservice`,
  name: SITE.name,
  alternateName: "BuildWithSharpman",
  url: SITE.url,
  image: SITE.ogImage,
  description:
    "Sharpman provides professional web development services including custom website development, web application development, e-commerce solutions, and digital solutions for businesses in Lagos, Nigeria.",
  foundingDate: SITE.foundingDate,
  founder: { "@id": PERSON["@id"] },
  address: PERSON.address,
  geo: PERSON.geo,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "Nigeria" },
  hasOfferCatalog: PERSON.hasOfferCatalog,
  sameAs: Object.values(SOCIAL),
};

/* ── LOCAL BUSINESS ─────────────────────────────────────────── */

export const LOCAL_BUSINESS = {
  "@type": "LocalBusiness",
  "@id": `${SITE.url}/#localbusiness`,
  name: SITE.name,
  alternateName: "BuildWithSharpman",
  image: SITE.ogImage,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  description:
    "Professional web development services in Lagos, Nigeria. Custom websites, web applications, and digital solutions by Oyenuga Joshua.",
  foundingDate: SITE.foundingDate,
  address: PERSON.address,
  geo: PERSON.geo,
  areaServed: [
    { "@type": "City", name: "Lagos" },
    { "@type": "State", name: "Lagos State" },
    { "@type": "Country", name: "Nigeria" },
  ],
  founder: { "@id": PERSON["@id"] },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

/* ── FAQ DATA ───────────────────────────────────────────────── */

export const FAQ_ITEMS = [
  {
    question: "Who is Oyenuga Joshua?",
    answer:
      "Oyenuga Joshua, known professionally as Sharpman, is a full stack web developer and entrepreneur based in Ikorodu, Lagos, Nigeria. He builds modern websites, web applications, and digital solutions that help businesses establish a stronger online presence and grow online.",
  },
  {
    question: "What is Sharpman?",
    answer:
      "Sharpman is the personal web development brand of Oyenuga Joshua. It specializes in modern websites, responsive web applications, e-commerce solutions, admin dashboards, and technology-driven digital solutions for businesses and individuals in Lagos, Nigeria.",
  },
  {
    question: "What services does Sharpman offer?",
    answer:
      "Sharpman offers custom website development, responsive website development, web application development, e-commerce solutions, admin dashboard development, UI implementation, website maintenance, website redesign, and digital solutions for businesses.",
  },
  {
    question: "What technologies does Sharpman use?",
    answer:
      "Sharpman uses HTML5, CSS3, JavaScript, React for frontend development, and PHP, Laravel, Livewire, and Filament for backend development.",
  },
  {
    question: "How can I contact Sharpman for a web development project?",
    answer: `You can contact Sharpman (Oyenuga Joshua) via email at ${SITE.email}, WhatsApp at ${SITE.phoneDisplay}, or through the contact form at ${SITE.url}/#contact. Sharpman is available for freelance and remote web development projects.`,
  },
  {
    question: "What types of businesses does Sharpman work with?",
    answer:
      "Sharpman works with restaurants, hotels, salons, churches, schools, clinics, real estate companies, SMEs, startups, and businesses throughout Lagos and Nigeria. Services include custom websites, e-commerce platforms, web applications, and digital solutions tailored to each business.",
  },
  {
    question: "Where is Sharpman located?",
    answer:
      "Sharpman (Oyenuga Joshua) is located in Ikorodu, Lagos, Nigeria. Sharpman serves clients throughout Lagos, across Nigeria, and works remotely with clients worldwide.",
  },
];

/* ── NAVIGATION ─────────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Beyond the Code", href: "#beyond-code" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", href: SOCIAL.instagram },
  { label: "X (Twitter)", href: SOCIAL.twitter },
  { label: "LinkedIn", href: SOCIAL.linkedin },
  { label: "GitHub", href: SOCIAL.github },
];
