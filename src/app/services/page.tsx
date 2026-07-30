import type { Metadata } from "next";
import { JsonLd, servicesPageGraph } from "@/lib/structured-data";
import { socialMeta } from "@/lib/seo";
import ServicesHero from "./_components/ServicesHero";
import ServicesSection, { SERVICES } from "./_components/ServicesSection";
import ProjectExamplesSection from "@/components/ProjectExamplesSection";
import Cta from "@/components/Cta";
import Why from "@/components/Why";

const TITLE = "Interior Design Services in Fort Lauderdale & South Florida";
const DESCRIPTION =
  "Full-service interior design firm serving Fort Lauderdale, Miami, Palm Beach, Broward, and South Florida — renovations, new construction, custom furnishings, kitchens, and bathrooms.";

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
    title: "Every Scope, Same Process.",
    description:
      "Interior design projects rarely arrive the same size. Residential interior design for a waterfront estate, a full home renovation taken down to the studs, new construction drawn alongside your architect, or a single room that needs to come together quickly — each engagement runs the same process, scaled to fit. You are not carrying a whole-home scope to get a kitchen design resolved, and you are not getting a thinner version of our interior design services because the room count is lower. Every one of the seven ways we work across Fort Lauderdale and South Florida starts with how the home is actually used, then moves outward from there.",
  },
  {
    title: "Detailed, Not Decorated.",
    description:
      "The difference between good and great interior designs lives in the parts nobody photographs: cabinetry that lands on the right sightline, stone chosen slab by slab, task lighting planned before the ceiling closes, custom furnishings drawn to the millimeter and built by artisans we have worked with for years. Our kitchen design, bathroom design, and millwork drawings are specified at that level because luxury interior design that only resolves in a rendering is not finished work. It is also what lets a room read as gathered over time rather than staged for a photograph.",
  },
  {
    title: "One Interior Design Firm.",
    description:
      "Most high-end interior design comes apart in the handoffs. We hold it together: space planning, finish palettes, lighting plans, and 3D renderings through procurement, custom built-ins, art and styling, and final installation — with living room, primary suite, kitchen, bath, and home office resolved as one home rather than six separate rooms. As your interior design firm in Fort Lauderdale, we coordinate with your architect, contractor, and trades to protect the design intent on site. One studio of interior designers, one point of accountability, from the first walkthrough to the day the art is hung.",
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
      <ProjectExamplesSection />
      <Cta />
      <Why
        subtitle="Why Sarvian Design Group"
        title="One Interior Design Firm in Fort Lauderdale for Every Scope"
        description="We don’t try to be the right fit for every interior design project. But when our approach matches what a client is looking for, we’re known for delivering something that feels deeply intentional. Whether it’s a whole-home interior design, a renovation, a new build, or a single room, the same team of interior designers carries the work from layout and finishes through procurement, installation, and final styling."
        items={WHY_ITEMS}
      />
    </>
  );
}
