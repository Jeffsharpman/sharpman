import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "../../data/siteConfig";

const highlights = [
  { value: "REMOTE", label: "FRIENDLY" },
  { value: "LAGOS", label: "NIGERIA" },
  { value: "OPEN", label: "TO WORK" },
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
      aria-labelledby="contact-heading"
    >
      {/* Decorative glow blobs */}
      <div
        className="absolute bottom-0 left-1/3 w-125 h-100 rounded-full blur-[130px] pointer-events-none bg-primary/4"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-75 h-75 rounded-full blur-[100px] pointer-events-none bg-primary/3"
        aria-hidden="true"
      />

      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start max-w-6xl mx-auto relative z-10">
        {/* LEFT */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span
              className="w-1.5 h-1.5 bg-primary rounded-full"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              GET IN TOUCH
            </span>
          </motion.div>

          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-sm leading-relaxed max-w-xs text-muted-foreground mb-8"
          >
            Whether it&apos;s a website, a web app, or a digital challenge
            you&apos;re trying to figure out — let&apos;s talk. I&apos;m available
            for{" "}
            <span className="text-primary">freelance and remote work</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex gap-8 mb-10"
          >
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
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-primary/10 transition-all duration-200">
                <Mail size={13} color="#CAEF45" aria-hidden="true" />
              </span>
              {SITE.email}
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <span className="w-8 h-8 rounded-xl flex items-center justify-center bg-secondary border border-border group-hover:bg-primary/10 transition-all duration-200">
                <MessageCircle size={13} color="#CAEF45" aria-hidden="true" />
              </span>
              {SITE.phoneDisplay} · WhatsApp
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex-1 w-full"
        >
          <div
            className="rounded-3xl p-8 md:p-10 bg-card border border-border"
            style={{
              boxShadow:
                "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px var(--lime-subtle) inset",
            }}
          >
            <div aria-live="polite">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="font-display text-3xl text-primary mb-3">
                    THANK YOU!
                  </div>
                  <p className="font-mono text-sm text-muted-foreground">
                    Your message has been sent. I&apos;ll get back to you within
                    24 hours.
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
                      Don&apos;t fill this out: <input name="bot-field" />
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
                      <label
                        htmlFor={`contact-${name}`}
                        className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground"
                      >
                        {label}
                      </label>
                      <input
                        id={`contact-${name}`}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        required
                        className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground"
                    >
                      WHAT ARE YOU TRYING TO BUILD OR SOLVE?
                    </label>
                    <textarea
                      id="contact-message"
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
                    <ArrowRight size={14} color="#0A0A0A" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
