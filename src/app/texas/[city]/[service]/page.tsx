import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cities, getCityById, type City } from "@/data/cities";
import {
  getServiceById,
  getServicesByCategory,
  getPriorityServices,
  PRIORITY_SERVICE_IDS,
  type Service,
} from "@/data/services";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button, CTABanner } from "@/components/CTA";
import { PageHero, SplitImageSection } from "@/components/PageHero";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import {
  graph,
  webPageNode,
  breadcrumbNode,
  serviceNode,
  faqNode,
} from "@/lib/schema";

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

  const description = `${service.name} services in ${city.name}, Texas. ${getLocalizedIntro(service, city)} One contractor, one point of contact.`;

  // Keep every title under 60 characters; shorten brand token for long combos
  const full = `${service.name} in ${city.name}, TX | Lone Star`;
  const absoluteTitle = full.length <= 60 ? full : `${service.name} in ${city.name}, TX`;

  return {
    title: { absolute: absoluteTitle },
    description,
    alternates: { canonical: `/texas/${city.id}/${service.id}` },
    openGraph: {
      title: `${service.name} in ${city.name}, TX`,
      description,
      url: `${SITE_URL}/texas/${city.id}/${service.id}`,
    },
  };
}

function getLocalizedIntro(service: Service, city: City): string {
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
  const relevantHazards = city.climateHazards.filter((h) =>
    keywords.some((k) => h.toLowerCase().includes(k))
  );
  const relevantGround = city.groundConditions.filter((g) =>
    keywords.some((k) => g.toLowerCase().includes(k))
  );

  if (relevantHazards.length > 0) {
    return `${city.name} properties face ${relevantHazards[0].toLowerCase()}, making professional ${service.name.toLowerCase()} critical for long-term performance.`;
  }
  if (relevantGround.length > 0) {
    return `${city.name}'s ${relevantGround[0].toLowerCase()} creates specific demands on ${service.name.toLowerCase()} work.`;
  }
  return `${city.name}'s climate and building conditions require ${service.name.toLowerCase()} professionals who understand the local market.`;
}

