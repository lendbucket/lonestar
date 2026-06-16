import Link from "next/link";
import { type ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-semibold transition-colors min-h-[44px]";

  const variants = {
    primary: "bg-clay text-white hover:bg-clay/90",
    secondary: "bg-slate text-white hover:bg-slate/90",
    outline:
      "border-2 border-slate text-slate hover:bg-slate hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CTABanner({
  title,
  description,
  buttonText = "Get a Free Quote",
  buttonHref = "/contact",
  secondaryText,
  secondaryHref,
}: {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-slate py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-semibold text-bone tracking-tight" style={{ fontSize: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)" }}>
          {title}
        </h2>
        <p className="mt-4 text-lg text-bone/70 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={buttonHref} variant="primary" size="lg" className="w-full sm:w-auto">
            {buttonText}
          </Button>
          {secondaryText && secondaryHref && (
            <Button href={secondaryHref} variant="outline" size="lg" className="w-full sm:w-auto border-bone/30 text-bone hover:bg-bone hover:text-slate">
              {secondaryText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
