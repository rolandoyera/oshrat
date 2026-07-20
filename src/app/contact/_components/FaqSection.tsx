import { Fragment } from "react";
import Container from "../../../components/ui/Container";
import ScrollReveal from "../../../components/ui/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

// Also feeds the FAQPage JSON-LD on /contact — keep schema and page in sync.
export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Do you offer interior design services outside Fort Lauderdale?",
    answer:
      "Yes. Sarvian Design Group works with clients throughout South Florida — Broward County, Palm Beach, Boca Raton, Miami, and surrounding areas with our studio based in Ft. Lauderdale.",
  },
  {
    question: "What types of projects do you take on?",
    answer:
      "Sarvian Design Group works on a range of interior design projects from full-home renovations and new construction to single-room transformations, custom furnishings, built-ins, lighting, material selections, procurement, and styling, depending on project scope.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Start by submitting the contact form with basic project details. The team will review your inquiry and follow up to discuss scope, timing, and next steps.",
  },
  {
    question: "Do you offer consultations?",
    answer:
      "Yes. We offer consultations for most projects, though availability can vary by scope, location, and schedule. Reach out through the contact form and we'll let you know what's possible.",
  },
  {
    question: "Can you help with custom furniture or built-ins?",
    answer:
      "Yes. Sarvian Design Group can assist with custom design elements such as built-ins, lighting, furniture pieces, and other details that may require drawings, specifications, or coordination with fabricators.",
  },
];

/** FAQ accordion. Rows styled after ServicesBridge, but they expand in place. */
export default function FaqSection({
  faqs = FAQS,
}: {
  /** Q&A list; pass the same array to `faqPageGraph` so schema matches the page. */
  faqs?: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-cream-200 pb-24 lg:py-32">
      <Container size="lg">
        <ScrollReveal direction="up" threshold={0.3} className="text-center">
          <p className="eyebrow text-accent">FAQ</p>
          <h2 className="h2">Frequently Asked Questions</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200} threshold={0.1}>
          <div className="mx-auto mt-12 max-w-[1200px] lg:mt-16">
            <hr className="etched-line" />
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <Fragment key={faq.question}>
                  <AccordionItem value={`faq-${i}`} className="border-b-0">
                    <AccordionTrigger className="items-center rounded-none px-3 py-5 hover:no-underline cursor-pointer md:px-4 md:py-7 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-foreground/60">
                      <span className="grid grid-cols-[2.5rem_1fr] items-center gap-4 md:grid-cols-[3.5rem_1fr] md:gap-8">
                        <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xl font-normal leading-tight tracking-tight text-foreground lg:text-3xl lg:leading-9">
                          {faq.question}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="max-w-[75ch] pb-6 pl-17 pr-8 text-foreground/85 md:pb-8 md:pl-26">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                  <hr className="etched-line" />
                </Fragment>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
