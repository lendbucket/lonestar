import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cities } from "@/data/cities";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: { absolute: "Texas Service Areas | Lone Star" },
  description:
    "Lone Star Contracting Group serves every major Texas metro. Houston, Dallas, San Antonio, Austin, Fort Worth, El Paso, Corpus Christi, and beyond. Every trade, one company.",
  alternates: { canonical: "/texas" },
};

export default function TexasHub() {
  return (
    <>
      <PageHero
        image="/images/lone-star-houston-skyline.jpg"
        imageAlt="Texas metro skyline at sunset"
      >
        <Breadcrumbs items={[{ label: "Texas", href: "/texas" }]} />
        <div className="mt-6 max-w-3xl">
          <h1 className="font-bold tracking-tight text-bone" style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3rem)" }}>
            Statewide Texas Coverage
          </h1>
          <p className="mt-6 text-lg text-bone/80 leading-relaxed">
            From the Gulf Coast to the Permian Basin, the DFW Metroplex to the
            Rio Grande Valley, Lone Star Contracting Group delivers every major
            trade through a vetted network of local professionals. Select your
            city to see the services and crews available in your market.
          </p>
        </div>
      </PageHero>

      <Section bg="bone">
        <SectionHeader
          title="Major Metros"
          subtitle="Full service coverage with local professionals who know your market."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/texas/${city.id}`}
              className="group rounded-xl overflow-hidden border border-stone/15 bg-white hover:border-clay/30 hover:shadow-sm transition-all"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={city.heroImage}
                  alt={`${city.name}, Texas skyline`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate/60 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-3 left-4">
                  <h2 className="text-xl font-semibold text-bone font-serif drop-shadow-sm">
                    {city.name}
                  </h2>
                  <p className="text-xs text-bone/70">
                    {city.county} County | {city.region}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-stone leading-relaxed">
                  {city.tradeConsiderations.split(".").slice(0, 2).join(".")}.
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-clay">
                  View services in {city.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-semibold tracking-tight" style={{ fontSize: "clamp(1.5rem, 3vw + 0.5rem, 1.875rem)" }}>
            More Cities Coming Soon
          </h2>
          <p className="mt-4 text-lg text-stone">
            Our network covers communities across the entire state. If your
            city is not listed above, reach out. We likely have vetted
            professionals in your area already.
          </p>
        </div>
      </Section>

      <CTABanner
        title="Need a Contractor in Your Area?"
        description="Tell us your city and your project. We will let you know what our network can deliver."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
