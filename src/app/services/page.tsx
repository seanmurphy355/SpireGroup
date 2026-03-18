import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Services | Spire Group",
  description:
    "Client services from Spire Group: crypto data infrastructure, analytics systems, and technical advisory informed by ongoing research and public-goods work.",
};

const services = [
  {
    title: "Indexer & Pipeline Builds",
    description:
      "Design and implementation for on-chain and off-chain data flows, ingestion layers, and core infrastructure that can scale with your team.",
  },
  {
    title: "Analytics Systems",
    description:
      "Metrics models, internal dashboards, and research workflows that turn raw data into something your operators and analysts can actually use.",
  },
  {
    title: "Architecture Reviews",
    description:
      "Technical diligence, design reviews, and pragmatic build plans for teams deciding whether to refactor, replace, or expand a data stack.",
  },
  {
    title: "Ownership Transfer",
    description:
      "Documentation, implementation handoff, and team context transfer so the final system is not trapped inside a consulting relationship.",
  },
];

const clientTypes = [
  "Protocols building or rebuilding analytics infrastructure",
  "Funds that need cleaner internal data workflows and research systems",
  "Data teams evaluating whether vendor tooling is still enough",
];

const engagementTypes = [
  {
    title: "Scoping Sprint",
    description:
      "A short engagement to audit the current stack, define architecture options, and leave with a concrete build plan.",
  },
  {
    title: "Build Engagement",
    description:
      "A scoped implementation focused on the part of the system that will unlock the most leverage first.",
  },
  {
    title: "Advisory Support",
    description:
      "Ongoing technical guidance for teams that need senior eyes on architecture decisions without a full-time hire.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Services" className="mb-6" />
          <h1 className="mb-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            Infrastructure, analytics, and technical advisory for crypto data
            teams.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
            Spire Group helps teams build the parts of the data stack that are
            too important to leave vague: ingestion, indexing, analytics
            workflows, and the operating model around them.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <AnimatedSection>
          <div className="border border-border bg-bg-secondary p-8">
            <SectionLabel label="Why This Work Looks Different" className="mb-4" />
            <h2 className="mb-3 font-display text-2xl font-semibold text-white">
              Public-goods work sharpens the client work.
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-text-secondary">
              Spire Group is not just a delivery firm. The same curiosity that
              drives research and open tooling also improves client outcomes:
              it creates clearer language, better abstractions, and stronger
              instincts about which patterns are actually reusable.
            </p>
          </div>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <Card className="h-full p-7">
                <h2 className="mb-3 font-display text-xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {service.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-alt py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.95fr]">
          <AnimatedSection>
            <SectionLabel label="Best Fit" className="mb-6" />
            <h2 className="mb-6 font-display text-2xl font-semibold text-white">
              Who this is for
            </h2>
            <div className="space-y-4">
              {clientTypes.map((item) => (
                <div key={item} className="border-l-2 border-border pl-5">
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <SectionLabel label="Engagements" className="mb-6" />
            <h2 className="mb-6 font-display text-2xl font-semibold text-white">
              How work is typically structured
            </h2>
            <div className="space-y-6">
              {engagementTypes.map((item) => (
                <div key={item.title} className="border-t border-border pt-6">
                  <h3 className="mb-2 font-display text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <div className="flex flex-col items-start gap-6 border border-border bg-bg-secondary p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-white">
                Need help deciding where to start?
              </h2>
              <p className="max-w-2xl text-text-secondary">
                Start with the problem, not the pitch. Sean will help you decide
                whether this is best handled as a sprint, a build, or a simple
                advisory conversation.
              </p>
            </div>
            <Button href="/contact">Start a Project</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
