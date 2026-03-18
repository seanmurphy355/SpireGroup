import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Card from "@/components/Card";
import TooltipLink from "@/components/TooltipLink";

export const metadata: Metadata = {
  title: "About | Spire Group",
  description:
    "Spire Group is a dual-mission crypto data firm led by Sean Murphy, combining client work with research and open source public goods.",
};

const principles = [
  "Founder-led delivery and direct accountability",
  "Careful growth rather than inflated headcount signals",
  "Specialists added only when the work truly calls for it",
];

const pillars = [
  {
    title: "Mission",
    description:
      "Solve hard crypto data problems for teams while turning durable lessons into public goods for the ecosystem.",
  },
  {
    title: "Public Goods",
    description:
      "Research, analysis, and open source are treated as core outputs of the firm, not as side projects or afterthoughts.",
  },
  {
    title: "Operating Model",
    description:
      "Founder-led delivery today, with the brand and process designed to support carefully selected collaborators over time.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="About" className="mb-6" />
          <h1 className="mb-6 max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            A dual-mission firm for crypto data.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-text-secondary">
            Spire Group exists to help crypto teams build and own the systems
            behind their data while also contributing research and open source
            public goods back to the ecosystem. The firm is founder-led today
            and designed to grow deliberately as the right people and projects
            come together.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <AnimatedSection>
            <SectionLabel label="Why Spire Exists" className="mb-6" />
            <h2 className="mb-4 font-display text-2xl font-semibold text-white">
              Solve hard problems. Share durable lessons.
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Crypto teams often outgrow their initial data stack before they
                are ready to build a full internal platform group. Spire Group
                sits in that gap, helping clients design and ship the right
                infrastructure without adding unnecessary process or lock-in.
              </p>
              <p>
                Just as importantly, the firm is meant to push useful ideas
                outward. Research, technical writing, and open tooling are part
                of how Spire intends to create value beyond any single client
                engagement.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <SectionLabel label="Founder" className="mb-6" />
            <h2 className="mb-5 font-display text-2xl font-semibold text-white">
              Sean Murphy
            </h2>
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-text-secondary">
                VP of Engineering at The Tie
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-text-secondary">
                Graduate Studies in ML, UT Austin
              </span>
              <span className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-text-secondary">
                Also known as ZeroSipher
              </span>
            </div>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Sean leads Spire Group with an operator&apos;s lens shaped by
                building crypto data systems at scale. His work spans analytics
                infrastructure, research workflows, and applied machine
                learning.
              </p>
              <p>
                Before Spire, he worked with smaller data companies and select
                institutional consulting engagements, including work with
                Alvarez &amp; Marsal.
              </p>
            </div>
            <div className="mt-5 flex gap-4">
              <TooltipLink
                href="https://www.linkedin.com/in/seanmurphyor/"
                tooltip="Connect on LinkedIn"
                external
                className="text-xs text-text-muted transition-colors hover:text-white"
              >
                LinkedIn
              </TooltipLink>
              <TooltipLink
                href="https://github.com/spire-group"
                tooltip="View repositories"
                external
                className="text-xs text-text-muted transition-colors hover:text-white"
              >
                GitHub
              </TooltipLink>
              <TooltipLink
                href="https://x.com/spiregroup"
                tooltip="Follow on X"
                external
                className="text-xs text-text-muted transition-colors hover:text-white"
              >
                X
              </TooltipLink>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <AnimatedSection>
            <SectionLabel label="Growth" className="mb-6" />
            <h2 className="mb-4 font-display text-2xl font-semibold text-white">
              How Spire Group expands
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The goal is to grow into a durable firm, not to inflate the
              appearance of scale before it exists. Future collaborators will
              be added when there is real work, real fit, and clear value in
              making the relationship public.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <SectionLabel label="Principles" className="mb-6" />
            <div className="space-y-4">
              {principles.map((item) => (
                <div key={item} className="border-l-2 border-border pl-5">
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8">
        <AnimatedSection>
          <SectionLabel label="What Spire Is Building" className="mb-6" />
          <h2 className="mb-12 font-display text-2xl font-semibold text-white">
            A firm that serves teams and the ecosystem.
          </h2>
          <p className="mb-12 max-w-3xl text-base leading-relaxed text-text-secondary">
            Spire Group is intentionally presented as a firm because the goal is
            to build a durable practice, not a one-person brand that stalls at
            capacity. The same structure that supports client delivery is also
            meant to support long-term public-goods work as the body of real
            material grows.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.1}>
              <Card className="h-full p-7">
                <span className="mb-3 block font-mono text-xs text-text-muted">
                  0{i + 1}
                </span>
                <h3 className="mb-3 font-display text-xl font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {pillar.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <AnimatedSection>
          <div className="flex flex-col items-start gap-6 border border-border bg-bg-secondary p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 font-display text-2xl font-semibold text-white">
                Want to see if Spire Group is the right fit?
              </h2>
              <p className="text-text-secondary">
                Start with a direct conversation with Sean about the problem,
                scope, and where your needs intersect with the firm&apos;s
                strengths.
              </p>
            </div>
            <Button href="/contact">Start a Project</Button>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
