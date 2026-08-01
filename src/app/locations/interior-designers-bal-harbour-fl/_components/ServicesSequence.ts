import type { SequenceService } from "../../_components/ServicesSequence";

// Bal Harbour's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Curated interiors for full-time residences, oceanfront apartments, and seasonal homes. We layer furniture plans, finishes, lighting, and art until a room looks assembled over years rather than installed in a week.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Down-to-the-studs remodels carried from the first layout to the final punch list. We redraw the plan, design the millwork, and stay close to your contractor and trades so the intent survives the job site. In buildings that require association review, we plan the submission and the schedule around it from the start.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors developed with your architect from the earliest drawings, so circulation, finishes, and lighting are settled long before anything is framed. Joining at that stage is what keeps the architecture and the interior from working against each other, and it is why the finished home reads as one idea rather than two.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Cabinetry, stone, and appliances planned around the way you actually cook, host, and start the morning. It is the hardest-working room in any residence, so storage, sightlines, and workflow are resolved first and the finishes follow from there rather than the other way around.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Quiet, spa-like bathrooms where stone, fixtures, and layered light are chosen as one decision rather than three. Every surface is specified for daily use and easy upkeep, and for the salt air that comes with living this close to the water.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Bespoke case goods and built-ins made to the room rather than adapted to it. Drawn and engineered in-house, fabricated by trusted partners in South Florida, and detailed to the millimeter. Every piece is specified before fabrication begins, so what arrives on site is what was on the drawing.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Commercial & Community Interiors",
    category: "Beyond the home",
    description:
      "Select commercial, hospitality, and community projects where a full-service approach earns its place. The sanctuary at The Shul of Bal Harbour was drawn this way, with custom bronze, stone, and millwork specified in-house and carried through fabrication and installation. A space used by hundreds of people asks for the same restraint as a private home, and considerably more durability.",
    image: "/services/the-shul-bal-harbour-surfside-fl.jpg",
    imageAlt:
      "Sanctuary interior at The Shul of Bal Harbour with an engraved bronze ark, bookmatched marble surround, oak bimah, and curved library wall.",
  },
];
