import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
      id="start-project"
      className="relative overflow-hidden px-6 md:px-10 lg:px-20 py-24 md:py-32 bg-background"
    >
      <div className="absolute top-1/4 left-0 w-100 h-100 rounded-full blur-[130px] pointer-events-none bg-primary/4" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-[110px] pointer-events-none bg-primary/3" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="font-mono text-[10px] uppercase tracking-[3px] text-primary">
              START A PROJECT
            </span>
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          </div>

          <h2
            className="font-display uppercase leading-none mb-5 text-foreground"
            style={{ fontSize: "clamp(2.4rem, 5.5vw, 72px)" }}
          >
            <span className="block">LET'S BUILD</span>
            <span className="block">
              SOMETHING{" "}
              <span
                className="text-primary"
                style={{ textShadow: "0 0 35px rgba(202,239,69,0.45)" }}
              >
                GREAT
              </span>
            </span>
          </h2>

          <p className="font-mono text-sm leading-relaxed max-w-md mx-auto text-muted-foreground">
            Tell me about your project and I'll get back to you within{" "}
            <span className="text-primary">24 hours</span> with next steps.
          </p>
        </div>

        {/* Form Card */}
        <div
          className="rounded-3xl p-8 md:p-10 bg-card border border-border"
          style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px var(--lime-subtle) inset" }}
        >
          {submitted ? (
            <div className="text-center py-16">
              <div className="font-display text-4xl text-primary mb-3">THANK YOU!</div>
              <p className="font-mono text-sm text-muted-foreground max-w-sm mx-auto">
                Your project request has been received. I'll review it and get back to you within 24 hours with next steps.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
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
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="font-mono text-[10px] uppercase tracking-[3px] text-primary mb-1">
              // PROJECT DETAILS
            </div>

            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
                />
              </div>
            </div>

            {/* Project Type + Budget row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                  PROJECT TYPE
                </label>
                <select
                  name="project-type"
                  required
                  className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground appearance-none focus:border-primary/50 transition-all duration-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                  ESTIMATED BUDGET
                </label>
                <select
                  name="budget"
                  className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none bg-secondary border border-border text-foreground appearance-none focus:border-primary/50 transition-all duration-200"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select budget range
                  </option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                TIMELINE
              </label>
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Project Description */}
            <div>
              <label className="font-mono text-[10px] uppercase tracking-[3px] block mb-2 text-muted-foreground">
                TELL ME ABOUT YOUR PROJECT
              </label>
              <textarea
                name="message"
                placeholder="What are you trying to build? What problem does it solve? Any specific features or ideas?"
                rows={5}
                required
                className="w-full rounded-xl px-4 py-3 font-mono text-sm outline-none resize-none bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-primary/50 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 font-mono font-semibold text-sm uppercase tracking-[3px] text-primary-foreground py-4 rounded-xl mt-1 bg-primary hover:brightness-105 active:scale-[0.98] transition-all duration-200"
                style={{ boxShadow: "0 0 30px var(--lime-soft)" }}
            >
              START MY PROJECT
              <ArrowUpRight size={14} color="#0A0A0A" />
            </button>

            <p className="font-mono text-[10px] text-center text-muted-foreground mt-1">
              No spam. I'll respond within 24 hours with a plan.
            </p>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
