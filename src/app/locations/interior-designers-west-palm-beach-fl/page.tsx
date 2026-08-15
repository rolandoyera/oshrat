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
          A cross-section of our residential and commercial interior design
          work, spanning whole-home renovations, new construction interiors,
          and single rooms held to one standard of detail. It is the standard
          we bring to every West Palm Beach project and to the work of{" "}
          <Link
            href="/locations/interior-designers-palm-beach-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            our interior design studio in Palm Beach
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          across the bridge. The work is run out of{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300"
          >
            our Fort Lauderdale interior designers
            <HoverUnderline className="text-accent" />
          </Link>
          , designing across South Florida for 12 years.
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
          "That range is why we design from the building outward rather than applying a house style. The residential interior is drawn to belong to the architecture it sits in, and the commercial work gets the same treatment: materials that can take a crowd, lighting planned for the working day, and millwork we draw ourselves. What separates the best interior designers from the rest is rarely the fabric; it is the plan, the built-ins, and the way one room gives onto the next.",
          "Luxury interior design, as we practice it, is measured by how well an environment serves the people in it, whether that is one family or a floor full of employees, and ornament has very little to do with it. We keep the same team on your project from the first concept conversation to the final installation, so every decision answers to one vision and the studio that began the work is the one standing in the finished room.",
        ]}
      />
      <Why
        subtitle="Why Sarvian Design Group"
        title="Top Interior Designers in West Palm Beach, FL"
        description="West Palm Beach is growing fast enough that plenty of firms are happy to give you whatever is selling this year. We would rather give you something that still reads well in a decade. Across residential and commercial interiors, the studio carries its own millwork drawings, keeps the schedule honest, and stays on the job through installation, and that follow-through is why one project here usually turns into the next.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Old Houses, Handled Properly.</h2>
          <p>
            The neighborhoods that give this city its character are full of
            houses built before open plans, central air, and modern kitchens.
            Opening them up is easy; opening them up without flattening the
            plaster, the arches, and the window rhythm that made them worth
            buying is the actual skill. We let the architecture lead and hold
            every new profile, proportion, and material to the standard the
            house already set, so the finished interior feels inevitable in the
            house rather than installed over it.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">
            Commercial Held to the Same Standard.
          </h2>
          <p>
            A great deal of what gets built here is commercial: offices,
            showrooms, and community spaces that are specified for a budget
            cycle and look tired within a few years. We run those projects the
            way we run a residence. Materials are chosen for real traffic,
            lighting is planned for long working days instead of a launch
            photograph, and the millwork is drawn rather than ordered from a
            catalog. The measure of a commercial interior is not how it
            photographs on day one.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">One Studio, No Handoffs.</h2>
          <p>
            The typical high-end project changes hands half a dozen times, and
            something is lost at each handoff. Ours does not: the space plan,
            the palette, the lighting, and the 3D visuals are developed by the
            same studio that then handles sourcing, custom built-ins, art,
            styling, and the installation itself, so the living room, kitchen,
            and primary suite land as one continuous project. As your interior
            design firm in West Palm Beach, we run the coordination with your
            architect, contractor, and trades, and we are still in the room
            when the last piece is hung.
          </p>
        </div>
      </Why>
    </main>
  );
}
