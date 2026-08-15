import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export interface WhyItem {
  title: string;
  description: string;
}

export default function LocationWhy({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-cream-200 py-24 lg:py-32">
      <Container className="w-full">
        <ScrollReveal delay={250} direction="down">
          <p className="eyebrow mb-4 text-center">Why Choose Us</p>
          <h2 className="max-w-2xl text-center mx-auto mb-0">{title}</h2>
          <p className="max-w-4xl mx-auto mt-10 mb-0 text-center">
            {description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={250} direction="up">
          <div className="grid gap-10 mt-20 lg:mt-40 md:grid-cols-3 md:grid-rows-[auto_1fr] md:gap-y-4">
            {children}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
