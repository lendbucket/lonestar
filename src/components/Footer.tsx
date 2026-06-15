import Link from "next/link";
import { Logo } from "./Logo";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

const serviceLinks = [
  { label: "Roofing", href: "/services/roofing" },
  { label: "Foundation Repair", href: "/services/foundation-repair" },
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Electrical", href: "/services/electrical" },
  { label: "HVAC", href: "/services/hvac" },
  { label: "Concrete", href: "/services/concrete-flatwork" },
  { label: "All Services", href: "/services" },
];

const areaLinks = [
  { label: "Houston", href: "/texas/houston" },
  { label: "Dallas", href: "/texas/dallas" },
  { label: "San Antonio", href: "/texas/san-antonio" },
  { label: "Austin", href: "/texas/austin" },
  { label: "Fort Worth", href: "/texas/fort-worth" },
  { label: "El Paso", href: "/texas/el-paso" },
  { label: "All Areas", href: "/texas" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "The Lone Star Standard", href: "/method" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "For Subcontractors", href: "/subcontractors" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate text-bone/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-bone/60 leading-relaxed max-w-xs">
              One call handles every trade across Texas. Commercial and
              residential contracting delivered through a vetted network of
              professionals.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-block text-sm text-bone/60 hover:text-bone transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-bone tracking-wide uppercase font-sans">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone/60 hover:text-bone transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-semibold text-bone tracking-wide uppercase font-sans">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone/60 hover:text-bone transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-bone tracking-wide uppercase font-sans">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone/60 hover:text-bone transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-bone/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-bone/40">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-bone/40 hover:text-bone/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
