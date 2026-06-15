"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/texas" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bone/95 backdrop-blur-sm border-b border-stone/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-charcoal/80 hover:text-slate transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/subcontractors"
              className="text-sm font-medium text-stone hover:text-slate transition-colors"
            >
              For Subcontractors
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-clay px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay/90 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-stone/10 bg-bone">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-base font-medium text-charcoal/80 hover:text-slate"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/subcontractors"
              className="block text-base font-medium text-stone hover:text-slate"
              onClick={() => setMobileOpen(false)}
            >
              For Subcontractors
            </Link>
            <Link
              href="/contact"
              className="block w-full text-center rounded-md bg-clay px-5 py-3 text-base font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
