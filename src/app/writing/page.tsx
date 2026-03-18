import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Writing | Spire Group",
  description:
    "Research and technical writing from Spire Group, part of the firm's public-goods mission in crypto data.",
};

const pillars = [
  {
    title: "Why publish",
    description:
      "Research is a way to turn repeated operational lessons into clearer shared understanding for the ecosystem.",
  },
  {
    title: "What it looks like",
    description:
      "Technical notes, analytical framing, system design thinking, and longer-form arguments about how crypto data work should be done.",
  },
  {
    title: "Why it matters",
    description:
      "Public writing helps make infrastructure decisions more legible, not just for clients, but for teams across the space.",
  },
];

const topics = [
  "Indexer architecture and ownership trade-offs",
  "Analytics workflows for protocols and funds",
  "Technical operating models for crypto data teams",
  "Machine learning applications around messy market data",
];

export default function WritingPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Writing" className="mb-6" />
          <h1 className="mb-4 max-w-4xl font-display text-4xl font-bold text-white md:text-6xl">
            Research as public infrastructure.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
            Writing is part of Spire Group&apos;s public-goods mission. The goal is
            to publish research and technical thinking that make crypto data
            work easier to reason about, not just easier to sell.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.08}>
              <Card className="h-full p-7">
                <h2 className="mb-3 font-display text-xl font-semibold text-white">
                  {pillar.title}
                </h2>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
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
            {topics.map((topic, i) => (
              <AnimatedSection key={topic} delay={i * 0.08}>
                <div className="border-t border-border pt-6">
                  <h2 className="font-display text-xl font-semibold text-white">
                    {topic}
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
              Need a sharper frame for a messy problem?
            </h2>
            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
              The same research instinct that drives public writing also shows
              up in client work. If your team needs help making sense of a hard
              infrastructure or analytics question, start there.
            </p>
            <Button href="/contact">Start a Conversation</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
