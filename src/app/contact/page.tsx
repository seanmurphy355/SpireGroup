import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Spire Group",
  description:
    "Start a project with Spire Group and speak directly with Sean Murphy.",
};

const expectations = [
  { label: "Response Time", value: "Usually within 24 hours" },
  { label: "Engagements", value: "Scoping sprints, builds, and advisory support" },
  { label: "First Conversation", value: "Directly with Sean Murphy" },
];

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Contact" className="mb-6" />
          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-6xl">
            Start a project with Spire Group.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
            If you&apos;re evaluating an indexer build, rethinking analytics
            infrastructure, or need senior technical help with a crypto data
            problem, start here. You&apos;ll speak directly with Sean to scope the
            work and decide whether it&apos;s a fit.
          </p>
        </AnimatedSection>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <AnimatedSection immediate delay={0.1}>
            <div className="space-y-10">
              <div>
                <SectionLabel label="Email" className="mb-3" />
                <a
                  href="mailto:hello@spiregroup.xyz"
                  className="text-lg text-white transition-colors hover:text-text-secondary"
                >
                  hello@spiregroup.xyz
                </a>
              </div>

              <div>
                <SectionLabel label="Best Fit" className="mb-3" />
                <p className="max-w-md text-text-secondary">
                  Teams that need senior help with crypto data architecture,
                  analytics systems, or a scoped build that ends with clear
                  ownership on their side.
                </p>
              </div>

              <div>
                <SectionLabel label="Location" className="mb-3" />
                <p className="text-text-secondary">
                  Remote-first. Working across time zones.
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <SectionLabel label="What to Expect" className="mb-5" />
                <div className="space-y-4">
                  {expectations.map((item) => (
                    <div key={item.label}>
                      <span className="block text-sm font-medium text-white">
                        {item.label}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
