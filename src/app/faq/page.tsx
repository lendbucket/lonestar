import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${SITE_NAME}`,
  description:
    "Answers to common questions about working with Lone Star Contracting Group, our services across Texas, our process, and how subcontractors can join our network.",
};

const faqs = {
  general: {
    heading: "General",
    questions: [
      {
        q: "What does Lone Star Contracting Group do?",
        a: "We are a Texas statewide contracting company that handles commercial and residential projects across every major trade. Rather than employing every trade in-house, we operate through a vetted network of professionals who specialize in specific trades and regions. You work with us as your single point of contact, and we coordinate the right people, permits, and scheduling to get the job done.",
      },
      {
        q: "How is Lone Star different from a referral service or lead generation platform?",
        a: "A referral service gives you a name and walks away. A lead generation platform sells your information to multiple contractors. We do neither. Lone Star Contracting Group is the contracting company on the job. We own the scope, manage the project, and remain accountable from start to finish. If something is not right, you call us, not a third party who has already moved on.",
      },
      {
        q: "What areas of Texas do you cover?",
        a: "We operate statewide. Our network includes professionals in every major metro area and surrounding regions, from Dallas-Fort Worth and Houston to San Antonio, Austin, El Paso, the Rio Grande Valley, and everywhere in between. If you have a project in Texas, we can likely staff it with qualified professionals in that area.",
      },
      {
        q: "Do you work with both commercial and residential clients?",
        a: "Yes. We handle projects for commercial property owners, facility managers, and residential homeowners. The scope and complexity vary, but the model is the same: one point of contact, vetted professionals, and clear accountability throughout the project.",
      },
    ],
  },
  services: {
    heading: "Services and Trades",
    questions: [
      {
        q: "What trades do you cover?",
        a: "We cover a wide range of trades including roofing, foundation repair, concrete, fencing, painting, drywall, framing, flooring, plumbing, electrical, HVAC, irrigation, siding, gutters, demolition, and general remodeling. If a trade is not listed here, reach out anyway. Our network is broad and continues to grow.",
      },
      {
        q: "Do you handle licensed trades like plumbing and electrical?",
        a: "Yes. Plumbing, electrical, HVAC, and irrigation work in Texas require specific state licenses. These trades are performed by licensed professionals within our network who hold the required credentials and pull the necessary permits. Lone Star Contracting Group coordinates the project, but the licensed trade work is executed by individuals who carry the appropriate license for that discipline.",
      },
      {
        q: "Can you handle multi-trade projects?",
        a: "Absolutely. Multi-trade projects are one of the core reasons our model exists. Instead of hiring separate contractors for roofing, electrical, and plumbing and then trying to coordinate them yourself, you work with us. We scope the entire project, assign the right professionals for each trade, and manage the scheduling so the work gets done in the right order.",
      },
      {
        q: "Do you do emergency or after-hours work?",
        a: "We can accommodate urgent requests depending on the trade and location. If you have an emergency situation, contact us and we will do our best to get someone on it quickly. Response times depend on the availability of qualified professionals in your area and the nature of the work.",
      },
    ],
  },
  process: {
    heading: "Process and Pricing",
    questions: [
      {
        q: "How do I get started?",
        a: "Contact us through our website or give us a call. Tell us about your project, including the type of work, the location, and any timeline considerations. We will follow up with questions if needed, scope the job, and provide you with a clear proposal. There is no obligation and no cost for the initial consultation.",
      },
      {
        q: "How does pricing work?",
        a: "We provide project-based pricing after scoping the work. You will receive a written proposal that outlines the scope, cost, and timeline before any work begins. We do not charge hourly rates that leave you guessing at the final bill. If the scope changes during the project, we discuss it with you and agree on any adjustments before proceeding.",
      },
      {
        q: "How long does a typical project take?",
        a: "Timelines vary widely depending on the trade, scope, and complexity. A straightforward fence installation might take a few days. A commercial build-out with multiple trades could take weeks. We provide estimated timelines in our proposal and keep you informed throughout the process if anything changes.",
      },
      {
        q: "What happens if I am not satisfied with the work?",
        a: "You contact us directly. Because we own the customer relationship and manage the project, any issues go through Lone Star Contracting Group. We work with the assigned professionals to resolve the problem. You are not left chasing down a subcontractor you have never spoken with.",
      },
    ],
  },
  subcontractors: {
    heading: "For Subcontractors",
    questions: [
      {
        q: "How do I join the Lone Star network?",
        a: "Visit our subcontractor page and submit your information. We will review your trade experience, licensing where applicable, insurance coverage, and the regions you serve. If you are a good fit, we will walk you through how jobs get assigned and what to expect as part of the network.",
      },
      {
        q: "What are the requirements to join?",
        a: "At a minimum, you need to carry appropriate insurance for your trade and be able to demonstrate competency in your field. For licensed trades such as plumbing, electrical, HVAC, and irrigation, you must hold a valid Texas license. We also look at your work history, reliability, and the regions you are willing to cover.",
      },
      {
        q: "How does pay work for subcontractors?",
        a: "We pay on a per-project basis with clear terms agreed upon before the job starts. You know the scope and the compensation upfront. We aim to pay promptly after work is completed and approved. The specifics, including payment schedule and method, are outlined in our subcontractor agreements.",
      },
    ],
  },
};

const allFaqs = Object.values(faqs).flatMap((section) => section.questions);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            FAQ
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Whether you are a property owner exploring your options or a trade
            professional considering our network, these are the questions we
            hear most often. If your question is not answered here, reach out
            and we will get you a straight answer.
          </p>
        </div>
      </Section>

      {/* General */}
      <Section bg="light">
        <SectionHeader title={faqs.general.heading} centered={false} />
        <div className="space-y-10 max-w-3xl">
          {faqs.general.questions.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold text-slate font-serif">
                {faq.q}
              </h3>
              <p className="mt-3 text-stone leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section bg="bone">
        <SectionHeader title={faqs.services.heading} centered={false} />
        <div className="space-y-10 max-w-3xl">
          {faqs.services.questions.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold text-slate font-serif">
                {faq.q}
              </h3>
              <p className="mt-3 text-stone leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section bg="white">
        <SectionHeader title={faqs.process.heading} centered={false} />
        <div className="space-y-10 max-w-3xl">
          {faqs.process.questions.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold text-slate font-serif">
                {faq.q}
              </h3>
              <p className="mt-3 text-stone leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Subcontractors */}
      <Section bg="light">
        <SectionHeader title={faqs.subcontractors.heading} centered={false} />
        <div className="space-y-10 max-w-3xl">
          {faqs.subcontractors.questions.map((faq) => (
            <div key={faq.q}>
              <h3 className="text-lg font-semibold text-slate font-serif">
                {faq.q}
              </h3>
              <p className="mt-3 text-stone leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Still Have Questions?"
        description="Reach out and we will give you a straight answer. No sales pitch, no runaround."
        buttonText="Contact Us"
        buttonHref="/contact"
        secondaryText="Join Our Network"
        secondaryHref="/subcontractors"
      />
    </>
  );
}
