import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "../lib/ThemeContext";
import { Sun, Moon, Menu, X } from "lucide-react";
import { SITE, NAV_LINKS } from "../../data/siteConfig";
import useScrollTo from "../../hooks/useScrollTo";

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    scrollTo(href);
    closeMobile();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex items-center justify-between w-full max-w-4xl px-5 py-3 rounded-2xl bg-card/90 border border-border backdrop-blur-xl shadow-2xl"
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="flex items-center gap-3 no-underline"
          aria-label={`${SITE.name} — Go to top`}
        >
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
            <div
              className="absolute inset-0 rounded-xl"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(135deg, rgba(202,239,69,0.08), transparent 60%)",
              }}
            />
            <img
              src={SITE.logo}
              alt=""
              aria-hidden="true"
              className="relative z-10 w-8 h-8 object-contain"
              width="32"
              height="32"
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
        </a>

        {/* Desktop nav links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-0.5"
        >
          {NAV_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-[2px] px-4 py-2 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggle}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
          >
            {dark ? (
              <Sun size={13} aria-hidden="true" />
            ) : (
              <Moon size={13} aria-hidden="true" />
            )}
          </motion.button>

          <a
            href="#start-project"
            onClick={(e) => handleNavClick(e, "#start-project")}
            className="hidden md:inline-flex font-mono font-semibold text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            LET&apos;S TALK
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
          >
            {mobileOpen ? (
              <X size={14} aria-hidden="true" />
            ) : (
              <Menu size={14} aria-hidden="true" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={closeMobile}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed top-20 left-4 right-4 z-50 md:hidden rounded-2xl bg-card/95 border border-border backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="font-mono text-[11px] uppercase tracking-[2px] px-4 py-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#start-project"
                onClick={(e) => handleNavClick(e, "#start-project")}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.05, duration: 0.3 }}
                className="font-mono font-semibold text-[11px] uppercase tracking-[2px] px-5 py-3 mt-2 rounded-xl bg-primary text-primary-foreground text-center hover:brightness-110 transition-all duration-200"
              >
                LET&apos;S TALK
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
