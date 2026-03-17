"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Button from "./Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection delay={0.15}>
      {submitted ? (
        <div className="flex h-full min-h-[400px] items-center justify-center border border-border bg-bg-secondary p-10">
          <div className="text-center">
            <h3 className="mb-2 font-display text-2xl font-semibold text-white">
              Message sent.
            </h3>
            <p className="text-text-secondary">
              We&apos;ll get back to you soon.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-text-secondary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border border-border bg-bg-secondary px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-white/30"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-border bg-bg-secondary px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-white/30"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-text-secondary"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full border border-border bg-bg-secondary px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-white/30"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs uppercase tracking-[0.15em] text-text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="w-full resize-none border border-border bg-bg-secondary px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-white/30"
            />
          </div>

          <Button type="submit">Send Message</Button>
        </form>
      )}
    </AnimatedSection>
  );
}
