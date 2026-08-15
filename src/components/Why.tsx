import Container from "@/components/ui/Container";
import ScrollReveal from "./ui/ScrollReveal";

export default function Why({
  subtitle,
  title,
  description,
  children,
}: {
  subtitle: string;
  title: string;
  /** Optional intro paragraph under the heading. */
  description?: string;
  /** Grid cells — use <WhyCard> (3 per page; the grid is md:grid-cols-3). */
  children: React.ReactNode;
}) {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container className="w-full">
        <ScrollReveal delay={250} direction="down">
          <p className="eyebrow mb-4 text-center">{subtitle}</p>
          <h2 className="max-w-2xl text-center mx-auto mb-0">{title}</h2>
          {description && (
            <p className="max-w-4xl mx-auto mt-10 mb-0 text-center">
              {description}
            </p>
          )}
        </ScrollReveal>
        <ScrollReveal delay={250} direction="up">
          {/* Two shared row tracks (title, body) with each item on subgrid, so
              the paragraphs still line up when one title wraps and another
              doesn't. Row gap lives on the parent for the same reason. */}
          <div className="grid gap-10 mt-20 lg:mt-40 md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-y-4">
            {children}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
