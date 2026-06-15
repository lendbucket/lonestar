import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/Section";
import { CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Contracting Glossary | Lone Star" },
  description:
    "A plain-language glossary of contracting, construction, and trade terms. Understand the terminology used in Texas commercial and residential projects.",
};

const glossaryTerms = [
  {
    term: "Backfill",
    definition:
      "The process of refilling an excavated area with soil or other material after foundation work, plumbing installation, or other underground work is complete. Proper backfill and compaction help prevent settling and drainage problems.",
  },
  {
    term: "Bonding",
    definition:
      "A surety bond is a financial guarantee that a contractor will complete a project according to the agreed terms. If the contractor fails to deliver, the bond provides a mechanism for the property owner to recover costs. Bonding is common on commercial and public projects.",
  },
  {
    term: "Change Order",
    definition:
      "A written agreement between the property owner and contractor to modify the original scope of work after a contract has been signed. Change orders can add, remove, or alter work and typically affect both cost and timeline. They should always be documented in writing before the changed work begins.",
  },
  {
    term: "Code Compliance",
    definition:
      "Adherence to the building codes and regulations enforced by local, state, or federal authorities. Building codes set minimum standards for construction, safety, and habitability. Work that is not code-compliant may need to be torn out and redone, and can create liability for the property owner.",
  },
  {
    term: "Concrete Slab",
    definition:
      "A flat, horizontal section of poured concrete used as a floor or foundation. In Texas, slab-on-grade foundations are common in many regions, particularly where soil conditions and climate make them practical.",
  },
  {
    term: "Drip Edge",
    definition:
      "A metal flashing installed along the edges of a roof to direct water away from the fascia and into the gutter system. Drip edge helps prevent water damage to the underlying roof deck and is required by most building codes.",
  },
  {
    term: "Easement",
    definition:
      "A legal right that allows a party to use a portion of another person's property for a specific purpose, such as utility access or drainage. Easements can affect where structures may be built on a property and should be identified before construction begins.",
  },
  {
    term: "Expansive Clay",
    definition:
      "A type of soil common throughout much of Texas that swells when wet and shrinks when dry. This movement can cause significant foundation damage over time, making foundation design, drainage management, and soil preparation especially important in affected areas.",
  },
  {
    term: "Fascia",
    definition:
      "The vertical board that runs along the lower edge of the roof, typically where gutters are attached. Fascia protects the roof edge and the interior of the roof structure from weather exposure.",
  },
  {
    term: "Flashing",
    definition:
      "Thin pieces of metal or other material installed at joints and transitions on a roof or exterior wall to prevent water from entering the building. Common locations include roof valleys, chimneys, vents, and where a roof meets a wall.",
  },
  {
    term: "General Contractor",
    definition:
      "A company or individual responsible for overseeing a construction project, coordinating subcontractors, managing the schedule, and ensuring the work meets the agreed scope and applicable codes. The general contractor is typically the primary point of contact for the property owner.",
  },
  {
    term: "HVAC",
    definition:
      "Stands for Heating, Ventilation, and Air Conditioning. HVAC systems control the temperature, humidity, and air quality within a building. In Texas, HVAC installation and repair is a licensed trade regulated by the Texas Department of Licensing and Regulation (TDLR).",
  },
  {
    term: "Lien Waiver",
    definition:
      "A document in which a contractor, subcontractor, or supplier relinquishes the right to place a lien on a property after receiving payment. Lien waivers protect property owners from claims by parties further down the payment chain. They are commonly exchanged as part of the payment process on larger projects.",
  },
  {
    term: "Load-Bearing Wall",
    definition:
      "A wall that supports the weight of the structure above it, transferring loads down to the foundation. Removing or modifying a load-bearing wall without proper engineering can compromise structural integrity. An engineer or qualified contractor should evaluate any wall before removal.",
  },
  {
    term: "Mastic",
    definition:
      "A type of adhesive or sealant used in construction, often applied to seal joints in ductwork, around windows, or on exterior surfaces. The specific type of mastic varies depending on the application and the materials being bonded or sealed.",
  },
  {
    term: "Permit",
    definition:
      "An official authorization issued by a local government that allows construction, renovation, or repair work to proceed. Permits ensure that proposed work meets building codes and safety standards. Work done without required permits can result in fines, required removal, and complications when selling the property.",
  },
  {
    term: "Pier and Beam",
    definition:
      "A foundation system where the structure sits on concrete or steel piers driven into the ground, with beams spanning between the piers to support the floor. This creates a crawl space beneath the building. Pier and beam foundations are common in older Texas homes and in areas with certain soil conditions.",
  },
  {
    term: "Punch List",
    definition:
      "A list of remaining tasks, corrections, or touch-ups that need to be completed before a project is considered finished. The punch list is typically created during a walk-through near the end of the project and represents the final items between the current state of the work and full completion.",
  },
  {
    term: "R-Value",
    definition:
      "A measure of a material's resistance to heat flow. The higher the R-value, the better the insulation performance. In Texas, energy codes specify minimum R-values for different parts of a building based on the climate zone.",
  },
  {
    term: "Rough-In",
    definition:
      "The phase of construction where the basic framework of plumbing, electrical, or HVAC systems is installed inside walls, floors, and ceilings before they are closed up with drywall or other finish materials. Rough-in work is typically inspected before the project can proceed to the finishing stage.",
  },
  {
    term: "Scope of Work",
    definition:
      "A detailed written description of all the work to be performed on a project, including materials, methods, and deliverables. A clear scope of work protects both the property owner and the contractor by setting expectations upfront and reducing disputes about what was or was not included.",
  },
  {
    term: "Slab on Grade",
    definition:
      "A type of foundation where concrete is poured directly on the ground surface. The slab serves as both the foundation and the floor of the building. This is one of the most common foundation types in Texas, particularly in newer construction and in areas with stable soil.",
  },
  {
    term: "Soffit",
    definition:
      "The underside of a building element, most commonly the area beneath the roof overhang. Soffits often include vents that allow airflow into the attic, which helps regulate temperature and moisture levels in the roof structure.",
  },
  {
    term: "Subcontractor",
    definition:
      "A specialized trade professional or company hired by a general contractor to perform a specific portion of a project. Subcontractors typically focus on a single trade, such as electrical, plumbing, or roofing, and work under the coordination of the general contractor.",
  },
  {
    term: "Substrate",
    definition:
      "The underlying surface or material to which a finish, coating, or another layer is applied. For example, the plywood layer beneath roofing shingles is the substrate, and the drywall beneath paint is the substrate for the finish coat.",
  },
  {
    term: "TPO Roofing",
    definition:
      "Thermoplastic Polyolefin roofing is a single-ply membrane commonly used on flat or low-slope commercial roofs. TPO is valued for its energy efficiency, durability, and resistance to ultraviolet exposure. It is one of the most common commercial roofing materials in Texas.",
  },
  {
    term: "Underlayment",
    definition:
      "A layer of material installed between the structural surface (deck or subfloor) and the finished surface (roofing material or flooring). Underlayment provides an additional barrier against moisture, sound, or heat depending on the application.",
  },
  {
    term: "Vapor Barrier",
    definition:
      "A material used to prevent moisture from passing through walls, floors, or ceilings. Vapor barriers are important in climates like Texas where humidity can cause condensation inside wall cavities, potentially leading to mold, rot, or structural damage.",
  },
  {
    term: "Walk-Through",
    definition:
      "An on-site inspection of completed or nearly completed work, typically done jointly by the property owner and the contractor. The walk-through is used to identify any remaining issues, generate a punch list, and confirm that the work matches the agreed scope before final payment is made.",
  },
  {
    term: "Warranty",
    definition:
      "A written guarantee from the contractor or manufacturer covering the quality of workmanship or materials for a specified period after project completion. Warranties vary in duration and coverage, so it is important to understand exactly what is covered and for how long before the project is finalized.",
  },
  {
    term: "Weep Holes",
    definition:
      "Small openings in brick veneer, retaining walls, or window frames that allow trapped moisture to drain out. Weep holes are an intentional part of the design and should not be sealed, as blocking them can lead to moisture damage inside the wall cavity.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs items={[{ label: "Glossary", href: "/glossary" }]} />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Reference
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Contracting Glossary
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Construction and contracting come with their own vocabulary. This
            glossary defines common terms in plain language so you can follow
            along with proposals, contracts, and conversations about your
            project without guessing what something means.
          </p>
        </div>
      </Section>

      {/* Glossary Terms */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <dl className="space-y-8">
            {glossaryTerms.map((item) => (
              <div
                key={item.term}
                id={item.term.toLowerCase().replace(/[\s/]/g, "-")}
                className="border-b border-stone/10 pb-8 last:border-b-0"
              >
                <dt className="text-lg font-semibold text-slate font-serif">
                  {item.term}
                </dt>
                <dd className="mt-2 text-stone leading-relaxed">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Have a Question About Your Project?"
        description="If you have run into a term or concept that is not covered here, reach out. We are happy to explain anything related to your project in plain language."
        buttonText="Contact Us"
        buttonHref="/contact"
        secondaryText="View FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
