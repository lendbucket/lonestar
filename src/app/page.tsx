import Link from "next/link";
import { Section, SectionHeader } from "@/components/Section";
import { Button, CTABanner } from "@/components/CTA";

const services = [
  {
    name: "Roofing",
    href: "/services/roofing",
    description: "Repair, replacement, metal, TPO commercial, and storm damage restoration.",
  },
  {
    name: "Foundation Repair",
    href: "/services/foundation-repair",
    description: "Pier and beam, slab leveling, and structural stabilization across Texas soils.",
  },
  {
    name: "Plumbing",
    href: "/services/plumbing",
    description: "Licensed professionals handling residential and commercial plumbing systems.",
  },
  {
    name: "Electrical",
    href: "/services/electrical",
    description: "Licensed electricians for wiring, panels, lighting, and code compliance.",
  },
  {
    name: "Concrete",
    href: "/services/concrete-flatwork",
    description: "Driveways, slabs, sidewalks, and commercial flatwork across all conditions.",
  },
  {
    name: "Remodels",
    href: "/services/residential-remodels",
    description: "Kitchen, bath, and whole-home renovations managed under one contract.",
  },
];

const cities = [
  { name: "Houston", href: "/texas/houston" },
  { name: "Dallas", href: "/texas/dallas" },
  { name: "San Antonio", href: "/texas/san-antonio" },
  { name: "Austin", href: "/texas/austin" },
  { name: "Fort Worth", href: "/texas/fort-worth" },
  { name: "El Paso", href: "/texas/el-paso" },
  { name: "Corpus Christi", href: "/texas/corpus-christi" },
];

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Submit your project details through our intake form. We ask the right questions upfront so there is no back and forth.",
  },
  {
    number: "02",
    title: "We Match the Right Crew",
    description:
      "Your project is matched to vetted professionals in our network based on trade, location, and scope. Licensed trades go to licensed contractors.",
  },
  {
    number: "03",
    title: "One Point of Contact",
    description:
      "You deal with us, not a revolving door of crews. We manage the schedule, the communication, and the accountability from start to finish.",
  },
  {
    number: "04",
    title: "Verified Completion",
    description:
      "Work is inspected and verified before the job closes. If something is not right, we handle it. No chasing contractors, no loose ends.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Statewide Texas Contractor
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-bone tracking-tight leading-[1.1]">
              One Call. Every Trade.
              <br />
              All of Texas.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-bone/70 leading-relaxed max-w-2xl">
              Commercial and residential contracting delivered through one
              accountable point of contact. No chasing subcontractors. No
              juggling crews. One company that handles it all.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Quote
              </Button>
              <Button href="/services" variant="outline" size="lg">
                View All Services
              </Button>
            </div>
          </div>
        </div>
        <div
          className="absolute top-0 right-0 w-1/3 h-full bg-clay/5 -skew-x-12 translate-x-1/4 hidden lg:block"
          aria-hidden="true"
        />
      </section>

      {/* Two audience split */}
      <Section bg="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-xl border border-stone/15 p-8 sm:p-10 hover:border-clay/30 transition-colors">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Property Owners and Managers
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
              Stop Juggling Contractors
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              Whether it is a roof replacement in Houston, foundation work in
              Dallas, or a full commercial build-out in Austin, you make one
              call. We match the job to vetted professionals, manage every
              detail, and stay accountable until the work is done right.
            </p>
            <div className="mt-6">
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-stone/15 p-8 sm:p-10 hover:border-clay/30 transition-colors">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Subcontractors
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
              Steady Work. Fast Pay.
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              Join a network that feeds you real volume, manages the customer
              relationship so you can focus on the trade, and pays on time. We
              are always looking for licensed, insured professionals across
              every trade and every region of Texas.
            </p>
            <div className="mt-6">
              <Button href="/subcontractors" variant="secondary">
                Join Our Network
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Method teaser */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Our Approach
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">
            The Lone Star Standard
          </h2>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Every job runs through a consistent process: vetting the right
            professionals for the trade, matching them to the project based on
            scope and location, maintaining one clear line of accountability,
            and verifying the work before the job closes. It is not a slogan.
            It is how we operate on every project, every time.
          </p>
          <div className="mt-8">
            <Button href="/method" variant="outline">
              Learn About Our Method
            </Button>
          </div>
        </div>
      </Section>

      {/* Featured Services */}
      <Section bg="white">
        <SectionHeader
          title="Every Trade. One Company."
          subtitle="From roofing and foundation work to licensed mechanical trades and full remodels, we deliver it all through one accountable point of contact."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-lg border border-stone/15 p-6 hover:border-clay/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-stone leading-relaxed">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-clay">
                Learn more
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* How It Works preview */}
      <Section bg="bone">
        <SectionHeader
          title="How It Works"
          subtitle="Four steps from your first call to verified completion."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-4xl font-bold text-clay/20 font-serif">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-slate">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-stone leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/how-it-works" variant="outline">
            See the Full Process
          </Button>
        </div>
      </Section>

      {/* Service Areas */}
      <Section bg="white">
        <SectionHeader
          title="Serving All of Texas"
          subtitle="Active in every major metro, with a network that covers the state."
        />
        <div className="flex flex-wrap justify-center gap-3">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="rounded-full border border-stone/20 px-5 py-2.5 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
            >
              {city.name}
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/texas" variant="outline" size="sm">
            View All Service Areas
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Ready to Get Started?"
        description="Tell us about your project. We will match you with the right professionals and give you a clear path forward."
        buttonText="Get a Free Quote"
        buttonHref="/contact"
        secondaryText="Join Our Network"
        secondaryHref="/subcontractors"
      />
    </>
  );
}
