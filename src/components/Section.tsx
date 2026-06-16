import { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  bg?: "bone" | "white" | "slate" | "light";
  id?: string;
}

export function Section({
  children,
  className = "",
  bg = "bone",
  id,
}: SectionProps) {
  const bgClass = {
    bone: "bg-bone",
    white: "bg-white",
    slate: "bg-slate text-bone",
    light: "bg-stone/5",
  }[bg];

  return (
    <section id={id} className={`py-10 sm:py-16 lg:py-24 ${bgClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-12`}>
      <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-stone leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
