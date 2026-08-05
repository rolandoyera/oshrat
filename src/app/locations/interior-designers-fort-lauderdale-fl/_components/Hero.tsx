import Container from "@/components/ui/Container";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { HERO_BLUR } from "@/lib/hero-blur";
import HeroBackdrop from "./HeroBackdrop";

/**
 * Fort Lauderdale's hero. This is the one thing the page does differently from
 * the other location pages: a responsive art-directed backdrop with the copy
 * set bottom-left, instead of the shared centered `LocationHero`. Props
 * deliberately mirror `LocationHero`'s so `page.tsx` reads the same as every
 * other city's.
 */
export default function Hero({
  image,
  eyebrow,
  heading,
  paragraph,
}: {
  image: { mobile: string; tablet: string; desktop: string; alt: string };
  /** Renders as the H1. */
  eyebrow: string;
  /** Two display lines; the divider rule follows the first. */
  heading: [string, string];
  paragraph: string;
}) {
  const [headlineTop, headlineBottom] = heading;

  return (
    <section className="relative flex min-h-dvh w-full items-end overflow-hidden">
      <HeroBackdrop
        sources={image}
        alt={image.alt}
        blurDataURL={HERO_BLUR[image.desktop]}
      />

      <Container className="relative z-10 w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10 pb-6 lg:pb-12">
          <ScrollReveal
            topReveal
            direction="up"
            className="lg:col-span-8 text-white"
          >
            <h1 className="text-sm uppercase font-medium tracking-[0.2em] text-cream-200 mb-2">
              {eyebrow}
            </h1>

            <h2 className="lg:text-[7rem] text-[2.25rem] text-white leading-none space-y-2 lg:space-y-4 mb-0">
              <span className="block">
                {headlineTop}{" "}
                <span
                  aria-hidden
                  className="inline-block h-0.5 w-[1.5em] bg-current align-middle"
                />
              </span>
              <span className="block w-fit">{headlineBottom}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal
            topReveal
            direction="up"
            className="lg:col-span-4 text-white"
          >
            <p className="text-cream-100">{paragraph}</p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
