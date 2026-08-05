import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import HoverUnderline from "@/components/ui/HoverUnderline";
import FeaturedProjects from "./_components/FeaturedProjects";
import Hero from "./_components/Hero";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import Why from "@/components/Why";
import { WHY } from "./_components/WhyItems";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";

const PATH = "/locations/interior-designers-fort-lauderdale-fl";
const TITLE =
  "Interior Designers in Fort Lauderdale, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior design firm in Fort Lauderdale, FL. Interiors, renovations & new construction on the water. Request a consultation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: PATH }),
};

// Featured project cards render Sanity content — keep them fresh.
export const revalidate = 60;

export default function Page() {
  return (
    <main>
      <JsonLd data={faqPageGraph(PATH, FAQS)} />
      <Hero
        image={{
          mobile: "/about/sarvian-design-group-oshrat-rothschild-600.webp",
          tablet: "/about/sarvian-design-group-oshrat-rothschild-960.webp",
          desktop: "/about/sarvian-design-group-oshrat-rothschild-2000.webp",
          alt: "Sarvian Design Group interior design firm in Fort Lauderdale, Florida",
        }}
        eyebrow="Interior Designers in Fort Lauderdale, Florida"
        heading={["A home equal", "to its address."]}
        paragraph="Led by Oshrat Rothschild, we're a full-service interior design firm for luxury residential and commercial interiors, renovations, and new construction across Fort Lauderdale, Florida in Broward County."
      />
      <FeaturedProjects
        // Hand-picked projects for this page — order here is display order.
        // Fort Lauderdale projects only: this page argues it is a Fort
        // Lauderdale studio, so an Aventura project undercut the point.
        slugs={[
          "elevated-primary-suite-fort-lauderdale-fl",
          "modern-marble-haven-fort-lauderdale-fl",
        ]}
        heading="Our Interior Design in Fort Lauderdale"
        description="Explore a selection of our Fort Lauderdale interiors, where thoughtful space planning, refined materials, and custom details come together to create homes that feel distinctive, cohesive, and personal."
      />
      <ServicesSequence
        services={SERVICES}
        heading="What Our Fort Lauderdale Interior Designers Do"
      />

      <Testimonials />
      <Cta />
      <LocationEditorial
        heading={["Designed for how", "Fort Lauderdale lives."]}
        paragraphs={[
          <>
            Fort Lauderdale interior designers work in a particular kind of
            light, low and warm, reflected off water most of the year. At
            Sarvian Design Group, we design for it. Our studio serves the
            residences that define the city&apos;s waterfront in Harbor Beach,
            Rio Vista, Coral Ridge, and the isles our{" "}
            <Link
              href="/locations/interior-designers-las-olas-fl"
              className="group relative hover:text-accent transition-colors duration-300">
              interior designers in Las Olas
              <HoverUnderline className="text-accent" />
            </Link>{" "}
            know best, with interiors built to hold their composure against that
            light: natural stone, warm neutrals, and furnishings selected piece
            by piece rather than pulled from a catalog. It&apos;s the difference
            between a home that photographs well and one that lives well, and
            it&apos;s why the interior designers Fort Lauderdale, FL homeowners
            ultimately choose tend to be found through the homes they&apos;ve
            already completed.
          </>,
          "Our interior design consulting in Fort Lauderdale begins before a single finish is selected. We start with how a home is actually used: where mornings happen, where guests gather, which rooms the breeze should reach. From there we carry the project from space planning and material palettes through procurement, custom furnishings, and installation. One studio, one point of accountability, from the first walkthrough to the day the art is hung.",
          "Interior design in Fort Lauderdale is too often reduced to a formula: white walls, blue accents, something nautical on a shelf. The city deserves better. Homes here are defined by their relationship to water and weather, by deep terraces, Intracoastal views, and rooms that open rather than close. The interiors that succeed answer that architecture with restraint: layered texture, honest materials, a palette drawn from the landscape rather than a theme. That's the standard we hold every high-end interior design project to, whether it's a full renovation on the Isles or the furnishing of a new build in Harbor Beach.",
        ]}
      />
      <FaqSection faqs={FAQS} />
      <Why {...WHY} />
    </main>
  );
}
