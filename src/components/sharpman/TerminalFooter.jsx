// TerminalFooter.jsx — correct social handles
import LogoImg from "../../assets/logo.png";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/sharpman_dev",
    svg: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/sharpman_dev",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.732-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/oyenugajoshua",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/sharpmandev",
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function TerminalFooter() {
  return (
    <footer className="relative overflow-hidden bg-card">
      {/* Top lime line */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg,transparent,#CAEF45 40%,#CAEF45 60%,transparent)",
        }}
      />

      {/* Main CTA block */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
            {/* Left */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #1a1a00, #0a0a00)",
                    border: "1px solid rgba(202,239,69,0.25)",
                    boxShadow:
                      "0 0 12px rgba(202,239,69,0.2), inset 0 0 8px rgba(202,239,69,0.05)",
                  }}
                >
                  <img
                    src={LogoImg}
                    alt="Sharpman Logo"
                    className="w-5 h-5 object-contain"
                    style={{
                      filter: "drop-shadow(0 0 4px rgba(202,239,69,0.6))",
                    }}
                  />
                </div>
                <span className="font-display text-2xl tracking-[4px] text-foreground">
                  SHARPMAN
                </span>
              </div>

              <h2
                className="font-display uppercase leading-[0.86] mb-5"
                style={{ fontSize: "clamp(2.4rem, 5vw, 62px)" }}
              >
                <span className="block text-foreground">READY TO BUILD</span>
                <span
                  className="block text-primary"
                  style={{ textShadow: "0 0 44px rgba(202,239,69,0.4)" }}
                >
                  SOMETHING GREAT?
                </span>
              </h2>

              <p className="font-mono text-sm leading-relaxed max-w-xs text-muted-foreground">
                Drop a line and let's turn your vision into a{" "}
                <span className="text-primary">digital reality.</span>
              </p>
            </div>

            {/* Right — CTA card */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div
                className="rounded-3xl p-8 lg:p-10 bg-background border border-border min-w-[290px]"
                style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.6)" }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[3px] mb-3 text-primary">
                  // INITIATE CONTACT
                </div>
                <div className="font-display text-3xl mb-1 text-foreground">
                  LET'S TALK
                </div>
                <p className="font-mono text-xs mb-6 text-muted-foreground">
                  buildwithsharpman@gmail.com
                </p>

                <a
                  href="mailto:buildwithsharpman@gmail.com"
                  className="flex items-center justify-center gap-3 font-mono font-semibold text-xs uppercase tracking-[2px] px-7 py-4 rounded-xl text-primary-foreground w-full bg-primary hover:brightness-105 active:scale-[0.98] transition-all duration-200"
                  style={{ boxShadow: "0 0 28px rgba(202,239,69,0.35)" }}
                >
                  START YOUR PROJECT
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 13L13 1M13 1H5M13 1V9"
                      stroke="#0A0A0A"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />

      {/* Nav + socials */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-7">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-start">
            {footerLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-[2px] text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-border text-muted-foreground bg-card hover:border-primary hover:text-primary transition-all duration-200"
              >
                {s.svg}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border" />

      {/* Bottom bar */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[2px]">
          <span className="text-muted-foreground">
            © 2026 Sharpman · Oyenuga Joshua. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-primary">AVAILABLE</span>
            <span className="text-muted-foreground">— FOR PROJECTS</span>
          </div>
          <span className="text-muted-foreground">
            Ikorodu, Lagos · Nigeria
          </span>
        </div>
      </div>
    </footer>
  );
}
