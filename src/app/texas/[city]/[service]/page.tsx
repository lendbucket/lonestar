import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById, type City } from "@/data/cities";
import {
  getServiceById,
  getServicesByCategory,
  getPriorityServices,
  PRIORITY_SERVICE_IDS,
  type Service,
} from "@/data/services";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

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

  const title = `${service.name} in ${city.name}, TX | ${service.name} Contractor ${city.name}`;
  const description = `${service.name} services in ${city.name}, Texas. ${getLocalizedIntro(service, city)} One contractor, one point of contact.`;

  return {
    title,
    description,
    alternates: { canonical: `/texas/${city.id}/${service.id}` },
    openGraph: {
      title: `${service.name} in ${city.name}, TX`,
      description,
      url: `${SITE_URL}/texas/${city.id}/${service.id}`,
    },
  };
}

function getLocalizedIntro(service: Service, city: City): string {
  const hazardMap: Record<string, string[]> = {
    roofing: ["wind", "hail", "hurricane", "storm"],
    "foundation-repair": ["clay", "soil", "limestone", "settling", "subsidence"],
    "concrete-flatwork": ["heat", "soil", "clay", "freeze"],
    fencing: ["wind", "heat", "storm"],
    plumbing: ["water", "humidity", "flooding", "hard water"],
    electrical: ["heat", "storm", "humidity"],
    hvac: ["heat", "humidity", "freeze"],
    "interior-painting": ["humidity", "moisture"],
    "residential-remodels": ["growth", "expansion"],
    "commercial-construction": ["growth", "commercial", "development"],
  };

  const keywords = hazardMap[service.id] || [];
  const relevantHazards = city.climateHazards.filter((h) =>
    keywords.some((k) => h.toLowerCase().includes(k))
  );
  const relevantGround = city.groundConditions.filter((g) =>
    keywords.some((k) => g.toLowerCase().includes(k))
  );

  if (relevantHazards.length > 0) {
    return `${city.name} properties face ${relevantHazards[0].toLowerCase()}, making professional ${service.name.toLowerCase()} critical for long-term performance.`;
  }
  if (relevantGround.length > 0) {
    return `${city.name}'s ${relevantGround[0].toLowerCase()} creates specific demands on ${service.name.toLowerCase()} work.`;
  }
  return `${city.name}'s climate and building conditions require ${service.name.toLowerCase()} professionals who understand the local market.`;
}

function getLocalFAQs(service: Service, city: City) {
  const faqs: { question: string; answer: string }[] = [];

  faqs.push({
    question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
    answer: `${service.name} costs in ${city.name} vary based on the scope of the project, the property type, and local conditions in ${city.county} County. We provide detailed estimates after reviewing your specific project. Contact us for a free quote with no obligation.`,
  });

  if (service.licensed) {
    faqs.push({
      question: `Does ${service.name.toLowerCase()} require a license in ${city.name}, Texas?`,
      answer: `Yes. ${service.name} is a licensed trade in Texas. Every ${service.name.toLowerCase()} professional in our network holds their own state license and is responsible for pulling the required permits in ${city.name} and ${city.county} County. We verify licensing status before any assignment.`,
    });
  }

  const relevantHazards = city.climateHazards.slice(0, 2);
  if (relevantHazards.length > 0) {
    faqs.push({
      question: `How do ${city.name} weather conditions affect ${service.name.toLowerCase()}?`,
      answer: `${city.name} properties contend with ${relevantHazards.join(" and ").toLowerCase()}. These conditions directly impact ${service.name.toLowerCase()} work by influencing material selection, installation techniques, and long-term maintenance requirements. Our network professionals are experienced with ${city.name}'s specific conditions and plan accordingly.`,
    });
  }

  faqs.push({
    question: `How do I find a reliable ${service.name.toLowerCase()} contractor in ${city.name}?`,
    answer: `Instead of vetting individual contractors yourself, you make one call to Lone Star Contracting Group. We match your ${service.name.toLowerCase()} project to a vetted professional in our ${city.name} network based on the specific scope, trade, and timeline. You get one point of contact from estimate through completion.`,
  });

  if (city.groundConditions.length > 0) {
    faqs.push({
      question: `What ground conditions in ${city.name} should I know about for ${service.name.toLowerCase()}?`,
      answer: `${city.name} sits on ${city.groundConditions[0].toLowerCase()}. This affects ${service.name.toLowerCase()} work by requiring specific preparation and techniques. Our professionals in ${city.name} are familiar with these conditions and factor them into every project.`,
    });
  }

  return faqs;
}

function getRelatedServicesInCity(
  service: Service,
  cityId: string
): { name: string; href: string }[] {
  const categoryServices = getServicesByCategory(service.categoryId)
    .filter((s) => s.id !== service.id && PRIORITY_SERVICE_IDS.includes(s.id))
    .slice(0, 2);

  const otherPriority = getPriorityServices()
    .filter(
      (s) =>
        s.id !== service.id &&
        s.categoryId !== service.categoryId &&
        !categoryServices.find((cs) => cs.id === s.id)
    )
    .slice(0, 1);

  return [...categoryServices, ...otherPriority].map((s) => ({
    name: s.name,
    href: `/texas/${cityId}/${s.id}`,
  }));
}

