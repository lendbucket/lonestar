import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { Button, CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "The Lone Star Standard | Our Method" },
  description:
    "The five pillars behind every Lone Star Contracting Group project: vetted network, trade-by-trade matching, licensed where required, one point of accountability, and completion verification.",
};

const pillars = [
  {
    number: "01",
    title: "Vetted Network",
    description:
      "Every professional in our network goes through a screening process before they touch a job. We verify trade competency through work history and references. We confirm licensing for trades that require it under Texas law. We validate insurance coverage. And we check references from previous customers and general contractors who have worked with them.",
    detail:
      "This is not a one-time check. Licensing and insurance are re-verified on a recurring basis. If a professional in the network falls out of compliance, they come off active status until the issue is resolved. We would rather turn down a job than send the wrong crew.",
  },
  {
    number: "02",
    title: "Trade-by-Trade Matching",
    description:
      "A roofing job goes to roofers. A foundation repair goes to foundation specialists. A commercial electrical project goes to licensed electricians who work commercial. This sounds obvious, but the industry is full of generalist crews taking on specialist work because the job was available.",
    detail:
      "We match every project to professionals based on the specific trade, the scope of work, the property type, and the region. A residential re-pipe in San Antonio and a commercial plumbing build-out in Dallas are not the same job, and they do not go to the same crew.",
  },
  {
    number: "03",
    title: "Licensed Where Required",
    description:
      "Texas requires specific licenses for plumbing, electrical, HVAC, and irrigation work. Those trades are delivered by licensed professionals in our network who hold the appropriate state credentials and pull the required permits. This is not optional and it is not flexible.",
    detail:
      "We verify license status before assigning any regulated trade work. The licensed professional is the one who performs or directly supervises the work and pulls the permit under their license. We do not cut corners on compliance because the consequences fall on the property owner as much as anyone else.",
  },
  {
    number: "04",
    title: "One Point of Accountability",
    description:
      "When you hire Lone Star Contracting Group, you deal with us. You do not need to manage multiple subcontractors, chase down different crews for updates, or figure out whose fault it is when something is not right. We are the single point of contact and the single point of responsibility.",
    detail:
      "This means one contract, one schedule, one line of communication. If a callback is needed, you call us. If there is a scheduling conflict, we sort it out. If the work is not right, we own it. That is what accountability actually looks like in contracting.",
  },
  {
    number: "05",
    title: "Completion Verification",
    description:
      "Before any job closes, the work is reviewed. We verify that the scope was completed as agreed, that the quality meets the standard, and that the site is left clean. If something is off, it gets addressed before the project is marked complete.",
    detail:
      "This step exists because too many contractors consider the job done the moment the crew leaves the site. We consider the job done when the work has been verified and the customer confirms it. That is the difference between finishing a job and actually completing one.",
  },
];

export default function MethodPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs items={[{ label: "The Lone Star Standard", href: "/method" }]} />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Our Method
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            The Lone Star Standard
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            The Lone Star Standard is the operating framework behind every
            project we take on. It is not a marketing phrase. It is a set of
            five non-negotiable pillars that govern how we vet professionals,
            match them to work, maintain accountability, and verify completion.
            Every job, every trade, every time. The Standard exists because
            consistency in contracting should not be the exception. It should be
            the baseline.
          </p>
        </div>
      </Section>

      {/* Five Pillars */}
      <Section bg="light">
        <SectionHeader
          title="Five Pillars"
          subtitle="Each pillar addresses a specific failure point in how contracting typically works. Together, they form a process that keeps work consistent and accountable."
        />
        <div className="space-y-16 max-w-4xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10"
            >
              <span className="text-5xl font-bold text-clay/15 font-serif leading-none">
                {pillar.number}
              </span>
              <div>
                <h3 className="text-2xl font-semibold text-slate font-serif">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-stone leading-relaxed">
                  {pillar.description}
                </p>
                <p className="mt-3 text-stone leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gap and Fix */}
      <Section bg="bone">
        <SectionHeader
          title="The Gap the Standard Fills"
          subtitle="Most contracting problems are not about skill. They are about structure. Here is the difference between the typical experience and what the Standard delivers."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl border border-stone/15 bg-white p-8 sm:p-10">
            <p className="text-stone font-semibold text-sm tracking-wide uppercase font-sans">
              Where Most People Start
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-serif text-slate">
              The Typical Experience
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-stone/30 shrink-0" />
                <span className="text-stone leading-relaxed">
                  Juggling multiple contractors with separate schedules,
                  contracts, and communication styles
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-stone/30 shrink-0" />
                <span className="text-stone leading-relaxed">
                  No single point of accountability when work falls short or
                  timelines slip
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-stone/30 shrink-0" />
                <span className="text-stone leading-relaxed">
                  Hoping the crew that shows up is actually qualified for the
                  specific trade
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-stone/30 shrink-0" />
                <span className="text-stone leading-relaxed">
                  Chasing callbacks and trying to get someone back on site when
                  something is not right
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-stone/30 shrink-0" />
                <span className="text-stone leading-relaxed">
                  No verification step before the job is considered done
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-clay/20 bg-white p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Where the Standard Puts You
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-serif text-slate">
              The Lone Star Experience
            </h3>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  One contact for every trade on the project, regardless of how
                  many crews are involved
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Clear accountability that does not shift between companies or
                  people
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Professionals matched to the job by trade, scope, and region,
                  not by whoever was available
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  One call to resolve any issue. We handle the coordination with
                  the crew, not you
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Work is verified before the job closes. No ambiguity about
                  whether it was done right
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Closing Statement */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Standards Only Work If They Are Enforced
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Anyone can write a list of values on a website. The difference is
            whether those values are built into the actual operations. The Lone
            Star Standard is not aspirational. It is procedural. Every job
            goes through the same vetting, the same matching, the same
            accountability structure, and the same verification process. That is
            what makes it a standard and not a suggestion.
          </p>
          <div className="mt-8">
            <Button href="/how-it-works" variant="outline">
              See How a Project Runs
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="See the Standard in Action"
        description="Submit your project and experience what contracting looks like when it is built on consistency and accountability."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        secondaryText="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
