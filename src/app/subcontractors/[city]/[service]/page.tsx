import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById, type City } from "@/data/cities";
import {
  getServiceById,
  getPriorityServices,
  PRIORITY_SERVICE_IDS,
  type Service,
} from "@/data/services";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const serviceId of PRIORITY_SERVICE_IDS) {
      params.push({ city: city.id, service: serviceId });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: cityId, service: serviceId } = await params;
  const city = getCityById(cityId);
  const service = getServiceById(serviceId);
  if (!city || !service) return {};

  return {
    title: `${service.name} Subcontractor Jobs ${city.name}, TX`,
    description: `${service.name} subcontractor opportunities in ${city.name}, Texas. Join the Lone Star Contracting Group network for steady ${service.name.toLowerCase()} work in ${city.county} County. Licensed and insured professionals wanted.`,
    alternates: {
      canonical: `/subcontractors/${city.id}/${service.id}`,
    },
  };
}

function getSubRecruitingContent(service: Service, city: City) {
  const isLicensed = service.licensed;

  const requirements = [
    `Documented experience in ${service.name.toLowerCase()}`,
    "General liability insurance (minimum coverage TBD during onboarding)",
    "Workers compensation coverage or sole proprietor exemption documentation",
    "Ability to serve the greater " + city.name + " and " + city.county + " County area",
    "Reliable communication and scheduling",
  ];

  if (isLicensed) {
    requirements.splice(
      1,
      0,
      `Valid Texas ${service.name.toLowerCase()} license (you hold the license and pull permits)`
    );
  }

  return { requirements };
}

export default async function SubcontractorServiceCityLeaf({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: cityId, service: serviceId } = await params;
  const city = getCityById(cityId);
  const service = getServiceById(serviceId);
  if (!city || !service) notFound();

  const { requirements } = getSubRecruitingContent(service, city);
  const neighborCities = city.neighborCityIds
    .map((id) => getCityById(id))
    .filter(Boolean);
  const otherTrades = getPriorityServices()
    .filter((s) => s.id !== service.id)
    .slice(0, 4);

  return (
    <>
      <section className="bg-slate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "For Subcontractors", href: "/subcontractors" },
              { label: city.name, href: `/subcontractors/${city.id}` },
              {
                label: service.name,
                href: `/subcontractors/${city.id}/${service.id}`,
              },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Now Recruiting | {city.name}, TX
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-bone tracking-tight">
              {service.name} Subcontractor Work in {city.name}
            </h1>
            <p className="mt-6 text-lg text-bone/70 leading-relaxed">
              Lone Star Contracting Group is looking for qualified{" "}
              {service.name.toLowerCase()} professionals in the {city.name}{" "}
              market. Join our network for steady, well-managed project volume
              in {city.county} County and the surrounding area.
            </p>
            <div className="mt-8">
              <Button href="/subcontractors#apply" variant="primary" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What we are looking for */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            What We Look For in {service.name} Subs
          </h2>
          <ul className="mt-6 space-y-3">
            {requirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 text-stone"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay/60 shrink-0" />
                <span className="text-sm">{req}</span>
              </li>
            ))}
          </ul>
          {service.licensed && (
            <p className="mt-6 text-sm text-stone/80 border-l-2 border-clay/30 pl-4">
              {service.name} is a licensed trade in Texas. You must hold your
              own valid license and be responsible for pulling permits. We
              verify all license numbers during the vetting process.
            </p>
          )}
        </div>
      </Section>

      {/* The market */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              The {city.name} Market for {service.name}
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              {city.tradeConsiderations}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              {city.growthNotes}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              This means consistent demand for{" "}
              {service.name.toLowerCase()} work across{" "}
              {service.serviceType === "both"
                ? "both commercial and residential"
                : service.serviceType}{" "}
              properties. If you can handle the conditions and the volume, we
              have the projects.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
              {service.name} Scope in This Market
            </h3>
            <div className="mt-4 space-y-2">
              {service.subServices.map((sub) => (
                <div
                  key={sub}
                  className="rounded-md border border-stone/10 bg-white px-3 py-2"
                >
                  <p className="text-sm text-stone">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            What You Get as a Network Sub
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Steady Project Flow",
                desc: `Consistent ${service.name.toLowerCase()} work in ${city.name} matched to your capacity and schedule.`,
              },
              {
                title: "No Sales Overhead",
                desc: "We handle the customer intake, the estimate alignment, and the expectations. You focus on the trade.",
              },
              {
                title: "Professional Management",
                desc: "Jobs arrive scoped, scheduled, and ready. One point of contact for every project.",
              },
              {
                title: "Reliable Pay",
                desc: "Completed work gets paid on schedule. No chasing invoices, no excuses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-stone/15 p-5"
              >
                <h3 className="text-sm font-semibold text-slate">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-stone">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other trades + nearby cities */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Other Trades in {city.name}
            </h2>
            <div className="mt-4 space-y-2">
              {otherTrades.map((trade) => (
                <Link
                  key={trade.id}
                  href={`/subcontractors/${city.id}/${trade.id}`}
                  className="block rounded-lg border border-stone/15 bg-white p-3 hover:border-clay/30 transition-colors"
                >
                  <span className="text-sm font-medium text-slate">
                    {trade.name} subs in {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {neighborCities.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                {service.name} Work Nearby
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {neighborCities.map((neighbor) =>
                  neighbor ? (
                    <Link
                      key={neighbor.id}
                      href={`/subcontractors/${neighbor.id}/${service.id}`}
                      className="rounded-full border border-stone/20 px-4 py-2 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
                    >
                      {neighbor.name}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </Section>

      <CTABanner
        title={`Apply for ${service.name} Work in ${city.name}`}
        description={`We are actively recruiting ${service.name.toLowerCase()} professionals in the ${city.name} area. Apply now and we will follow up within two business days.`}
        buttonText="Apply to Join"
        buttonHref="/subcontractors#apply"
      />
    </>
  );
}
