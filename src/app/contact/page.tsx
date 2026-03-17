import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Spire Group",
  description:
    "Get in touch with Spire Group about crypto data consulting or research collaboration.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AnimatedSection immediate>
          <SectionLabel label="Contact" className="mb-6" />
          <h1 className="mb-4 font-display text-4xl font-bold text-white md:text-6xl">
            Get in touch.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-secondary">
            Whether you need help with crypto data infrastructure or want to
            collaborate on research, we&apos;d like to hear from you.
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
                <SectionLabel label="Social" className="mb-3" />
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary transition-colors hover:text-white"
                  >
                    X / Twitter
                  </a>
                </div>
              </div>

              <div>
                <SectionLabel label="Location" className="mb-3" />
                <p className="text-text-secondary">
                  Remote-first. Working across time zones.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
