import type { SequenceService } from "../../_components/LocationServices";

// Palm Beach Gardens's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for club community houses, golf course residences, and the newer estates going up west of the turnpike. Furniture, finishes, lighting, and art are layered in over the course of the project, so what you end up with reads as a home put together with intent rather than a package that arrived on one truck.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations that take a builder-standard house apart and put it back together with a real plan. We rework circulation, draw the millwork, and stay close to your contractor so the drawings survive the job site. Where a community requires architectural review, that submission and its timeline are built into the schedule from the start.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Ceiling heights, sightlines, finishes, and lighting are settled with your architect while the house is still being drawn. Getting in that early is the difference between a home designed as a whole and one where the interior has to be fitted around decisions somebody else already made.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens planned around how your household actually cooks and gathers, whether that is a quiet weeknight or twenty people before a club dinner. Storage, sightlines, and workflow get solved first, then the cabinetry, stone, and appliances follow from those decisions instead of driving them.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Primary suites and guest baths where the stone, fixtures, and lighting are resolved as one composition rather than three separate purchases. The oversized baths common in these houses are the ones most often left generic, and they are the easiest to make genuinely good.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins designed for the room they will live in rather than adapted to it afterward. Drawn and engineered in-house, built by South Florida fabricators we have worked with for years, and specified to the millimeter before anything is cut, so the piece that arrives is the piece that was drawn.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
