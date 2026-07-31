import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactSection from "./_components/ContactSection";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import ContactHero from "./_components/ContactHero";

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
      <ContactHero />
      <Container size="lg" className="my-16">
        <ContactSection formType="contact_page" linkLocation="contact_page" />
      </Container>
      <FaqSection faqs={FAQS} />
    </main>
  );
}
