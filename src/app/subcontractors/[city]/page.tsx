import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById } from "@/data/cities";
import { getPriorityServices, PRIORITY_SERVICE_IDS } from "@/data/services";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";

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
    title: `Subcontractor Jobs in ${city.name}, TX | Join Our Network`,
    description: `Looking for steady contracting work in ${city.name}, Texas? Lone Star Contracting Group is recruiting licensed and insured subcontractors across every trade in ${city.county} County.`,
    alternates: { canonical: `/subcontractors/${city.id}` },
  };
}

export default async function SubcontractorCityHub({
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

  return (
    <>
      <section className="bg-slate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "For Subcontractors", href: "/subcontractors" },
              { label: city.name, href: `/subcontractors/${city.id}` },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              {city.region} | {city.county} County
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-bone tracking-tight">
              Subcontractor Work in {city.name}
            </h1>
            <p className="mt-6 text-lg text-bone/70 leading-relaxed">
              Lone Star Contracting Group is actively recruiting licensed and
              insured trade professionals in {city.name} and the surrounding{" "}
              {city.county} County area. Steady volume, professional project
              management, and reliable pay.
            </p>
            <div className="mt-8">
              <Button href="/subcontractors#apply" variant="primary" size="lg">
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section bg="white">
        <SectionHeader
          title={`Trades We Need in ${city.name}`}
          subtitle="Select your trade to see what we are looking for in this market."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priorityServices.map((service) => (
            <Link
              key={service.id}
              href={`/subcontractors/${city.id}/${service.id}`}
              className="group rounded-lg border border-stone/15 p-5 hover:border-clay/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-base font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                {service.name}
              </h3>
              <p className="mt-1.5 text-sm text-stone">
                {service.name} subcontractor work in {city.name}
              </p>
              {service.licensed && (
                <span className="mt-2 inline-block text-xs font-medium text-clay/80">
                  Licensed trade required
                </span>
              )}
            </Link>
          ))}
        </div>
      </Section>

      <Section bg="light">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            The {city.name} Market
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            {city.growthNotes}
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            {city.tradeConsiderations}
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            This combination of conditions and demand means consistent project
            volume for qualified subcontractors across every major trade. If
            you have the skills, the licensing, and the insurance, we have the
            work.
          </p>
        </div>
      </Section>

      {neighborCities.length > 0 && (
        <Section bg="white">
          <SectionHeader
            title="Also Recruiting Nearby"
            subtitle={`We need crews in these markets near ${city.name} too.`}
          />
          <div className="flex flex-wrap justify-center gap-3">
            {neighborCities.map((neighbor) =>
              neighbor ? (
                <Link
                  key={neighbor.id}
                  href={`/subcontractors/${neighbor.id}`}
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
        title={`Ready to Work in ${city.name}?`}
        description="Apply to join the Lone Star network. We review every application and respond within two business days."
        buttonText="Apply Now"
        buttonHref="/subcontractors#apply"
      />
    </>
  );
}
