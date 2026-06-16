import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/Section";
import { Button, CTABanner } from "@/components/CTA";
import { PageHero, SplitImageSection, PhotoBand } from "@/components/PageHero";

const services = [
  {
    name: "Roofing",
    href: "/services/roofing",
    description: "Repair, replacement, metal, TPO commercial, and storm damage restoration.",
    image: "/images/lone-star-roofing.jpg",
  },
  {
    name: "Foundation Repair",
    href: "/services/foundation-repair",
    description: "Pier and beam, slab leveling, and structural stabilization across Texas soils.",
    image: "/images/lone-star-foundation-repair.jpg",
  },
  {
    name: "Plumbing",
    href: "/services/plumbing",
    description: "Licensed professionals handling residential and commercial plumbing systems.",
    image: "/images/lone-star-plumbing.jpg",
  },
  {
    name: "Electrical",
    href: "/services/electrical",
    description: "Licensed electricians for wiring, panels, lighting, and code compliance.",
    image: "/images/lone-star-electrical.jpg",
  },
  {
    name: "Concrete",
    href: "/services/concrete-flatwork",
    description: "Driveways, slabs, sidewalks, and commercial flatwork across all conditions.",
    image: "/images/lone-star-concrete-work.jpg",
  },
  {
    name: "Remodels",
    href: "/services/residential-remodels",
    description: "Kitchen, bath, and whole-home renovations managed under one contract.",
    image: "/images/lone-star-home-remodel.jpg",
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
      {/* ---- Hero with full-bleed photo ---- */}
      <PageHero
        image="/images/lone-star-texas-construction-crew.jpg"
        imageAlt="Construction crew at work on a Texas jobsite at golden hour"
      >
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Statewide Texas Contractor
          </p>
          <h1 className="mt-4 font-bold text-bone tracking-tight leading-[1.1]" style={{ fontSize: "clamp(2rem, 6vw + 0.5rem, 3.75rem)" }}>
            One Call. Every Trade.
            <br />
            All of Texas.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-bone/80 leading-relaxed max-w-2xl">
            Commercial and residential contracting delivered through one
            accountable point of contact. No chasing subcontractors. No
            juggling crews. One company that handles it all.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="outline" size="lg" className="w-full sm:w-auto border-bone/40 text-bone hover:bg-bone hover:text-slate">
              View All Services
            </Button>
          </div>
        </div>
      </PageHero>

      {/* ---- Stat ribbon ---- */}
      <section className="bg-slate border-t border-bone/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <p className="font-serif font-bold text-clay" style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3rem)" }}>45</p>
              <p className="mt-2 text-sm text-bone/60 font-sans">Trades Under One Contract</p>
            </div>
            <div>
              <p className="font-serif font-bold text-clay" style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3rem)" }}>7</p>
              <p className="mt-2 text-sm text-bone/60 font-sans">Major Texas Metros</p>
            </div>
            <div>
              <p className="font-serif font-bold text-clay" style={{ fontSize: "clamp(2rem, 5vw + 0.5rem, 3rem)" }}>4</p>
              <p className="mt-2 text-sm text-bone/60 font-sans">Steps to Verified Completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Image-led split: For Property Owners ---- */}
      <SplitImageSection
        image="/images/lone-star-crew-at-work.jpg"
        imageAlt="Lone Star Contracting crew working on a Texas property"
        imagePosition="right"
        bg="white"
      >
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
        <div className="mt-8">
          <Button href="/services" variant="primary">
            Explore Services
          </Button>
        </div>
      </SplitImageSection>

      {/* ---- Text-led section: For Subcontractors ---- */}
      <section className="bg-bone">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              For Subcontractors
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
              Steady Work. Fast Pay.
            </h2>
            <p className="mt-4 text-stone leading-relaxed max-w-2xl mx-auto">
              Join a network that feeds you real volume, manages the customer
              relationship so you can focus on the trade, and pays on time. We
              are always looking for licensed, insured professionals across
              every trade and every region of Texas.
            </p>
            <div className="mt-8">
              <Button href="/subcontractors" variant="secondary">
                Join Our Network
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Hairline ---- */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-stone/10" />
      </div>

      {/* ---- Method teaser: asymmetric two-column ---- */}
      <SplitImageSection
        image="/images/lone-star-quality-inspection.jpg"
        imageAlt="Quality inspection on a completed contracting project"
        imagePosition="left"
        bg="white"
      >
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
      </SplitImageSection>

      {/* ---- Featured Services with images ---- */}
      <Section bg="bone">
        <SectionHeader
          title="Every Trade. One Company."
          subtitle="From roofing and foundation work to licensed mechanical trades and full remodels, we deliver it all through one accountable point of contact."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-lg overflow-hidden border border-stone/15 hover:border-clay/30 hover:shadow-sm transition-all bg-white"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.name} services by Lone Star Contracting`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate/10" aria-hidden="true" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate group-hover:text-clay transition-colors font-serif">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-stone leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-clay">
                  Learn more
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* ---- Full-bleed photo band ---- */}
      <PhotoBand
        image="/images/lone-star-construction-site.jpg"
        imageAlt="Active construction site in Texas"
      />

      {/* ---- How It Works: alternating layout ---- */}
      <Section bg="white">
        <SectionHeader
          title="How It Works"
          subtitle="Four steps from your first call to verified completion."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="inline-block font-serif text-5xl font-bold text-clay/15">
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

      {/* ---- Service Areas ---- */}
      <Section bg="light">
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

      {/* ---- Pull quote ---- */}
      <section className="bg-slate py-10 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif font-semibold text-bone leading-snug tracking-tight" style={{ fontSize: "clamp(1.25rem, 3vw + 0.5rem, 2.25rem)" }}>
            One contract. One schedule. One point of accountability.
            That is how contracting should work.
          </blockquote>
        </div>
      </section>

      {/* ---- CTA ---- */}
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
