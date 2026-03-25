"use client";

import { motion } from "framer-motion";
import Button from "./Button";

const proofPoints = [
  "Data pipeline architecture",
  "On-chain analytics",
  "Client work + public goods for the crypto ecosystem",
];

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-6 pt-20">
      <div className="noise-overlay z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-text-muted"
        >
          Crypto data consulting and public goods
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 max-w-5xl text-center font-display text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Spire Group builds crypto data infrastructure and public goods for
          the ecosystem.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-4 max-w-3xl text-center text-lg leading-relaxed text-text-secondary"
        >
          Spire Group helps teams build indexers, analytics systems, and
          research tooling while contributing open analysis and reusable
          infrastructure patterns back to crypto.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-10 text-center text-xs uppercase tracking-[0.18em] text-text-muted"
        >
          Founder-led today. Built to grow deliberately over time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/services" variant="accent">
            View Services
          </Button>
          <Button href="/writing" variant="outlined">
            Explore Writing
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-3 border border-white/10 bg-black/25 px-6 py-4 backdrop-blur-sm"
        >
          {proofPoints.map((point, i) => (
            <span key={point} className="flex items-center gap-3">
              {i > 0 && (
                <span className="h-1 w-1 rounded-full bg-text-muted/50" />
              )}
              <span className="text-center text-xs tracking-wide text-text-muted">
                {point}
              </span>
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="h-8 w-px bg-gradient-to-b from-text-muted/40 to-transparent" />
      </motion.div>
    </section>
  );
}
