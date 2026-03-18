import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/open-source", label: "Open Source" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center gap-3">
              <Logo size={28} />
              <span className="font-display text-base font-bold tracking-wide text-white">
                Spire Group
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-text-muted">
              Crypto data consulting and public goods for the ecosystem.
            </p>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-text-secondary">
              Led by Sean Murphy today, with the firm designed to grow
              deliberately over time through client work, research, and open
              infrastructure.
            </p>
            <a
              href="mailto:hello@spiregroup.xyz"
              className="text-sm text-text-secondary transition-colors hover:text-white"
            >
              hello@spiregroup.xyz
            </a>
          </div>

          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-text-secondary">
              Explore
            </span>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Spire Group. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-[0.16em] text-text-muted">
              Sean Murphy / ZeroSipher
            </span>
            <span className="h-3 w-px bg-border" />
            <a
              href="https://www.linkedin.com/in/seanmurphyor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted transition-colors hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/spire-group"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://x.com/spiregroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted transition-colors hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
