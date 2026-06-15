import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const textColor = variant === "dark" ? "text-slate" : "text-bone";
  const accentColor = "text-clay";

  return (
    <Link href="/" className="inline-flex items-baseline gap-1 no-underline">
      <span
        className={`font-serif text-xl font-semibold tracking-tight ${textColor}`}
      >
        Lone Star
      </span>
      <span
        className={`font-serif text-xl font-light tracking-tight ${accentColor}`}
      >
        Contracting
      </span>
    </Link>
  );
}