function getServiceByCityParagraph(service: Service, city: City): string {
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
        return `Roofing systems in ${city.name} must perform against ${hazardList}. That means wind-rated decking attachments, impact-resistant shingles or standing-seam metal panels, and sealed flashing at every penetration point. Underlayment selection is critical here because moisture trapped beneath the surface layer accelerates deck rot in this climate. Contractors working the ${city.name} market spec materials rated for the actual exposure, not just the minimum code threshold, and schedule installations around seasonal storm patterns.`;
      }
      return `Roofing in ${city.name} requires materials and installation methods matched to the local climate, including UV degradation, thermal cycling, and seasonal weather events. Proper underlayment, fastener patterns, and flashing details are the difference between a roof that lasts and one that fails early. Contractors in this market select materials based on the conditions the roof will actually face over its full service life.`;
    },
    "foundation-repair": () => {
      if (matchedGround.length > 0) {
        const groundList = matchedGround.map((g) => g.toLowerCase()).join("; ");
        return `Foundation work in ${city.name} is driven by local ground conditions: ${groundList}. These soils create differential movement that cracks slabs, binds doors, and separates brick veneer from framing. Repair methods here include pressed concrete piers, steel push piers driven to stable bearing strata, and helical piers for lighter structures. Drainage correction is almost always part of the scope because without controlling moisture around the perimeter, the same movement will return.`;
      }
      return `Foundation performance in ${city.name} depends on how well the original design accounted for local soil behavior and how drainage has been maintained since construction. Pier installation, slab leveling, and beam repair are common scopes in this market. Effective repair starts with an accurate diagnosis of what is moving and why, followed by a pier or leveling method matched to the bearing conditions beneath the structure.`;
    },
    "concrete-flatwork": () => {
      const conditions: string[] = [];
      if (matchedHazards.length > 0) conditions.push(matchedHazards[0].toLowerCase());
      if (matchedGround.length > 0) conditions.push(matchedGround[0].toLowerCase());
      if (conditions.length > 0) {
        return `Concrete poured in ${city.name} has to hold up against ${conditions.join(" and ")}. That affects mix design, joint spacing, curing methods, and whether fiber reinforcement or rebar is the right call for the slab thickness. Subgrade preparation is critical here because unstable base material leads to cracking and settlement regardless of what is poured on top. Proper cure timing is especially important in this climate, where rapid moisture loss or temperature swings can weaken the finished surface before it reaches full strength.`;
      }
      return `Concrete flatwork in ${city.name} requires attention to subgrade preparation, mix design, and curing methods suited to the local climate. Joint spacing, reinforcement selection, and finish timing all affect long-term slab performance. Contractors in this market plan pours around weather windows and prepare the base to match the bearing capacity of the soil underneath.`;
    },
    fencing: () => {
      if (matchedHazards.length > 0) {
        const hazardList = matchedHazards.map((h) => h.toLowerCase()).join(" and ");
        return `Fences in ${city.name} face ${hazardList}, which means post depth, concrete footing size, and fastener selection all have to account for sustained lateral loads. Wood privacy fences need posts set deeper than the standard minimum, and metal fences require corrosion-resistant coatings or galvanized components that hold up over years of exposure. Gate hardware takes particular abuse in this climate and should be rated for the actual load and cycle count the gate will see.`;
      }
      return `Fencing in ${city.name} requires posts set to proper depth for the local soil type, materials selected for the climate, and hardware rated for the conditions. Whether the scope is a wood privacy fence, chain link, or ornamental iron, the installation details determine whether it stays straight and solid or leans within a few seasons.`;
    },
    plumbing: () => {
      const conditions: string[] = [];
      if (matchedGround.length > 0) conditions.push(matchedGround[0].toLowerCase());
      if (matchedHazards.length > 0) conditions.push(matchedHazards[0].toLowerCase());
      if (conditions.length > 0) {
        return `Plumbing systems in ${city.name} contend with ${conditions.join(" as well as ")}. These conditions increase the risk of slab leaks, pipe corrosion, and sewer line displacement over time. Repiping jobs in this market often involve transitioning from older galvanized or cast iron lines to PEX or copper depending on the application and local code. Water heater installations must account for local water quality, and drain lines need proper slope and cleanout access given the ground conditions beneath ${city.name} properties.`;
      }
      return `Plumbing in ${city.name} requires licensed professionals who understand the local water conditions, soil behavior beneath slabs, and municipal code requirements. Pipe material selection, water heater sizing, and drain line routing all need to account for the specific conditions in this market. Proper installation prevents the callbacks and leak damage that follow from shortcuts on the original scope.`;
    },
    electrical: () => {
      if (matchedHazards.length > 0) {
        const hazardList = matchedHazards.map((h) => h.toLowerCase()).join(" and ");
        return `Electrical systems in ${city.name} operate under ${hazardList}, which stresses wiring, panels, and outdoor components. Surge protection, properly rated outdoor enclosures, and generator transfer switches are common scope items in this market. Panel upgrades are frequently driven by increased load demands from HVAC systems working harder in the ${city.name} climate. All electrical work here requires a licensed electrician who pulls permits and schedules inspections through the local authority having jurisdiction.`;
      }
      return `Electrical work in ${city.name} must be performed by licensed electricians who understand local code requirements and pull the proper permits. Panel capacity, wire sizing, and circuit layout all need to match the actual load demands of the property. This market sees steady demand for panel upgrades, lighting installations, and generator hookups.`;
    },
    hvac: () => {
      if (matchedHazards.length > 0) {
        const conditions = matchedHazards.map((h) => h.toLowerCase());
        const hasHeat = conditions.some((c) => c.includes("heat"));
        const hasFreeze = conditions.some((c) => c.includes("freeze") || c.includes("ice"));
        const hasHumidity = conditions.some((c) => c.includes("humidity"));
        let detail = `HVAC systems in ${city.name} run under demanding conditions: ${conditions.slice(0, 3).join(", ")}.`;
        if (hasHeat) detail += ` Summer cooling loads push equipment hard, making proper sizing, refrigerant charge, and airflow balance critical to system longevity.`;
        if (hasHumidity) detail += ` Humidity control through proper coil selection and dehumidification capacity is as important as temperature control in this climate.`;
        if (hasFreeze) detail += ` Freeze events require systems with reliable defrost cycles or backup heating capacity to protect both occupants and plumbing.`;
        detail += ` All HVAC installation and repair in Texas requires a licensed technician who carries their own license and pulls permits.`;
        return detail;
      }
      return `HVAC systems in ${city.name} must be sized and installed for the local climate demands. Proper equipment selection, duct design, and refrigerant charge determine whether the system delivers efficient comfort or underperforms while running up utility costs. All HVAC work in Texas requires a licensed technician who carries their own license and pulls permits.`;
    },
    "interior-painting": () => {
      if (matchedHazards.length > 0) {
        return `Interior painting in ${city.name} must account for ${matchedHazards[0].toLowerCase()}, which affects surface preparation, primer selection, and dry times between coats. Moisture-related issues like bubbling, peeling, and mold growth behind the paint film are common when prep work is skipped or the wrong products are used for the conditions. Professional painters in this market use moisture meters before starting, select mildew-resistant primers where needed, and allow proper cure times between coats rather than rushing the schedule.`;
      }
      return `Interior painting in ${city.name} requires proper surface preparation, primer selection matched to the substrate, and attention to dry times between coats. The local climate affects how paint cures and how long the finish holds. Professional painters in this market prep surfaces thoroughly, address moisture or substrate damage before coating, and use products rated for the conditions inside ${city.name} properties.`;
    },
    "residential-remodels": () => {
      if (matchedHazards.length > 0) {
        return `Residential remodels in ${city.name} are shaped by the local market: ${matchedHazards[0].toLowerCase()}. That drives demand for kitchen and bath updates, open-concept conversions, and space additions across established neighborhoods. Remodel projects here frequently uncover conditions that require coordination across multiple trades, from structural modifications to updated mechanical systems. Managing that coordination through one contractor keeps the project on schedule and prevents the gaps that appear when homeowners try to orchestrate multiple independent crews.`;
      }
      return `Residential remodels in ${city.name} range from kitchen and bath renovations to whole-home updates and additions. The local housing stock creates consistent demand for renovation work that modernizes older properties and adapts homes to how owners actually use the space. Multi-trade coordination is the core challenge, and running it through one accountable contractor prevents the scheduling conflicts and finger-pointing that derail owner-managed renovation projects.`;
    },
    "commercial-construction": () => {
      if (matchedHazards.length > 0) {
        return `Commercial construction in ${city.name} is driven by ${matchedHazards[0].toLowerCase()}, creating demand for office build-outs, retail construction, warehouse facilities, and tenant improvements. Projects in this market require contractors who can manage permitting across local jurisdictions, coordinate licensed trades on tight timelines, and deliver spaces ready for occupancy by the lease date. Material selection and construction methods must account for ${city.name}'s climate to protect long-term building envelope and mechanical system performance.`;
      }
      return `Commercial construction in ${city.name} spans office build-outs, retail space, industrial facilities, and tenant improvements. This market demands contractors who manage permitting, coordinate multiple licensed trades, and deliver on schedule because every day past the deadline is lost revenue for the occupant. Construction methods and materials must account for the local climate to protect building performance over the life of the structure.`;
    },
  };

  const builder = builders[service.id];
  if (builder) return builder();

  // Fallback for any service not in the priority map
  if (matchedHazards.length > 0) {
    return `${service.name} work in ${city.name} must account for ${matchedHazards[0].toLowerCase()}, which directly affects material selection, installation methods, and long-term durability. Contractors in this market need to understand how these conditions shape the scope and plan accordingly from the first site visit. Using professionals experienced with ${city.name}'s conditions prevents rework and ensures the finished project holds up.`;
  }
  return `${service.name} in ${city.name} requires professionals who understand the local climate, ground conditions, and prevailing building practices. These factors affect material choices, scheduling, and installation methods across every project type in the ${city.name} market.`;
}

