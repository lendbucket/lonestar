import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Resources | Guides and Insights for Texas Property Owners | ${SITE_NAME}`,
  description:
    "Guides, articles, and reference material for Texas property owners and subcontractors. Learn about choosing contractors, licensing requirements, and how the contracting industry works.",
};

const resources = [
  {
    title: "How to Choose a Contractor in Texas",
    description:
      "A practical guide to evaluating contractors, checking references, verifying licenses, and avoiding common mistakes when hiring for residential or commercial work.",
    href: "/resources/how-to-choose-a-contractor-in-texas",
    category: "Guide",
  },
  {
    title: "What Licensed Trades Require in Texas",
    description:
      "An overview of which trades require state licensing in Texas, what that means for property owners, and how licensing affects permitting and accountability.",
    href: "/resources/licensed-trades-in-texas",
    category: "Reference",
  },
  {
    title: "How Subcontractors Get Steady Work in Texas",
    description:
      "A look at the options available to trade professionals who want consistent work without spending half their time on sales and marketing.",
    href: "/resources/how-subcontractors-get-steady-work",
    category: "For Subcontractors",
  },
  {
    title: "Frequently Asked Questions",
    description:
      "Answers to the most common questions we hear from property owners and subcontractors about our services, process, and network.",
    href: "/faq",
    category: "FAQ",
  },
  {
    title: "Contracting Glossary",
    description:
      "A plain-language glossary of contracting and construction terms so you can understand proposals, contracts, and project conversations without the jargon.",
    href: "/glossary",
    category: "Reference",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Resource Center
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Guides and Insights for Texas Property Owners
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            We put these resources together because navigating the contracting
            industry should not require a background in construction. Whether
            you are hiring a contractor for the first time, trying to
            understand what licensing means for your project, or exploring how
            to get more consistent work as a subcontractor, these articles and
            references are written to give you useful information without the
            sales pitch.
          </p>
        </div>
      </Section>

      {/* Resource Cards */}
      <Section bg="light">
        <SectionHeader
          title="Browse Resources"
          subtitle="Articles, guides, and reference material for property owners and trade professionals in Texas."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group rounded-xl border border-stone/15 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <p className="text-clay font-semibold text-xs tracking-wide uppercase font-sans">
                {resource.category}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate font-serif group-hover:text-clay transition-colors">
                {resource.title}
              </h3>
              <p className="mt-3 text-stone text-sm leading-relaxed">
                {resource.description}
              </p>
              <p className="mt-4 text-clay text-sm font-semibold">
                Read more
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="If you have done your research and you are ready to talk about a project, we are here. One call, one point of contact, every trade in Texas."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        secondaryText="Join Our Network"
        secondaryHref="/subcontractors"
      />
    </>
  );
}
