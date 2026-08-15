import type { Metadata } from "next";
import { JsonLd, servicesPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import ServicesHero from "./_components/ServicesHero";
import ServicesSection, { SERVICES } from "./_components/ServicesSection";
import Cta from "@/components/Cta";
import Why from "@/components/Why";
import Testimonials from "@/components/Testimonials";
import ProjectsSectionHome from "../_components/ProjectsSectionHome";

const TITLE = "Full-Service Interior Design Fort Lauderdale";
const DESCRIPTION =
  "A full-service interior design firm handling residential and commercial interiors, renovations, and ground-up new construction throughout Broward, Palm Beach, and Miami-Dade counties.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  ...socialMeta({ title: TITLE, description: DESCRIPTION, url: "/services" }),
};

// Keep the "Project Examples" list fresh as projects change in Sanity.
export const revalidate = 60;

const WHY_ITEMS = [
  {
    title: "Scaled to the Project.",
    description:
      "Interior design projects do not arrive in one size, and the process should not force them into one. Residential interior design for a waterfront estate, a full home renovation opened to the studs, new construction drawn beside your architect, or one room on a deadline all move through the same sequence, sized to what the scope requires. A kitchen design client is never dragged through a whole-home engagement, and a smaller project never receives a diluted version of our interior design firm services. All seven of the ways we work across Fort Lauderdale and South Florida begin with how the home is actually used, then build outward from that.",
  },
  {
    title: "Detailed, Not Decorated.",
    description:
      "Good and great interior design part ways in the places no one photographs: the reveal on a cabinet door, the slab approved in person at the stone yard, the task light resolved while the ceiling is still open, the drawing precise enough that a fabricator needs no interpretation. Our kitchen design, bathroom design, and millwork documents go to that depth because luxury interior design that only resolves in a rendering is not finished work. It is also why these rooms still convince in person years after the photo shoot.",
  },
  {
    title: "One Point of Accountability.",
    description:
      "Most high-end interior design breaks down in the handoffs between firms, so our process has none. Space planning, finish palettes, lighting plans, and 3D renderings move straight into procurement, custom built-ins, art, styling, and installation without ever leaving the studio, and the living room, primary suite, kitchen, bath, and home office come together as one home instead of six separate rooms. As your interior design firm in Fort Lauderdale, we manage the coordination with your architect, contractor, and trades, so the design intent arrives at installation the way it left the drawing.",
  },
];

export default function Services() {
  return (
    <>
      <JsonLd
        data={servicesPageGraph(
          SERVICES.map((s) => ({ name: s.title, description: s.description })),
        )}
      />
      <ServicesHero />
      <ServicesSection />
      <ProjectsSectionHome />
      <Cta />
      <Testimonials />
      <Why
        subtitle="Why Sarvian Design Group"
        title="One Interior Design Firm in Fort Lauderdale for Every Scope"
        description="We are not the right interior designers for every project, and we do not try to be. When the fit is right, the result is work clients describe as deeply intentional, whether that is whole-home interior design, a renovation, a new build, or a luxury kitchen design. One team of interior designers carries the project from layout and finishes through procurement, installation, and final styling."
        items={WHY_ITEMS}
      />
    </>
  );
}
