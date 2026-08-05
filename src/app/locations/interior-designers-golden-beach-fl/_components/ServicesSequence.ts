import type { SequenceService } from "../../_components/LocationServices";

// Golden Beach's services list, passed to the shared LocationServices.
// Max 7 entries (the converge animation defines 7 flight paths).
//
// This copy was previously hardcoded inside the Fort Lauderdale folder's
// ServicesSequence.tsx, which Golden Beach imported — so both pages rendered
// the same ~600 words. Moved here verbatim so Golden Beach (ranking #1) is
// unchanged while Fort Lauderdale gets its own.
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Curated interiors for primary residences, waterfront estates, and pieds-à-terre. We compose furniture plans, finishes, lighting, and art into rooms that feel gathered over time, not staged.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Down-to-the-studs remodels handled from layout to last detail. We reshape the plan, design the millwork, and coordinate closely with your contractor and trades to protect the design intent on site. Our job is to keep it moving, and keep the outcome true to the original vision.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors developed alongside your architect from the ground up, so flow, finishes, and lighting are resolved before the first wall is framed, and the finished home reads as a single, coherent idea. Getting involved this early means fewer compromises later, because the architecture and the interior are never fighting each other.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Cabinetry, stone, and appliance kitchen planning built around how you actually cook and gather, detailed for the way the room is used every day, morning through dinner party. It's usually the hardest-working room in the house, so every decision about storage, sightlines, and workflow is made with that in mind during the kitchen design process.",
    image: "/services/kitchen-design.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Spa-calm bathrooms with considered stone, fixtures, and layered lighting. Every surface is specified for daily use and easy upkeep, without losing the quiet luxury of the room. Light, water, and material are treated as a single experience.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Bespoke case goods and built-ins fabricated to fit the room and the way you live in it. Designed in-house, made by trusted artisans, and detailed to the millimeter. Every piece is drawn, refined, and specified before fabrication begins, so what arrives on site matches the vision exactly.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
