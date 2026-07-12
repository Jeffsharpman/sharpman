// ContactSection.jsx
import { useState } from "react";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

const highlights = [
  { value: "REMOTE",  label: "FRIENDLY"  },
  { value: "LAGOS",   label: "NIGERIA"   },
  { value: "OPEN",    label: "TO WORK"   },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  }
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 md:py-32 bg-background"
    >
      <div className="absolute bottom-0 left-1/3 w-125 h-100 rounded-full blur-[130px] pointer-events-none bg-primary/4" />
      <div className="absolute top-0 right-0 w-75 h-75 rounded-full blur-[100px] pointer-events-none bg-primary/3" />

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
                style={{ textShadow: "0 0 35px var(--lime-glow)" }}
              >
                PROBLEM
              </span>
            </span>
            <span className="block">TO SOLVE?</span>
          </h2>

          <p className="font-mono text-sm leading-relaxed max-w-xs text-muted-foreground mb-8">
            Whether it's a website, a web app, or a digital challenge you're
            trying to figure out — let's talk. I'm available for{" "}
            <span className="text-primary">freelance and remote work</span>.
          </p>

          <div className="flex gap-8 mb-10">
            {highlights.map((s) => (
              <div key={s.label}>
                <div
                  className="font-display text-primary text-3xl leading-none mb-1"
                  style={{ textShadow: "0 0 24px var(--lime-glow)" }}
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
            <a
              href="mailto:buildwithsharpman@gmail.com"
              className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-primary/10 transition-all duration-200">
                <Mail size={13} color="#CAEF45" />
              </span>
              buildwithsharpman@gmail.com
            </a>
            <a
              href="https://wa.link/3fl6df"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-primary/10 transition-all duration-200">
                <MessageCircle size={13} color="#CAEF45" />
              </span>
              +234 907 028 1022 · WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="flex-1 w-full">
          <div
            className="rounded-3xl p-8 md:p-10 bg-card border border-border"
            style={{
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px var(--lime-subtle) inset",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="font-display text-3xl text-primary mb-3">THANK YOU!</div>
                <p className="font-mono text-sm text-muted-foreground">
                  Your message has been sent. I'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-mono text-xs uppercase tracking-[2px] text-primary hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              name="contact"
              className="flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="font-mono text-[10px] uppercase tracking-[3px] text-primary mb-1">
                // START THE CONVERSATION
              </div>

              {[
                {
                  label: "YOUR NAME",
                  type: "text",
                  name: "name",
                  placeholder: "Full Name",
                },
                {
                  label: "YOUR EMAIL",
                  type: "email",
                  name: "email",
                  placeholder: "Email Address",
                },
              ].map(({ label, type, name, placeholder }) => (
                <div key={label}>
                  <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required
                    className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                  WHAT ARE YOU TRYING TO BUILD OR SOLVE?
                </label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or challenge..."
                  rows={4}
                  required
                  className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none resize-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 font-mono font-semibold text-sm uppercase tracking-[3px] text-primary-foreground py-4 rounded-xl mt-1 bg-primary hover:brightness-105 active:scale-[0.98] transition-all duration-200"
                style={{ boxShadow: "0 0 30px var(--lime-soft)" }}
              >
                SEND MESSAGE
                <ArrowRight size={14} color="#0A0A0A" />
              </button>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
