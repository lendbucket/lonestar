import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Lone Star" },
  description:
    "Terms of service for the Lone Star Contracting Group website. Read our terms before using this site or submitting project inquiries.",
};

export default function TermsPage() {
  return (
    <>
      <Section bg="bone">
        <Breadcrumbs
          items={[{ label: "Terms of Service", href: "/terms" }]}
        />

        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate">
            Terms of Service
          </h1>
          <p className="mt-4 text-stone">
            Effective Date: June 1, 2025
          </p>
        </div>
      </Section>

      <Section bg="white">
        <div className="max-w-3xl mx-auto prose-custom">
          <div className="rounded-lg border border-clay/30 bg-clay/5 p-5 mb-12">
            <p className="text-sm text-stone leading-relaxed">
              <strong className="text-slate">Note:</strong> These terms should
              be reviewed by legal counsel before final publication.
            </p>
          </div>

          <p className="text-stone leading-relaxed mb-8">
            Welcome to the website of {SITE_NAME} (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;), located at{" "}
            <a
              href={SITE_URL}
              className="text-clay hover:underline"
            >
              {SITE_URL}
            </a>{" "}
            (the &quot;Site&quot;). By accessing or using this Site, you agree
            to be bound by these Terms of Service (&quot;Terms&quot;). If you
            do not agree with these Terms, you should not use this Site.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            1. Use of the Site
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            This Site is provided for informational purposes and to allow
            visitors to submit project inquiries and contact requests. You agree
            to use the Site only for lawful purposes and in accordance with
            these Terms. You may not use the Site in any way that could damage,
            disable, overburden, or impair the Site or interfere with any other
            party&apos;s use of the Site.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            2. No Contractual Obligation from Inquiries
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            Submitting a form or inquiry through this Site does not create a
            contract, agreement, or obligation of any kind between you and{" "}
            {SITE_NAME}. All project engagements are subject to separate written
            agreements executed by both parties. Any pricing, timelines,
            availability, or scope information presented on this Site is for
            general informational purposes only and does not constitute a
            binding offer, guarantee, or commitment.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            3. Licensed Trades Disclaimer
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            Plumbing, electrical, HVAC, and irrigation services referenced on
            this site are performed by independently licensed professionals
            within our network. The licensed professional holds the applicable
            license and is responsible for pulling permits where required.{" "}
            {SITE_NAME} coordinates and manages project delivery but does not
            itself hold trade-specific licenses for regulated work unless
            otherwise stated.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            4. No Warranties
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            The Site and all content, information, and materials provided on it
            are offered on an &quot;as is&quot; and &quot;as available&quot;
            basis without warranties of any kind, either express or implied. To
            the fullest extent permitted by applicable law, we disclaim all
            warranties, including but not limited to implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the Site will be
            uninterrupted, error-free, or free of viruses or other harmful
            components.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            5. Limitation of Liability
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            To the fullest extent permitted by applicable law, {SITE_NAME}, its
            officers, directors, employees, agents, and affiliates shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages arising out of or related to your use of or
            inability to use the Site, including but not limited to damages for
            loss of profits, data, or other intangible losses, regardless of
            whether such damages are based on contract, tort, negligence, strict
            liability, or any other legal theory.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            6. Intellectual Property
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            All content on this Site, including text, graphics, logos, images,
            and software, is the property of {SITE_NAME} or its content
            suppliers and is protected by applicable intellectual property laws.
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, or otherwise use any content from this Site
            without our prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            This Site may contain links to third-party websites or services that
            are not owned or controlled by us. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of any third-party websites or services. Your use of
            third-party websites is at your own risk and subject to the terms
            and conditions of those sites.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            8. Form Submissions and Communications
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            When you submit information through a form on this Site, your
            submission is transmitted to us via third-party email delivery
            services. By submitting a form, you consent to the collection and
            transmission of the information you provide as described in our{" "}
            <a href="/privacy" className="text-clay hover:underline">
              Privacy Policy
            </a>
            . You are responsible for ensuring that the information you submit
            is accurate and complete.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            9. Indemnification
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless {SITE_NAME}, its
            officers, directors, employees, agents, and affiliates from and
            against any and all claims, damages, obligations, losses,
            liabilities, costs, and expenses (including reasonable
            attorneys&apos; fees) arising from your use of the Site or your
            violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            10. Governing Law
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            These Terms shall be governed by and construed in accordance with
            the laws of the State of Texas, without regard to its conflict of
            law principles. Any legal action or proceeding arising out of or
            related to these Terms or your use of the Site shall be brought
            exclusively in the state or federal courts located in the State of
            Texas, and you consent to the personal jurisdiction of such courts.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            11. Changes to These Terms
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We reserve the right to modify these Terms at any time. If we make
            material changes, we will update the &quot;Effective Date&quot; at
            the top of this page. Your continued use of the Site after any
            changes constitutes your acceptance of the revised Terms. We
            encourage you to review these Terms periodically.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            12. Severability
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            If any provision of these Terms is found to be unenforceable or
            invalid by a court of competent jurisdiction, that provision shall
            be limited or eliminated to the minimum extent necessary so that the
            remaining provisions of these Terms remain in full force and effect.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            13. Contact Information
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            If you have questions about these Terms of Service, please contact
            us:
          </p>
          <p className="text-stone leading-relaxed">
            {SITE_NAME}
            <br />
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-clay hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
