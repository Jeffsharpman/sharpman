import { useState } from "react";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "../../data/siteConfig";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ScrollReveal from "../UI/ScrollReveal";
import SectionHeader from "../UI/SectionHeader";

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
      <div
        className="absolute bottom-0 left-1/3 w-125 h-100 rounded-full blur-[130px] pointer-events-none bg-primary/4"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-75 h-75 rounded-full blur-[100px] pointer-events-none bg-primary/3"
        aria-hidden="true"
      />

      <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start max-w-6xl mx-auto relative z-10">
        <div className="flex-1">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title={`HAVE A PROJECT<br/>OR A <span class="text-primary" style="textShadow: 0 0 35px var(--lime-glow)">PROBLEM</span><br/>TO SOLVE?`}
            sub="Whether it's a website, a web app, or a digital challenge you're trying to figure out — let's talk. I'm available for freelance and remote work."
          />

          <ScrollReveal animation="fadeUp" delay={0.25}>
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
          </ScrollReveal>

          <ScrollReveal animation="fadeUp" delay={0.3}>
            <div className="flex flex-col gap-3">
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
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fadeUp" delay={0.15} className="flex-1 w-full">
          <Card
            variant="elevated"
            className="!rounded-3xl !p-8 md:!p-10 !bg-card"
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

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full !justify-center gap-3 font-mono font-semibold text-sm uppercase tracking-[3px] !py-4 !rounded-xl mt-1"
                    style={{ boxShadow: "0 0 30px var(--lime-soft)" }}
                  >
                    SEND MESSAGE
                    <ArrowRight size={14} color="#0A0A0A" aria-hidden="true" />
                  </Button>
                </form>
              )}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
