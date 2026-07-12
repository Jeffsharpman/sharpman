// ServicesSection.jsx — "WHAT I DO", updated service 04, removed #SHARPMANSQUAD
import { ArrowUpRight } from "lucide-react";
const BRAND_IMG =
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/banner.png";
const LogoImg =
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/sharpman-logo.png";

const services = [
  {
    num: "01",
    name: "WEBSITES",
    desc: "Modern, responsive business websites and landing pages built to establish your online presence and convert visitors.",
    color: "#5B9CF6",
  },
  {
    num: "02",
    name: "WEB APPS",
    desc: "Custom web applications, admin dashboards, business management systems, and productivity tools — scalable and production-ready.",
    color: "#CAEF45",
  },
  {
    num: "03",
    name: "UI/UX DESIGN",
    desc: "Clean, user-focused interfaces that prioritise clarity, usability, and real-world flow — designed with purpose.",
    color: "#B07EF0",
  },
  {
    num: "04",
    name: "E-COMMERCE",
    desc: "Online stores and ordering platforms that digitise businesses, connect them with customers, and drive sales.",
    color: "#F0A644",
  },
  {
    num: "05",
    name: "DIGITAL SOLUTIONS", // ← was PORTFOLIOS
    desc: "Custom business solutions built around your specific challenge — whether it's a system, a tool, or a new digital product.",
    color: "#CAEF45",
  },
];

function ServiceCard({ service }) {
  return (
    <div className="relative rounded-2xl p-6 h-full flex flex-col bg-card border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden group">
      {/* Number watermark */}
      <div className="absolute top-4 right-4 font-display text-5xl leading-none select-none text-foreground/5 group-hover:text-foreground/10 transition-colors duration-300">
        {service.num}
      </div>

      {/* Accent dot */}
      <div
        className="w-2 h-2 rounded-full mb-5"
        style={{ backgroundColor: service.color }}
      />

      <h3 className="font-display uppercase text-2xl mb-2.5 text-foreground group-hover:text-primary transition-colors duration-200">
        {service.name}
      </h3>

      <p className="font-mono font-light text-[11px] leading-relaxed flex-1 text-muted-foreground">
        {service.desc}
      </p>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-200">
          <ArrowUpRight size={8} className="text-muted-foreground group-hover:text-primary-foreground" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground group-hover:text-primary transition-colors duration-200">
          Learn more
        </span>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 sm:px-8 md:px-12 lg:px-20 py-20 md:py-28 bg-background"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              WHAT I DO
            </span>
          </div>
          <h2
            className="font-display font-black uppercase text-foreground"
            style={{ fontSize: "clamp(2.8rem, 8vw, 100px)", lineHeight: 0.88 }}
          >
            SERVICES
          </h2>
        </div>

        <div className="hidden lg:block">
          <div
            className="relative w-44 h-24 rounded-2xl overflow-hidden shrink-0 border border-border"
            style={{               boxShadow: "0 0 28px var(--lime-subtle)" }}
          >
            <img
              src={BRAND_IMG}
              alt="Sharpman services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute bottom-2 left-2">
              <p className="font-mono text-[9px] text-foreground uppercase tracking-[2px]">
                Design. Code. Elevate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {services.map((s) => (
          <ServiceCard key={s.num} service={s} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div
        className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-card border border-border"
        style={{ boxShadow: "0 0 50px var(--lime-subtle)" }}
      >
        <div className="flex items-center gap-4">
          <div
            className="relative flex items-center justify-center w-10 h-10 shrink-0 rounded-xl overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(202,239,69,0.16), #050505 75%)",
              border: "1px solid rgba(202,239,69,0.25)",
              boxShadow: `
                  0 0 16px var(--lime-soft),
                  0 0 32px var(--lime-subtle),
                  inset 0 0 10px var(--lime-subtle)
                `,
            }}
          >
            {/* Subtle highlight */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(202,239,69,0.08), transparent 60%)",
              }}
            />

            <img
              src={LogoImg}
              alt="Sharpman Logo"
              className="relative z-10 w-8 h-8 object-contain"
              style={{
                filter: `
                    drop-shadow(0 0 6px rgba(202,239,69,0.9))
                    drop-shadow(0 0 12px rgba(202,239,69,0.35))
                    brightness(1.08)
                  `,
              }}
            />
          </div>
          <div className="font-display text-xl leading-none text-foreground">
            GOT A PROBLEM TO SOLVE?
          </div>
          <div className="font-mono text-[11px] mt-0.5 text-muted-foreground">
            Available for freelance & remote work · buildwithsharpman@gmail.com
          </div>
        </div>

        <a
          href="#start-project"
          className="flex items-center gap-3 font-mono font-semibold text-xs uppercase tracking-[2px] px-7 py-3.5 rounded-xl text-primary-foreground bg-primary shrink-0 hover:brightness-105 transition-all duration-200"
          style={{ boxShadow: "0 0 22px var(--lime-soft)" }}
        >
          START YOUR PROJECT →
        </a>
      </div>
    </section>
  );
}
