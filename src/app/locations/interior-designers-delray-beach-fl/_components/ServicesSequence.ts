import type { SequenceService } from "../../_components/ServicesSequence";

// Delray Beach's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for beach cottages, Lake Ida houses, and the new builds going up between them. Furniture, finishes, lighting, and art are layered in across the project, so the rooms read as a home put together over time rather than a package delivered on one truck.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations taken down to the studs and carried through the final punch list. In a smaller house the plan does most of the work, so we tighten circulation, design the storage rather than hunt for it, and stay close to your contractor so the drawings survive contact with the job site.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors shaped alongside your architect while the project is still on paper, so circulation, finishes, and lighting are decided before framing begins. On the tighter lots common here, that early coordination is what keeps a house from feeling like rooms fitted around a footprint instead of a plan.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens planned around how your household actually cooks, gathers, and starts its mornings. Where the footprint is modest, storage and workflow have to be solved to the inch before anything else, and the cabinetry, stone, and appliances follow from those decisions rather than driving them.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Calm, spa-like bathrooms where the stone, fixtures, and lighting are resolved as one composition instead of three separate purchases. Older beach houses rarely gave the bath much room, so the plan work matters as much as the finishes, and surfaces are specified for daily use and salt air.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins designed for the room they will live in, not adapted to it after the fact. In a tight plan this is usually the difference between a room that works and one that almost does. Drawn and engineered in-house, built by South Florida fabricators we have trusted for years, and specified to the millimeter before anything is cut.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Commercial & Community Interiors",
    category: "Commercial",
    description:
      "Shops, restaurants, and community spaces designed with the same rigor as a private residence. A commercial interior takes more traffic and more scrutiny than a house, so materials are specified for wear, lighting is planned for full days rather than photographs, and the millwork is drawn instead of ordered. The measure is whether it still reads well in year five.",
    image: "/services/the-shul-bal-harbour-surfside-fl.jpg",
    imageAlt:
      "Custom bronze and stone millwork in the sanctuary interior designed by Sarvian Design Group at The Shul.",
  },
];
