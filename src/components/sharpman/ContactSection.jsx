import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { SITE } from "../../data/siteConfig";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ScrollReveal from "../UI/ScrollReveal";
import SectionHeader from "../UI/SectionHeader";
import GlowBlob from "../UI/GlowBlob";
import FormField from "../UI/FormField";
import SectionComment from "../UI/SectionComment";
import { useNetlifyForm } from "../../hooks/useNetlifyForm";

const highlights = [
  { value: "REMOTE", label: "FRIENDLY" },
  { value: "LAGOS", label: "NIGERIA" },
  { value: "OPEN", label: "TO WORK" },
];

export default function ContactSection() {
  const { submitted, loading, error, handleSubmit, reset } = useNetlifyForm("contact");

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 md:py-32 bg-background"
      aria-labelledby="contact-heading"
    >
      <GlowBlob size="lg" className="bottom-0 left-1/3 w-125 h-100" />
      <GlowBlob size="md" className="top-0 right-0 w-75 h-75" />

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
            className="!rounded-3xl !p-8 md:!p-10 !bg-card shadow-lime-inset"
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
                    onClick={reset}
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

                  <SectionComment>// START THE CONVERSATION</SectionComment>

                  <FormField label="YOUR NAME" name="name" placeholder="Full Name" required />
                  <FormField label="YOUR EMAIL" type="email" name="email" placeholder="Email Address" required />
                  <FormField
                    label="WHAT ARE YOU TRYING TO BUILD OR SOLVE?"
                    as="textarea"
                    name="message"
                    placeholder="Tell me about your project or challenge..."
                    rows={4}
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full !justify-center gap-3 font-mono font-semibold text-sm uppercase tracking-[3px] !py-4 !rounded-xl mt-1 shadow-lime-soft"
                  >
                    {loading ? "SENDING..." : "SEND MESSAGE"}
                    <ArrowRight size={14} color="#0A0A0A" aria-hidden="true" />
                  </Button>
                  {error && (
                    <p className="font-mono text-xs text-center text-destructive mt-2">{error}</p>
                  )}
                </form>
              )}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
