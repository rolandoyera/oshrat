import { TextEffect } from "@/components/motion-primitives/text-effect";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * Location editorial / SEO section — the long-form keyword copy block on the
 * location landing pages. Placement: between the CTA (cream-200) and the FAQ.
 * Each page supplies its own heading lines and paragraphs via LocationContent.
 */
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
      <div className="mx-auto px-6 xl:px-0 max-w-[1800px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left — eyebrow + heading */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Our Approach</p>
            <h2 className="h2">
              {heading.map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* Right — editorial copy */}
          <div className="lg:col-span-7 space-y-8 flex flex-col gap-10">
            {paragraphs.map((paragraph) => (
              <TextEffect
                key={paragraph.slice(0, 32)}
                className="text-base lg:text-[22px] font-light text-balance -mb-4 last:mb-0 leading-[1.55]"
                as="p"
                preset="fade-in-blur"
                speedReveal={5}
                speedSegment={0.3}
                inView
                delay={0.25}>
                {paragraph}
              </TextEffect>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
