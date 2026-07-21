import { ArrowUpRight } from "lucide-react";
import { SITE } from "../../data/siteConfig";
import useScrollTo from "../../hooks/useScrollTo";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Logo from "../UI/Logo";
import ScrollReveal from "../UI/ScrollReveal";
import Eyebrow from "../UI/Eyebrow";

const BRAND_IMG =
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/banner.png";

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
    name: "DIGITAL SOLUTIONS",
    desc: "Custom business solutions built around your specific challenge — whether it's a system, a tool, or a new digital product.",
    color: "#CAEF45",
  },
];

function ServiceCard({ service, index }) {
  return (
    <ScrollReveal animation="fadeUp" delay={index * 0.08}>
      <Card
        variant="default"
        className="relative !rounded-2xl p-6 h-full flex flex-col bg-card !border-border hover:!border-primary/40 transition-all duration-300 overflow-hidden group"
      >
        <div className="absolute top-4 right-4 font-display text-5xl leading-none select-none text-foreground/5 group-hover:text-foreground/10 transition-colors duration-300" aria-hidden="true">
          {service.num}
        </div>

        <div
          className="w-2 h-2 rounded-full mb-5"
          style={{ backgroundColor: service.color }}
          aria-hidden="true"
        />

        <h3 className="font-display uppercase text-2xl mb-2.5 text-foreground group-hover:text-primary transition-colors duration-200">
          {service.name}
        </h3>

        <p className="font-mono font-light text-[11px] leading-relaxed flex-1 text-muted-foreground">
          {service.desc}
        </p>

        <div className="mt-5 flex items-center gap-2" aria-hidden="true">
          <div className="w-6 h-6 rounded-full flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary transition-all duration-200">
            <ArrowUpRight size={8} className="text-muted-foreground group-hover:text-primary-foreground" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground group-hover:text-primary transition-colors duration-200">
            Learn more
          </span>
        </div>
      </Card>
    </ScrollReveal>
  );
}

export default function ServicesSection() {
  const scrollTo = useScrollTo();

  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 sm:px-8 md:px-12 lg:px-20 py-20 md:py-28 bg-background"
      aria-labelledby="services-heading"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-14">
        <div>
          <ScrollReveal animation="fadeLeft">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" aria-hidden="true" />
              <Eyebrow>WHAT I DO</Eyebrow>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fadeUp" delay={0.1}>
            <h2
              id="services-heading"
              className="font-display font-black uppercase text-foreground"
              style={{ fontSize: "clamp(2.8rem, 8vw, 100px)", lineHeight: 0.88 }}
            >
              SERVICES
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="scaleIn" delay={0.2}>
          <div className="hidden lg:block">
            <div
              className="relative w-44 h-24 rounded-2xl overflow-hidden shrink-0 border border-border"
              style={{ boxShadow: "0 0 28px var(--lime-subtle)" }}
            >
              <img
                src={BRAND_IMG}
                alt="Sharpman — Design, Code, Elevate"
                className="w-full h-full object-cover"
                loading="lazy"
                width="176"
                height="96"
              />
              <div className="absolute bottom-2 left-2">
                <p className="font-mono text-[9px] text-white uppercase tracking-[2px]" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}>
                  Design. Code. Elevate.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
        {services.map((s, i) => (
          <ServiceCard key={s.num} service={s} index={i} />
        ))}
      </div>

      <ScrollReveal animation="fadeUp" delay={0.3}>
        <Card
          variant="elevated"
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 !p-6 !rounded-2xl"
          style={{ boxShadow: "0 0 50px var(--lime-subtle)" }}
        >
          <div className="flex items-center gap-4">
            <Logo className="scale-75 origin-left shrink-0" />
            <div className="font-display text-xl leading-none text-foreground">
              GOT A PROBLEM TO SOLVE?
            </div>
            <div className="font-mono text-[11px] mt-0.5 text-muted-foreground">
              Available for freelance &amp; remote work · {SITE.email}
            </div>
          </div>

          <Button
            href="#start-project"
            variant="primary"
            size="md"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#start-project");
            }}
            className="font-mono font-semibold text-xs uppercase tracking-[2px] !px-7 !py-3.5 !rounded-xl shrink-0"
            style={{ boxShadow: "0 0 22px var(--lime-soft)" }}
          >
            START YOUR PROJECT <span aria-hidden="true">→</span>
          </Button>
        </Card>
      </ScrollReveal>
    </section>
  );
}
