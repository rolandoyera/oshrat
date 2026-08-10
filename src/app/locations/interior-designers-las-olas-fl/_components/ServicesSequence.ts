import type { SequenceService } from "../../_components/LocationServices";

// Las Olas's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for waterfront homes on the isles, downtown apartments, and the older houses behind the boulevard. Furniture plans, finishes, lighting, and art are built up in layers, so the finished rooms feel collected over time rather than delivered on one truck.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations stripped to the studs and seen through the final punch list. We rework the plan, draw the millwork, and stay close to your contractor so the design survives contact with the job site. For downtown Las Olas buildings that require association review, the submission and its timeline are planned into the project from the first meeting.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "On the isles a house is really designed from the water back. Which rooms face the dock, where the glass falls, and how a raised flood elevation shapes the entry are all worked out with your architect while the plans are still moving, because none of it is cheap to reconsider once the slab is poured.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens designed around the way your household actually cooks, gathers, and starts the day. It is the hardest-working room in the house, so workflow, storage, and sightlines are resolved before anything else, and the cabinetry, stone, and appliances follow from those decisions instead of driving them.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Calm, spa-like bathrooms where stone, fixtures, and lighting are composed as one design rather than three separate purchases. Every surface is specified for real daily use, simple upkeep, and the humidity and salt air that come with living on the water.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins conceived for the exact room they'll occupy, never adapted to it after the fact. Each piece is drawn and engineered in-house, specified to the millimeter before anything is cut, and built by South Florida fabricators we've trusted for years, so what arrives is what was drawn.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
