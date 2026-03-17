import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Writing | Spire Group",
  description:
    "Research and analysis on crypto data infrastructure, protocol analysis, and the evolving data landscape.",
};

const articles = [
  {
    title: "The Case for Owning Your Crypto Data Infrastructure",
    date: "2026-03-10",
    excerpt:
      "Why relying on third-party data providers creates hidden risk, and how teams can take back control with self-hosted indexing and pipeline architecture.",
    tag: "Infrastructure",
  },
  {
    title: "On-Chain Analytics Beyond the Dashboard",
    date: "2026-02-22",
    excerpt:
      "Dashboards are a starting point, not a destination. How to build analytical workflows that surface signal from raw blockchain data.",
    tag: "Analytics",
  },
  {
    title: "Indexer Architectures: A Comparative Analysis",
    date: "2026-01-15",
    excerpt:
      "Comparing SubGraph, SubSquid, Ponder, and custom solutions. Trade-offs in latency, reliability, and maintenance burden.",
    tag: "Research",
  },
  {
    title: "Data Ownership as a Competitive Advantage",
    date: "2025-12-08",
    excerpt:
      "Organizations that control their data pipelines move faster, spend less, and build better products. Exploring the economics of self-sovereignty.",
    tag: "Strategy",
  },
  {
    title: "Building Real-Time Crypto Data Pipelines with Rust",
    date: "2025-11-20",
    excerpt:
      "A technical deep-dive into building high-throughput blockchain data pipelines using Rust, covering architecture decisions and performance benchmarks.",
    tag: "Engineering",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function WritingPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Writing" className="mb-6" />
          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-6xl">
            Research &amp; analysis.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            Long-form writing on crypto data infrastructure, protocol analysis,
            and the evolving data landscape.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <AnimatedSection>
          <SectionLabel label="Latest" className="mb-8" />
        </AnimatedSection>

        <div className="flex flex-col gap-2">
          {articles.map((article, i) => (
            <AnimatedSection key={article.title} delay={i * 0.08}>
              <Card className="group">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                        {article.tag}
                      </span>
                      <span className="font-mono text-[10px] text-text-muted">
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h3 className="mb-2 font-display text-lg font-semibold text-white">
                      {article.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-xs text-text-muted transition-colors group-hover:text-white sm:ml-6 sm:mt-6">
                    Read &rarr;
                  </span>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
