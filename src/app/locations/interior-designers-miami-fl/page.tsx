import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationProjects from "../_components/LocationProjects";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";
import LocationHero from "../_components/LocationHero";
import Testimonials from "@/components/Testimonials";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import LocationTopSection from "../_components/LocationTopSection";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import Why from "@/components/Why";
import { WHY } from "./_components/WhyItems";
import ServicesSequence from "../_components/LocationServices";
import { SERVICES } from "./_components/ServicesSequence";

const PATH = "/locations/interior-designers-miami-fl";
const TITLE = "Interior Designers in Miami, FL | Sarvian Design Group";
const DESCRIPTION =
  "Full-service luxury interior designers in Miami, FL. Residential and commercial interiors, renovations & new construction. Request a consultation.";

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
        eyebrow="Interior Designers in Miami, FL"
        heading={["A home equal", "to its address."]}
        paragraph="Blending striking architectural forms with curated interior designs, Sarvian Design Group creates homes that unite nature and design into one harmonious experience. See why we're one of the best interior designers in Miami, FL."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Interior Design in Miami, FL"
        paragraph="A tropical modern residence in the heart of Miami, built around the idea that indoor and outdoor living are one continuous space. Warm wood softens the geometry, expansive glass pulls daylight deep into the plan, and architectural lighting takes over at dusk to hold the clean silhouettes. Outside, the pool deck does the work of a second living room, with shaded overhangs and open-air pavilions that keep the house comfortable year round."
        projectSlug="miami-river-miami-fl"
        image={{
          src: "/assets/old-river-miami-front-view.webp",
          alt: "Miami River residence, a tropical modern home with expansive glass, warm wood, and lush landscaping",
          width: 900,
          height: 400,
        }}
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "south-beach",
          "aventura-modern-living-aventura-fl",
          "miami-river-miami-fl",
          "the-shul-bal-harbour-surfside-fl",
        ]}
      >
        <p>
          A selection of our residential and commercial interior design projects
          in Miami, from full-home renovations and new construction interiors to
          single rooms drawn to the same level of detail. The studio works out
          of Broward County as{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            an interior design firm in Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          and has been designing across South Florida for 12 years.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Miami lives."]}
        paragraphs={[
          "Miami asks more of an interior than almost anywhere else in South Florida. The light is stronger, the season is longer, and the line between inside and outside barely exists. As a full-service luxury interior design firm, we design for exactly that: overhangs and breezeways treated as rooms rather than leftovers, natural stone and warm wood set against long runs of glass, and furnishings selected piece by piece so a residential interior keeps its composure from hard noon light through the hour the architectural lighting takes over.",
          "The city is not one place, and its interiors should not pretend otherwise. An apartment above Biscayne Bay, a house along the river, and a walled garden residence a few streets inland each ask for a different plan. We start from the property itself, its orientation, and how the household actually moves through a day, then balance clean modern forms with a material palette that brings warmth and depth. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "The same standard carries into commercial work. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a room full of guests. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
