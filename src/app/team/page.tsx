import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Team | Spire Group",
  description:
    "The people behind Spire Group — engineers, researchers, and data specialists.",
};

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Consultant",
    bio: "Data engineer with a decade of experience in blockchain infrastructure and analytics pipelines.",
    links: { github: "#", twitter: "#" },
  },
  {
    name: "Jordan Lee",
    role: "Research Lead",
    bio: "Protocol researcher focused on on-chain data analysis, tokenomics modeling, and DeFi analytics.",
    links: { github: "#", twitter: "#" },
  },
  {
    name: "Sam Rivera",
    role: "Engineering",
    bio: "Full-stack engineer specializing in data pipeline architecture, indexers, and real-time analytics.",
    links: { github: "#" },
  },
  {
    name: "Morgan Blake",
    role: "Data Science",
    bio: "Quantitative analyst working at the intersection of machine learning and on-chain data.",
    links: { github: "#", twitter: "#" },
  },
];

export default function TeamPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Team" className="mb-6" />
          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-6xl">
            The people behind Spire Group.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            A small, focused team of engineers, researchers, and data
            specialists working at the frontier of crypto data infrastructure.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <Card>
                <div className="mb-4 flex h-16 w-16 items-center justify-center bg-bg-elevated font-display text-xl font-bold text-text-muted">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mb-1 font-display text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <span className="mb-3 block font-mono text-xs uppercase tracking-[0.1em] text-text-secondary">
                  {member.role}
                </span>
                <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                  {member.bio}
                </p>
                <div className="flex gap-4">
                  {member.links.github && (
                    <a
                      href={member.links.github}
                      className="font-mono text-xs text-text-muted transition-colors hover:text-white"
                    >
                      GitHub
                    </a>
                  )}
                  {member.links.twitter && (
                    <a
                      href={member.links.twitter}
                      className="font-mono text-xs text-text-muted transition-colors hover:text-white"
                    >
                      X
                    </a>
                  )}
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
