import ScrollReveal from "../UI/ScrollReveal";
import Eyebrow from "../UI/Eyebrow";
import GlowBlob from "../UI/GlowBlob";

const IMGS = [
  {
    src: "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/independence.jpg",
    label: "INDEPENDENCE",
    alt: "Sharpman value — Independence: Building solutions with self-reliance and ownership",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/innovation.jpg",
    label: "INNOVATION",
    alt: "Sharpman value — Innovation: Embracing new technologies and creative problem solving",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/integrity.jpg",
    label: "INTEGRITY",
    alt: "Sharpman value — Integrity: Delivering honest, quality work with transparency",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/growth.jpg",
    label: "GROWTH",
    alt: "Sharpman value — Growth: Continuously improving skills and helping businesses scale",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 lg:px-16 bg-background border-t border-border/40"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
        <div className="flex flex-col justify-center h-full">
          <div>
            <ScrollReveal animation="fadeLeft">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" aria-hidden="true" />
                <Eyebrow>ABOUT SHARPMAN</Eyebrow>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={0.1}>
              <h2
                id="about-heading"
                className="font-display uppercase leading-[0.9] mb-8 text-foreground tracking-tighter"
                style={{ fontSize: "clamp(2.8rem, 6vw, 80px)" }}
              >
                MORE THAN{" "}
                <span
                  className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent"
                  style={{ textShadow: "0 0 30px var(--accent-glow)" }}
                >
                  CODE.
                </span>
              </h2>
            </ScrollReveal>

            <div className="space-y-5 max-w-xl">
              {[
                <>
                  Hi, I&apos;m{" "}
                  <span className="text-foreground font-medium">
                    Oyenuga Joshua
                  </span>
                  , a passionate web developer in Ikorodu, Lagos and the founder
                  of{" "}
                  <span className="text-primary font-medium">
                    Sharpman Digital Solutions
                  </span>
                  . I specialize in designing and building modern, responsive, and
                  user-focused websites that help businesses establish a strong
                  online presence and achieve their digital goals. My mission is
                  simple: to create fast, functional, and visually appealing
                  digital experiences that deliver real value to businesses and
                  their customers.
                </>,
                <>
                  As a{" "}
                  <span className="text-foreground font-medium">
                    Web developer
                  </span>
                  , I combine creativity with technical expertise to transform
                  ideas into fully functional websites and web applications. I
                  believe every business — whether it&apos;s a startup, a local shop,
                  a restaurant, a school, or an established company — deserves a
                  professional online presence that reflects its brand and
                  attracts more customers.
                </>,
                <>
                  Through Sharpman Digital Solutions, I offer a range of web
                  development services tailored to meet different business needs.
                  These include{" "}
                  <span className="text-primary font-medium">
                    custom website development
                  </span>
                  , responsive business websites, portfolio websites, landing
                  pages, web application development, e-commerce solutions, admin
                  dashboard development, and website maintenance. Every project is
                  built with performance, accessibility, search engine
                  optimization (SEO), and user experience in mind.
                </>,
                <>
                  My development stack includes{" "}
                  <span className="text-foreground font-medium">
                    HTML, CSS, JavaScript, React, PHP, Laravel, Livewire, and
                    Filament
                  </span>
                  . I continuously improve my skills by learning modern
                  technologies and following industry best practices, allowing me
                  to build secure, scalable, and maintainable web solutions.
                </>,
                <>
                  I&apos;ve worked on projects such as{" "}
                  <span className="text-primary font-medium">
                    Sharpman Portfolio
                  </span>
                  ,{" "}
                  <span className="text-primary font-medium">NovaTask</span>, a
                  React-based task management application, and{" "}
                  <span className="text-primary font-medium">QuickGrab</span>, a
                  PHP-powered food ordering platform. These projects demonstrate
                  my ability to build practical solutions that solve real-world
                  problems while maintaining clean design and efficient
                  functionality.
                </>,
                <>
                  My goal is to help businesses{" "}
                  <span className="text-foreground font-medium">
                    build websites in Nigeria and far beyond,
                  </span>{" "}
                  That not only look professional but also generate leads, improve
                  customer engagement, and support long-term growth. Whether you
                  need a new business website, a custom web application, or a
                  redesign of your existing site, I&apos;m committed to delivering
                  solutions that align with your vision and business objectives.
                </>,
                <>
                  Beyond web development, I&apos;m also an entrepreneur who understands
                  the challenges faced by small businesses. This perspective helps
                  me create digital solutions that are practical,
                  results-driven, and focused on helping clients succeed in
                  today&apos;s competitive online landscape.
                </>,
                <>
                  If you&apos;re looking for a{" "}
                  <span className="text-primary underline decoration-primary/20 decoration-2 underline-offset-4 font-medium">
                    reliable developer who values quality, communication, and
                    continuous improvement
                  </span>
                  , I&apos;d be happy to work with you. Let&apos;s collaborate to create a
                  website or web application that elevates your brand and helps
                  your business grow in Lagos, across Nigeria, and beyond.
                </>,
              ].map((content, i) => (
                <ScrollReveal key={i} animation="fadeUp" delay={i * 0.05}>
                  <p className="font-mono text-xs md:text-sm leading-relaxed text-muted-foreground">
                    {content}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center h-full">
          <div className="relative w-full max-w-115 h-full flex items-center justify-center">
            <GlowBlob className="absolute inset-0" blur="80px" opacity={0.2} />

            <div className="grid grid-cols-2 gap-3 w-full self-center">
              {IMGS.map((img, i) => (
                <ScrollReveal key={img.label} animation="scaleIn" delay={i * 0.1}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-9/16 bg-card/40 border border-border/40 transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 shadow-md">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      width="200"
                      height="356"
                    />

                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="font-display text-[11px] md:text-xs text-white tracking-[2.5px] uppercase block truncate" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.7)" }}>
                        {img.label}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
