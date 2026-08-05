import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function LocationEditorial({
  heading,
  paragraphs,
}: {
  /** Heading lines, rendered with a break between each. */
  heading: string[];
  /** Accepts JSX so a page can put internal links in its editorial copy. */
  paragraphs: React.ReactNode[];
}) {
  return (
    <ScrollReveal
      direction="up"
      threshold={0.25}
      className="bg-cream-200 py-24 lg:py-32"
    >
      <Container className="grid lg:grid-cols-12 lg:gap-20">
        {/* Left — eyebrow + heading */}
        <ScrollReveal
          direction="left"
          threshold={0.3}
          delay={300}
          className="lg:col-span-5"
        >
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
          className="lg:col-span-7 space-y-8 flex flex-col gap-10"
        >
          {/* Index keys: the list is static per page and never reorders. */}
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </ScrollReveal>
      </Container>
    </ScrollReveal>
  );
}
