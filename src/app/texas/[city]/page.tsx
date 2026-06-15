import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById } from "@/data/cities";
import { services, getPriorityServices } from "@/data/services";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: cityId } = await params;
  const city = getCityById(cityId);
  if (!city) return {};

  return {
    title: { absolute: `Contractors in ${city.name}, TX | Lone Star` },
    description: `Commercial and residential contracting services in ${city.name}, Texas. Every major trade delivered through one contractor. Roofing, foundation repair, plumbing, electrical, HVAC, remodels, and more in ${city.county} County.`,
    alternates: { canonical: `/texas/${city.id}` },
  };
}

export default async function CityHub({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: cityId } = await params;
  const city = getCityById(cityId);
  if (!city) notFound();

  const priorityServices = getPriorityServices();
  const neighborCities = city.neighborCityIds
    .map((id) => getCityById(id))
    .filter(Boolean);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} - ${city.name}`,
    url: `${SITE_URL}/texas/${city.id}`,
    email: CONTACT_EMAIL,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Section bg="white">
        <Breadcrumbs
          items={[
            { label: "Texas", href: "/texas" },
            { label: city.name, href: `/texas/${city.id}` },
          ]}
        />

        <div className="mt-8 max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            {city.region} | {city.county} County
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            Contractors in {city.name}, Texas
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Lone Star Contracting Group delivers every major trade in{" "}
            {city.name} through a vetted network of local professionals. One
            call, one point of contact, and crews that know {city.county}{" "}
            County conditions from the ground up.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get a Quote in {city.name}
            </Button>
          </div>
        </div>
      </Section>

      {/* Local conditions */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              What Makes {city.name} Different
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              {city.tradeConsiderations}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              {city.growthNotes}
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
                Climate and Weather Hazards
              </h3>
              <ul className="mt-3 space-y-2">
                {city.climateHazards.map((hazard) => (
                  <li
                    key={hazard}
                    className="flex items-start gap-2 text-sm text-stone"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay/60 shrink-0" />
                    {hazard}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
                Ground Conditions
              </h3>
              <ul className="mt-3 space-y-2">
                {city.groundConditions.map((condition) => (
                  <li
                    key={condition}
                    className="flex items-start gap-2 text-sm text-stone"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay/60 shrink-0" />
                    {condition}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Services grid */}
      <Section bg="white">
        <SectionHeader
          title={`Services in ${city.name}`}
          subtitle="Select a service to see local details, conditions, and how we handle it in your area."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priorityServices.map((service) => (
            <Link
              key={service.id}
              href={`/texas/${city.id}/${service.id}`}
              className="group rounded-lg border border-stone/15 p-5 hover:border-clay/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-base font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                {service.name}
              </h3>
              <p className="mt-1.5 text-sm text-stone">
                {service.name} in {city.name}, TX
              </p>
              {service.licensed && (
                <span className="mt-2 inline-block text-xs font-medium text-clay/80">
                  Licensed trade
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-stone">
            Looking for a different service?{" "}
            <Link href="/services" className="text-clay hover:underline">
              View all services
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-clay hover:underline">
              tell us what you need
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* Property types */}
      <Section bg="bone">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Property Types in {city.name}
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {city.dominantPropertyTypes.map((type) => (
              <span
                key={type}
                className="rounded-full border border-stone/15 bg-white px-4 py-2 text-sm text-stone"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Local references */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Areas We Serve in {city.name}
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Our network of professionals covers all of {city.name} and the
            surrounding {city.county} County area, including neighborhoods
            and districts near{" "}
            {city.localReferences.slice(0, -1).join(", ")}
            {city.localReferences.length > 1 ? ", and " : ""}
            {city.localReferences[city.localReferences.length - 1]}.
          </p>
        </div>
      </Section>

      {/* Neighbor cities */}
      {neighborCities.length > 0 && (
        <Section bg="light">
          <SectionHeader
            title="Nearby Service Areas"
            subtitle={`We also serve these metros near ${city.name}.`}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {neighborCities.map((neighbor) =>
              neighbor ? (
                <Link
                  key={neighbor.id}
                  href={`/texas/${neighbor.id}`}
                  className="rounded-full border border-stone/20 px-5 py-2.5 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
                >
                  {neighbor.name}
                </Link>
              ) : null
            )}
          </div>
        </Section>
      )}

      <CTABanner
        title={`Start Your Project in ${city.name}`}
        description={`Tell us about your project in ${city.name}. We will match you with the right local professionals.`}
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        secondaryText="Join Our Network"
        secondaryHref={`/subcontractors/${city.id}`}
      />
    </>
  );
}
