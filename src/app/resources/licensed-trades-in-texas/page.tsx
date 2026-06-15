import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { CTABanner } from "@/components/CTA";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Licensed Trades in Texas | Lone Star" },
  description:
    "An overview of which trades require state licensing in Texas, including plumbing, electrical, HVAC, and irrigation. What property owners and subcontractors need to know.",
};

export default function LicensedTradesPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <Section bg="bone" className="!py-6">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            {
              label: "Licensed Trades in Texas",
              href: "/resources/licensed-trades-in-texas",
            },
          ]}
        />
      </Section>

      {/* Hero */}
      <Section bg="white">
        <div className="max-w-3xl">
          <p className="text-clay font-semibold text-sm tracking-wide uppercase font-sans">
            Reference
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            What Licensed Trades Require in Texas
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed">
            Texas does not require a state-level general contractor license. But
            several specific trades are regulated and require individuals
            performing the work to hold a valid state license. Understanding
            which trades are licensed, and what that means, matters whether you
            are a property owner hiring a contractor or a trade professional
            doing the work.
          </p>
        </div>
      </Section>

      {/* Plumbing */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Plumbing
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Plumbing in Texas is regulated by the Texas State Board of Plumbing
            Examiners (TSBPE). Anyone who installs, repairs, or modifies
            plumbing systems must hold the appropriate license. There are
            several license tiers, including Tradesman Plumber-Limited,
            Journeyman Plumber, and Master Plumber. The license tier determines
            the scope of work the individual is authorized to perform and
            whether they can work independently or must be supervised.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            A Master Plumber can pull permits for plumbing work. If you hire a
            general contractor for a project that includes plumbing, the
            plumbing portion must be performed by a licensed plumber. The
            general contractor coordinates the project, but the licensed plumber
            is the one whose name goes on the plumbing permit.
          </p>
          <p className="mt-4 text-sm text-stone/70 italic leading-relaxed">
            Plumbing work performed through Lone Star Contracting Group is
            executed by licensed plumbing professionals within our network who
            hold valid Texas plumbing licenses and pull the required permits.
          </p>
        </div>
      </Section>

      {/* Electrical */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Electrical
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Electrical work in Texas is regulated by the Texas Department of
            Licensing and Regulation (TDLR). License types include Apprentice
            Electrician, Journeyman Electrician, and Master Electrician. As with
            plumbing, the license level determines what work the individual can
            perform and whether supervision is required.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            A Master Electrician is required to pull electrical permits.
            Electrical work that is performed without a licensed electrician and
            without proper permits can create safety hazards, fail inspection,
            and cause problems with insurance coverage. If your project involves
            wiring, panel upgrades, outlet installation, or any modification to
            the electrical system, it must be done by a licensed electrician.
          </p>
          <p className="mt-4 text-sm text-stone/70 italic leading-relaxed">
            Electrical work performed through Lone Star Contracting Group is
            executed by licensed electrical professionals within our network who
            hold valid Texas electrical licenses and pull the required permits.
          </p>
        </div>
      </Section>

      {/* HVAC */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            HVAC and Air Conditioning
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Heating, ventilation, and air conditioning work in Texas is
            regulated by TDLR under the Air Conditioning and Refrigeration
            Contractors License Law. Contractors performing HVAC installation,
            repair, or maintenance must be licensed. The licensing structure
            includes Technician Registration and an ACR Contractor License,
            which is required for anyone who contracts directly with property
            owners for HVAC work.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            In Texas, where air conditioning is not optional for most of the
            year, HVAC systems are a critical part of any building. Improperly
            installed or serviced systems can lead to inefficiency, premature
            failure, and safety concerns. Licensed HVAC contractors are trained
            to handle refrigerants safely, size systems correctly, and ensure
            installations meet energy code requirements.
          </p>
          <p className="mt-4 text-sm text-stone/70 italic leading-relaxed">
            HVAC work performed through Lone Star Contracting Group is executed
            by licensed HVAC professionals within our network who hold valid
            Texas ACR licenses and pull the required permits.
          </p>
        </div>
      </Section>

      {/* Irrigation */}
      <Section bg="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            Irrigation (Landscape Sprinkler Systems)
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            Irrigation system installation and maintenance in Texas is regulated
            by TDLR under the Irrigator License program. Anyone who designs,
            installs, maintains, alters, repairs, or services an irrigation
            system must hold a valid Licensed Irrigator credential. There is
            also an Irrigation Technician license for individuals who work under
            the supervision of a Licensed Irrigator.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            Texas water conservation regulations are significant, and
            irrigation systems must include backflow prevention devices and
            rain or moisture sensors as required by state law. A licensed
            irrigator ensures these requirements are met and that the system is
            designed to use water efficiently while keeping the landscape
            healthy.
          </p>
          <p className="mt-4 text-sm text-stone/70 italic leading-relaxed">
            Irrigation work performed through Lone Star Contracting Group is
            executed by licensed irrigation professionals within our network who
            hold valid Texas Irrigator licenses and comply with all applicable
            water conservation requirements.
          </p>
        </div>
      </Section>

      {/* What This Means for Property Owners */}
      <Section bg="bone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            What This Means for Property Owners
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            If your project involves a licensed trade, you need to make sure the
            person doing the actual work holds the right license. It is not
            enough for the general contractor to say they will "take care of
            it." Ask who will perform the licensed work, verify their license
            number with the relevant state agency, and confirm that permits will
            be pulled.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            When permits are pulled, the work will be inspected by a local
            building inspector. This inspection is a safeguard for you as the
            property owner. It confirms that the work meets the applicable
            building codes and safety standards. Skipping permits to save time
            or money is a risk that can come back in the form of failed
            insurance claims, code violations, or complications during a
            property sale.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            For trades that are not licensed at the state level, such as
            roofing, painting, concrete, fencing, and general carpentry, Texas
            does not impose a state licensing requirement. However, local
            jurisdictions may require permits for certain types of work, and
            some cities maintain their own contractor registration programs.
            Always check with your local building department.
          </p>
        </div>
      </Section>

      {/* What This Means for Subcontractors */}
      <Section bg="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight font-serif">
            What This Means for Subcontractors
          </h2>
          <p className="mt-4 text-stone leading-relaxed">
            If you work in a licensed trade, maintaining your license is not
            optional. Continuing education requirements, renewal deadlines, and
            changes to regulations are your responsibility. Working without a
            valid license exposes you to fines, legal liability, and the loss of
            your ability to work in your trade.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            When working through a contracting company like Lone Star, your
            license is verified before you are assigned to any project in your
            trade. You remain the license holder, you pull the permits under
            your license, and you are responsible for the quality of the trade
            work you perform. The contracting company manages the customer
            relationship, the scope, and the project coordination, but the
            licensed work itself is yours.
          </p>
          <p className="mt-4 text-stone leading-relaxed">
            For subcontractors in non-licensed trades, having proper insurance
            and demonstrating consistent quality work are the primary
            credentialing factors. While the state may not require a license for
            your trade, the expectations of the contracting company and the
            property owner remain high.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title="Have Questions About Licensing or Your Project?"
        description="Whether you are a property owner planning a project or a licensed professional looking for consistent work, we are here to help."
        buttonText="Contact Us"
        buttonHref="/contact"
        secondaryText="Join Our Network"
        secondaryHref="/subcontractors"
      />
    </>
  );
}
