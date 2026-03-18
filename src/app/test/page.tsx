import type { Metadata } from "next";
import VideoScrollHero from "@/components/VideoScrollHero";
import AnimatedSection from "@/components/AnimatedSection";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Spire Group | Video Test",
};

export default function TestPage() {
  return (
    <>
      <VideoScrollHero />

      <section className="section-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-text-muted">
              Services
            </span>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Data Infrastructure for Crypto
            </h2>
            <p className="mb-16 max-w-3xl text-base leading-relaxed text-text-secondary">
              We partner with protocols, funds, and crypto-native teams to
              design and implement the data systems they need &mdash; from raw
              pipeline architecture to production analytics. Every engagement
              ends with full ownership transferred to you.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {["Pipeline Architecture", "On-Chain Analytics", "Indexer Development"].map(
              (title, i) => (
                <AnimatedSection key={title} delay={i * 0.1}>
                  <div className="border-t border-border pt-6">
                    <h3 className="mb-3 font-display text-lg font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      High-performance data solutions built to scale with your
                      protocol and designed for full ownership transfer.
                    </p>
                  </div>
                </AnimatedSection>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedSection>
            <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
              Let&apos;s Build Your Data Layer
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-text-secondary">
              Whether you need a full infrastructure build-out, analytics for
              your protocol, or a custom research engagement &mdash;
              we&apos;re ready to start.
            </p>
            <Button href="/contact" variant="accent">
              Start a Conversation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
