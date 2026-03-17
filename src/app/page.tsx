import type { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionLabel from "@/components/SectionLabel";
import AnimatedSection from "@/components/AnimatedSection";
import TypewriterText from "@/components/TypewriterText";

const steps = [
  {
    num: "01",
    title: "Assess",
    description:
      "We audit your existing data stack, identify gaps, and map out the on-chain and off-chain sources that matter to your business.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "We design and implement pipelines, indexers, and analytics layers tailored to your protocol or organization.",
  },
  {
    num: "03",
    title: "Own",
    description:
      "You walk away with full ownership of your infrastructure, documentation, and the knowledge to maintain it independently.",
  },
];

export const metadata: Metadata = {
  title: "Spire Group | Crypto Data Consulting & Research",
};

export default function Home() {
  return (
    <>
      <HomeHero />

      <section className="section-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection immediate>
            <TypewriterText text="What We Do" className="mb-12" />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <Card href="/about">
                <SectionLabel label="About" className="mb-4" />
                <h3 className="mb-2 font-display text-xl font-semibold">
                  Data Consulting
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                  We specialize in helping organizations implement crypto data
                  solutions, build pipelines, and take ownership of their data
                  infrastructure.
                </p>
                <span className="mt-auto pt-4 inline-block font-mono text-xs text-text-muted">
                  Learn more &rarr;
                </span>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card href="/writing">
                <SectionLabel label="Writing" className="mb-4" />
                <h3 className="mb-2 font-display text-xl font-semibold">
                  Research &amp; Analysis
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                  Long-form writing on crypto data, protocol analysis, on-chain
                  metrics, and the evolving data landscape.
                </p>
                <span className="mt-auto pt-4 inline-block font-mono text-xs text-text-muted">
                  Read more &rarr;
                </span>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card href="/open-source">
                <SectionLabel label="Open Source" className="mb-4" />
                <h3 className="mb-2 font-display text-xl font-semibold">
                  Public Goods
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                  Open source tools and frameworks built for the crypto data
                  community. Building in public, advancing the frontier for
                  everyone.
                </p>
                <span className="mt-auto pt-4 inline-block font-mono text-xs text-text-muted">
                  Explore &rarr;
                </span>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <SectionLabel label="Process" className="mb-4" />
            <h2 className="mb-16 font-display text-3xl font-bold md:text-4xl">
              How We Work
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div>
                  <span className="mb-4 block font-mono text-3xl font-bold text-text-muted">
                    {step.num}
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
        </div>
      </section>

      <section className="section-alt py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <SectionLabel label="Connect" className="mb-4" />
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Ready to Own Your Data?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary">
              Whether you need a full data infrastructure build-out, on-chain
              analytics, or a custom research engagement &mdash; we&apos;re
              ready to help.
            </p>
            <Button href="/contact">Get in Touch</Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
