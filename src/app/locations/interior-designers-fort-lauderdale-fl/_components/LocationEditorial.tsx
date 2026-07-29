import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function LocationEditorial({
  heading,
  paragraphs,
}: {
  /** Heading lines, rendered with a break between each. */
  heading: string[];
  paragraphs: string[];
}) {
  return (
    <ScrollReveal
      direction="up"
      threshold={0.25}
      className="bg-cream-200 pb-24 lg:py-32">
      <Container size="lg" className="grid lg:grid-cols-12 lg:gap-20">
        {/* Left — eyebrow + heading */}
        <ScrollReveal
          direction="left"
          threshold={0.3}
          delay={300}
          className="lg:col-span-5">
          <p className="eyebrow">Our Approach</p>
          <h2>
            {heading.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h2>
        </ScrollReveal>

        {/* Right — editorial copy */}
        <ScrollReveal
          direction="right"
          threshold={0.3}
          delay={300}
          className="lg:col-span-7 space-y-8 flex flex-col gap-10">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </ScrollReveal>
      </Container>
    </ScrollReveal>
  );
}
