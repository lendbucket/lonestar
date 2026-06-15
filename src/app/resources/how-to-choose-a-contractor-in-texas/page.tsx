import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { graph, webPageNode, breadcrumbNode, articleNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "How to Choose a Contractor in Texas | Lone Star" },
  description:
    "A practical guide for Texas property owners on evaluating contractors, verifying licenses, checking references, understanding estimates, and avoiding common hiring mistakes.",
};

export default function HowToChooseContractorPage() {
  const pageUrl = `${SITE_URL}/resources/how-to-choose-a-contractor-in-texas`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph([
              webPageNode({
                url: pageUrl,
                name: "How to Choose a Contractor in Texas",
                description:
                  "A practical guide for Texas property owners on evaluating contractors, verifying licenses, checking references, understanding estimates, and avoiding common hiring mistakes.",
                breadcrumbId: `${pageUrl}#breadcrumb`,
                mainEntityId: `${pageUrl}#article`,
              }),
              breadcrumbNode(pageUrl, [
                { name: "Home", path: "/" },
                { name: "Resources", path: "/resources" },
                { name: "How to Choose a Contractor", path: "/resources/how-to-choose-a-contractor-in-texas" },
              ]),
              articleNode({
                url: pageUrl,
                headline: "How to Choose a Contractor in Texas",
                description:
                  "A practical guide for Texas property owners on evaluating contractors, verifying licenses, checking references, understanding estimates, and avoiding common hiring mistakes.",
                datePublished: "2026-06-14",
              }),
            ])
          ),
        }}
      />

      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            {
              label: "How to Choose a Contractor",
              href: "/resources/how-to-choose-a-contractor-in-texas",
            },
          ]}
        />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Guide
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            How to Choose a Contractor in Texas
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Hiring a contractor is one of the more consequential decisions a
            property owner makes. The right choice means the job gets done well,
            on time, and at a fair price. The wrong choice can mean months of
            headaches, unexpected costs, and work that needs to be redone. This
            guide walks through the key factors to consider when evaluating
            contractors in Texas.
          </p>
        </div>
      </Section>

      {/* Start With the Scope */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Start With a Clear Scope of Work
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Before you contact a single contractor, take time to define what you
            actually need done. This does not have to be a professional-grade
            specification, but you should have a clear idea of the work
            involved, the materials you prefer (if any), and your timeline. The
            more clearly you can describe the project, the more useful and
            comparable the estimates you receive will be.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            When a scope is vague, every contractor will interpret it
            differently. That makes it almost impossible to compare proposals on
            an equal basis. One bid might include demolition and disposal while
            another does not. One might specify a particular brand of material
            while another leaves it open. A written scope of work, even a
            simple one, puts everyone on the same page.
          </p>
        </div>
      </Section>

      {/* Verify Licensing */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Verify Licensing for Licensed Trades
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Texas does not require a general contractor license at the state
            level. However, certain trades do require state licensing. Plumbing,
            electrical, HVAC, and irrigation are all regulated by the Texas
            Department of Licensing and Regulation (TDLR) or the Texas State
            Board of Plumbing Examiners (TSBPE). If your project involves any
            of these trades, the person performing the work must hold the
            appropriate license.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            You can verify a license through the relevant state agency's
            website. Ask the contractor for their license number and look it up.
            If they hesitate or cannot provide one, that is a significant
            warning sign. Unlicensed work on a licensed trade can create
            problems with inspections, insurance claims, and future property
            sales.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            For trades that do not require a state license, such as roofing,
            painting, fencing, and general carpentry, licensing requirements
            vary by city and county. Some municipalities require registration or
            permits for certain types of work. Check with your local building
            department to understand what applies to your project.
          </p>
        </div>
      </Section>

      {/* Insurance */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Confirm Insurance Coverage
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Any contractor you hire should carry, at a minimum, general
            liability insurance and workers compensation coverage. General
            liability protects you if the contractor damages your property
            during the work. Workers compensation protects you from liability if
            a worker is injured on your property.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Ask for a certificate of insurance and verify it is current. Some
            property owners simply take the contractor's word for it, but
            insurance can lapse, and a contractor who was covered last month may
            not be covered today. For larger projects, you can ask to be named
            as an additional insured on the policy, which gives you direct
            notification if the coverage changes.
          </p>
        </div>
      </Section>

      {/* References */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Check References and Past Work
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Any competent contractor should be able to provide references from
            recent projects similar to yours. When you contact those references,
            ask specific questions. Was the work completed on time? Were there
            unexpected costs? How did the contractor handle problems or changes?
            Would the reference hire them again?
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Online reviews can be helpful, but they should not be your only
            source of information. Reviews can be manipulated in both
            directions. A contractor with all five-star reviews and no
            substance behind them may be curating their presence. A contractor
            with a few negative reviews but thoughtful responses and a strong
            overall track record may be the better choice. Look for patterns,
            not just ratings.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            If possible, ask to see completed work in person. Photos are useful,
            but an in-person look at a finished project reveals things that
            pictures do not, such as the quality of trim work, the
            straightness of lines, and how well transitions between materials
            were handled.
          </p>
        </div>
      </Section>

      {/* Getting Estimates */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Get Multiple Estimates and Compare Carefully
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Getting at least three written estimates is standard advice, and it
            is good advice. But comparing estimates is about more than finding
            the lowest number. Look at what each estimate includes and excludes.
            Are materials specified by brand and grade, or left vague? Is
            demolition and disposal included? What about permits and
            inspections? What is the payment schedule?
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            A significantly lower estimate should raise questions, not
            excitement. It often means the contractor is cutting corners on
            materials, skipping steps, or planning to make up the difference
            with change orders once the project is underway. On the other hand,
            the highest estimate is not automatically the best. Price should
            reflect the scope of work, the quality of materials, and a fair
            margin for the contractor to run their business.
          </p>
        </div>
      </Section>

      {/* Red Flags */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Red Flags to Watch For
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Some warning signs should make you pause before moving forward with
            a contractor. These are not guarantees of a bad outcome, but they
            deserve careful consideration.
          </p>
          <ul className="mt-6 space-y-4 text-stone leading-relaxed">
            <li className="flex gap-3">
              <span className="text-clay font-bold mt-0.5 shrink-0">1.</span>
              <span>
                <strong className="text-charcoal">Pressure to sign immediately.</strong> A
                contractor who pushes you to commit on the spot, often with
                claims that a price is only good today, is using a sales tactic,
                not a scheduling constraint. A legitimate contractor will give
                you time to review a proposal.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-bold mt-0.5 shrink-0">2.</span>
              <span>
                <strong className="text-charcoal">Large upfront payment demands.</strong> It
                is reasonable for a contractor to request a deposit, especially
                for material purchases. But a demand for a large percentage of
                the total upfront, before any work begins, is a risk. Payment
                schedules should be tied to milestones or progress.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-bold mt-0.5 shrink-0">3.</span>
              <span>
                <strong className="text-charcoal">No written contract.</strong> If a
                contractor wants to work on a handshake, walk away. A written
                contract protects both parties by documenting the scope,
                timeline, cost, payment terms, and what happens if things
                change.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-bold mt-0.5 shrink-0">4.</span>
              <span>
                <strong className="text-charcoal">Unable or unwilling to provide references.</strong> Every
                contractor had to start somewhere, but if someone claims years of
                experience and cannot produce a single reference, that is a
                problem.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-clay font-bold mt-0.5 shrink-0">5.</span>
              <span>
                <strong className="text-charcoal">No physical address or business presence.</strong> A
                contractor who operates solely through a cell phone with no
                verifiable business address, website, or public presence is
                harder to hold accountable if something goes wrong.
              </span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Questions to Ask */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Questions to Ask Before Hiring
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            The following questions are worth asking any contractor you are
            seriously considering. They are not designed to catch anyone off
            guard. A good contractor will be comfortable answering all of them.
          </p>
          <ul className="mt-6 space-y-3 text-stone leading-relaxed list-disc pl-5">
            <li>How long have you been doing this specific type of work?</li>
            <li>
              Are you licensed for this trade? Can I see your license number?
            </li>
            <li>
              Do you carry general liability insurance and workers compensation?
              Can I get a copy of your certificate of insurance?
            </li>
            <li>Will you pull the required permits for this project?</li>
            <li>Who will be on-site doing the actual work?</li>
            <li>What is your estimated timeline, and what could delay it?</li>
            <li>
              What is included in this estimate, and what is specifically
              excluded?
            </li>
            <li>How do you handle change orders or unexpected issues?</li>
            <li>What is your payment schedule?</li>
            <li>
              Do you offer a warranty on your workmanship? What does it cover and
              for how long?
            </li>
          </ul>
        </div>
      </Section>

      {/* Lone Star Mention */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            How Lone Star Contracting Group Approaches This
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            At Lone Star Contracting Group, we built our model to address many
            of the concerns outlined above. When you work with us, you get a
            single point of contact and a written scope of work before anything
            starts. Licensed trades are handled by licensed professionals in our
            network who carry the required credentials and insurance. We manage
            the project from start to finish, so you do not have to coordinate
            multiple contractors or chase down crews.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            That said, we encourage every property owner to do their due
            diligence, whether they hire us or someone else. The best contractor
            for your project is the one who communicates clearly, scopes the
            work properly, carries the right insurance, holds the necessary
            licenses, and treats your property with respect.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Talk About Your Project?"
        description="We are happy to answer your questions, walk through the scope, and give you a clear proposal with no pressure."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
