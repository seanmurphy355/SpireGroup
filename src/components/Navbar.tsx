"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/open-source", label: "Open Source" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Logo size={32} />
          <span className="font-display text-lg font-bold tracking-wide text-white">
            Spire Group
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-white"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="rounded-[3px] bg-accent/90 px-5 py-2 text-xs uppercase tracking-wider text-white transition-all duration-300 hover:rounded-[10px] hover:bg-accent"
          >
            Contact
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-sm text-text-secondary transition-colors hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-bg-primary md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block font-display text-2xl font-bold tracking-wide transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-white"
                        : "text-text-secondary hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block font-display text-2xl font-bold tracking-wide text-accent transition-colors duration-200 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
