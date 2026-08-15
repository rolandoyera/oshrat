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

const PATH = "/locations/interior-designers-delray-beach-fl";
const TITLE = "Interior Designers in Delray Beach, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Delray Beach, FL. Residential and commercial interiors, cottage and full home renovations, and new construction.";

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
        eyebrow="Delray Beach Interior Design Firm"
        heading={["Every square foot", "earns it."]}
        paragraph="A full-service interior design firm working in Delray Beach on houses near the water and on the commercial spaces off Atlantic Avenue, where the rooms are rarely oversized and every decision has to carry its weight."
      />
      <LocationTopSection
        eyebrow="Our Approach in Delray Beach"
        heading="Residential and Commercial Interior Design in Delray Beach, FL"
        paragraph="Delray rewards restraint at a smaller scale than most of the coast. The houses around Lake Ida, Seagate, and the historic districts were built with modest footprints and real character, and the temptation is always to solve them by adding square footage. We would rather solve them with the plan. Storage gets designed rather than found, circulation is tightened so rooms stop borrowing space from each other, and the millwork is drawn to the inch because at this scale there is nowhere to hide a rough detail. The same discipline applies to the shops and restaurants off Atlantic Avenue."
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
        ]}>
        <p>
          A selection of our residential and commercial interior design work,
          from full-home renovations and new construction interiors to single
          rooms drawn to the same level of detail. It is the standard we bring
          to every Delray Beach project and to the work of{" "}
          <Link
            href="/locations/interior-designers-palm-beach-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            our Palm Beach interior designers
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          just up the coast. We have worked as{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            interior designers in Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          and across South Florida for 12 years.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Designed for how", "Delray Beach lives."]}
        paragraphs={[
          "Delray works at a smaller scale than the rest of the coast, and its interiors are better for it. The houses around Lake Ida, Seagate, and the historic districts were built with modest footprints and real character, which means the plan carries most of the load. As a full-service luxury interior design firm, that is where we start: tightening circulation, designing storage rather than hunting for it, and drawing millwork to the inch because at this scale there is nowhere to hide a rough detail.",
          "It also means we will tell you when a renovation gets you further than the addition you came in asking about. A larger house forgives a mediocre plan because there is room to absorb the mistake, and a smaller one simply does not. Living this close to the water raises the standard on specification as well, since finishes have to hold up to salt air, strong light, and daily use and still look right years in. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "The same discipline carries into the commercial work off Atlantic Avenue. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it, whether that is one family or a room full of guests. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why
        subtitle="Why Sarvian Design Group"
        title="Top Interior Designers in Delray Beach, FL"
        description="Plenty of firms are comfortable when the budget is enormous and the house is 8,000 square feet. Delray asks a harder question, because the rooms are rarely oversized and there is nowhere to hide a lazy decision. Across residential and commercial interiors, our studio draws the millwork, holds the schedule, and stays on the job through installation, which is why clients tend to hand us the next project rather than start over with someone new.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">The Plan Before the Palette.</h2>
          <p>
            In a modest footprint, whether a house feels tight or generous is
            decided long before anyone picks a fabric. Circulation, built-in
            storage, the width of an opening, and where the sightlines land do
            most of the work, and no amount of good taste later will fix a plan
            that was never solved. We start there, which is also why we will
            tell you when a renovation gets you further than the addition you
            came in asking about.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Character Worth Keeping.</h2>
          <p>
            The cottages and older houses around the historic districts have
            proportions, windows, and trim that a new build cannot buy. The
            usual brief is more light and better flow, and the usual mistake is
            getting there by erasing everything that made the house worth
            owning. We work from the architecture outward, matching profiles
            and material weight to what is already standing, so the finished
            interior reads as a continuation of the house rather than a
            renovation applied over it.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">One Interior Design Firm.</h2>
          <p>
            High-end projects usually come apart in the handoffs between
            specialists. We keep the entire chain inside one studio: space
            planning, finish palettes, lighting plans, and 3D renderings, then
            procurement, custom built-ins, art, styling, and installation, so
            the living room, primary suite, kitchen, and bath resolve as one
            project instead of four disconnected rooms. As your interior design
            firm in Delray Beach, we coordinate with your architect,
            contractor, and trades so the design intent survives the job site.
            One team, one point of accountability, from the first walkthrough
            to the day the art goes up.
          </p>
        </div>
      </Why>
    </main>
  );
}
