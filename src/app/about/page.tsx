import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About | Spire Group",
  description:
    "Spire Group is a crypto data consulting firm and experimental research collective.",
};

const steps = [
  {
    title: "Assess",
    description:
      "We start by understanding your current data landscape, identifying gaps, and mapping requirements to a clear architecture.",
  },
  {
    title: "Build",
    description:
      "We implement data pipelines, indexers, and analytics layers using battle-tested tools and custom solutions where needed.",
  },
  {
    title: "Transfer",
    description:
      "We ensure your team owns and understands the infrastructure. Documentation, training, and ongoing advisory support.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="About" className="mb-6" />
          <h1 className="mb-6 max-w-3xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            We help organizations own their crypto data.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
            Spire Group is a crypto data consulting firm and experimental
            research collective. We work with teams to architect, implement, and
            maintain data infrastructure that puts them in control.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <AnimatedSection>
            <SectionLabel label="Consulting" className="mb-6" />
            <h2 className="mb-4 font-display text-2xl font-semibold text-white">
              Data Solutions
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                We help clients navigate the complexity of crypto data. From raw
                blockchain indexing to structured analytics pipelines, we design
                and build systems that scale with your needs.
              </p>
              <p>
                Our approach emphasizes data ownership. We believe organizations
                should control their data infrastructure rather than depend on
                third-party APIs that can change without notice.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <SectionLabel label="Research" className="mb-6" />
            <h2 className="mb-4 font-display text-2xl font-semibold text-white">
              Experimental Group
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Beyond consulting, Spire Group is an experimental collective
                producing research, writing, and open source projects focused on
                the crypto data landscape.
              </p>
              <p>
                We publish long-form analysis, build public tools, and
                contribute to the broader ecosystem. Our work is driven by
                curiosity and the conviction that better data infrastructure
                benefits everyone.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <AnimatedSection>
          <SectionLabel label="Approach" className="mb-6" />
          <h2 className="mb-12 font-display text-2xl font-semibold text-white">
            How We Work
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedSection key={step.title} delay={i * 0.1}>
              <div className="border-t border-border pt-6">
                <span className="mb-3 block font-mono text-xs text-text-muted">
                  0{i + 1}
                </span>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <div className="flex flex-col items-start gap-6 border border-border bg-bg-secondary p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-white">
                Ready to take control of your data?
              </h2>
              <p className="text-text-secondary">
                Let&apos;s discuss how Spire Group can help.
              </p>
            </div>
            <Button href="/contact">Get in Touch</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
