import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { Button, CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import { graph, webPageNode, breadcrumbNode, articleNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: "How Subcontractors Get Steady Work | Lone Star" },
  description:
    "A practical look at how trade professionals in Texas can find consistent work, avoid the feast-or-famine cycle, and evaluate different options for building a reliable pipeline.",
};

export default function SubcontractorsSteadyWorkPage() {
  const pageUrl = `${SITE_URL}/resources/how-subcontractors-get-steady-work`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph([
              webPageNode({
                url: pageUrl,
                name: "How Subcontractors Get Steady Work in Texas",
                description:
                  "A practical look at how trade professionals in Texas can find consistent work, avoid the feast-or-famine cycle, and evaluate different options for building a reliable pipeline.",
                breadcrumbId: `${pageUrl}#breadcrumb`,
                mainEntityId: `${pageUrl}#article`,
              }),
              breadcrumbNode(pageUrl, [
                { name: "Home", path: "/" },
                { name: "Resources", path: "/resources" },
                { name: "How Subcontractors Get Steady Work", path: "/resources/how-subcontractors-get-steady-work" },
              ]),
              articleNode({
                url: pageUrl,
                headline: "How Subcontractors Get Steady Work in Texas",
                description:
                  "A practical look at how trade professionals in Texas can find consistent work, avoid the feast-or-famine cycle, and evaluate different options for building a reliable pipeline.",
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
              label: "How Subcontractors Get Steady Work",
              href: "/resources/how-subcontractors-get-steady-work",
            },
          ]}
        />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            For Subcontractors
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            How Subcontractors Get Steady Work in Texas
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            If you are a skilled trade professional in Texas, you already know
            the work itself is not the hard part. The hard part is keeping the
            pipeline full. The feast-or-famine cycle is one of the most
            persistent challenges in the trades, and it affects everyone from
            solo operators to small crews. This article looks at why it happens,
            what the options are, and how to evaluate them honestly.
          </p>
        </div>
      </Section>

      {/* The Problem */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            The Feast-or-Famine Cycle
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Most subcontractors know this pattern well. One month, you have more
            work than you can handle. Calls are coming in, jobs are stacking up,
            and you are turning things down because there are not enough hours
            in the week. Then, almost overnight, the pipeline dries up. The
            phone stops ringing. The next job is not confirmed. You start
            wondering if you need to drop your prices just to stay busy.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            This cycle is not usually about the quality of your work. It is
            about the nature of the business. Most subcontractors are skilled at
            their trade but do not have the time, budget, or interest to run a
            full-time marketing and sales operation alongside their trade work.
            When you are busy working, you stop marketing. When you stop
            marketing, the pipeline eventually dries up. It is a structural
            problem, not a personal failing.
          </p>
        </div>
      </Section>

      {/* Option 1: Word of Mouth */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Option 1: Word of Mouth and Referrals
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            This is where most subcontractors start, and for good reason.
            Referrals from satisfied customers, other tradespeople, and local
            contacts are free, and the leads tend to be high quality. Someone
            who was referred to you already has a degree of trust, which makes
            the sales process shorter and the working relationship smoother.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            The downside is that referrals are unpredictable. You cannot control
            when they come in or how many you get. A strong referral network
            takes years to build and can be disrupted by factors outside your
            control, such as a key referral source retiring, moving, or
            changing industries. Referrals are valuable, but relying on them as
            your only source of work leaves you vulnerable to gaps.
          </p>
        </div>
      </Section>

      {/* Option 2: Lead Gen Platforms */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Option 2: Lead Generation Platforms
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Online lead generation platforms sell you access to customers who
            are looking for your trade in your area. Some charge per lead,
            others charge a monthly fee, and some take a percentage of the job.
            These platforms can produce volume, and for some subcontractors they
            are a meaningful part of their pipeline.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            The challenges are real, though. Many platforms sell the same lead
            to multiple contractors, so you are competing against several others
            for the same job. That drives down close rates and can push you to
            lower your prices to win work. The leads are also of varying
            quality. Some are serious property owners with real projects. Others
            are people casually shopping for prices with no intention of moving
            forward soon.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            There is also the time cost. Responding to leads quickly,
            scheduling estimates, writing proposals, and following up all take
            time away from billable work. If your close rate on platform leads
            is low, the cost per acquired job can be higher than it looks on
            the surface.
          </p>
        </div>
      </Section>

      {/* Option 3: GC Relationships */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Option 3: Working With General Contractors
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Many subcontractors build their pipeline by establishing
            relationships with general contractors who feed them work
            consistently. This model can provide a steady stream of projects
            without the subcontractor needing to do much marketing. The general
            contractor handles the customer relationship, and the subcontractor
            handles the trade work.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            The upside is consistency. A good relationship with a busy general
            contractor can keep you working for months or years. The downside
            is that your income and schedule depend heavily on that
            relationship. If the general contractor slows down, loses a major
            client, or starts using a different sub, your work dries up
            quickly. You are also typically competing on price, and margins can
            be thin because the general contractor needs to mark up your work
            for their own overhead and profit.
          </p>
        </div>
      </Section>

      {/* Option 4: Contracting Network */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Option 4: Joining a Contracting Network
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            A contracting network operates differently from a lead gen platform
            or a traditional GC relationship. In a network model, a contracting
            company acquires and manages customer relationships, scopes work,
            and assigns projects to vetted professionals based on trade,
            location, and availability. The subcontractor does the trade work.
            The contracting company handles the customer, the scope, the
            billing, and the follow-through.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            The advantage for the subcontractor is that the sales, marketing,
            and customer management workload is largely removed. You are not
            chasing leads, writing proposals, or handling billing disputes. You
            get matched to work that fits your trade and area, you execute the
            job, and you get paid. The scope is clear before you start, and the
            customer expectations are managed by the contracting company.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            The trade-off is that you are not setting the price or owning the
            customer relationship. The contracting company sets the project
            pricing based on the scope and market, and you agree to your
            compensation before accepting the job. For subcontractors who
            prefer to focus on their trade rather than running a full business
            operation, this model can provide a reliable base of work.
          </p>
        </div>
      </Section>

      {/* Evaluating Your Options */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Evaluating What Works for You
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            There is no single right answer for every subcontractor. The best
            approach depends on your trade, your market, how much
            administrative work you are willing to do, and what stage your
            business is in. Many successful subcontractors use a combination of
            these approaches, maintaining a referral network while also working
            with a contracting group or taking occasional leads from a platform.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            The key is to be honest about where your time is best spent. If you
            are a skilled electrician or roofer who loses half your week to
            phone calls, estimates, and invoicing, that is time you are not
            spending on billable work. If you enjoy the business side and want
            full control over pricing and customer relationships, then building
            your own brand may be the better path. Neither choice is wrong. It
            depends on what you want your working life to look like.
          </p>
        </div>
      </Section>

      {/* Lone Star Network */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            The Lone Star Network Model
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Lone Star Contracting Group operates the network model described
            above. We acquire and manage customer relationships across Texas,
            scope projects, and match them to qualified professionals in our
            network. Our subcontractors handle the trade work while we manage
            the customer, the project coordination, and the administrative
            overhead.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            We are always looking for skilled, reliable trade professionals to
            join our network. If you are interested in learning more about how
            it works and whether it might be a good fit for your trade and
            region, we would like to hear from you.
          </p>
          <div className="mt-8">
            <Button href="/subcontractors" variant="primary" size="lg">
              Learn About Joining Our Network
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Focus on Your Trade?"
        description="Join the Lone Star network and get matched to projects that fit your skills and location. We handle the rest."
        buttonText="Apply to Join"
        buttonHref="/subcontractors"
        secondaryText="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
