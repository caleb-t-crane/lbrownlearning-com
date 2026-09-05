import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-programs", label: "Our Programs" },
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

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white">
      <div className="mx-auto w-[90%] max-w-[1080px] py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Link href="/">
              <img
                src="/assets/logo-b_lloyd-brown-480x135.png"
                alt="Lloyd Brown Learning & Development"
                width={220}
                height={62}
                className="h-14 w-auto"
              />
            </Link>
          </div>

          <div>
            <nav>
              <ul className="flex flex-col gap-2 text-sm font-semibold uppercase tracking-wide">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-white hover:text-[var(--color-brand-light)]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-4 text-xs text-white/70">
              <Link href="/" className="text-white/70 hover:text-white">
                HOME
              </Link>{" "}
              |{" "}
              <Link href="/about" className="text-white/70 hover:text-white">
                {" "}
                ABOUT
              </Link>{" "}
              |{" "}
              <Link href="/our-programs" className="text-white/70 hover:text-white">
                {" "}
                SERVICES
              </Link>{" "}
              |{" "}
              <Link href="/contact-us" className="text-white/70 hover:text-white">
                {" "}
                CONTACT
              </Link>
            </p>
          </div>

          <div className="flex flex-col items-start gap-3">
            <a
              href="tel:317-437-5475"
              className="rounded bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-dark)]"
            >
              (317) 437-5475
            </a>
            <a
              href="mailto:Lbrown@lbrownlearning.com"
              className="rounded bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-dark)]"
            >
              Lbrown@lbrownlearning.com
            </a>
            <a
              href="https://www.linkedin.com/company/lloyd-brown-learning-development-llc/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-dark)]"
            >
              <LinkedInIcon />
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-[90%] max-w-[1080px] py-6 text-center text-xs text-white/70">
          <p>
            © 2026 Lloyd Brown Learning &amp; Development LLC| All Rights Reserved. Website Designed and Hosted by{" "}
            <a
              href="https://inspirewebdesign.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 underline hover:text-white"
            >
              Inspire Website Design
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
