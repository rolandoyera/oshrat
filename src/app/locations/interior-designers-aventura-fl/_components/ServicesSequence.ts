import type { SequenceService } from "../../_components/LocationServices";

// Aventura's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for tower apartments above the Intracoastal and houses in Aventura's gated island communities. A high-rise hands you glass and a view and very little else, so the warmth has to be added: wood, stone, textile, and light, layered until the rooms feel settled rather than staged.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations stripped back to the shell and carried through to the last detail. In a concrete building the structure, the risers, and the slab decide what is genuinely possible, so those limits get established before anything is drawn. In Aventura's towers, association review is built into the schedule from the start.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors developed while the residence is still a set of drawings, which in Aventura usually means a pre-construction unit with a developer deadline attached. Millwork, finishes, and lighting are resolved before the standard package is locked in, so what you take delivery of is already yours rather than something to undo later.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "The kitchen is the first thing most owners replace and, in a tower, the most constrained. Venting, plumbing risers, and the slab set the boundaries, so the plan gets solved against them before a single cabinet is drawn. The stone, cabinetry, and appliances follow from that rather than leading it.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "A tower bath often has no window at all, so the light has to be built rather than borrowed, and the stone, fittings, and fixtures are drawn together instead of bought separately. Waterproofing detail carries more weight here too, because there is always a neighbor directly below.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins drawn for the room rather than adapted to it afterward. A high-rise adds a constraint most people never think about, because everything has to reach the apartment through a freight elevator and a service corridor. Pieces are engineered in-house to arrive in sections and assemble on site.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
