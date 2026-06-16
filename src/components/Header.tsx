"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import { Logo } from "./Logo";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/constants";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import { cities } from "@/data/cities";

/* ------------------------------------------------------------------ */
/*  Shared helpers                                                     */
/* ------------------------------------------------------------------ */

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="15" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Navigation data (derived from the taxonomy)                        */
/* ------------------------------------------------------------------ */

const megaMenuCategories = serviceCategories.map((cat) => ({
  id: cat.id,
  heading: cat.name,
  href: `/services#${cat.id}`,
  services: getServicesByCategory(cat.id).map((s) => ({
    label: s.name,
    href: `/services/${s.id}`,
  })),
}));

const metroLinks = cities.map((c) => ({
  label: c.name,
  href: `/texas/${c.id}`,
}));

const plainLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  Desktop: Services mega-menu                                        */
/* ------------------------------------------------------------------ */

function ServicesMegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 top-full z-[100] border-t border-slate/10 bg-white shadow-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4">
          {megaMenuCategories.map((cat) => (
            <div key={cat.id}>
              <Link
                href={cat.href}
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-clay transition-colors hover:text-clay/80"
                onClick={onClose}
              >
                {cat.heading}
              </Link>
              <ul className="space-y-1">
                {cat.services.map((svc) => (
                  <li key={svc.href}>
                    <Link
                      href={svc.href}
                      className="block py-0.5 text-sm text-charcoal/70 transition-colors hover:text-slate"
                      onClick={onClose}
                    >
                      {svc.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-stone/10 pt-4">
          <Link
            href="/services"
            className="text-xs font-bold uppercase tracking-wider text-clay transition-colors hover:text-clay/80"
            onClick={onClose}
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Desktop: Service Areas mega-menu                                   */
/* ------------------------------------------------------------------ */

function ServiceAreasMegaMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="absolute left-0 right-0 top-full z-[100] border-t border-slate/10 bg-white shadow-xl"
    >
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {metroLinks.map((metro) => (
            <Link
              key={metro.href}
              href={metro.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-slate"
              onClick={onClose}
            >
              {metro.label}
            </Link>
          ))}
        </div>
        <div className="mt-6 border-t border-stone/10 pt-4">
          <Link
            href="/texas"
            className="text-xs font-bold uppercase tracking-wider text-clay transition-colors hover:text-clay/80"
            onClick={onClose}
          >
            View All Service Areas
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: accordion                                                  */
/* ------------------------------------------------------------------ */

function MobileAccordion({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-stone/10">
      <button
        type="button"
        className="flex w-full min-h-[48px] items-center justify-between py-3 text-left text-sm font-semibold text-charcoal"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-stone transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-3 pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile: full-screen menu (portal)                                  */
/* ------------------------------------------------------------------ */

function MobileMenuPortal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <button
        type="button"
        className={cn(
          "fixed inset-0 z-[100] bg-black/50 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-label="Close menu"
        onClick={onClose}
      />

      {/* Slide-in panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[110] flex w-full max-w-full flex-col bg-bone shadow-2xl lg:hidden",
          "transform transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        {/* Panel header */}
        <div className="flex shrink-0 items-center justify-between border-b border-stone/10 px-4 py-4 pt-[max(1rem,env(safe-area-inset-top))]">
          <Logo />
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-charcoal"
            aria-label="Close menu"
            onClick={onClose}
          >
            <XIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Panel body */}
        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4"
          aria-label="Mobile"
        >
          {/* CTAs */}
          <div className="flex flex-col gap-3 pt-4 pb-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-clay px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-clay/90"
              onClick={onClose}
            >
              Get a Quote
            </Link>
            <a
              href={SITE_PHONE_TEL}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md border border-slate/20 px-6 py-3 text-sm font-semibold text-slate transition-colors hover:bg-slate/5"
            >
              <PhoneIcon className="h-4 w-4" />
              {SITE_PHONE_DISPLAY}
            </a>
          </div>

          {/* Services accordion */}
          <MobileAccordion title="Services">
            <div className="flex flex-col">
              {megaMenuCategories.map((cat) => (
                <div key={cat.id} className="mb-3">
                  <p className="mb-1 pl-1 text-[10px] font-bold uppercase tracking-wider text-clay">
                    {cat.heading}
                  </p>
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex min-h-[44px] items-center pl-1 text-sm text-charcoal/70 transition-colors hover:text-slate"
                      onClick={onClose}
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="border-t border-stone/10 pt-2">
                <Link
                  href="/services"
                  className="flex min-h-[44px] items-center pl-1 text-sm font-semibold text-clay"
                  onClick={onClose}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </MobileAccordion>

          {/* Service Areas accordion */}
          <MobileAccordion title="Service Areas">
            <div className="flex flex-col">
              {metroLinks.map((metro) => (
                <Link
                  key={metro.href}
                  href={metro.href}
                  className="flex min-h-[44px] items-center pl-1 text-sm text-charcoal/70 transition-colors hover:text-slate"
                  onClick={onClose}
                >
                  {metro.label}
                </Link>
              ))}
              <div className="border-t border-stone/10 pt-2">
                <Link
                  href="/texas"
                  className="flex min-h-[44px] items-center pl-1 text-sm font-semibold text-clay"
                  onClick={onClose}
                >
                  View All Service Areas
                </Link>
              </div>
            </div>
          </MobileAccordion>

          {/* Plain links */}
          {plainLinks.map((link) => (
            <div key={link.href} className="border-b border-stone/10">
              <Link
                href={link.href}
                className="flex min-h-[48px] items-center text-sm font-semibold text-charcoal transition-colors hover:text-slate"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </div>
          ))}

          {/* Subcontractors */}
          <div className="border-b border-stone/10">
            <Link
              href="/subcontractors"
              className="flex min-h-[48px] items-center text-sm font-medium text-stone transition-colors hover:text-slate"
              onClick={onClose}
            >
              For Subcontractors
            </Link>
          </div>
        </nav>
      </div>
    </>,
    document.body,
  );
}

/* ------------------------------------------------------------------ */
/*  Header (exported)                                                  */
/* ------------------------------------------------------------------ */

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const closeDesktop = useCallback(() => {
    setServicesOpen(false);
    setAreasOpen(false);
  }, []);

  const navTextClass = scrolled
    ? "text-charcoal/80 hover:text-slate"
    : "text-bone hover:text-white";

  const navBtnClass = cn(
    "flex items-center gap-0.5 text-sm font-medium transition-colors min-h-[44px]",
    navTextClass,
  );

  const iconColor = scrolled ? "text-slate" : "text-bone";

  return (
    <>
      {/* ---- Top utility strip (hidden on small mobile) ---- */}
      <div
        className={cn(
          "fixed left-0 right-0 top-0 z-[60] hidden sm:block transition-all duration-300",
          scrolled
            ? "h-0 overflow-hidden opacity-0 border-none"
            : "bg-slate text-bone/90 border-b border-white/5",
        )}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] tracking-wide lg:px-8">
          <span>Licensed and Insured&nbsp;&nbsp;::&nbsp;&nbsp;Serving All of Texas</span>
          <div className="flex items-center gap-5">
            <a
              href={SITE_PHONE_TEL}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <PhoneIcon className="h-3 w-3" />
              {SITE_PHONE_DISPLAY}
            </a>
            <Link
              href="/subcontractors"
              className="transition-colors hover:text-white"
            >
              For Subcontractors
            </Link>
          </div>
        </div>
      </div>

      {/* ---- Main navigation bar ---- */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "top-0 h-14 bg-bone shadow-[0_1px_4px_rgba(0,0,0,0.08)]"
            : "sm:top-9 top-0 h-16 bg-gradient-to-b from-black/35 via-black/10 to-transparent",
        )}
      >
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div
            className={cn(
              "shrink-0 transition-transform duration-300 origin-left",
              scrolled && "scale-90",
            )}
          >
            <Logo variant={scrolled ? "dark" : "light"} />
          </div>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-7"
            aria-label="Main"
          >
            {/* Services dropdown */}
            <button
              type="button"
              className={navBtnClass}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => {
                setServicesOpen((o) => !o);
                setAreasOpen(false);
              }}
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Service Areas dropdown */}
            <button
              type="button"
              className={navBtnClass}
              aria-haspopup="true"
              aria-expanded={areasOpen}
              onClick={() => {
                setAreasOpen((o) => !o);
                setServicesOpen(false);
              }}
            >
              Service Areas
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Plain links */}
            {plainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors min-h-[44px] inline-flex items-center",
                  navTextClass,
                )}
                onClick={closeDesktop}
              >
                {link.label}
              </Link>
            ))}

            {/* Get a Quote CTA */}
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-clay px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-clay/90"
              onClick={closeDesktop}
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile: phone + toggle */}
          <div className="flex items-center gap-1 lg:hidden">
            <a
              href={SITE_PHONE_TEL}
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors",
                iconColor,
              )}
              aria-label="Call us"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              className={cn(
                "inline-flex min-h-[44px] min-w-[44px] items-center justify-center transition-colors",
                iconColor,
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop mega-menus */}
        <ServicesMegaMenu
          open={servicesOpen}
          onClose={() => setServicesOpen(false)}
        />
        <ServiceAreasMegaMenu
          open={areasOpen}
          onClose={() => setAreasOpen(false)}
        />
      </header>

      {/* Mobile full-screen menu */}
      <MobileMenuPortal open={mobileOpen} onClose={closeMobile} />
    </>
  );
}