function getLocalFAQs(service: Service, city: City) {
  const faqs: { question: string; answer: string }[] = [];

  faqs.push({
    question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
    answer: `${service.name} costs in ${city.name} vary based on the scope of the project, the property type, and local conditions in ${city.county} County. We provide detailed estimates after reviewing your specific project. Contact us for a free quote with no obligation.`,
  });

  if (service.licensed) {
    faqs.push({
      question: `Does ${service.name.toLowerCase()} require a license in ${city.name}, Texas?`,
      answer: `Yes. ${service.name} is a licensed trade in Texas. Every ${service.name.toLowerCase()} professional in our network holds their own state license and is responsible for pulling the required permits in ${city.name} and ${city.county} County. We verify licensing status before any assignment.`,
    });
  }

  const relevantHazards = city.climateHazards.slice(0, 2);
  if (relevantHazards.length > 0) {
    faqs.push({
      question: `How do ${city.name} weather conditions affect ${service.name.toLowerCase()}?`,
      answer: `${city.name} properties contend with ${relevantHazards.join(" and ").toLowerCase()}. These conditions directly impact ${service.name.toLowerCase()} work by influencing material selection, installation techniques, and long-term maintenance requirements. Our network professionals are experienced with ${city.name}'s specific conditions and plan accordingly.`,
    });
  }

  faqs.push({
    question: `How do I find a reliable ${service.name.toLowerCase()} contractor in ${city.name}?`,
    answer: `Instead of vetting individual contractors yourself, you make one call to Lone Star Contracting Group. We match your ${service.name.toLowerCase()} project to a vetted professional in our ${city.name} network based on the specific scope, trade, and timeline. You get one point of contact from estimate through completion.`,
  });

  if (city.groundConditions.length > 0) {
    faqs.push({
      question: `What ground conditions in ${city.name} should I know about for ${service.name.toLowerCase()}?`,
      answer: `${city.name} sits on ${city.groundConditions[0].toLowerCase()}. This affects ${service.name.toLowerCase()} work by requiring specific preparation and techniques. Our professionals in ${city.name} are familiar with these conditions and factor them into every project.`,
    });
  }

  return faqs;
}

