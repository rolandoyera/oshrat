import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { socialMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Privacy Policy | Sarvian Design Group";
const DESCRIPTION =
  "How Sarvian Design Group collects, uses, and protects information when you visit sarviandg.com or contact us through the website.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/privacy" }),
};

/** Legal copy runs long — scale the section headings down from the marketing sizes. */
const h2 = "text-2xl lg:text-3xl";
const h3 = "text-xl lg:text-2xl";
const body = "text-taupe-600 mb-6";
const list =
  "list-disc pl-6 space-y-1 text-base lg:text-[22px] font-light leading-[1.55] text-taupe-600";

export default function PrivacyPage() {
  return (
    <main className="pb-40">
      <div className="h-24" />
      <Container className="mt-16 max-w-225">
        <div className="border-b border-border/40 pb-12 mb-12">
          <h1>Privacy Policy</h1>
          <p className="mt-6 text-taupe-600">
            <strong>Effective Date:</strong> July 6, 2026
          </p>
        </div>

        <div className="space-y-6">
          <p className={body}>
            Sarvian Design Group (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;) respects your privacy. This Privacy Policy
            explains how we collect, use, and protect information when you visit{" "}
            <strong>sarviandg.com</strong> or contact us through the website.
          </p>
          <p className={body}>
            This Privacy Policy applies only to the public Sarvian Design Group
            website. It does not apply to any separate client portal, dashboard,
            CRM, or subdomain such as <strong>studio.sarviandg.com</strong>.
          </p>

          <h2 className={`${h2} pt-8`}>1. Information We Collect</h2>
          <p className={body}>
            We may collect the following types of information:
          </p>

          <h3 className={h3}>Information You Provide to Us</h3>
          <p className={body}>
            When you submit a contact form, request information, or communicate
            with us, we may collect:
          </p>
          <ul className={list}>
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Project location or general service area</li>
            <li>Project details or message content</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className={h3}>Information Collected Automatically</h3>
          <p className={body}>
            When you visit our website, certain information may be collected
            automatically, including:
          </p>
          <ul className={list}>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Pages visited</li>
            <li>Referring website</li>
            <li>Date and time of visit</li>
            <li>General usage and analytics information</li>
          </ul>
          <p className={body}>
            This information helps us understand how visitors use the website
            and improve the user experience.
          </p>

          <h2 className={`${h2} pt-8`}>2. How We Use Information</h2>
          <p className={body}>We may use the information we collect to:</p>
          <ul className={list}>
            <li>Respond to inquiries submitted through the website</li>
            <li>Communicate with prospective clients</li>
            <li>Provide information about our interior design services</li>
            <li>Improve our website, content, and user experience</li>
            <li>Understand website traffic and performance</li>
            <li>Maintain website security</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className={body}>
            We do not use information submitted through the website to create
            accounts, provide access to a CRM, or manage client portal activity.
          </p>

          <h2 className={`${h2} pt-8`}>3. Cookies and Analytics</h2>
          <p className={body}>
            Our website may use cookies and similar technologies to improve
            functionality, measure website traffic, and understand how visitors
            interact with the site.
          </p>
          <p className={body}>
            We may use Google Analytics or similar analytics tools to collect
            information about website usage. These tools may collect information
            such as pages visited, time spent on the site, device and browser
            information, and general location information based on IP address.
          </p>
          <p className={body}>
            You can control or disable cookies through your browser settings.
            Please note that disabling cookies may affect how some parts of the
            website function.
          </p>
          <p className={body}>
            You can also learn more about how Google uses data from sites that
            use Google services by reviewing Google&rsquo;s privacy and data
            practices.
          </p>

          <h2 className={`${h2} pt-8`}>4. How We Share Information</h2>
          <p className={body}>We do not sell your personal information.</p>
          <p className={body}>
            We may share limited information with trusted service providers who
            help us operate the website, process inquiries, host the website,
            analyze traffic, or provide related business services. These
            providers are only given access to information needed to perform
            their services.
          </p>
          <p className={body}>
            We may also disclose information if required by law, legal process,
            or to protect our rights, property, users, or business operations.
          </p>

          <h2 className={`${h2} pt-8`}>5. Third-Party Services</h2>
          <p className={body}>
            Our website may include links to third-party websites or platforms,
            such as social media profiles, portfolio platforms, or other
            external websites.
          </p>
          <p className={body}>
            We are not responsible for the privacy practices, content, or
            policies of third-party websites. If you visit a third-party
            website, its own privacy policy will apply.
          </p>

          <h2 className={`${h2} pt-8`}>6. Data Retention</h2>
          <p className={body}>
            We keep personal information only as long as reasonably necessary
            for the purposes described in this Privacy Policy, including
            responding to inquiries, maintaining business records, improving our
            services, and complying with legal obligations.
          </p>

          <h2 className={`${h2} pt-8`}>7. Data Security</h2>
          <p className={body}>
            We use reasonable administrative, technical, and organizational
            measures to help protect the information we collect. However, no
            website, email system, or internet transmission is completely
            secure. We cannot guarantee absolute security.
          </p>

          <h2 className={`${h2} pt-8`}>8. Your Choices</h2>
          <p className={body}>
            You may contact us to request that we update, correct, or delete
            personal information you have provided to us, subject to any legal
            or business recordkeeping obligations.
          </p>
          <p className={body}>
            You may also choose not to provide personal information through the
            website, although this may limit our ability to respond to your
            inquiry.
          </p>

          <h2 className={`${h2} pt-8`}>9. Children&rsquo;s Privacy</h2>
          <p className={body}>
            Our website is not directed to children under the age of 13. We do
            not knowingly collect personal information from children. If we
            become aware that we have collected information from a child, we
            will take reasonable steps to delete it.
          </p>

          <h2 className={`${h2} pt-8`}>
            10. California and Other State Privacy Rights
          </h2>
          <p className={body}>
            Depending on where you live, you may have certain privacy rights
            under applicable state privacy laws. These rights may include the
            right to request access to personal information, request correction
            or deletion, or opt out of certain uses of personal information.
          </p>
          <p className={body}>
            Sarvian Design Group does not sell personal information. If you
            believe a state privacy law applies to your information, you may
            contact us using the information below.
          </p>

          <h2 className={`${h2} pt-8`}>11. Changes to This Privacy Policy</h2>
          <p className={body}>
            We may update this Privacy Policy from time to time. When we do, we
            will update the effective date above. Your continued use of the
            website after changes are posted means you accept the updated
            Privacy Policy.
          </p>

          <h2 className={`${h2} pt-8`}>12. Contact Us</h2>
          <p className={body}>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact us:
          </p>
          <p className={body}>
            <strong>Sarvian Design Group</strong>
            <br />
            Fort Lauderdale, Florida
            <br />
            Email:{" "}
            <a
              className="hover:text-accent underline"
              href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <br />
            Phone:{" "}
            <a
              className="hover:text-accent underline"
              href={`tel:${SITE.phone}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </Container>
    </main>
  );
}
