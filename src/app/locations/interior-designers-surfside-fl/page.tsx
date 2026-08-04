import type { Metadata } from "next";
import Cta from "@/components/Cta";
import ProjectsSection from "@/components/ProjectsSection";
import Hero from "./_components/Hero";
import ServicesSequence from "../_components/ServicesSequence";
import Testimonials from "@/components/Testimonials";
import { socialMeta } from "@/lib/seo";
import { JsonLd, faqPageGraph } from "@/lib/structured-data";
import TopSection from "./_components/TopSection";
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
      <Hero />
      <TopSection />
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
