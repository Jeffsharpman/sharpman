import { useEffect, useState } from "react";
import { SITE } from "../../data/siteConfig";

function Logo({ className = "" }) {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Matches the 2-second (25%) cyber initialization sequence of the SVG logo
    const timer = setTimeout(() => setIsBooted(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex items-center gap-4 select-none ${className}`}>
      {/* Premium Cybernetic Container Frame */}
      <div
        className={`
          relative flex h-16 w-16 items-center justify-center
          rounded-2xl border p-1 backdrop-blur-md
          transition-all duration-[1000ms] cubic-bezier(0.19, 1, 0.22, 1)
          bg-slate-950/80
          ${
            isBooted
              ? "border-primary/40 dark:border-primary/20 shadow-[0_0_20px_var(--lime-soft)] dark:shadow-[0_0_25px_var(--lime-soft)] scale-100"
              : "border-cyan-500/40 dark:border-cyan-500/30 shadow-[0_0_15px_rgba(0,243,255,0.08)] dark:shadow-[0_0_15px_rgba(0,243,255,0.1)] scale-95"
          }
        `}
      >
        {/* Subtle background power grid lines inside the logo box */}
        <div
          className="absolute inset-0 rounded-2xl [background-size:8px_8px] opacity-[0.06] dark:opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(var(--lime-subtle) 1.5px, transparent 1.5px)`,
          }}
        />

        {/* Active scanline layer that passes during initialization */}
        <div
          className={`
              absolute inset-x-0 top-0 h-[2px] pointer-events-none
              transition-all duration-[1500ms] ease-out
              ${isBooted ? "translate-y-14 opacity-0" : "translate-y-0 opacity-100"}
            `}
          style={{
            background: `linear-gradient(to right, transparent, var(--primary), transparent)`,
          }}
        />

        <img
          src={SITE.logo}
          alt={`${SITE.name} Brand Icon`}
          className="relative z-10 h-[92%] w-[92%] object-contain"
          draggable={false}
          style={{ filter: "drop-shadow(0 0 8px var(--lime-glow))" }}
        />
      </div>

      {/* Futuristic Typography Cluster */}
      <div className="flex flex-col justify-center">
        {/* Brand Name Title Text */}
        <h1
          className={`
      font-display text-xl font-bold tracking-[0.25em] uppercase
      transition-all duration-[1200ms] ease-out delay-300
      ${isBooted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"}
    `}
        >
          <span className="bg-gradient-to-br from-slate-950 to-slate-800 bg-clip-text text-transparent dark:from-[#C8F135] dark:to-lime-400 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            Sharp
          </span>
          <span className="bg-gradient-to-br from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-[#C8F135] dark:to-lime-400 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
            man
          </span>
        </h1>

        {/* Dynamic Data Sub-tagline */}
        <p
          className={`
      mt-1.5 font-mono text-[9px] font-semibold dark:font-medium tracking-[0.38em] uppercase
      transition-all duration-[1600ms] ease-out delay-700
      ${
        isBooted
          ? "text-slate-700 dark:text-[#C8F135]/80 opacity-100"
          : "text-cyan-600/60 dark:text-cyan-400/50 opacity-0"
      }
    `}
        >
          {SITE.tagline}
        </p>
      </div>
    </div>
  );
}

export default Logo;
