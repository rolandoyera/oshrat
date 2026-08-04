import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationProjects from "../_components/LocationProjects";
import LocationHero from "../_components/LocationHero";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import LocationTopSection from "../_components/LocationTopSection";
import Why from "@/components/Why";
import { WHY } from "./_components/WhyItems";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";

const PATH = "/locations/interior-designers-west-palm-beach-fl";
const TITLE =
  "Interior Designers in West Palm Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in West Palm Beach, FL. Residential and commercial interiors, historic home renovations, and new construction.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: PATH }),
};

export default function Page() {
  return (
    <main>
      <JsonLd data={faqPageGraph(PATH, FAQS)} />
      <LocationHero
        image={{
          src: "/services/residential-interior-design-16x9.jpg",
          alt: "Sarvian Design Group interior showcase",
          position: "top",
        }}
        eyebrow="West Palm Beach Interior Design Firm"
        heading={["Built to outlast", "the trend."]}
        paragraph="A luxury interior design firm working on both sides of West Palm Beach, from the historic houses of El Cid and Flamingo Park to the offices, showrooms, and tower residences downtown."
      />
      <LocationTopSection
        eyebrow="Our Approach in West Palm Beach"
        heading="Residential and Commercial Interior Design in West Palm Beach, FL"
        paragraph="West Palm Beach is two cities at once, and the interiors have to answer both. A 1920s house in El Cid or Flamingo Park comes with plaster, casement windows, and rooms sized for a different era, and the work is to open it up without erasing what makes it worth owning. A tower residence or an office off Okeechobee starts from the opposite problem: a clean slate with no character at all. In both cases we design from the building outward, which is why the finished space never reads as a look that could have landed anywhere."
        image={{
          src: "/assets/palm-beach-architecture-proposal-street-view.jpg",
          alt: "Street view of a luxury South Florida residence designed by Sarvian Design Group",
          width: 1280,
          height: 800,
        }}
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "golden-dreams-golden-beach-fl",
          "aventura-modern-living-aventura-fl",
          "norwood-residence-oakhurst-new-jersey",
          "miami-river-miami-fl",
        ]}
      >
        <p>
          A selection of our residential and commercial interior design work,
          from full-home renovations and new construction interiors to single
          rooms drawn to the same level of detail. It is the standard we bring
          to every West Palm Beach project. Our studio works out of{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          and has been designing across South Florida for years.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "West Palm Beach lives."]}
        paragraphs={[
          "West Palm Beach holds two kinds of buildings at once, and a full-service luxury interior design firm has to be fluent in both. The historic neighborhoods along the water are full of houses built before open plans and modern kitchens, where the work is to bring in light and flow without stripping out the plaster, arches, and window rhythm that made the house worth owning. A block away, a new tower residence or an office floor starts from the opposite condition: a clean slate with no character to protect and none to inherit.",
          "That range is why we design from the building outward rather than applying a house style. The residential interior is drawn to belong to the architecture it sits in, and the commercial work gets the same treatment: materials specified for real traffic, lighting planned for long days instead of a launch photograph, and millwork drawn rather than ordered. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a floor full of employees. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
