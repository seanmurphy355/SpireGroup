import Link from "next/link";
import Logo from "./Logo";

const navColumns = [
  {
    title: "Navigate",
    links: [
      { href: "/about", label: "About" },
      { href: "/team", label: "Team" },
      { href: "/writing", label: "Writing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/open-source", label: "Open Source" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Logo size={28} />
              <span className="font-display text-base font-bold tracking-wide text-white">
                Spire Group
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-text-muted">
              Crypto data consulting and experimental research. Helping
              organizations implement data solutions and own their data.
            </p>
          </div>

          {navColumns.map((column) => (
            <div key={column.title}>
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-text-secondary">
                [{column.title}]
              </span>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
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
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Spire Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-text-muted transition-colors hover:text-white"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
