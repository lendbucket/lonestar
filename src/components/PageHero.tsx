import Image from "next/image";
import { type ReactNode } from "react";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  children: ReactNode;
  priority?: boolean;
}

export function PageHero({
  image,
  imageAlt,
  children,
  priority = true,
}: PageHeroProps) {
  return (
    <section className="relative -mt-16 sm:-mt-[100px] min-h-[320px] sm:min-h-[480px] lg:min-h-[540px] flex items-end overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
      />
      {/* Warm slate overlay for legibility */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/60 to-slate/30"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-10 sm:pb-16 lg:pb-20">
        {children}
      </div>
    </section>
  );
}

interface PhotoBandProps {
  image: string;
  imageAlt: string;
  height?: string;
}

export function PhotoBand({
  image,
  imageAlt,
  height = "h-64 sm:h-80 lg:h-96",
}: PhotoBandProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-slate/20"
        aria-hidden="true"
      />
    </div>
  );
}

interface SplitImageSectionProps {
  image: string;
  imageAlt: string;
  children: ReactNode;
  imagePosition?: "left" | "right";
  bg?: "bone" | "white" | "light";
}

export function SplitImageSection({
  image,
  imageAlt,
  children,
  imagePosition = "right",
  bg = "white",
}: SplitImageSectionProps) {
  const bgClass = {
    bone: "bg-bone",
    white: "bg-white",
    light: "bg-stone/5",
  }[bg];

  return (
    <section className={`${bgClass} py-10 sm:py-16 lg:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
            imagePosition === "left" ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
          }`}
        >
          <div>{children}</div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-slate/10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
