import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { Button, CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero, SplitImageSection, PhotoBand } from "@/components/PageHero";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "About Lone Star Contracting Group" },
  description:
    "Learn how Lone Star Contracting Group delivers any trade anywhere in Texas through one accountable company backed by a vetted network of professionals.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        image="/images/lone-star-crew-at-work.jpg"
        imageAlt="Lone Star Contracting crew collaborating on a Texas jobsite"
      >
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
        <div className="mt-6 max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Who We Are
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-bone leading-[1.1]">
            One Company. Every Trade. All of Texas.
          </h1>
          <p className="mt-6 text-lg text-bone/80 leading-relaxed">
            Lone Star Contracting Group exists to solve a straightforward
            problem: getting quality trade work done across a state as large as
            Texas should not require a property owner to become a general
            contractor themselves.
          </p>
        </div>
      </PageHero>

      {/* Mission -- text-led centered */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-stone leading-relaxed">
            We are a single point of contact for
            commercial and residential contracting, backed by a vetted network of
            professionals who do the actual trade work.
          </p>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Our mission is to deliver any trade anywhere in Texas through one
            accountable company. That means you deal with us. We deal with the
            crews, the scheduling, the licensing verification, and the follow
            through. When something needs to get built, repaired, or replaced,
            you make one call and we handle the rest.
          </p>
        </div>
      </Section>

      {/* How the Model Works -- image-led split */}
      <SplitImageSection
        image="/images/lone-star-project-planning.jpg"
        imageAlt="Construction professionals reviewing project plans"
        imagePosition="right"
        bg="light"
      >
        <SectionHeader
          title="How the Model Works"
          subtitle="We are not a marketplace and we are not a staffing agency. We are a contracting company that operates through a network."
          centered={false}
        />
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-slate font-serif">
              We Control the Job
            </h3>
            <p className="mt-3 text-stone leading-relaxed">
              Every project runs through us. We own the customer relationship,
              scope the work, set expectations, and manage communication from
              first contact through completion. If something goes sideways, you call us.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate font-serif">
              The Network Does the Trade Work
            </h3>
            <p className="mt-3 text-stone leading-relaxed">
              Texas is too big and the trades are too specialized for any single
              crew to cover everything well. We built a network of trade-specific professionals
              across every region of the state, each vetted for
              competency, licensing where required, and insurance.
            </p>
          </div>
        </div>
      </SplitImageSection>

      {/* Full-bleed photo band */}
      <PhotoBand
        image="/images/lone-star-construction-site.jpg"
        imageAlt="Construction site in Texas"
      />

      {/* Why This Model Exists */}
      <Section bg="bone">
        <SectionHeader
          title="Why This Model Exists"
          centered={false}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-stone/15 bg-white p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Customers
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-serif">
              You Are Tired of Juggling Contractors
            </h3>
            <p className="mt-4 text-stone leading-relaxed">
              You have a commercial property that needs a roof, new lighting, and
              plumbing work. That is three different contractors, three different
              schedules, three different invoices, and three different people to
              chase when something is not right. Most property owners and
              managers did not sign up to be project managers, but that is
              exactly what the industry forces you to become.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              We take that off your plate. You tell us what needs to happen, and
              we figure out the rest. One contract, one schedule, one point of
              accountability.
            </p>
          </div>

          <div className="rounded-xl border border-stone/15 bg-white p-8 sm:p-10">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Subcontractors
            </p>
            <h3 className="mt-3 text-2xl font-semibold font-serif">
              You Want to Focus on Your Trade
            </h3>
            <p className="mt-4 text-stone leading-relaxed">
              Good tradespeople are not always good at sales, marketing, or
              managing customer expectations. That is not a knock. It is just a
              different skill set. Most subcontractors want steady work, clear
              scopes, and timely payment.
            </p>
            <p className="mt-3 text-stone leading-relaxed">
              Our network gives skilled professionals a pipeline of matched
              work without the sales and admin overhead. We handle the customer,
              the scope, and the paperwork. They show up, do what they do best,
              and get paid.
            </p>
          </div>
        </div>
      </Section>

      {/* What We Are NOT */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title="What We Are Not"
            subtitle="There are a lot of platforms and services that connect people with contractors. We are not one of them."
          />
          <div className="space-y-6">
            <div className="border-b border-stone/10 pb-6">
              <h3 className="text-lg font-semibold text-slate font-serif">
                Not a Lead Gen Platform
              </h3>
              <p className="mt-2 text-stone leading-relaxed">
                We do not sell your information to five contractors and let them
                fight over the job. When you contact us, you are talking to
                the company that will be responsible for the work.
              </p>
            </div>
            <div className="border-b border-stone/10 pb-6">
              <h3 className="text-lg font-semibold text-slate font-serif">
                Not a Marketplace
              </h3>
              <p className="mt-2 text-stone leading-relaxed">
                We do not list contractors and let you sort through profiles,
                reviews, and availability. We select
                the right professional for the job. You do not shop. You get
                matched.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate font-serif">
                Not a Referral Service
              </h3>
              <p className="mt-2 text-stone leading-relaxed">
                A referral service hands you a name and walks away. We own the job. If
                something is not right, it is our problem to fix, not yours
                to chase.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Credibility */}
      <Section bg="light">
        <SectionHeader
          title="Built for Scale and Accountability"
          subtitle="We do not make claims we cannot back up. Here is what is structurally true about how we operate."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Statewide Coverage
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              Our network spans every major metro and region in Texas. From El
              Paso to Beaumont, from the Panhandle to the Valley, we have
              professionals positioned to take on work where you need it done.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Trade-by-Trade Matching
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              Every job is matched to professionals who specialize in that
              specific trade. A foundation repair job goes to foundation
              specialists, not a general handyman.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              Licensed Where Required
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              Plumbing, electrical, HVAC, and irrigation work in Texas requires
              specific licenses. Those trades are delivered by licensed
              professionals who hold the appropriate credentials.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 border border-stone/10">
            <h3 className="text-lg font-semibold text-slate font-serif">
              One Point of Accountability
            </h3>
            <p className="mt-2 text-sm text-stone leading-relaxed">
              You deal with Lone Star Contracting Group. Not a rotating cast of
              subcontractors. One company,
              one contact, one line of responsibility from start to finish.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Let Us Handle It"
        description="Tell us about your project. Whether it is a single trade or a multi-scope job, you will have one point of contact and a clear path forward."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        secondaryText="Join Our Network"
        secondaryHref="/subcontractors"
      />
    </>
  );
}
