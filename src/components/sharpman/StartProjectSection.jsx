import { ArrowUpRight } from "lucide-react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ScrollReveal from "../UI/ScrollReveal";
import SectionHeader from "../UI/SectionHeader";
import GlowBlob from "../UI/GlowBlob";
import FormField from "../UI/FormField";
import SectionComment from "../UI/SectionComment";
import { useNetlifyForm } from "../../hooks/useNetlifyForm";

const projectTypes = [
  "Website / Landing Page",
  "Web Application",
  "UI/UX Design",
  "E-Commerce / Online Store",
  "Custom Digital Solution",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000 – $15,000",
  "$15,000+",
];

const timelines = [
  "ASAP",
  "1 – 2 Weeks",
  "1 Month",
  "2 – 3 Months",
  "Flexible / Not Sure",
];

export default function StartProjectSection() {
  const { submitted, loading, error, handleSubmit, reset } = useNetlifyForm("start-project");

  return (
    <section
      id="start-project"
      className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 md:py-32 bg-background"
      aria-labelledby="start-project-heading"
    >
      <GlowBlob size="lg" className="top-1/4 left-0" />
      <GlowBlob size="md" className="bottom-0 right-1/4" blur="110px" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <SectionHeader
            eyebrow="START A PROJECT"
            title={`LET'S BUILD<br/>SOMETHING <span class="text-primary" style="textShadow: 0 0 35px rgba(202,239,69,0.45)">GREAT</span>`}
            sub="Tell me about your project and I'll get back to you within 24 hours with next steps."
          />
        </div>

        <ScrollReveal animation="fadeUp" delay={0.15}>
          <Card
            variant="elevated"
            className="!rounded-3xl !p-8 md:!p-10 !bg-card shadow-lime-inset"
          >
            <div aria-live="polite">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="font-display text-4xl text-primary mb-3">THANK YOU!</div>
                  <p className="font-mono text-sm text-muted-foreground max-w-sm mx-auto">
                    Your project request has been received. I&apos;ll review it and get back to you within 24 hours with next steps.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-6 font-mono text-xs uppercase tracking-[2px] text-primary hover:underline"
                  >
                    Submit another project
                  </button>
                </div>
              ) : (
                <form
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  name="start-project"
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="start-project" />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <SectionComment>// PROJECT DETAILS</SectionComment>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField label="YOUR NAME" name="name" placeholder="Full Name" required />
                    <FormField label="YOUR EMAIL" type="email" name="email" placeholder="Email Address" required />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      label="PROJECT TYPE"
                      as="select"
                      name="project-type"
                      placeholder="Select a service"
                      options={projectTypes}
                      required
                      defaultValue=""
                    />
                    <FormField
                      label="ESTIMATED BUDGET"
                      as="select"
                      name="budget"
                      placeholder="Select budget range"
                      options={budgetRanges}
                      defaultValue=""
                    />
                  </div>

                  <div>
                    <fieldset>
                      <legend className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                        TIMELINE
                      </legend>
                      <div className="flex flex-wrap gap-2" role="radiogroup">
                        {timelines.map((t) => (
                          <label
                            key={t}
                            className="relative flex items-center cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={t}
                              className="peer sr-only"
                            />
                            <span className="font-mono text-[11px] uppercase tracking-[1.5px] px-4 py-2.5 rounded-xl border border-border bg-secondary text-muted-foreground peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary hover:border-primary/40 transition-all duration-200">
                              {t}
                            </span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <FormField
                    label="TELL ME ABOUT YOUR PROJECT"
                    as="textarea"
                    name="message"
                    placeholder="What are you trying to build? What problem does it solve? Any specific features or ideas?"
                    rows={5}
                    required
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    className="w-full !justify-center gap-3 font-mono font-semibold text-sm uppercase tracking-[3px] !py-4 !rounded-xl mt-1 shadow-lime-soft"
                  >
                    {loading ? "SENDING..." : "START MY PROJECT"}
                    <ArrowUpRight size={14} color="#0A0A0A" aria-hidden="true" />
                  </Button>

                  {error && (
                    <p className="font-mono text-[10px] text-center text-destructive mt-1">{error}</p>
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
