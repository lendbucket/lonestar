import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Lone Star" },
  description:
    "Privacy policy for Lone Star Contracting Group. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Section bg="bone">
        <Breadcrumbs
          items={[{ label: "Privacy Policy", href: "/privacy" }]}
        />

        <div className="mt-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate">
            Privacy Policy
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
              <strong className="text-slate">Note:</strong> This policy should
              be reviewed by legal counsel before final publication.
            </p>
          </div>

          <p className="text-stone leading-relaxed mb-8">
            {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            operates the website located at{" "}
            <a
              href={SITE_URL}
              className="text-clay hover:underline"
            >
              {SITE_URL}
            </a>{" "}
            (the &quot;Site&quot;). This Privacy Policy describes how we
            collect, use, disclose, and protect the personal information of
            visitors to our Site and individuals who submit information through
            our contact or project intake forms.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Information We Collect
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We collect personal information that you voluntarily provide to us
            when you submit a form on our Site. This information may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone mb-4">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project details and descriptions you provide</li>
            <li>Property address or location information related to your project</li>
          </ul>
          <p className="text-stone leading-relaxed mb-4">
            We do not require you to create an account or maintain login
            credentials to use this Site. The Site does not use authentication
            or user account systems.
          </p>
          <p className="text-stone leading-relaxed mb-4">
            We may also collect certain information automatically when you visit
            the Site, including your IP address, browser type, operating system,
            referring URLs, pages viewed, and the dates and times of your
            visits. If we implement analytics tools in the future, those tools
            may collect additional usage data as described in their respective
            privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We use the personal information we collect for the following
            purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone mb-4">
            <li>
              To respond to your inquiries and communicate with you about
              potential projects
            </li>
            <li>
              To evaluate your project needs and match you with appropriate
              professionals in our network
            </li>
            <li>
              To deliver form submission data to our team via email using
              third-party email delivery services
            </li>
            <li>
              To improve our Site and the services we offer
            </li>
            <li>
              To comply with applicable legal obligations
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            How We Share Your Information
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We do not sell your personal information. We may share your
            information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone mb-4">
            <li>
              <strong className="text-slate">Service Providers.</strong> We use
              Resend, a third-party email delivery service, to transmit form
              submissions from the Site to our team. Resend processes your
              information solely for the purpose of delivering those
              communications on our behalf.
            </li>
            <li>
              <strong className="text-slate">Hosting Provider.</strong> Our Site
              is hosted on Vercel. Vercel may process certain technical data
              (such as IP addresses and request logs) as part of providing
              hosting services. Vercel&apos;s handling of such data is governed
              by its own privacy policy.
            </li>
            <li>
              <strong className="text-slate">Network Professionals.</strong> If
              you submit a project inquiry, we may share relevant project
              details with licensed professionals in our contracting network for
              the purpose of evaluating and performing the requested work.
            </li>
            <li>
              <strong className="text-slate">Legal Requirements.</strong> We may
              disclose your information if required to do so by law, regulation,
              legal process, or governmental request, or if we believe
              disclosure is necessary to protect our rights, your safety, or the
              safety of others.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Data Retention
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We retain the personal information you submit through our forms for
            as long as necessary to fulfill the purposes described in this
            policy, including to follow up on your inquiry, complete any
            resulting project engagement, and comply with our legal and business
            obligations. When your information is no longer needed for these
            purposes, we will delete or anonymize it in a reasonable timeframe.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Your Rights
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            Depending on your jurisdiction, you may have certain rights
            regarding your personal information, including the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-stone mb-4">
            <li>
              Request access to the personal information we hold about you
            </li>
            <li>
              Request correction of inaccurate personal information
            </li>
            <li>
              Request deletion of your personal information
            </li>
            <li>
              Opt out of any future marketing communications
            </li>
          </ul>
          <p className="text-stone leading-relaxed mb-4">
            To exercise any of these rights, please contact us at the email
            address listed below. We will respond to your request within a
            reasonable timeframe and in accordance with applicable law.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Security
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We take reasonable administrative, technical, and physical measures
            to protect the personal information we collect from unauthorized
            access, use, alteration, or destruction. However, no method of
            transmission over the Internet or method of electronic storage is
            completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            Our Site is not directed to individuals under the age of 18, and we
            do not knowingly collect personal information from children. If we
            become aware that we have collected personal information from a
            child under 18, we will take steps to delete that information
            promptly.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. If we make
            material changes, we will update the &quot;Effective Date&quot; at
            the top of this page. Your continued use of the Site after any
            changes constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-semibold text-slate mt-12 mb-4">
            Contact Information
          </h2>
          <p className="text-stone leading-relaxed mb-4">
            If you have questions about this Privacy Policy or wish to exercise
            your rights regarding your personal information, please contact us:
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
