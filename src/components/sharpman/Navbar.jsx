// Navbar.jsx — removed broken motion import (was never used)
import { useTheme } from "../lib/ThemeContext";

const LogoImg =
  "https://cdn.jsdelivr.net/gh/Jeffsharpman/sharpman-assets@main/images/sharpman-logo.png";

const links = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#projects" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="flex items-center justify-between w-full max-w-4xl px-5 py-3 rounded-2xl bg-card/90 border border-border backdrop-blur-xl shadow-2xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="relative flex items-center justify-center w-10 h-10 shrink-0 rounded-xl overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(202,239,69,0.16), #050505 75%)",
              border: "1px solid rgba(202,239,69,0.25)",
              boxShadow: `
                0 0 16px rgba(202,239,69,0.12),
                0 0 32px rgba(202,239,69,0.06),
                inset 0 0 10px rgba(202,239,69,0.05)
              `,
            }}
            >
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

          <span
            className="font-display font-semibold leading-none text-primary"
            style={{ letterSpacing: "0.22em", fontSize: "15px" }}
          >
            SHARPMAN
          </span>
        </div>

        {/* Nav links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-0.5"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[2px] px-4 py-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
          >
            {dark ? (
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* CTA */}

          <a
            href="mailto:buildwithsharpman@gmail.com"
            className="font-mono font-semibold text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            LET'S TALK
          </a>
        </div>
      </div>
    </header>
  );
}
