import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact ${SITE_NAME}`,
  description:
    "Get in touch with Lone Star Contracting Group. Tell us about your project or inquire about joining our subcontractor network.",
};

export default function ContactPage() {
  return (
    <>
      <Section bg="bone">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

        <div className="mt-8 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Whether you have a project that needs a crew or you are a
            professional looking to join our network, we want to hear from you.
          </p>
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Email Us Directly
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-2xl sm:text-3xl font-semibold text-slate hover:text-clay transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="mt-6 text-stone leading-relaxed">
            Our project intake form is coming soon. In the meantime, email us
            with your project details and we will get back to you promptly.
          </p>
        </div>
      </Section>

      <Section bg="bone">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl border border-stone/15 bg-white p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Customers
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate">
              Describe Your Project
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              Send us an email with the basics: what type of work you need, the
              property location, and any timeline considerations. We will
              review your request and follow up with next steps.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-stone">
              <li className="flex items-start gap-2">
                <span className="text-clay font-bold mt-0.5">1.</span>
                <span>Type of work (roofing, foundation, remodel, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-clay font-bold mt-0.5">2.</span>
                <span>Property address or city</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-clay font-bold mt-0.5">3.</span>
                <span>Any relevant details, photos, or deadlines</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="primary">
                Email Your Project Details
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-stone/15 bg-white p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Subcontractors
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate">
              Join Our Network
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              Interested in working with us? We are always looking for licensed,
              insured professionals across every trade and region of Texas. Email
              us with the following information to get started.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-stone">
              <li className="flex items-start gap-2">
                <span className="text-clay font-bold mt-0.5">1.</span>
                <span>Your trade or specialty</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-clay font-bold mt-0.5">2.</span>
                <span>Service area (cities or regions you cover)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-clay font-bold mt-0.5">3.</span>
                <span>License and insurance information</span>
              </li>
            </ul>
            <div className="mt-8">
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                Email Your Information
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
