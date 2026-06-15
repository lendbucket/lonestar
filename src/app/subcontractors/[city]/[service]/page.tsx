import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityById, type City } from "@/data/cities";
import {
  getServiceById,
  getPriorityServices,
  PRIORITY_SERVICE_IDS,
  type Service,
} from "@/data/services";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const serviceId of PRIORITY_SERVICE_IDS) {
      params.push({ city: city.id, service: serviceId });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}): Promise<Metadata> {
  const { city: cityId, service: serviceId } = await params;
  const city = getCityById(cityId);
  const service = getServiceById(serviceId);
  if (!city || !service) return {};

  // Keep every title under 60 characters
  const fullTitle = `${service.name} Subcontractor Jobs ${city.name}, TX`;
  const absoluteTitle = fullTitle.length <= 60 ? fullTitle : `${service.name} Subcontractor Jobs ${city.name}`;

  return {
    title: { absolute: absoluteTitle },
    description: `${service.name} subcontractor opportunities in ${city.name}, Texas. Join the Lone Star Contracting Group network for steady ${service.name.toLowerCase()} work in ${city.county} County. Licensed and insured professionals wanted.`,
    alternates: {
      canonical: `/subcontractors/${city.id}/${service.id}`,
    },
  };
}

function getSubRecruitingContent(service: Service, city: City) {
  const isLicensed = service.licensed;

  const requirements = [
    `Documented experience in ${service.name.toLowerCase()}`,
    "General liability insurance (minimum coverage TBD during onboarding)",
    "Workers compensation coverage or sole proprietor exemption documentation",
    "Ability to serve the greater " + city.name + " and " + city.county + " County area",
    "Reliable communication and scheduling",
  ];

  if (isLicensed) {
    requirements.splice(
      1,
      0,
      `Valid Texas ${service.name.toLowerCase()} license (you hold the license and pull permits)`
    );
  }

  return { requirements };
}

