import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { socialMeta } from "@/lib/seo";
import { SITE } from "@/lib/site";

const TITLE = "Terms of Use | Sarvian Design Group";
const DESCRIPTION =
  "The terms governing your use of the Sarvian Design Group website.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/terms" }),
};

/** Legal copy runs long — scale the section headings down from the marketing sizes. */
const h2 = "text-2xl lg:text-3xl";
const body = "text-taupe-600 mb-6";

export default function TermsPage() {
  return (
    <main className="pb-40">
      <div className="h-24" />
      <Container className="mt-16 max-w-225">
        <div className="border-b border-border/40 pb-12 mb-12">
          <h1>Terms of Use</h1>
          <p>
            <strong>Effective Date:</strong> July 6, 2026
          </p>
        </div>

        <div className="space-y-6">
          <p className={body}>
            Welcome to <strong>sarviandg.com</strong>, the website of Sarvian
            Design Group ( &ldquo;we,&rdquo; &ldquo;our,&rdquo; or
            &ldquo;us&rdquo;). By visiting or using this website, you agree to
            the following Terms of Use.
          </p>
          <p className={body}>
            These Terms apply only to the public Sarvian Design Group website.
            They do not apply to any separate client portal, dashboard, CRM, or
            subdomain such as <strong>studio.sarviandg.com</strong>.
          </p>

          <h2 className={`${h2} pt-8`}>1. Website Use</h2>
          <p className={body}>
            This website is provided for general informational and promotional
            purposes. You may browse the website, view our portfolio, learn
            about our services, and contact us regarding potential projects.
          </p>
          <p className={body}>
            You agree not to use this website for any unlawful purpose, to
            interfere with the operation of the website, or to attempt to gain
            unauthorized access to any part of the website or related systems.
          </p>

          <h2 className={`${h2} pt-8`}>
            2. No Professional Relationship Created
          </h2>
          <p className={body}>
            Submitting a contact form, sending an email, calling us, or
            interacting with this website does not create a designer-client
            relationship, contract, or agreement with Sarvian Design Group.
          </p>
          <p className={body}>
            Any services, project scope, fees, timelines, deliverables, or
            responsibilities must be agreed to separately in writing.
          </p>

          <h2 className={`${h2} pt-8`}>3. Website Content</h2>
          <p className={body}>
            The content on this website, including text, images, project
            descriptions, design concepts, branding, layout, graphics, and other
            materials, is provided for general information only.
          </p>
          <p className={body}>
            We make reasonable efforts to keep website content accurate and
            current, but we do not guarantee that all information is complete,
            accurate, available, or up to date.
          </p>
          <p className={body}>
            Project descriptions, availability, services, pricing, timelines,
            and other details are subject to change and are not binding unless
            included in a signed written agreement.
          </p>

          <h2 className={`${h2} pt-8`}>4. Intellectual Property</h2>
          <p className={body}>
            Unless otherwise noted, the content on this website is owned by
            Sarvian Design Group or used with permission. This includes, but is
            not limited to, text, images, logos, graphics, layout, design
            elements, and portfolio materials.
          </p>
          <p className={body}>
            You may not copy, reproduce, modify, distribute, display, publish,
            or use website content for commercial purposes without prior written
            permission from Sarvian Design Group.
          </p>
          <p className={body}>
            You may share links to pages on this website for personal or
            informational purposes, provided the content is not altered or
            misrepresented.
          </p>

          <h2 className={`${h2} pt-8`}>
            5. Portfolio Images and Project Materials
          </h2>
          <p className={body}>
            Portfolio images, renderings, photography, project descriptions, and
            related materials are shown to represent Sarvian Design
            Group&rsquo;s work, design style, capabilities, or completed
            projects.
          </p>
          <p className={body}>
            Some images may include third-party products, furnishings,
            materials, artwork, photography, vendors, manufacturers, or
            properties. All third-party trademarks, product names, or
            copyrighted materials remain the property of their respective
            owners.
          </p>
          <p className={body}>
            Use of portfolio images or project materials without permission is
            prohibited.
          </p>

          <h2 className={`${h2} pt-8`}>6. Third-Party Links</h2>
          <p className={body}>
            This website may include links to third-party websites or platforms,
            such as Instagram, Houzz, LinkedIn, vendor websites, or other
            external resources.
          </p>
          <p className={body}>
            These links are provided for convenience only. Sarvian Design Group
            does not control and is not responsible for the content, privacy
            practices, terms, security, accuracy, or availability of third-party
            websites.
          </p>
          <p className={body}>
            Visiting any third-party website is at your own risk and subject to
            that website&rsquo;s own terms and policies.
          </p>

          <h2 className={`${h2} pt-8`}>7. Contact Forms and Communications</h2>
          <p className={body}>
            When you submit a contact form or otherwise communicate with us
            through the website, you agree to provide accurate information.
          </p>
          <p className={body}>
            Submitting an inquiry does not guarantee that Sarvian Design Group
            will accept a project, provide services, or respond within a
            specific timeframe.
          </p>
          <p className={body}>
            We may use the information you provide to respond to your inquiry,
            evaluate potential projects, and communicate with you, as described
            in our Privacy Policy.
          </p>

          <h2 className={`${h2} pt-8`}>8. No Warranties</h2>
          <p className={body}>
            This website is provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis.
          </p>
          <p className={body}>
            Sarvian Design Group makes no warranties or representations
            regarding the operation of the website, the accuracy of website
            content, or the availability of any particular feature, page, or
            service.
          </p>
          <p className={body}>
            We do not guarantee that the website will be uninterrupted,
            error-free, secure, or free from viruses or other harmful
            components.
          </p>

          <h2 className={`${h2} pt-8`}>9. Limitation of Liability</h2>
          <p className={body}>
            To the fullest extent permitted by law, Sarvian Design Group shall
            not be liable for any damages arising from your use of, or inability
            to use, this website.
          </p>
          <p className={body}>
            This includes, but is not limited to, damages related to website
            errors, outdated information, downtime, third-party links,
            unauthorized access, or reliance on website content.
          </p>

          <h2 className={`${h2} pt-8`}>10. Indemnification</h2>
          <p className={body}>
            You agree to indemnify and hold harmless Sarvian Design Group from
            any claims, damages, losses, liabilities, costs, or expenses arising
            from your misuse of the website, violation of these Terms, or
            infringement of any rights of another person or entity.
          </p>

          <h2 className={`${h2} pt-8`}>11. Privacy</h2>
          <p className={body}>
            Your use of this website is also governed by our{" "}
            <Link className="underline hover:text-accent" href="/privacy">
              Privacy Policy
            </Link>
            , which explains how we collect, use, and protect information
            submitted through or collected by the website.
          </p>

          <h2 className={`${h2} pt-8`}>12. Governing Law</h2>
          <p className={body}>
            These Terms are governed by the laws of the State of Florida,
            without regard to conflict of law principles.
          </p>
          <p className={body}>
            Any disputes related to these Terms or your use of this website
            shall be handled in the appropriate courts located in Florida,
            unless otherwise required by law.
          </p>

          <h2 className={`${h2} pt-8`}>13. Changes to These Terms</h2>
          <p className={body}>
            We may update these Terms of Use from time to time. When we do, we
            will update the effective date above.
          </p>
          <p className={body}>
            Your continued use of the website after changes are posted means you
            accept the updated Terms.
          </p>

          <h2 className={`${h2} pt-8`}>14. Contact Us</h2>
          <p className={body}>
            If you have questions about these Terms of Use, please contact us:
          </p>
          <p className={body}>
            <strong>Sarvian Design Group</strong>
            <br />
            Fort Lauderdale, Florida
            <br />
            Email:{" "}
            <a
              className="underline hover:text-accent"
              href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <br />
            Phone:{" "}
            <a
              className="underline hover:text-accent"
              href={`tel:${SITE.phone}`}>
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </Container>
    </main>
  );
}
