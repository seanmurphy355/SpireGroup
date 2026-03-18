import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Open Source | Spire Group",
  description:
    "Open source plans and principles from Spire Group, part of the firm's public-goods mission in crypto data.",
};

const principles = [
  {
    title: "Real problems first",
    description:
      "Open source should come from repeated infrastructure pain, not from the need to look active online.",
  },
  {
    title: "Reusable by design",
    description:
      "The goal is to release tools and patterns that compress duplicated work across crypto data teams.",
  },
  {
    title: "Small, sharp, useful",
    description:
      "Public releases should be specific enough to help immediately and focused enough to maintain responsibly.",
  },
];

const focusAreas = [
  "Internal tooling that proves itself before it is published",
  "Reusable infrastructure patterns from real client work",
  "Open components that reduce vendor dependency for data teams",
];

export default function OpenSourcePage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Open Source" className="mb-6" />
          <h1 className="mb-4 max-w-4xl font-display text-4xl font-bold text-white md:text-6xl">
            Open tooling for crypto data teams.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
            Open source is part of Spire Group&apos;s public-goods mission. The
            goal is to release tools, patterns, and reference ideas that reduce
            repeated infrastructure effort across the ecosystem.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {principles.map((principle, i) => (
            <AnimatedSection key={principle.title} delay={i * 0.08}>
              <Card className="h-full p-7">
                <h2 className="mb-3 font-display text-xl font-semibold text-white">
                  {principle.title}
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {principle.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="section-alt py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <SectionLabel label="Focus Areas" className="mb-8" />
          </AnimatedSection>

          <div className="space-y-6">
            {focusAreas.map((item, i) => (
              <AnimatedSection key={item} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <h2 className="font-display text-xl font-semibold text-white">
                    {item}
                  </h2>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <AnimatedSection>
          <div className="border border-border bg-bg-secondary p-8">
            <h2 className="mb-3 font-display text-2xl font-semibold text-white">
              Solving a problem that should not stay private?
            </h2>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
              The best open source work usually starts with a painful real-world
              issue. If your team is hitting one, there may be room for both a
              client solution and a future public good.
            </p>
            <Button href="/contact">Start a Conversation</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
