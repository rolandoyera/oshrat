import Container from "@/components/ui/Container";
import FadingHeroBackdrop from "./FadingHeroBackdrop";
import HeroScrollColor from "./HeroScrollColor";
import { HERO_BLUR } from "@/lib/hero-blur";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServicesSequence from "./ServicesSequence";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "../../_components/Testimonials";
import { LocationEditorial } from "./LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import Cta from "@/components/Cta";
import Why from "./Why";

export interface LocationContent {
  /** Route path, e.g. "/locations/interior-designers-fort-lauderdale-fl". Feeds the FAQ JSON-LD. */
  path: string;
  hero: {
    /** H1 line, e.g. "Interior Designers in Fort Lauderdale, Florida". */
    eyebrow: string;
    /** Display headline lines (the em-dash divider follows line one). */
    headline?: [string, string];
    paragraph: string;
    image?: {
      mobile: string;
      tablet: string;
      desktop: string;
      alt: string;
    };
  };
  featuredProjects: {
    slugs: string[];
    heading: string;
    description: string;
  };
  editorial: {
    /** Heading lines, e.g. ["Designed for how", "Fort Lauderdale lives."]. */
    heading: string[];
    paragraphs: string[];
  };
  /** Feeds both the FAQ section and FAQPage schema — build with buildLocationFaqs. */
  faqs: { question: string; answer: string }[];
  /** Lead attribution — how forms from this page are tagged in GA4 and the CRM. */
  cta: {
    location: string;
    formSource: string;
  };
}

const DEFAULT_HEADLINE: [string, string] = ["A home equal", "to its address."];

const DEFAULT_HERO_IMAGE = {
  mobile: "/about/sarvian-design-group-oshrat-rothschild-600.webp",
  tablet: "/about/sarvian-design-group-oshrat-rothschild-960.webp",
  desktop: "/about/sarvian-design-group-oshrat-rothschild-2000.webp",
  alt: "Sarvian Design Group luxury interior in South Florida",
};

export default function LocationLanding({
  content,
}: {
  content: LocationContent;
}) {
  const { hero, featuredProjects, editorial, faqs, path } = content;
  const image = hero.image ?? DEFAULT_HERO_IMAGE;
  const [headlineTop, headlineBottom] = hero.headline ?? DEFAULT_HEADLINE;

  return (
    <main>
      <JsonLd data={faqPageGraph(path, faqs)} />
      <section className="relative flex min-h-dvh w-full items-end">
        <FadingHeroBackdrop
          sources={image}
          alt={image.alt}
          blurDataURL={HERO_BLUR[image.desktop]}
        />

        <Container size="lg" className="relative z-10 w-full">
          <HeroScrollColor>
            <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-10 pb-6 lg:pb-12">
              <ScrollReveal
                mobileStatic
                direction="up"
                className="lg:col-span-8 text-white">
                <h1 className="text-sm uppercase font-medium tracking-[0.2em] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),var(--color-cream-200))] mb-2">
                  {hero.eyebrow}
                </h1>

                <h2 className="lg:text-[7rem] text-[2.25rem] text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),white)] leading-none space-y-2 lg:space-y-4 mb-0">
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
                mobileStatic
                direction="up"
                className="lg:col-span-4 text-white">
                <p className="text-[color-mix(in_oklab,var(--color-taupe-800)_var(--hero-mix,0%),var(--color-cream-100))]">
                  {hero.paragraph}
                </p>
              </ScrollReveal>
            </div>
          </HeroScrollColor>
        </Container>
      </section>

      <ServicesSequence />

      <FeaturedProjects
        slugs={featuredProjects.slugs}
        heading={featuredProjects.heading}
        description={featuredProjects.description}
      />

      <Testimonials />
      <Cta />
      <LocationEditorial
        heading={editorial.heading}
        paragraphs={editorial.paragraphs}
      />
      <FaqSection faqs={faqs} />
      <Why />
    </main>
  );
}