function getServiceByCitySubParagraph(service: Service, city: City): string {
  const hazardMap: Record<string, string[]> = {
    roofing: ["wind", "hail", "hurricane", "storm"],
    "foundation-repair": ["clay", "soil", "limestone", "settling", "subsidence"],
    "concrete-flatwork": ["heat", "soil", "clay", "freeze"],
    fencing: ["wind", "heat", "storm"],
    plumbing: ["water", "humidity", "flooding", "hard water"],
    electrical: ["heat", "storm", "humidity"],
    hvac: ["heat", "humidity", "freeze"],
    "interior-painting": ["humidity", "moisture"],
    "residential-remodels": ["growth", "expansion"],
    "commercial-construction": ["growth", "commercial", "development"],
  };

  const keywords = hazardMap[service.id] || [];
  const matchedHazards = city.climateHazards.filter((h) =>
    keywords.some((k) => h.toLowerCase().includes(k))
  );
  const matchedGround = city.groundConditions.filter((g) =>
    keywords.some((k) => g.toLowerCase().includes(k))
  );

  const builders: Record<string, () => string> = {
    roofing: () => {
      if (matchedHazards.length > 0) {
        const hazardList = matchedHazards.map((h) => h.toLowerCase()).join("; ");
        return `Roofing crews working ${city.name} need to be equipped for ${hazardList}. That means familiarity with wind-rated fastener schedules, impact-resistant material systems, and proper underlayment detailing for this climate. You should be comfortable with both steep-slope residential tear-offs and low-slope commercial systems, because the project mix in this market includes both. Storm season drives surge volume, and crews who can mobilize quickly and document work to insurance standards stay busy year-round.`;
      }
      return `Roofing contractors in ${city.name} need to handle the full range of residential and commercial systems in this climate. Material selection, fastener patterns, and flashing methods all need to be matched to local conditions. Crews who understand the ${city.name} market and can turn work efficiently get consistent volume through our network.`;
    },
    "foundation-repair": () => {
      if (matchedGround.length > 0) {
        const groundList = matchedGround.map((g) => g.toLowerCase()).join("; ");
        return `Foundation work in ${city.name} means dealing with ${groundList} on nearly every job. You need to be set up for pressed pier, steel push pier, and helical pier installation, and you should be able to diagnose differential movement accurately before recommending a repair scope. Drainage correction is almost always part of the conversation here, and contractors who can integrate that into the pier scope deliver better outcomes and fewer callbacks.`;
      }
      return `Foundation contractors working ${city.name} need diagnostic skills and pier installation capability matched to the local soil and bearing conditions. The ability to accurately scope the work, communicate the findings to the homeowner, and execute the repair method suited to the specific site is what keeps you in rotation in this market.`;
    },
    "concrete-flatwork": () => {
      const conditions: string[] = [];
      if (matchedHazards.length > 0) conditions.push(matchedHazards[0].toLowerCase());
      if (matchedGround.length > 0) conditions.push(matchedGround[0].toLowerCase());
      if (conditions.length > 0) {
        return `Concrete crews in ${city.name} have to work around ${conditions.join(" and ")}. You need to know how to adjust mix design and cure timing for this climate, prep subgrades for the local soil conditions, and cut control joints at the right spacing for the slab dimensions. The project mix here includes driveways, commercial slabs, sidewalks, and flatwork repair, and crews who can handle all of those scopes get the most consistent volume.`;
      }
      return `Concrete contractors in ${city.name} need to handle subgrade prep, mix selection, and curing methods suited to the local climate and soil. The work here spans driveways, commercial slabs, walkways, and repair scopes. Crews with the equipment and experience to handle that range stay in steady rotation.`;
    },
    fencing: () => {
      if (matchedHazards.length > 0) {
        const hazardList = matchedHazards.map((h) => h.toLowerCase()).join(" and ");
        return `Fencing contractors in ${city.name} need to build for ${hazardList}. Posts need to be set deeper than the bare minimum, footings sized for lateral wind loads, and materials selected for long-term exposure to these conditions. You should be set up for wood privacy, chain link, iron, and vinyl scopes because the project mix in this market covers all of them. Crews who build to hold up, not just to look good on day one, get repeat volume.`;
      }
      return `Fence crews working ${city.name} need to handle the local soil and climate conditions with proper post depth, footing sizes, and materials rated for the exposure. The scope mix includes residential privacy fencing, commercial chain link, and ornamental iron. Crews who install clean, straight work that holds up over time stay busy.`;
    },
    plumbing: () => {
      const conditions: string[] = [];
      if (matchedGround.length > 0) conditions.push(matchedGround[0].toLowerCase());
      if (matchedHazards.length > 0) conditions.push(matchedHazards[0].toLowerCase());
      if (conditions.length > 0) {
        return `Licensed plumbers working ${city.name} need to be equipped for ${conditions.join(" and ")}. Slab leak detection, repiping, water heater replacement, and drain line work are the bread and butter in this market. You need to understand how the local ground conditions affect pipe routing and material selection, and you need to carry the proper license and pull permits on every job. Plumbers who diagnose accurately and communicate clearly with homeowners get the steadiest project flow.`;
      }
      return `Licensed plumbers in ${city.name} need to handle the full residential and commercial scope, from repiping and water heaters to drain cleaning and gas lines. You must hold a valid Texas plumbing license and pull permits on every job. The contractors who get consistent volume here are the ones who diagnose correctly, quote honestly, and communicate throughout the project.`;
    },
    electrical: () => {
      if (matchedHazards.length > 0) {
        const hazardList = matchedHazards.map((h) => h.toLowerCase()).join(" and ");
        return `Licensed electricians working ${city.name} deal with ${hazardList} as factors on most projects. Panel upgrades, surge protection, generator installations, and outdoor lighting are high-demand scopes in this market. You need your own Texas electrical license, you need to pull permits, and you need to be comfortable with both residential service work and light commercial build-outs. Electricians who can turn work efficiently without cutting corners stay in heavy rotation.`;
      }
      return `Licensed electricians in ${city.name} need to handle panel upgrades, wiring, lighting, and generator installations across residential and light commercial properties. You must hold your own Texas electrical license and pull permits on every job. The volume here is steady for electricians who produce clean work and keep their schedules reliable.`;
    },
    hvac: () => {
      if (matchedHazards.length > 0) {
        const conditions = matchedHazards.map((h) => h.toLowerCase());
        const hasHeat = conditions.some((c) => c.includes("heat"));
        const hasFreeze = conditions.some((c) => c.includes("freeze") || c.includes("ice"));
        const hasHumidity = conditions.some((c) => c.includes("humidity"));
        let detail = `Licensed HVAC technicians working ${city.name} need to be equipped for ${conditions.slice(0, 3).join(", ")}.`;
        if (hasHeat) detail += ` Summer is peak season with AC replacements and emergency repairs driving heavy volume, so you need the crew depth to handle the surge.`;
        if (hasHumidity) detail += ` Humidity control is a major factor here, and technicians who can size and configure dehumidification properly stand out.`;
        if (hasFreeze) detail += ` Freeze events create emergency demand for heating repairs and pipe protection, and crews who can respond fast during those events build strong reputations.`;
        detail += ` You must carry your own Texas HVAC license and pull permits on every installation.`;
        return detail;
      }
      return `Licensed HVAC contractors in ${city.name} need to handle the full scope of residential and commercial installation, repair, and maintenance. Proper system sizing, duct design, and refrigerant management are table stakes in this market. You must carry your own Texas HVAC license and pull permits on every job.`;
    },
    "interior-painting": () => {
      if (matchedHazards.length > 0) {
        return `Interior painting crews in ${city.name} need to account for ${matchedHazards[0].toLowerCase()} on every job. That means you need to know when to use moisture meters before prepping, which primers handle mildew-prone conditions, and how to time your coats for proper cure in this climate. The project mix spans residential repaints, cabinet refinishing, and commercial interior work. Painters who prep thoroughly and produce clean, consistent finishes get repeat volume.`;
      }
      return `Interior painting contractors in ${city.name} need to deliver clean prep work, consistent finishes, and proper product selection for the local climate. The scope mix here includes residential repaints, cabinet refinishing, and commercial interior projects. Crews who protect the space, prep surfaces properly, and produce sharp results stay in rotation.`;
    },
    "residential-remodels": () => {
      if (matchedHazards.length > 0) {
        return `Remodeling contractors in ${city.name} work in a market shaped by ${matchedHazards[0].toLowerCase()}. You need to be set up to manage multi-trade renovation projects, from kitchens and baths to whole-home remodels, and you need to coordinate the sub-trades on your scope cleanly. Projects here frequently uncover hidden conditions once walls open up, and contractors who can adapt the scope without blowing the timeline or budget earn the most trust and volume.`;
      }
      return `Remodeling contractors in ${city.name} need to handle the full renovation scope, from kitchens and baths to open-concept conversions and additions. The ability to coordinate multiple trades, manage timelines, and communicate scope changes clearly to the homeowner is what separates contractors who get steady volume from those who do not.`;
    },
    "commercial-construction": () => {
      if (matchedHazards.length > 0) {
        return `Commercial contractors in ${city.name} work in a market driven by ${matchedHazards[0].toLowerCase()}. You need to be equipped for office build-outs, retail construction, warehouse work, and tenant improvements, and you need to manage permitting and inspections across local jurisdictions. Timelines are tight on commercial projects because occupancy dates are contractual, and contractors who can coordinate licensed trades and deliver on schedule without sacrificing quality get the best project flow.`;
      }
      return `Commercial construction contractors in ${city.name} need to handle build-outs, tenant improvements, and ground-up projects across office, retail, and industrial scopes. Managing permits, coordinating licensed trades, and delivering on tight occupancy deadlines are the baseline requirements. Contractors who do all three reliably get consistent volume.`;
    },
  };

  const builder = builders[service.id];
  if (builder) return builder();

  if (matchedHazards.length > 0) {
    return `${service.name} contractors working ${city.name} need to be equipped for ${matchedHazards[0].toLowerCase()}, which affects material selection, methods, and scheduling on most jobs. Understanding how the local conditions shape the scope is what separates contractors who produce lasting work from those who generate callbacks.`;
  }
  return `${service.name} contractors in ${city.name} need to understand the local climate, ground conditions, and building practices that shape every project in this market. Crews who know the conditions and can produce consistent, quality work get steady volume through our network.`;
}

