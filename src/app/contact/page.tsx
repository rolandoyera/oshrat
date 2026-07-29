import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import H1 from "@/components/ui/H1";
import Main from "@/components/ui/Main";
import P from "@/components/ui/P";
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
    <Main>
      <JsonLd data={faqPageGraph("/contact", FAQS)} />
      <div className="h-24" />
      <Container size="lg" className="mt-16">
        <div className="border-b border-border/40 pb-12 mb-4 px-8 lg:px-0">
          <H1>Contact Us</H1>
          <P className="mt-1">Let's make something amazing together.</P>
        </div>
        <ContactSection formType="contact_page" linkLocation="contact_page" />
      </Container>
      <FaqSection faqs={FAQS} />
    </Main>
  );
}
