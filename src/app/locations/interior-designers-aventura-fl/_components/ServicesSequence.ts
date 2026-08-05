import type { SequenceService } from "../../_components/LocationServices";

// Aventura's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for tower condominiums above the Intracoastal and houses in Aventura's gated island communities. ",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Renovations",
    category: "Renovation",
    description:
      "Renovations stripped back to the shell and carried through to the last detail. In a concrete building the structure, the risers, and the slab decide what is genuinely possible, so those limits get established before anything is designed. In Aventura's towers, association review is designed into the schedule from the start.",
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
    category: "Kitchen",
    description:
      "The kitchen is the first thing most owners replace and, in a tower, the most constrained. Venting, plumbing risers, and the slab set the boundaries, so the plan gets solved against them before anything is designed. The stone, cabinetry, and appliances follow from that rather than leading it.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall counters wrapped in heavily veined marble with integrated dual sinks.",
  },
  {
    title: "Bathroom Design",
    category: "Bathroom",
    description:
      "A tower bathroom often has no window at all, so the light has to be designed rather than borrowed, and the stone, fittings, and fixtures are designed together instead of bought separately.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "Angle view of a luxury primary bathroom design emphasizing marble slabs and wood integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins designed for the room rather than adapted to it afterward. A condominium adds a constraint most people never think about, because everything has to reach the apartment through a freight elevator and a service corridor. Pieces are engineered in-house to arrive in sections and assemble on site.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
