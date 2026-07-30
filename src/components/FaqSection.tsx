import { Fragment } from "react";
import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection({
  faqs,
}: {
  /** Q&A list; pass the same array to `faqPageGraph` so schema matches the page. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="bg-cream-200 pb-24 lg:py-32">
      <Container size="lg">
        <ScrollReveal direction="up" delay={150} className="text-center">
          <p className="eyebrow text-accent">FAQ</p>
          <h2 className="h2">Frequently Asked Questions</h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={300}>
          <div className="mx-auto mt-12 max-w-300 lg:mt-16">
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
