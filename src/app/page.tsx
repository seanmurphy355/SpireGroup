import type { Metadata } from "next";
import VideoScrollHero from "@/components/VideoScrollHero";
import Button from "@/components/Button";
import Card from "@/components/Card";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Indexer & Pipeline Architecture",
    description:
      "Design and implementation for on-chain and off-chain data flows that your team can own after handoff.",
  },
  {
    title: "Analytics & Research Systems",
    description:
      "Metrics layers, dashboards, and internal research tooling tailored to investment, protocol, or data teams.",
  },
  {
    title: "Technical Advisory",
    description:
      "Scoped architecture reviews, build plans, and senior technical input for teams making infrastructure decisions.",
  },
  {
    title: "Ownership Transfer",
    description:
      "Documentation, implementation support, and clear handoff so your team can run the stack without a permanent dependency.",
  },
];

const publicGoods = [
  {
    title: "Research",
    description:
      "Analysis, technical writing, and ecosystem framing intended to turn operational lessons into shared understanding.",
    href: "/writing",
    cta: "Explore Writing",
  },
  {
    title: "Open Source",
    description:
      "Reusable tooling, reference patterns, and practical infrastructure ideas that can lower duplicated effort across teams.",
    href: "/open-source",
    cta: "Explore Open Source",
  },
];

const steps = [
  {
    num: "01",
    title: "Assess",
    description:
      "We review the current stack, identify where the bottlenecks or blind spots are, and define a path that fits your team.",
  },
  {
    num: "02",
    title: "Build",
    description:
      "Spire Group scopes and ships the highest-leverage parts of the system, from indexers to analytics workflows.",
  },
  {
    num: "03",
    title: "Transfer",
    description:
      "You leave with a system your team understands, documentation that is usable, and a cleaner long-term operating model.",
  },
];

export const metadata: Metadata = {
  title: "Spire Group | Crypto Data Infrastructure & Public Goods",
  description:
    "Spire Group is a dual-mission crypto data firm led by Sean Murphy, combining client services with research and open source public goods.",
};

export default function Home() {
  return (
    <>
      <VideoScrollHero />

      <section className="section-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-text-muted">
              Client Work
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Infrastructure and analytics for teams that need to own the stack.
            </h2>
            <p className="mb-16 max-w-3xl text-base leading-relaxed text-text-secondary">
              Spire Group works with protocols, funds, and data teams that need
              stronger infrastructure without committing to a bloated vendor
              relationship. The focus is practical: build the right system,
              ship it cleanly, and leave you in control.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Card className="h-full p-7">
                  <h3 className="mb-3 font-display text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-text-muted">
              Public Goods
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Research and open source are part of the product.
            </h2>
            <p className="mb-16 max-w-3xl text-base leading-relaxed text-text-secondary">
              Spire Group is not only here to deliver client work. The firm is
              also meant to contribute analysis, language, and reusable tooling
              back to the crypto data ecosystem as that work matures.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {publicGoods.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <Card href={item.href} className="h-full p-7">
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-block text-xs text-text-muted">
                    {item.cta} &rarr;
                  </span>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-text-muted">
              Engagement Model
            </span>
            <h2 className="mb-16 font-display text-3xl font-bold md:text-4xl">
              How We Work
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="border-l-2 border-border pl-6">
                  <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-text-muted">
                    Step {step.num}
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

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Start a project with Spire Group
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary">
              You&apos;ll speak directly with Sean to scope the work, define the
              outcome, and decide whether the engagement is a fit.
            </p>
            <Button href="/contact" variant="accent">
              Start a Project
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
