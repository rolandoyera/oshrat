import type { Metadata } from "next";
import Cta from "@/components/Cta";
import ProjectsSection from "@/components/ProjectsSection";
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
import WhySurfside from "../_components/seo/WhySurfside";

const PATH = "/locations/interior-designers-surfside-fl";
const TITLE = "Interior Designers in Surfside, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Surfside, FL. Oceanfront condos, homes, renovations, new construction, community and commercial spaces.";

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
          alt: "Sarvian Design Group Surfside showcase",
          blurKey: "/assets/aventura-interior-design-5.jpg",
        }}
        eyebrow="Surfside Interior Design Firm"
        heading={["Every detail", "on purpose."]}
        paragraph="Sarvian Design Group designs homes, commercial spaces, and community interiors in Surfside and along the South Florida coast — one studio carrying the work from the first floor plan through millwork, materials, and the day everything is installed."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Interior Designers in Surfside, FL"
        paragraph="Our most visible Surfside work stands on Collins Avenue: the renovation of The Shul, a sanctuary used by the community every day of the week. The room is shaped by curved walls in a textured finish that recalls Jerusalem stone, with oak millwork and bronze running through every custom piece — engraved bronze doors within a bookmatched marble surround, sculptural glass lighting, and stained glass designed for this room and no other. A building this woven into daily life calls for a careful hand, and the finished sanctuary feels both familiar and entirely new."
        projectSlug="the-shul-bal-harbour-surfside-fl"
      />
      <ProjectsSection content="Recent work from across South Florida — oceanfront apartments, whole-home renovations, custom millwork, and community spaces like the sanctuary we designed in Surfside. Every one of them started the same way we'd start yours: by understanding how the space is really used before a single finish is chosen." />
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Surfside lives."]}
        paragraphs={[
          "Surfside is a rare thing on this coastline: a genuine beach town, low-key and walkable, sitting between the towers of Miami Beach and Bal Harbour. As a full-service luxury interior design firm, we design for both sides of its character. In the oceanfront condominiums along Collins Avenue, the Atlantic is effectively the largest material in the room — so we work with that light rather than against it, choosing natural stone, warm neutral palettes, and furnishings selected piece by piece so the interior keeps its composure from sunrise glare to late-afternoon gold.",
          "West of Collins, Surfside changes scale. The streets between the beach and the bay are lined with single-family homes where life moves between indoors and out all day long. There we pay attention to orientation — where the sun lands, where the breeze comes from, how the garden meets the living space — and balance clean coastal forms with a material palette that brings warmth and depth. Considered layouts, custom built-ins, and easy transitions between rooms produce homes that feel curated without ever feeling staged.",
          "What holds it all together is intent. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it. That standard applies to a private residence, and it applied equally to the sanctuary we designed at The Shul on Collins Avenue, where custom bronze, stone, and millwork were drawn and specified down to the last detail. From the earliest concept conversations through final installation, we stay close to our clients so that every decision — large or invisible — serves the same vision.",
        ]}
      />
      <WhySurfside />
    </main>
  );
}
