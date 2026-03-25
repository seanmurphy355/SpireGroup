"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import Button from "./Button";
import Tooltip from "./Tooltip";
import Select from "./Select";

const serviceOptions = [
  "Indexer & Pipeline Build",
  "Analytics System Design",
  "Architecture Review",
  "Advisory Support",
  "Other",
];

const timelineOptions = [
  "Within 2 weeks",
  "This quarter",
  "Planning ahead",
];

const labelStyles = "mb-2 block text-xs uppercase tracking-[0.15em] text-text-muted";
const inputStyles =
  "w-full border border-border bg-bg-secondary px-4 py-3 text-sm text-white placeholder-text-muted outline-none transition-colors focus:border-white/30";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatedSection delay={0.15}>
      {submitted ? (
        <div className="flex h-full min-h-[400px] items-center justify-center border border-border p-10">
          <div className="text-center">
            <h3 className="mb-2 font-display text-2xl font-semibold text-white">
              Project note sent.
            </h3>
            <p className="text-text-secondary">
              We&apos;ll review it and follow up if it looks like a fit.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelStyles}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your name"
                className={inputStyles}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelStyles}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your@company.com"
                className={inputStyles}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <span className={labelStyles}>Project Type</span>
              <Select
                name="service"
                options={serviceOptions}
                placeholder="Select project type"
                required
              />
            </div>
            <div>
              <span className={labelStyles}>Timeline</span>
              <Select
                name="timeline"
                options={timelineOptions}
                placeholder="Select timeline"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="telegram" className={labelStyles}>
              Telegram
              <Tooltip content="Preferred contact method in crypto" position="right">
                <span className="ml-2 cursor-help normal-case tracking-normal text-text-muted/60">
                  optional
                </span>
              </Tooltip>
            </label>
            <input
              type="text"
              id="telegram"
              name="telegram"
              placeholder="@handle"
              className={inputStyles}
            />
          </div>

          <div>
            <label htmlFor="message" className={labelStyles}>
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="What are you building, where is the current data stack breaking, and what would make this engagement successful?"
              className={`${inputStyles} resize-none`}
            />
          </div>

          <Button type="submit" variant="accent">
            Send Project Note
          </Button>
        </form>
      )}
    </AnimatedSection>
  );
}
