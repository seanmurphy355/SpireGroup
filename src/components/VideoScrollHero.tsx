"use client";

import { motion } from "framer-motion";
import Button from "./Button";

export default function VideoScrollHero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      <video
        src="/videos/hero-intro.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/30" />

      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-20 pb-8 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 max-w-5xl text-center font-display text-3xl font-bold tracking-tight text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.8),0_1px_6px_rgba(0,0,0,0.5)] sm:mb-8 sm:text-5xl md:text-7xl"
        >
          Spire Group builds crypto data infrastructure and public goods for
          the ecosystem.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button href="/services" variant="accent">
            View Services
          </Button>
          <Button href="/writing" variant="outlined">
            Explore Writing
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
