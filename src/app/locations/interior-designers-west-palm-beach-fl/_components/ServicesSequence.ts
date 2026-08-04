import type { SequenceService } from "../../_components/LocationServices";

// West Palm Beach's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for the historic neighborhoods along the water and the tower residences downtown. Furniture, finishes, lighting, and art are layered in over the life of the project, so the rooms read as a home assembled with intent rather than a package delivered on one truck.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations taken down to the studs and carried through the final punch list. In the older neighborhoods that means opening a compartmented plan without losing the plaster, arches, and casement lines that give the house its character. We draw the millwork and stay close to your contractor so the design survives contact with the job site.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Downtown, a new residence is often handed over as a raw floor with no interior plan at all, which means every wall, every ceiling line, and every run of services is a decision rather than an inheritance. We make those decisions with your architect early, while they are still drawings instead of concrete.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens planned around how your household actually cooks, gathers, and starts its mornings. In an older house that often means reclaiming a back-of-plan kitchen and giving it real light and real storage. Workflow and sightlines get solved first, then the cabinetry, stone, and appliances follow from those decisions.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Calm, spa-like bathrooms where the stone, fixtures, and lighting are resolved as one composition instead of three separate purchases. Older houses rarely gave the bath much room, so the plan work matters as much as the finishes, and surfaces are specified for daily use and simple upkeep.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins designed for the room they will live in, not adapted to it after the fact. That matters most in older houses, where nothing is square and stock casework never quite lands. Drawn and engineered in-house, built by South Florida fabricators we have trusted for years, and specified to the millimeter before anything is cut.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Commercial & Community Interiors",
    category: "Commercial",
    description:
      "Offices, showrooms, and community spaces designed with the same rigor as a private residence. A commercial interior carries more traffic and more scrutiny, so materials are specified for wear, lighting is planned for long days rather than photographs, and the millwork is drawn rather than ordered. The result is a space that still looks right in year five.",
    image: "/services/the-shul-bal-harbour-surfside-fl.jpg",
    imageAlt:
      "Custom bronze and stone millwork in the sanctuary interior designed by Sarvian Design Group at The Shul.",
  },
];
