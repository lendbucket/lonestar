import Link from "next/link";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const primary = variant === "dark" ? "text-slate" : "text-bone";
  const accent = "text-clay";

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 no-underline group">
      {/* Star mark */}
      <svg
        viewBox="0 0 32 32"
        className={`h-8 w-8 shrink-0 ${accent} transition-colors`}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16 0l4.944 9.544L32 12.236l-7.68 7.928L25.888 32 16 26.4 6.112 32l1.568-11.836L0 12.236l11.056-2.692z" />
      </svg>
      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg sm:text-xl font-bold tracking-tight ${primary} transition-colors`}
        >
          Lone Star
        </span>
        <span
          className={`font-serif text-[0.65rem] sm:text-xs font-normal tracking-[0.18em] uppercase ${
            variant === "dark" ? "text-stone" : "text-bone/60"
          } transition-colors`}
        >
          Contracting Group
        </span>
      </span>
    </Link>
  );
}
