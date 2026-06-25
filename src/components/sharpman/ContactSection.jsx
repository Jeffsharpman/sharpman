// ContactSection.jsx
const highlights = [
  { value: "REMOTE",  label: "FRIENDLY"  },
  { value: "LAGOS",   label: "NIGERIA"   },
  { value: "OPEN",    label: "TO WORK"   },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 md:py-32 bg-background"
    >
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] rounded-full blur-[130px] pointer-events-none bg-primary/4" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none bg-primary/3" />

      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start max-w-6xl mx-auto relative z-10">

        {/* LEFT */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              GET IN TOUCH
            </span>
          </div>

          <h2
            className="font-display uppercase leading-none mb-6 text-foreground"
            style={{ fontSize: "clamp(2.8rem, 6vw, 80px)" }}
          >
            <span className="block">HAVE A PROJECT</span>
            <span className="block">
              OR A{" "}
              <span
                className="text-primary"
                style={{ textShadow: "0 0 35px rgba(202,239,69,0.45)" }}
              >
                PROBLEM
              </span>
            </span>
            <span className="block">TO SOLVE?</span>
          </h2>

          <p className="font-mono text-sm leading-relaxed max-w-xs text-muted-foreground mb-8">
            Whether it's a website, a web app, or a digital challenge you're trying
            to figure out — let's talk. I'm available for{" "}
            <span className="text-primary">freelance and remote work</span>.
          </p>

          <div className="flex gap-8 mb-10">
            {highlights.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display text-primary text-3xl leading-none mb-1"
                  style={{ textShadow: "0 0 24px rgba(202,239,69,0.4)" }}
                >
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Contact links */}
          <div className="flex flex-col gap-3">
            
            <a  href="mailto:buildwithsharpman@gmail.com"
              className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-primary/10 transition-all duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CAEF45" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              buildwithsharpman@gmail.com
            </a>
            
           <a   href="https://wa.me/2349070281022"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-primary/10 transition-all duration-200">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CAEF45" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </span>
              +234 907 028 1022 · WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="flex-1 w-full">
          <div
            className="rounded-3xl p-8 md:p-10 bg-card border border-border"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(202,239,69,0.04) inset" }}
          >
            <form className="flex flex-col gap-6">
              <div className="font-mono text-[10px] uppercase tracking-[3px] text-primary mb-1">
                // START THE CONVERSATION
              </div>

              {[
                { label: "YOUR NAME",  type: "text",  placeholder: "Full Name"      },
                { label: "YOUR EMAIL", type: "email", placeholder: "Email Address"  },
              ].map(({ label, type, placeholder }) => (
                <div key={label}>
                  <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                  WHAT ARE YOU TRYING TO BUILD OR SOLVE?
                </label>
                <textarea
                  placeholder="Tell me about your project or challenge..."
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none resize-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 font-mono font-semibold text-sm uppercase tracking-[3px] text-primary-foreground py-4 rounded-xl mt-1 bg-primary hover:brightness-105 active:scale-[0.98] transition-all duration-200"
                style={{ boxShadow: "0 0 30px rgba(202,239,69,0.35)" }}
              >
                SEND MESSAGE
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M8 3l5 5-5 5" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}