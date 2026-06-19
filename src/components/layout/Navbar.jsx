import LogoImg from "../../assets/logo.png";

const links = [
  { label: "Home",      href: "#" },
  { label: "Services",  href: "#services" },
  { label: "About",     href: "#about" },
  { label: "Portfolio", href: "#projects" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div className="flex items-center justify-between w-full max-w-4xl px-5 py-3 rounded-2xl bg-card/90 border border-border backdrop-blur-xl shadow-2xl">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          {/* <img src={LogoImg} alt="Sharpman Logo" className="w-7 h-7 object-contain flex-shrink-0" /> */}
          <span className="font-display tracking-[3px] text-[15px] leading-none text-primary">
            SHARPMAN
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((link) => (
            
           <a   key={link.label}
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
          <button className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          {/* CTA */}
          
           <a href="mailto:buildwithsharpman@gmail.com"
            className="font-mono font-semibold text-[11px] uppercase tracking-[2px] px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            LET'S TALK
          </a>

        </div>
      </div>
    </header>
  );
}