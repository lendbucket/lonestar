import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getServiceById, getServicesByCategory } from "@/data/services";
import { getTier1Cities } from "@/data/cities";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  return services.map((s) => ({ service: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceId } = await params;
  const service = getServiceById(serviceId);
  if (!service) return {};

  return {
    title: `${service.name} Contractor Texas | ${SITE_NAME}`,
    description: `${service.description} Serving all major Texas metros. ${service.customerAngle}`,
    alternates: { canonical: `/services/${service.id}` },
    openGraph: {
      title: `${service.name} Contractor Texas`,
      description: service.description,
      url: `${SITE_URL}/services/${service.id}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceId } = await params;
  const service = getServiceById(serviceId);
  if (!service) notFound();

  const relatedServices = getServicesByCategory(service.categoryId)
    .filter((s) => s.id !== service.id)
    .slice(0, 3);
  const tier1Cities = getTier1Cities();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    serviceType: service.name,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <Section bg="white">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.name, href: `/services/${service.id}` },
          ]}
        />

        <div className="mt-8 max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            {service.category}
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
            {service.name}
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            {service.description} {service.customerAngle}
          </p>
          {service.licensed && service.licenseNote && (
            <p className="mt-4 text-sm text-stone/80 border-l-2 border-clay/30 pl-4">
              {service.licenseNote}
            </p>
          )}
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </Section>

      {/* Sub-services */}
      <Section bg="light">
        <SectionHeader
          title={`${service.name} Services`}
          subtitle={`Every aspect of ${service.name.toLowerCase()} handled through one contractor, one point of contact.`}
          centered={false}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.subServices.map((sub) => (
            <div
              key={sub}
              className="rounded-lg border border-stone/10 bg-white p-4"
            >
              <p className="text-sm font-medium text-slate">{sub}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Lone Star for this service */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight">
            Why Choose Lone Star for {service.name}
          </h2>
          <div className="mt-6 space-y-4 text-stone leading-relaxed">
            <p>
              Finding the right contractor for {service.name.toLowerCase()} in
              Texas means navigating a fragmented market of solo operators,
              overbooked crews, and companies that disappear between the
              estimate and the start date. That is the gap Lone Star
              Contracting Group fills.
            </p>
            <p>
              We do not subcontract blindly. Every professional in our network
              is vetted for the specific trade they perform. When your{" "}
              {service.name.toLowerCase()} project comes in, we match it to a
              crew with documented experience in that exact scope, in your
              market, with the capacity to start on your timeline.
            </p>
            {service.licensed && (
              <p>
                As a licensed trade in Texas,{" "}
                {service.name.toLowerCase()} work requires proper state
                licensing. Every {service.name.toLowerCase()} professional in
                our network holds their own license and is responsible for
                pulling the required permits. We verify licensing status before
                any assignment.
              </p>
            )}
            <p>
              You get one point of contact from estimate through completion.
              We manage the schedule, handle the communication, and verify the
              work before the job closes.
            </p>
          </div>
        </div>
      </Section>

      {/* Service Areas */}
      <Section bg="bone">
        <SectionHeader
          title={`${service.name} Across Texas`}
          subtitle={`We deliver ${service.name.toLowerCase()} in every major Texas metro. Select your city for local details.`}
        />
        <div className="flex flex-wrap justify-center gap-3">
          {tier1Cities.map((city) => (
            <Link
              key={city.id}
              href={`/texas/${city.id}/${service.id}`}
              className="rounded-full border border-stone/20 px-5 py-2.5 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
            >
              {service.name} in {city.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section bg="white">
          <SectionHeader
            title="Related Services"
            subtitle={`Other ${service.category.toLowerCase()} services we deliver across Texas.`}
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedServices.map((related) => (
              <Link
                key={related.id}
                href={`/services/${related.id}`}
                className="group rounded-lg border border-stone/15 p-5 hover:border-clay/30 transition-all"
              >
                <h3 className="text-base font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                  {related.name}
                </h3>
                <p className="mt-1.5 text-sm text-stone">
                  {related.description}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <CTABanner
        title={`Ready to Start Your ${service.name} Project?`}
        description="Tell us what you need. We will match you with the right professionals and keep the project on track."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
