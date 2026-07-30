import Container from "@/components/ui/Container";
import ScrollReveal from "./ui/ScrollReveal";

export interface WhyItem {
  title: string;
  description: string;
}

export default function Why({
  subtitle,
  title,
  description,
  items,
}: {
  subtitle: string;
  title: string;
  /** Optional intro paragraph under the heading. */
  description?: string;
  items: WhyItem[];
}) {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container size="lg" className="w-full">
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
          <div className="grid md:grid-cols-3 gap-10 mt-20 lg:mt-40">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <h2 className="font-semibold h3">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
