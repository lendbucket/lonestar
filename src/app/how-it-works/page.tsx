import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { Button, CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How It Works | ${SITE_NAME}`,
  description:
    "From project submission to verified completion, here is exactly how Lone Star Contracting Group manages your contracting project across any trade in Texas.",
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs items={[{ label: "How It Works", href: "/how-it-works" }]} />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            The Process
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            How It Works
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            We built this process to eliminate the most common frustrations in
            contracting: unclear scopes, mismatched crews, communication gaps,
            and jobs that close before the work is actually done right. Every
            project follows the same four steps, whether it is a single-trade
            residential repair or a multi-scope commercial build-out.
          </p>
        </div>
      </Section>

      {/* Step 1 */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 max-w-5xl mx-auto">
          <div className="flex items-start">
            <span className="text-6xl sm:text-7xl font-bold text-clay/15 font-serif leading-none">
              01
            </span>
          </div>
          <div>
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Step One
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Submit Your Project
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              Everything starts with your project details. You can reach us
              through our online intake form, by phone, or by email. We ask
              specific questions upfront: What type of work do you need? Where is
              the property? What is the scope? Is this commercial or residential?
              Are there any time constraints?
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              We ask these questions early because vague scopes lead to bad
              estimates, wrong crews, and wasted time. The more detail you can
              provide at intake, the faster and more accurately we can match your
              project. Photos, measurements, and any existing documentation are
              always helpful.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              If you are not sure exactly what you need, that is fine too. Tell
              us the problem and we will help you define the scope during the
              review step.
            </p>
          </div>
        </div>
      </Section>

      {/* Step 2 */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 max-w-5xl mx-auto">
          <div className="flex items-start">
            <span className="text-6xl sm:text-7xl font-bold text-clay/15 font-serif leading-none">
              02
            </span>
          </div>
          <div>
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Step Two
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              We Scope and Match
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              Once we have your project details, we review the scope internally.
              If something is unclear or incomplete, we reach out with clarifying
              questions. We are not going to guess at what you need and hope it
              works out. We want to get it right before anyone shows up on site.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              After the scope is confirmed, we match the project to the right
              professionals in our network. Matching is based on the specific
              trade, the scope of work, the property type (commercial or
              residential), the location, and availability. For licensed trades
              like plumbing, electrical, HVAC, and irrigation, the work is
              assigned to licensed professionals in our network who hold the
              required credentials.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              Multi-trade projects get matched to the right professional for each
              trade. A job that involves roofing, electrical, and concrete does
              not go to one generalist crew. Each trade is handled by a
              specialist, and we coordinate between them so you do not have to.
            </p>
          </div>
        </div>
      </Section>

      {/* Step 3 */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 max-w-5xl mx-auto">
          <div className="flex items-start">
            <span className="text-6xl sm:text-7xl font-bold text-clay/15 font-serif leading-none">
              03
            </span>
          </div>
          <div>
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Step Three
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Work Gets Done
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              This is where the job moves from planning to execution. The
              matched professionals are scheduled, materials are coordinated,
              and the work begins. Throughout the project, you have one point of
              contact at Lone Star Contracting Group. You do not need to manage
              the crew directly, coordinate schedules between trades, or chase
              updates.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              We manage the day-to-day coordination. If there is a scheduling
              change, a materials delay, or a scope adjustment needed, we handle
              the communication and the logistics. You get updates from us, not
              from a subcontractor you have never spoken to before.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              For multi-trade projects, we sequence the work so trades are not
              stepping on each other. The foundation work finishes before the
              framing starts. The rough-in plumbing and electrical happen before
              the drywall goes up. This is basic project management, but it is
              remarkable how often it gets overlooked when there is no one
              coordinating the full picture.
            </p>
          </div>
        </div>
      </Section>

      {/* Step 4 */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 max-w-5xl mx-auto">
          <div className="flex items-start">
            <span className="text-6xl sm:text-7xl font-bold text-clay/15 font-serif leading-none">
              04
            </span>
          </div>
          <div>
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Step Four
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
              Verification and Close
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              A job is not done just because the crew left the site. Before any
              project closes, we verify the work. This means reviewing that the
              scope was completed as agreed, the quality meets the standard, and
              the site is clean. If licensed trade work was performed, we confirm
              that permits were pulled and inspections passed where required.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              If something is not right, it gets addressed before the job is
              marked complete. We do not close a project and then hope you do
              not notice an issue two weeks later. The verification step exists
              specifically to catch problems while the crew is still engaged and
              the scope is fresh.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              Once the work is verified and you are satisfied, the job closes
              clean. No loose ends, no lingering punch list items, no
              unanswered questions about whether something was actually finished.
            </p>
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section bg="bone">
        <SectionHeader
          title="What to Expect as a Customer"
          subtitle="Transparency about how we work means no surprises. Here is what the experience looks like from your side."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Communication
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              You will have a single point of contact who knows your project.
              You will not need to explain the job from scratch every time you
              call. We proactively update you at key milestones: when the crew is
              scheduled, when work begins, when it is substantially complete,
              and when verification is done.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Timelines
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              We provide timeline estimates based on the scope, trade
              availability, and any permitting requirements. We are honest about
              timelines. If a project is going to take three weeks, we say three
              weeks. We do not tell you one week and then drag it out. If
              something changes, you hear from us immediately.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Pricing
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              You will receive a clear scope and pricing before work begins. If
              the scope changes mid-project, we discuss it with you before any
              additional costs are incurred. There are no surprise charges and
              no hidden fees. The price we agree on is the price, unless you
              approve a change in writing.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Site Access
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              We coordinate site access with you ahead of time. Crews arrive
              when expected. If access requirements change, we communicate the
              adjustment in advance. For commercial properties, we work with
              your property management team to schedule around tenant needs and
              building access protocols.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Issue Resolution
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              If something is not right during or after the project, you contact
              us. Not the crew, not a subcontractor, not a third party. We own
              the resolution process. The issue gets documented, addressed, and
              resolved through us. That is what one point of accountability
              means in practice.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Documentation
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              You receive documentation of the completed work, including any
              relevant permits, inspection records, and before/after photos
              where applicable. For commercial clients, we provide documentation
              formatted for your records and any compliance requirements.
            </p>
          </div>
        </div>
      </Section>

      {/* Commercial vs Residential */}
      <Section bg="white">
        <SectionHeader
          title="Commercial vs. Residential"
          subtitle="The four-step process is the same. The execution adapts to the context."
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-xl border border-stone/15 p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Commercial Projects
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-serif">
              Built for Scale and Compliance
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Multi-trade coordination across larger scopes with sequenced
                  scheduling
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Coordination with property managers, tenants, and building
                  management systems
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Documentation formatted for commercial compliance, insurance
                  claims, and property records
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Work scheduled around business operations to minimize
                  disruption
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Portfolio pricing available for property groups with recurring
                  needs across multiple locations
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-stone/15 p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Residential Projects
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-serif">
              Your Home, Handled Right
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Single-trade and multi-trade projects managed with the same
                  process and accountability
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Clear scheduling so you know when crews will be at your home
                  and for how long
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Respectful of your property, your neighbors, and your daily
                  routine
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Direct communication with a point of contact who speaks
                  plainly, not in contractor jargon
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay shrink-0" />
                <span className="text-stone leading-relaxed">
                  Same verification process as commercial: the job is not done
                  until the work is reviewed and you are satisfied
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Why This Process Matters */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Why the Process Matters
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Most contracting problems do not come from bad tradespeople. They
            come from bad process. Wrong crew for the job. No clear scope.
            Nobody coordinating between trades. No one verifying the work before
            the invoice goes out. This four-step process exists to eliminate
            those failure points. It is not complicated. It is just disciplined.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button href="/method" variant="outline" size="lg">
              Learn About the Standard
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="Submit your project details and we will take it from there. One call, one contact, every trade handled."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        secondaryText="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
