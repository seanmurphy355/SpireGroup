"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="noise-overlay z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-text-muted"
        >
          [Crypto Data Consulting]
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-4 text-center font-display text-5xl font-bold tracking-tight text-white md:text-7xl"
        >
          Spire Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-10 max-w-xl text-center text-lg leading-relaxed text-text-secondary"
        >
          Experimental research &amp; data infrastructure for the crypto
          ecosystem. We help organizations build pipelines, implement analytics,
          and own their data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button href="/about" variant="accent">Our Work</Button>
          <Button href="/contact" variant="outlined">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
            Scroll
          </span>
          <div className="h-6 w-px bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
