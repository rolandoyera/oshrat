import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import HoverUnderline from "@/components/ui/HoverUnderline";
import LocationHero from "../_components/LocationHero";
import LocationProjects from "../_components/LocationProjects";
import LocationTopSection from "../_components/LocationTopSection";
import ServicesSequence from "../_components/LocationServices";
import { LocationEditorial } from "../_components/LocationEditorial";
import Testimonials from "@/components/Testimonials";
import FaqSection from "@/components/FaqSection";
import Why from "@/components/Why";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import { FAQS } from "./_components/Faqs";
import { SERVICES } from "./_components/ServicesSequence";
import { WHY } from "./_components/WhyItems";

const PATH = "/locations/interior-designers-miami-beach-fl";
const TITLE = "Interior Designers in Miami Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Miami Beach, FL. From oceanfront condominiums on Collins to the single-family islands out past the causeways. Space planning, procurement, and installation all sit with one team at Sarvian Design Group.";

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
          src: "/assets/aventura-interior-design-5.webp",
          alt: "Sarvian Design Group Miami Beach showcase",
          blurKey: "/assets/aventura-interior-design-5.jpg",
        }}
        eyebrow="Interior Designers in Miami Beach, FL"
        heading={["Every detail", "on purpose."]}
        paragraph="Luxury interior designers in Miami Beach, FL. From oceanfront condominiums on Collins to the single-family islands out past the causeways. Space planning, procurement, and installation all sit with one team at Sarvian Design Group."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Interior Design in Miami Beach"
        paragraph="Our South Beach residence is 3,400 square feet of Tropical Modern living, and it is the clearest statement of how we design on this island. Bespoke contemporary pieces in muted neutrals carry the rooms, oceanic blues and textured linen give them depth, and sculptural lighting settles over the places people actually gather."
        projectSlug="south-beach-tropical-modern-miami-beach-fl"
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Our Latest Miami Projects"
        slugs={[
          "south-beach-tropical-modern-miami-beach-fl",
          "miami-river-miami-fl",
          "the-shul-bal-harbour-surfside-fl",
          "aventura-modern-living-aventura-fl",
        ]}>
        <p>
          Residential and commercial work from the barrier island and the coast
          beside it: oceanfront apartments, whole-residence renovations, custom
          joinery, and a sanctuary in Surfside. All of it ran through the
          process{" "}
          <Link
            href="/locations/interior-designers-miami-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            our Miami interior design firm
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          applies here, directed out of{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            a top interior design firm in Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>
          . What they share is where they began, with a long look at how the
          household actually moves through a property before anything was
          specified.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence
        services={SERVICES}
        heading="Interior Design Services in Miami Beach, FL"
      />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Miami Beach lives."]}
        paragraphs={[
          "Miami Beach is not one place, and a luxury interior design firm that treats it as one will get it wrong. South Beach is a Deco district where the buildings were finished before open plans existed, Mid-Beach runs to towers with the Atlantic filling every window, and North Beach holds MiMo blocks that have been quietly undervalued for decades. Our residential interior design starts by reading which of those a property belongs to, because the ceiling height, the window openings, and what the floor is already made of decide far more about the finished rooms than any palette selected in advance.",
          "Off the causeways the island changes character completely. The Venetian and Sunset Islands, La Gorce, and the Star, Palm, and Hibiscus group are single-family streets where houses sit high for flood elevation, neighbors are close, and the water is on at least one side. There we work from the lot outward, letting the orientation decide where the living happens and how the ground floor meets the garden, then warm the clean coastal forms with stone, timber, and textiles that have some weight to them. What we are after is a residence that belongs to its address without reaching for the obvious coastal gestures.",
          "A good deal of Miami Beach is owned by people who are here for part of the year, and that shapes how we run a project as much as how we draw one. Selections are presented in consolidated rounds rather than scattered across months, custom pieces are ordered against the construction calendar so nothing waits on a lead time we could have seen coming, and the residence is installed as one finished reveal. The measure of the work does not shift with the scope, and it did not shift when this studio took on the sanctuary at The Shul on Collins Avenue in Surfside, where the bronze, the stonework, and every piece of joinery were detailed by our interior designers before a single element was fabricated.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
