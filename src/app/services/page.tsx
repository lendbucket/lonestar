import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories, getServicesByCategory } from "@/data/services";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Contracting Services Across Texas",
  description:
    "Commercial and residential contracting services across every major trade. Roofing, foundation repair, plumbing, electrical, HVAC, remodels, and more. Statewide Texas coverage.",
  alternates: { canonical: "/services" },
};

export default function ServicesHub() {
  return (
    <>
      <Section bg="white">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Every Trade. One Company.
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            From structural work and roofing to licensed mechanical trades and
            full-scale construction, Lone Star Contracting Group delivers every
            service through one accountable point of contact. Each job is
            matched to vetted professionals in our network who specialize in
            the specific trade your project requires.
          </p>
        </div>
      </Section>

      {serviceCategories.map((category, catIndex) => {
        const categoryServices = getServicesByCategory(category.id);
        return (
          <Section
            key={category.id}
            bg={catIndex % 2 === 0 ? "bone" : "white"}
            id={category.id}
          >
            <SectionHeader
              title={category.name}
              subtitle={category.description}
              centered={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categoryServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group rounded-lg border border-stone/15 bg-white p-5 hover:border-clay/30 hover:shadow-sm transition-all"
                >
                  <h3 className="text-base font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-stone leading-relaxed">
                    {service.description}
                  </p>
                  {service.licensed && (
                    <span className="mt-2 inline-block text-xs font-medium text-clay/80">
                      Licensed trade
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </Section>
        );
      })}

      <CTABanner
        title="Not Sure Which Service You Need?"
        description="Tell us about your project and we will match it to the right trade and the right crew."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