export default async function ServiceCityLeaf({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: cityId, service: serviceId } = await params;
  const city = getCityById(cityId);
  const service = getServiceById(serviceId);
  if (!city || !service) notFound();

  const faqs = getLocalFAQs(service, city);
  const relatedInCity = getRelatedServicesInCity(service, city.id);
  const neighborCities = city.neighborCityIds
    .map((id) => getCityById(id))
    .filter(Boolean);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${SITE_NAME} - ${service.name} ${city.name}`,
    url: `${SITE_URL}/texas/${city.id}/${service.id}`,
    email: CONTACT_EMAIL,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: "Texas" },
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${city.name}, TX`,
    description: `${service.description} Serving ${city.name} and ${city.county} County.`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    serviceType: service.name,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
            serviceSchema,
            faqSchema,
          ]),
        }}
      />

      {/* Hero with localized intro */}
      <Section bg="white">
        <Breadcrumbs
          items={[
            { label: "Texas", href: "/texas" },
            { label: city.name, href: `/texas/${city.id}` },
            {
              label: service.name,
              href: `/texas/${city.id}/${service.id}`,
            },
          ]}
        />

        <div className="mt-8 max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            {city.name}, TX | {city.region}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            {service.name} in {city.name}, Texas
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            {getLocalizedIntro(service, city)} Lone Star Contracting Group
            connects your project to vetted{" "}
            {service.name.toLowerCase()} professionals in the{" "}
            {city.name} market who understand {city.county} County
            conditions and deliver through one accountable point of
            contact.
          </p>
          {service.licensed && service.licenseNote && (
            <p className="mt-4 text-sm text-stone/80 border-l-2 border-clay/30 pl-4">
              {service.licenseNote}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Get a Quote in {city.name}
            </Button>
            <Button
              href={`/services/${service.id}`}
              variant="outline"
              size="lg"
            >
              About {service.name}
            </Button>
          </div>
        </div>
      </Section>

      {/* Local conditions for this service */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              {service.name} Conditions in {city.name}
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              {city.tradeConsiderations}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              These local factors shape how{" "}
              {service.name.toLowerCase()} projects are scoped,
              materials are selected, and work is scheduled in the{" "}
              {city.name} market. Our network professionals factor
              these conditions into every project from the initial
              estimate forward.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
              {city.name} Conditions Affecting {service.name}
            </h3>
            <ul className="mt-4 space-y-2">
              {[...city.climateHazards.slice(0, 3), ...city.groundConditions.slice(0, 2)].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-stone"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay/60 shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </Section>

      {/* What we deliver */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            {service.name} Services We Deliver in {city.name}
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.subServices.map((sub) => (
              <div
                key={sub}
                className="rounded-lg border border-stone/10 bg-stone/5 p-3"
              >
                <p className="text-sm font-medium text-slate">{sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone">
            Each of these services is available for{" "}
            {service.serviceType === "both"
              ? "both commercial and residential"
              : service.serviceType}{" "}
            properties in {city.name} and surrounding {city.county}{" "}
            County.
          </p>
        </div>
      </Section>

      {/* Local references section */}
      <Section bg="bone">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Serving All of {city.name}
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Our {service.name.toLowerCase()} professionals serve
            properties throughout {city.name} and {city.county} County,
            including areas near {city.localReferences.join(", ")}.
            Whether your property is in an established neighborhood or a
            new development on the metro edge, we have crews positioned
            to reach your site.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
              Common Property Types We Serve
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {city.dominantPropertyTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-stone/15 bg-white px-3 py-1.5 text-xs text-stone"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            {service.name} in {city.name}: Common Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-stone/10 pb-6 last:border-b-0"
              >
                <h3 className="text-base font-semibold text-slate">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-stone leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related services in this city + neighbor cities */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {relatedInCity.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Related Services in {city.name}
              </h2>
              <div className="mt-4 space-y-3">
                {relatedInCity.map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className="block rounded-lg border border-stone/15 bg-white p-4 hover:border-clay/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate hover:text-clay">
                      {related.name} in {city.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {neighborCities.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                {service.name} in Nearby Cities
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {neighborCities.map((neighbor) =>
                  neighbor ? (
                    <Link
                      key={neighbor.id}
                      href={`/texas/${neighbor.id}/${service.id}`}
                      className="rounded-full border border-stone/20 px-4 py-2 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
                    >
                      {service.name} in {neighbor.name}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </Section>

      <CTABanner
        title={`Ready to Start Your ${service.name} Project in ${city.name}?`}
        description={`Tell us about your project. We will match you with vetted ${service.name.toLowerCase()} professionals in the ${city.name} market.`}
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
