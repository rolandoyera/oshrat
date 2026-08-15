import type { Metadata } from "next";
import Link from "next/link";
import Cta from "@/components/Cta";
import HoverUnderline from "@/components/ui/HoverUnderline";
import LocationProjects from "../_components/LocationProjects";
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
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "the-shul-bal-harbour-surfside-fl",
          "golden-dreams-golden-beach-fl",
          "aventura-modern-living-aventura-fl",
          "miami-river-miami-fl",
        ]}>
        <p>
          Recent work from across South Florida: oceanfront apartments,
          whole-home renovations, custom millwork, and community spaces like the
          sanctuary we designed in Surfside. It is the same standard our{" "}
          <Link
            href="/locations/interior-designers-miami-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            interior designers in Miami
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          bring to every project, run out of{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            our interior design firm in Fort Lauderdale
            <HoverUnderline className="text-accent" />
          </Link>
          . Every one of them started the same way we would start yours: by
          understanding how the space is really used before a single finish is
          chosen.
        </p>
      </LocationProjects>
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
      <Why
        subtitle="Why Sarvian Design Group"
        title="One Interior Design Firm in Surfside for Every Scope"
        description="We’re not the right interior designers for every project, and we don’t pretend to be. But when a client’s ambitions line up with the way we work, the result is a space that feels considered down to its smallest decision. An oceanfront apartment, a family home renovation, new construction shaped with your architect, or a community landmark like The Shul on Collins Avenue — one team of interior designers carries each of them from layout and finishes through procurement, installation, and the final styling pass.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Every Scope, Same Process.</h2>
          <p>
            No two projects arrive the same size, and Surfside proves it: a
            condominium overlooking the Atlantic, a house on a quiet street
            between the beach and the bay, a single room on a deadline, or a
            sanctuary serving hundreds of families. Each one runs through the
            same process, scaled to fit its scope. A kitchen project doesn’t
            drag a whole-home engagement behind it, and a smaller room count
            never buys a thinner version of the studio’s attention. Every
            engagement begins the same way — with how the space is actually
            used — and the design works outward from there.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">What Nobody Photographs.</h2>
          <p>
            Great interiors are decided in the parts that never make the photo:
            cabinetry aligned to the sightline it was drawn for, stone selected
            slab by slab, task lighting located before the ceiling closes,
            custom pieces detailed to the millimeter and built by fabricators
            we’ve trusted for years. Our kitchen, bath, and millwork drawings
            are specified at that depth because a design that only resolves in
            a rendering isn’t finished work. It’s also why our rooms hold up on
            an ordinary Tuesday morning, not just on photography day.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">One Interior Design Firm.</h2>
          <p>
            Where high-end projects usually fail is in the handoffs between
            specialists. We keep the whole chain in one studio: space planning,
            finish palettes, lighting plans, and 3D renderings, then
            procurement, custom built-ins, art, styling, and installation — so
            the living room, primary suite, kitchen, and bath resolve as one
            residence instead of four disconnected rooms. As your interior
            design firm in Surfside, we coordinate with your architect,
            contractor, building association, and trades to protect the design
            intent on site. One team, one point of accountability, from first
            walkthrough to the day the art goes up.
          </p>
        </div>
      </Why>
    </main>
  );
}
