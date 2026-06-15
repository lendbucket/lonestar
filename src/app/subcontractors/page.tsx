import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/cities";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import { Section, SectionHeader } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { SubcontractorIntakeForm } from "@/components/SubcontractorIntakeForm";

export const metadata: Metadata = {
  title: "Join Our Subcontractor Network | Work Across Texas",
  description:
    "Join the Lone Star Contracting Group network. Steady work, professional management, and fast pay for licensed and insured subcontractors across every trade in Texas.",
  alternates: { canonical: "/subcontractors" },
};

const benefits = [
  {
    title: "Steady Volume",
    description:
      "We are actively matching projects to crews across every major metro in Texas. A strong profile in our network means consistent work without the sales overhead.",
  },
  {
    title: "One Relationship",
    description:
      "You deal with Lone Star, not a rotating cast of homeowners and property managers. We handle the customer relationship, the scope, and the communication. You focus on the trade.",
  },
  {
    title: "Fast, Reliable Pay",
    description:
      "Completed and verified work gets paid on schedule. No chasing invoices, no net-90 runaround. You do the work, we handle the paperwork.",
  },
  {
    title: "Professional Management",
    description:
      "Jobs come to you scoped and scheduled. We handle the intake, the estimate alignment, and the customer expectations so you walk onto a job that is ready to start.",
  },
  {
    title: "Trade-Matched Projects",
    description:
      "We match projects to your specific trade, experience, and service area. You get work that fits your crew, not overflow from a generalist dispatcher.",
  },
  {
    title: "Grow Your Business",
    description:
      "Prove your quality in our network and the volume follows. We track completion rates, customer satisfaction, and reliability because the best crews deserve the most work.",
  },
];

export default function SubcontractorsHub() {
  return (
    <>
      <section className="bg-slate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "For Subcontractors", href: "/subcontractors" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Subcontractors
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-bone tracking-tight">
              Real Work. Fair Pay. No Runaround.
            </h1>
            <p className="mt-6 text-lg text-bone/70 leading-relaxed">
              Lone Star Contracting Group is building a statewide network of
              licensed, insured trade professionals. If you are tired of
              chasing leads, dealing with flaky customers, and waiting on
              checks, you are in the right place.
            </p>
            <div className="mt-8">
              <Button href="#apply" variant="primary" size="lg">
                Apply to Join
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section bg="white">
        <SectionHeader
          title="Why Join the Network"
          subtitle="What working with Lone Star looks like from the trade side."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg border border-stone/15 p-6"
            >
              <h3 className="text-lg font-semibold text-slate font-serif">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-stone leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight text-center">
            How It Works for Subs
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                step: "01",
                title: "Apply with Your Trade Info",
                desc: "Tell us what you do, where you work, your licensing, and your insurance. We review every application individually.",
              },
              {
                step: "02",
                title: "Vetting and Onboarding",
                desc: "We verify your credentials, review work samples, and confirm your insurance and licensing. Passing vetting puts you in the active network.",
              },
              {
                step: "03",
                title: "Get Matched to Projects",
                desc: "When a project comes in that fits your trade, your area, and your capacity, we reach out with the scope and schedule. You decide if you want the job.",
              },
              {
                step: "04",
                title: "Do the Work, Get Paid",
                desc: "Complete the job to spec, we verify completion with the customer, and you get paid on schedule. Straightforward.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <span className="text-3xl font-bold text-clay/20 font-serif shrink-0 w-12">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Service areas for subs */}
      <Section bg="white">
        <SectionHeader
          title="Where We Need Crews"
          subtitle="We are actively recruiting in every major Texas metro. Select your city for trade-specific opportunities."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/subcontractors/${city.id}`}
              className="rounded-full border border-stone/20 px-5 py-2.5 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* Application form */}
      <Section bg="bone" id="apply">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold tracking-tight text-center">
            Apply to Join Our Network
          </h2>
          <p className="mt-4 text-center text-stone">
            Fill out the form below with your trade information. We review
            every application and respond within two business days.
          </p>
          <div className="mt-8">
            <SubcontractorIntakeForm />
          </div>
        </div>
      </Section>
    </>
  );
}
