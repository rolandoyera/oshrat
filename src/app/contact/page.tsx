import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactSection from "./_components/ContactSection";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";

const TITLE =
  "Contact Sarvian Design Group | Fort Lauderdale Interior Designer";
const DESCRIPTION =
  "Start a conversation about your project. Contact Sarvian Design Group, a Fort Lauderdale interior design studio serving South Florida.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/contact" }),
};

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={faqPageGraph("/contact", FAQS)} />
      <div className="h-24" />
      <Container size="lg" className="mt-16">
        <div className="border-b border-border/40 pb-12 mb-4 px-8 lg:px-0">
          <h1 className="display">Contact Us</h1>
          <p className="mt-1">Let's make something amazing together.</p>
        </div>
        <ContactSection formType="contact_page" linkLocation="contact_page" />
      </Container>
      <FaqSection faqs={FAQS} />
    </main>
  );
}
