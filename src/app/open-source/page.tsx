import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Open Source | Spire Group",
  description:
    "Open source tools and frameworks for the crypto data community.",
};

const projects = [
  {
    name: "chain-indexer",
    description:
      "A high-performance, multi-chain blockchain indexer built in Rust. Supports EVM chains with pluggable storage backends.",
    tags: ["Rust", "Indexing", "EVM"],
    github: "https://github.com",
    stars: "1.2k",
  },
  {
    name: "data-pipe",
    description:
      "Modular data pipeline framework for transforming and routing on-chain data. Declarative configuration with type-safe transforms.",
    tags: ["TypeScript", "Pipelines", "ETL"],
    github: "https://github.com",
    stars: "840",
  },
  {
    name: "query-engine",
    description:
      "SQL query engine optimized for blockchain data. Columnar storage format with time-series indexing for fast analytical queries.",
    tags: ["Rust", "SQL", "Analytics"],
    github: "https://github.com",
    stars: "620",
  },
  {
    name: "abi-decoder",
    description:
      "Fast ABI decoding library with automatic signature detection. Decodes transaction data, logs, and traces with zero configuration.",
    tags: ["TypeScript", "ABI", "Decoding"],
    github: "https://github.com",
    stars: "430",
  },
  {
    name: "rpc-proxy",
    description:
      "Intelligent RPC proxy with load balancing, caching, and rate limit management. Reduces costs and improves reliability.",
    tags: ["Go", "RPC", "Infrastructure"],
    github: "https://github.com",
    stars: "310",
  },
  {
    name: "data-commons",
    description:
      "Curated, open datasets of processed blockchain data. Parquet format, updated daily, free for research and analysis.",
    tags: ["Data", "Parquet", "Open Data"],
    github: "https://github.com",
    stars: "280",
  },
];

export default function OpenSourcePage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Open Source" className="mb-6" />
          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-6xl">
            Building in public.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            Open source tools and frameworks for the crypto data community.
            Advancing the frontier for everyone.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.08}>
              <Card
                href={project.github}
                external
                className="flex h-full flex-col"
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="font-mono text-base font-semibold text-white">
                    {project.name}
                  </h3>
                  <span className="flex items-center gap-1 font-mono text-xs text-text-muted">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
                    </svg>
                    {project.stars}
                  </span>
                </div>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
