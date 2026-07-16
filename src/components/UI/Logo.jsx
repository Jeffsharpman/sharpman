import { SITE } from "../../data/siteConfig";

function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="
          flex h-16 w-16 items-center justify-center
          rounded-2xl
          border border-(--primary)/15
          bg-surface-card
          p-1
          shadow-[0_6px_24px_rgba(0,0,0,0.08)]
          transition-all duration-300
        "
      >
        <img
          src={SITE.logo}
          alt="Sharpman logo"
          className="h-[96%] w-[96%] object-contain"
          draggable={false}
        />
      </div>

      <div className="leading-none">
        <h1 className="font-display text-xl font-semibold tracking-[0.2em] text-gold-gradient">
          {SITE.name}
        </h1>

        <p className="mt-1 font-ui text-[11px] uppercase tracking-[0.35em] text-(--primary)/70">
          {SITE.tagline}
        </p>
      </div>
    </div>
  );
}

export default Logo;
