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
    title: "Clarity of Vision.",
    description:
      "For a client, interior design should make the process of creating a home feel simpler, not more complicated. That starts with a clear point of view, and it stays clear because the next step always relates to something already decided. Space planning, mood boards, finish palettes, lighting plans, millwork drawings, and 3D renderings all trace back to that one idea, so nothing on your Fort Lauderdale interior design project gets specified twice or decided by default.",
  },
  {
    title: "Designed for the Coast.",
    description:
      "A Fort Lauderdale interior design firm has to specify for salt air, humidity, and the low reflected light that comes off the water most of the year. We choose natural stone, hardwoods, textiles, and hardware that hold up to it, and we plan around impact glass, deep terraces, and hurricane-season delivery windows. It is the difference between luxury interior design that photographs well in March and a waterfront home in Las Olas Isles, Rio Vista, or Harbor Beach that still reads right in its fifth year.",
  },
  {
    title: "One Interior Design Firm.",
    description:
      "Most high-end interior design in Fort Lauderdale comes apart in the handoffs. We hold it together: furniture selection and procurement, custom millwork and built-ins, art and home decor, styling and staging through final installation, with living room, primary suite, kitchen, bath, and home office resolved as one home rather than six separate rooms. We coordinate directly with your architect and contractor across Broward County, and you keep a single point of accountability the whole way through.",
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
        title="Amongst the Best Interior Designers in Fort Lauderdale"
        description="We don’t try to be the right fit for every interior design project. But when our approach matches what a client is looking for we’re known for delivering something that feels deeply intentional. We keep the big picture of the interior design project in view while managing the details that make the difference."
        items={WHY_ITEMS}
      />
    </>
  );
}
