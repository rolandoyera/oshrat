import type { SequenceService } from "../../_components/LocationServices";

// Boca Raton's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for waterfront houses east of the Intracoastal, club residences inland, and the new builds replacing them across the city. Furniture, finishes, lighting, and art are layered in across the project, so the finished rooms read as a home collected with intent rather than a package delivered on one truck.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations taken down to the studs and carried through the final punch list. Many houses here were built in the seventies and eighties, with compartmented plans and low ceilings that reward real structural thinking rather than new finishes over an old layout. We rework the plan, draw the millwork, and stay close to your contractor so the design survives the job site.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors developed alongside your architect while the lot is still empty, which matters more here than almost anywhere given how much of Boca is being rebuilt from the ground up. Circulation, ceilings, finishes, and lighting cost nothing to change on a drawing and a great deal to change once the shell is standing.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens planned around how your household actually cooks, gathers, and starts its mornings. Because it is the hardest-working room in the house, storage, sightlines, and workflow get solved first, then the cabinetry, stone, and appliances follow from those decisions rather than driving them.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Calm, spa-like bathrooms where the stone, fixtures, and lighting are resolved as one composition instead of three separate purchases. Surfaces are specified for real daily use, simple upkeep, and the salt air that comes with living this close to the water.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins designed for the room they will live in, not adapted to it after the fact. It is also the fastest way to get a new build off the shelf and onto its own terms. Drawn and engineered in-house, built by South Florida fabricators we have trusted for years, and specified to the millimeter before anything is cut.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