export default async function SubcontractorServiceCityLeaf({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: cityId, service: serviceId } = await params;
  const city = getCityById(cityId);
  const service = getServiceById(serviceId);
  if (!city || !service) notFound();

  const { requirements } = getSubRecruitingContent(service, city);
  const neighborCities = city.neighborCityIds
    .map((id) => getCityById(id))
    .filter(Boolean);
  const otherTrades = getPriorityServices()
    .filter((s) => s.id !== service.id)
    .slice(0, 4);

  return (
    <>
      <section className="bg-slate py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "For Subcontractors", href: "/subcontractors" },
              { label: city.name, href: `/subcontractors/${city.id}` },
              {
                label: service.name,
                href: `/subcontractors/${city.id}/${service.id}`,
              },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
              Now Recruiting | {city.name}, TX
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-bone tracking-tight">
              {service.name} Subcontractor Work in {city.name}
            </h1>
            <p className="mt-6 text-lg text-bone/70 leading-relaxed">
              Lone Star Contracting Group is looking for qualified{" "}
              {service.name.toLowerCase()} professionals in the {city.name}{" "}
              market. Join our network for steady, well-managed project volume
              in {city.county} County and the surrounding area.
            </p>
            <div className="mt-8">
              <Button href="/subcontractors#apply" variant="primary" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What we are looking for */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            What We Look For in {service.name} Subs
          </h2>
          <ul className="mt-6 space-y-3">
            {requirements.map((req) => (
              <li
                key={req}
                className="flex items-start gap-3 text-stone"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay/60 shrink-0" />
                <span className="text-sm">{req}</span>
              </li>
            ))}
          </ul>
          {service.licensed && (
            <p className="mt-6 text-sm text-stone/80 border-l-2 border-clay/30 pl-4">
              {service.name} is a licensed trade in Texas. You must hold your
              own valid license and be responsible for pulling permits. We
              verify all license numbers during the vetting process.
            </p>
          )}
        </div>
      </Section>

      {/* The market */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              The {city.name} Market for {service.name}
            </h2>
            <p className="mt-4 text-stone leading-relaxed">
              {getServiceByCitySubParagraph(service, city)}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              {city.tradeConsiderations}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              {city.growthNotes}
            </p>
            <p className="mt-4 text-stone leading-relaxed">
              This means consistent demand for{" "}
              {service.name.toLowerCase()} work across{" "}
              {service.serviceType === "both"
                ? "both commercial and residential"
                : service.serviceType}{" "}
              properties. If you can handle the conditions and the volume, we
              have the projects.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
              {service.name} Scope in This Market
            </h3>
            <div className="mt-4 space-y-2">
              {service.subServices.map((sub) => (
                <div
                  key={sub}
                  className="rounded-md border border-stone/10 bg-white px-3 py-2"
                >
                  <p className="text-sm text-stone">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            What You Get as a Network Sub
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Steady Project Flow",
                desc: `Consistent ${service.name.toLowerCase()} work in ${city.name} matched to your capacity and schedule.`,
              },
              {
                title: "No Sales Overhead",
                desc: "We handle the customer intake, the estimate alignment, and the expectations. You focus on the trade.",
              },
              {
                title: "Professional Management",
                desc: "Jobs arrive scoped, scheduled, and ready. One point of contact for every project.",
              },
              {
                title: "Reliable Pay",
                desc: "Completed work gets paid on schedule. No chasing invoices, no excuses.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-stone/15 p-5"
              >
                <h3 className="text-sm font-semibold text-slate">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-stone">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other trades + nearby cities */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              Other Trades in {city.name}
            </h2>
            <div className="mt-4 space-y-2">
              {otherTrades.map((trade) => (
                <Link
                  key={trade.id}
                  href={`/subcontractors/${city.id}/${trade.id}`}
                  className="block rounded-lg border border-stone/15 bg-white p-3 hover:border-clay/30 transition-colors"
                >
                  <span className="text-sm font-medium text-slate">
                    {trade.name} subs in {city.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {neighborCities.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                {service.name} Work Nearby
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {neighborCities.map((neighbor) =>
                  neighbor ? (
                    <Link
                      key={neighbor.id}
                      href={`/subcontractors/${neighbor.id}/${service.id}`}
                      className="rounded-full border border-stone/20 px-4 py-2 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
                    >
                      {neighbor.name}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </Section>

      <CTABanner
        title={`Apply for ${service.name} Work in ${city.name}`}
        description={`We are actively recruiting ${service.name.toLowerCase()} professionals in the ${city.name} area. Apply now and we will follow up within two business days.`}
        buttonText="Apply to Join"
        buttonHref="/subcontractors#apply"
      />
    </>
  );
}