function getRelatedServicesInCity(
  service: Service,
  cityId: string
): { name: string; href: string }[] {
  const categoryServices = getServicesByCategory(service.categoryId)
    .filter((s) => s.id !== service.id && PRIORITY_SERVICE_IDS.includes(s.id))
    .slice(0, 2);

  const otherPriority = getPriorityServices()
    .filter(
      (s) =>
        s.id !== service.id &&
        s.categoryId !== service.categoryId &&
        !categoryServices.find((cs) => cs.id === s.id)
    )
    .slice(0, 1);

  return [...categoryServices, ...otherPriority].map((s) => ({
    name: s.name,
    href: `/texas/${cityId}/${s.id}`,
  }));
}

export default async function ServiceCityLeaf({
  params,
}: {
  params: Promise<{ city: string; service: string }>;
}) {
  const { city: cityId, service: serviceId } = await params;
  const city = getCityById(cityId);
  const service = getServiceById(serviceId);
  if (!city || !service) notFound();

  const faqs = getLocalFAQs(service, city);
  const relatedInCity = getRelatedServicesInCity(service, city.id);
  const neighborCities = city.neighborCityIds
    .map((id) => getCityById(id))
    .filter(Boolean);

  const pageUrl = `${SITE_URL}/texas/${city.id}/${service.id}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            graph([
              webPageNode({
                url: pageUrl,
                name: `${service.name} in ${city.name}, TX`,
                description: `${service.description} Serving ${city.name} and ${city.county} County.`,
                image: service.image,
                breadcrumbId: `${pageUrl}#breadcrumb`,
                mainEntityId: `${pageUrl}#service`,
              }),
              breadcrumbNode(pageUrl, [
                { name: "Home", path: "/" },
                { name: "Texas", path: "/texas" },
                { name: city.name, path: `/texas/${city.id}` },
                { name: service.name, path: `/texas/${city.id}/${service.id}` },
              ]),
              serviceNode({
                url: pageUrl,
                serviceName: service.name,
                serviceId: service.id,
                cityName: city.name,
                description: `${service.description} Serving ${city.name} and ${city.county} County.`,
                subServices: service.subServices,
                image: service.image,
              }),
              faqNode(pageUrl, faqs),
            ])
          ),
        }}
      />

      {/* Hero with city skyline */}
      <PageHero
        image={city.heroImage}
        imageAlt={`${city.name}, Texas skyline`}
      >
        <Breadcrumbs
          items={[
            { label: "Texas", href: "/texas" },
            { label: city.name, href: `/texas/${city.id}` },
            {
              label: service.name,
              href: `/texas/${city.id}/${service.id}`,
            },
          ]}
        />
        <div className="mt-6 max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            {city.name}, TX | {city.region}
          </p>
          <h1 className="mt-3 font-bold tracking-tight text-bone" style={{ fontSize: "clamp(1.75rem, 4vw + 0.5rem, 3rem)" }}>
            {service.name} in {city.name}, Texas
          </h1>
          <p className="mt-6 text-lg text-bone/80 leading-relaxed max-w-2xl">
            {getLocalizedIntro(service, city)} Lone Star Contracting Group
            connects your project to vetted{" "}
            {service.name.toLowerCase()} professionals in the{" "}
            {city.name} market who understand {city.county} County
            conditions and deliver through one accountable point of
            contact.
          </p>
          {service.licensed && service.licenseNote && (
            <p className="mt-4 text-sm text-bone/60 border-l-2 border-clay/50 pl-4">
              {service.licenseNote}
            </p>
          )}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Get a Quote in {city.name}
            </Button>
            <Button
              href={`/services/${service.id}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-bone/40 text-bone hover:bg-bone hover:text-slate"
            >
              About {service.name}
            </Button>
          </div>
        </div>
      </PageHero>

      {/* Local conditions -- image-led split section */}
      <SplitImageSection
        image={service.image}
        imageAlt={`${service.name} work in ${city.name}, Texas`}
        imagePosition="right"
        bg="white"
      >
        <h2 className="text-2xl font-semibold tracking-tight">
          {service.name} Conditions in {city.name}
        </h2>
        <p className="mt-4 text-stone leading-relaxed">
          {getServiceByCityParagraph(service, city)}
        </p>
        <p className="mt-4 text-stone leading-relaxed">
          {city.tradeConsiderations}
        </p>
      </SplitImageSection>

      {/* Climate and ground conditions list */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
              {city.name} Conditions Affecting {service.name}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[...city.climateHazards.slice(0, 3), ...city.groundConditions.slice(0, 2)].map(
                (item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-stone"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-clay/60 shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/lone-star-crew-at-work.jpg"
                alt="Lone Star Contracting crew at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-slate/10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Section>

      {/* What we deliver */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            {service.name} Services We Deliver in {city.name}
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.subServices.map((sub) => (
              <div
                key={sub}
                className="rounded-lg border border-stone/10 bg-stone/5 p-3"
              >
                <p className="text-sm font-medium text-slate">{sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-stone">
            Each of these services is available for{" "}
            {service.serviceType === "both"
              ? "both commercial and residential"
              : service.serviceType}{" "}
            properties in {city.name} and surrounding {city.county}{" "}
            County.
          </p>
        </div>
      </Section>

      {/* Local references section */}
      <Section bg="bone">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            Serving All of {city.name}
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Our {service.name.toLowerCase()} professionals serve
            properties throughout {city.name} and {city.county} County,
            including areas near {city.localReferences.join(", ")}.
            Whether your property is in an established neighborhood or a
            new development on the metro edge, we have crews positioned
            to reach your site.
          </p>
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate uppercase tracking-wide font-sans">
              Common Property Types We Serve
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {city.dominantPropertyTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-stone/15 bg-white px-3 py-1.5 text-xs text-stone"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight">
            {service.name} in {city.name}: Common Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-stone/10 pb-6 last:border-b-0"
              >
                <h3 className="text-base font-semibold text-slate">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm text-stone leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Related services in this city + neighbor cities */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {relatedInCity.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Related Services in {city.name}
              </h2>
              <div className="mt-4 space-y-3">
                {relatedInCity.map((related) => (
                  <Link
                    key={related.href}
                    href={related.href}
                    className="block rounded-lg border border-stone/15 bg-white p-4 hover:border-clay/30 transition-colors"
                  >
                    <span className="text-sm font-semibold text-slate hover:text-clay">
                      {related.name} in {city.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          {neighborCities.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                {service.name} in Nearby Cities
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {neighborCities.map((neighbor) =>
                  neighbor ? (
                    <Link
                      key={neighbor.id}
                      href={`/texas/${neighbor.id}/${service.id}`}
                      className="rounded-full border border-stone/20 px-4 py-2 text-sm font-medium text-slate hover:bg-slate hover:text-bone transition-colors"
                    >
                      {service.name} in {neighbor.name}
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </Section>

      <CTABanner
        title={`Ready to Start Your ${service.name} Project in ${city.name}?`}
        description={`Tell us about your project. We will match you with vetted ${service.name.toLowerCase()} professionals in the ${city.name} market.`}
        buttonText="Get a Free Quote"
        buttonHref="/contact"
      />
    </>
  );
}
