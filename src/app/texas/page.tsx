import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Texas Service Areas | Statewide Contractor Coverage",
  description:
    "Lone Star Contracting Group serves every major Texas metro. Houston, Dallas, San Antonio, Austin, Fort Worth, El Paso, Corpus Christi, and beyond. Every trade, one company.",
  alternates: { canonical: "/texas" },
};

export default function TexasHub() {
  return (
    <>
      <Section bg="white">
        <Breadcrumbs items={[{ label: "Texas", href: "/texas" }]} />
        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Statewide Texas Coverage
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            From the Gulf Coast to the Permian Basin, the DFW Metroplex to the
            Rio Grande Valley, Lone Star Contracting Group delivers every major
            trade through a vetted network of local professionals. Select your
            city to see the services and crews available in your market.
          </p>
        </div>
      </Section>

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
              className="group rounded-xl border border-stone/15 bg-white p-6 hover:border-clay/30 hover:shadow-sm transition-all"
            >
              <h2 className="text-xl font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                {city.name}
              </h2>
              <p className="mt-1 text-sm text-stone/70">
                {city.county} County | {city.region}
              </p>
              <p className="mt-3 text-sm text-stone leading-relaxed">
                {city.tradeConsiderations.split(".").slice(0, 2).join(".")}.
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-clay">
                View services in {city.name}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
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
