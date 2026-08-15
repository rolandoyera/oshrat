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

const PATH = "/locations/interior-designers-aventura-fl";
const TITLE = "Interior Designers in Aventura, FL | Sarvian Design Group";
const DESCRIPTION =
  "Luxury interior designers in Aventura, FL. Condominiums, full renovations, gated island homes, and new construction interiors. Request a consultation.";

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
          alt: "Sarvian Design Group Aventura, FL showcase",
          position: "top",
        }}
        eyebrow="Residential Interior Designers in Aventura, FL"
        heading={["Finished", "not decorated."]}
        paragraph="A full-service interior design firm working across Aventura's condominium towers and gated island communities."
      />
      <LocationTopSection
        eyebrow="Featured Project"
        heading="Our Featured Work in Aventura"
        paragraph="In the heart of Aventura, this 4,500-square-foot residence pairs refined modern architecture with a collector's approach to art, and Florida Design Magazine featured it for Art Basel. Walnut paneling and fluted wood columns ground a soft palette of stone and taupe, while floor-to-ceiling glass keeps the rooms in constant conversation with the light. A floating walnut stair threads the levels together, and the main floor unfolds around a marble waterfall-edge counter and a glass-enclosed wine display. The art, bold portraiture and jewel-toned glass, was placed with the same intention as the millwork."
        projectSlug="aventura-modern-living-aventura-fl"
      />
      <LocationProjects
        eyebrow="Selected work"
        heading="Latest Projects"
        slugs={[
          "aventura-modern-living-aventura-fl",
          "golden-dreams-golden-beach-fl",
          "the-shul-bal-harbour-surfside-fl",
          "miami-river-miami-fl",
        ]}>
        <p>
          A selection of our work in and around Aventura. As{" "}
          <Link
            href="/locations/interior-designers-miami-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            interior designers in Miami
            <HoverUnderline className="text-accent" />
          </Link>{" "}
          working out of{" "}
          <Link
            href="/locations/interior-designers-fort-lauderdale-fl"
            className="group relative hover:text-accent transition-colors duration-300">
            our Fort Lauderdale interior design studio
            <HoverUnderline className="text-accent" />
          </Link>
          , we have been designing along this stretch of coast for 12 years.
        </p>
      </LocationProjects>
      <Cta />
      <ServicesSequence services={SERVICES} />
      <Testimonials />
      <FaqSection faqs={FAQS} />
      <LocationEditorial
        heading={["Interior Design", "in Aventura"]}
        paragraphs={[
          "Aventura lives vertically as condominiums. Most of the city's best addresses are towers along Country Club Drive and the Intracoastal, where every residence arrives with the same developer finishes and a view doing all the work. As a full service luxury interior design firm, that is usually where we start: stripping out the builder's anonymous palette and designing a residence that belongs to the people in it. Millwork made for the actual walls, marble chosen slab by slab, lighting planned for evenings on the fortieth floor rather than a sales center rendering.",
          "Tower living also changes how a project runs. Association approvals, service elevator reservations, work hour limits, and sound attenuation standards all sit between the interior design and the finished room, so we plan the submission and its calendar into the project from the first meeting. The glass raises the standard on specification too: strong east and west light pours through these residences all day, and fabrics and finishes have to hold their depth through years of it. Considered layouts, custom built-ins, and easy transitions between rooms are what separate the best interior designers from the rest.",
          "The island communities ask for something different, house scale work on Williams Island and Island Estates, with gardens, terraces, and architectural review of their own. Luxury interior design, as we practice it, has little to do with ornament and everything to do with an environment that is true to the people using it. From the earliest concept conversations through final installation, we stay close to our clients so that every decision serves the same vision, and so the studio that starts your project is the one standing in the room when it is finished.",
        ]}
      />
      <Why
        subtitle="Why Sarvian Design Group"
        title="Top Luxury Interior Designers in Aventura, FL"
        description="Aventura is a vertical city, and a condominium is an unforgiving place to design. The building sets the rules, the glass sets the light, and there is no architecture to hide behind. Choosing the best interior designers here has less to do with taste than with whether a residential and commercial interior design firm can actually deliver inside those constraints.">
        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">From One Room Up.</h2>
          <p>
            Projects here arrive at every size: a condominium residence with
            the Intracoastal on three sides, two apartments combined into one,
            a house on Williams Island, or a single kitchen with a deadline
            attached. Residential or commercial, all of them get the same
            drawings, the same specification, and the same people. What changes
            is the scope, never the standard, and the smallest job on the board
            is worked exactly like the largest.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">Drawn to the Mullion.</h2>
          <p>
            In a condominium the one thing nobody can move is the window grid,
            so everything else is drawn to it. Kitchen cabinetry that stops
            clean at a mullion. A ceiling detail that hides the drapery track
            instead of announcing it. Sound attenuation settled before the
            neighbor above becomes a problem, and task lighting located before
            the ceiling closes. None of it photographs. All of it is what
            separates the best interior designers in Aventura from a decorator
            with a mood board.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:row-span-2 md:grid-rows-subgrid">
          <h2 className="font-semibold h3">One Firm, No Handoffs.</h2>
          <p>
            Most condominium projects lose their shape in the gaps between
            specialists, where the designer, the buyer, the millworker, and the
            installer each own a piece and nobody owns the result. As your
            interior design firm in Aventura, we hold all of it: space
            planning, finish palettes, lighting plans, and renderings, then
            procurement, custom built-ins, art, styling, and installation. The
            living room, primary bedroom, kitchen, and bathroom resolve as one
            residence because one team carried them the whole way, and we
            coordinate with your architect, contractor, and building
            association so nothing is lost between the drawing and the room.
          </p>
        </div>
      </Why>
    </main>
  );
}
