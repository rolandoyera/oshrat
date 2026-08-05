import type { Metadata } from "next";
import Cta from "@/components/Cta";
import LocationProjects from "../_components/LocationProjects";
import Link from "next/link";
import HoverUnderline from "@/components/ui/HoverUnderline";
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

const PATH = "/locations/interior-designers-las-olas-fl";
const TITLE = "Interior Designers in Las Olas, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Las Olas, FL. Waterfront homes on the isles, renovations, new construction, and commercial spaces on the boulevard.";

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
          src: "/assets/master-bath-interior-design-front.webp",
          alt: "Sarvian Design Group Las Olas showcase",
          position: "top",
        }}
        eyebrow="Interior Designers in Las Olas, FL"
        heading={["Every detail", "on purpose."]}
        paragraph="We are interior designers in Las Olas, Florida, working across
                residential and commercial interiors — the waterfront homes along
                the isles and the shops and restaurants that give the boulevard
                its character. Every layout, material, and detail with purpose."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Interior Designers Las Olas"
        paragraph="A primary bath in Fort Lauderdale, minutes from Las Olas, designed as a quiet retreat rather than a showpiece. Fluted Calacatta marble wraps the walls, and the veining carries across the floor, the shower, and the vanity surfaces so the room reads as a single piece of stone. Warm walnut cabinetry and brushed gold fixtures keep it from turning cold, while a freestanding tub sits framed by sheer drapery and soft light. Every decision here, down to where the storage went, was made for how the room gets used each morning."
        projectSlug="modern-marble-haven-fort-lauderdale-fl"
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "elevated-primary-suite-fort-lauderdale-fl",
          "modern-marble-haven-fort-lauderdale-fl",
          "aventura-modern-living-aventura-fl",
          "the-shul-bal-harbour-surfside-fl",
        ]}
      >
        <p>
          A selection of the work behind our{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            interior design firm in Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>
          , from full-home renovations and new construction interiors to single
          rooms drawn to the same level of detail. Las Olas is one of the
          neighborhoods we return to most.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Las Olas lives."]}
        paragraphs={[
          "Las Olas is two neighborhoods at once: a residential one on the water and a commercial one along the boulevard. As a full-service luxury interior design firm, we work in both. On the isles, the canal is effectively the largest material in the room, so we design with that light rather than against it, choosing natural stone, warm neutral palettes, and furnishings selected piece by piece so the interior keeps its composure from morning glare to late-afternoon gold. It is the kind of attention that has made us one of the top interior design firms in Fort Lauderdale.",
          "Away from the water, Las Olas changes scale. Older homes on the streets behind the boulevard sit alongside downtown towers at the west end, and the two ask for different things from a residential interior. We pay attention to orientation, to where the sun lands and how a garden or a terrace meets the living space, and we balance clean modern forms with a material palette that brings warmth and depth. Considered layouts, custom built-ins, and easy transitions between rooms produce homes that feel curated without ever feeling staged.",
          "The commercial side of the neighborhood runs on the same standard. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is a family or a room full of guests. The best interior designers earn the work in the details nobody lists on a drawing set, which is why a shop, a restaurant, or a community space is specified here as carefully as a private residence. From the earliest concept conversations through final installation, we stay close to our clients so every decision serves the same vision.",
        ]}
      />
      <Why {...WHY} />
    </main>
  );
}
