"use client";

import { useState } from "react";
import Link from "next/link";

const PROGRAM_LINKS = [
  { href: "/our-programs/sales-route-management", label: "Sales & Route Management" },
  { href: "/our-programs/leadership-management", label: "Leadership & Management" },
  { href: "/our-programs/personal-productivity", label: "Personal Productivity" },
  { href: "/our-programs/product-knowledge", label: "Product Knowledge" },
];

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-programs", label: "Our Programs", children: PROGRAM_LINKS },
  { href: "/working-with-us", label: "Working With Us" },
  { href: "/photo-gallery", label: "Photo Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/contact-us", label: "Contact Us" },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.23 22 17.08 22 12.06z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.01l-2.2 2.21z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top strip */}
      <div className="bg-[var(--color-brand-light)] text-[#0b3a63]">
        <div className="mx-auto flex w-[90%] max-w-[1080px] flex-col items-center justify-between gap-2 py-2 text-sm sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <a href="mailto:Lbrown@lbrownlearning.com" className="text-[#0b3a63] hover:text-white">
              Lbrown@lbrownlearning.com
            </a>
            <a href="tel:3174375475" className="text-[#0b3a63] hover:text-white">
              (317) 437-5475
            </a>
          </div>
          <ul className="flex items-center gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/lloyd-brown58/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#0b5ea1] text-white hover:bg-[#073c68]"
              >
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61575722664606"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#293b52] text-white hover:bg-[#1a2636]"
              >
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/lloyd-brown-learning-development-llc/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-sm bg-[#0b5ea1] text-white hover:bg-[#073c68]"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main nav */}
      <div className="sticky top-0 z-50 bg-[var(--color-brand)] shadow-md">
        <div className="mx-auto flex w-[90%] max-w-[1080px] items-center justify-between py-3">
          <Link href="/" className="shrink-0">
            <img
              src="/assets/logo-b_lloyd-brown-480x135.png"
              alt="Lloyd Brown Learning & Development"
              width={200}
              height={56}
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wide text-white">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <li
                    key={link.href}
                    className="group relative"
                    onMouseEnter={() => setProgramsOpen(true)}
                    onMouseLeave={() => setProgramsOpen(false)}
                  >
                    <Link href={link.href} className="flex items-center gap-1 text-white hover:text-[var(--color-brand-light)]">
                      {link.label}
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                        <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.24 4.38a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                      </svg>
                    </Link>
                    <ul
                      hidden={!programsOpen}
                      className="absolute left-0 top-full min-w-[240px] bg-white py-2 text-[#333] shadow-lg"
                    >
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-xs font-semibold normal-case tracking-normal text-[#333] hover:bg-[var(--color-surface)] hover:text-[var(--color-brand)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[var(--color-brand-light)]">
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div hidden={!mobileOpen} className="lg:hidden">
          <nav className="border-t border-white/20 bg-[var(--color-brand-dark)] px-6 py-4">
            <ul className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-wide text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="border-b border-white/10 py-2">
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="block text-white">
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="mt-2 flex flex-col gap-1 pl-4 normal-case tracking-normal">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 text-xs font-semibold text-[var(--color-brand-light)]"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Floating call now button */}
      <a
        href="tel:3174375475"
        aria-label="Call Now"
        className="call-now-pulse fixed bottom-5 left-5 z-50 flex items-center gap-2 rounded-full bg-[var(--color-brand)] py-2 pl-3 pr-4 text-white shadow-lg hover:bg-[var(--color-brand-dark)]"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
          <PhoneIcon />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">Call Now</span>
      </a>
    </header>
  );
}
