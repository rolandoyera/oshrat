import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationHero from "../_components/LocationHero";
import ServicesSequence from "../_components/LocationServices";
import Testimonials from "@/components/Testimonials";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import LocationTopSection from "../_components/LocationTopSection";
import { LocationEditorial } from "../_components/LocationEditorial";
import FaqSection from "@/components/FaqSection";
import { FAQS } from "./_components/Faqs";
import { SERVICES } from "./_components/ServicesSequence";
import Why from "@/components/Why";
import { WHY } from "./_components/WhyItems";
import LocationProjects from "../_components/LocationProjects";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";

const PATH = "/locations/interior-designers-bal-harbour-fl";
const TITLE = "Interior Designers in Bal Harbour, FL | Sarvian Design Group";
const DESCRIPTION =
  "We're interior designers in Bal Harbour, FL. From private residences to commercial and community spaces, we carry a project from space planning through custom millwork, materials, and final installation.";

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
          alt: "Sarvian Design Group Bal Harbour showcase",
          blurKey: "/assets/aventura-interior-design-5.jpg",
        }}
        eyebrow="Interior Designers in Bal Harbour, FL"
        heading={["Composed at", "every height."]}
        paragraph="We're interior designers in Bal Harbour, FL. From private residences to commercial and community spaces, we carry a project from space planning through custom millwork, materials, and final installation."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Interior Design in Bal Harbour, FL"
        paragraph="The Shul of Bal Harbour is the studio's most public work: the renovation of a sanctuary its community uses every single day. The design quiets the room rather than decorating it. Warm oak, a stone-textured curve of wall, and bronze detailed down to the engraving give the hall its calm, stained glass carries the color, and a curved library holds the community's books. Renovating a building this woven into daily life demands restraint, and the finished room earns its stillness."
        projectSlug="the-shul-bal-harbour-surfside-fl"
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "golden-dreams-golden-beach-fl",
          "aventura-modern-living-aventura-fl",
          "the-shul-bal-harbour-surfside-fl",
          "miami-river-miami-fl",
        ]}>
        <p>
          A look at our most recent work from{" "}
          <Link
            href="/locations/interior-designers-miami-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            our interior designers in Miami
            <HoverUnderline className="text-accent" />
          </Link>
          , spanning oceanfront residences and full-home renovations to custom
          millwork, community and commercial spaces. It is the same approach we
          bring to every Bal Harbour project: understand how the space is
          actually used, then shape the design details around it.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Bal Harbour lives."]}
        paragraphs={[
          "As a full-service luxury interior design firm, we have spent years designing for the particular way Bal Harbour lives. Much of the village is vertical, and in a tower residence the Atlantic is present in every room; the interior's first job is to hold its own beside that view. We choose natural stone and warm neutral tones that read true in hard coastal light, and we furnish slowly, piece by piece, so the rooms keep their poise from breakfast to dusk.",
          "On the bay side of the village the scale changes, and single-family houses trade the panorama for gardens, docks, and a closer line between indoors and out. There we work from the orientation of the lot, letting the sun and the water decide where the living happens, and we warm the clean forms coastal architecture wants with a deeper material palette. The result is a residential interior that feels curated without being staged, and connected to its place without leaning on coastal cliché.",
          "Luxury interior design, in this studio's practice, is judged by whether a space is honest about the people who use it. The standard is the same for a private residence and for the sanctuary we drew for The Shul of Bal Harbour, where bronze, stone, and millwork were specified in-house down to the engraving. We stay beside our clients from the first concept meeting to the final installation, and the vision that opens the project is the one you walk into at the end.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
