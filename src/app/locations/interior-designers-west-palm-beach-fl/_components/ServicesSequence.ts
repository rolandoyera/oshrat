import type { SequenceService } from "../../_components/LocationServices";

// West Palm Beach's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for the historic neighborhoods along the water and the tower residences downtown. Rather than buying a finished look in one order, we develop the furniture, finishes, lighting, and art over the life of the project, so a 1920s house and a new tower apartment each end up with rooms that could belong nowhere else.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovation here often means opening a compartmented 1920s plan without losing the plaster, arches, and casement lines that give the house its character. We take the project from demolition through the final walkthrough, drawing the millwork ourselves and staying at your contractor's elbow so what gets built is what was designed.",
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
      "In the older neighborhoods the kitchen usually sits at the back of the plan, starved of light and short on storage. We pull it into the life of the house first, give it real light and real storage, and let the cabinetry, stone, and appliances follow from how the room will actually be used, morning coffee through dinner for twelve.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Bathrooms where the stone, fixtures, and lighting are chosen as one idea instead of assembled from three catalogs. The older houses here treated the bath as an afterthought, so the plan earns its keep before the finishes do, and every surface is specified to handle daily use without fuss.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Stock casework assumes square walls, and the houses in El Cid and Flamingo Park rarely oblige. Our built-ins and case goods are designed for the specific room, engineered in the studio, and built by South Florida fabricators we have worked with for years, with every dimension confirmed before a single board is cut.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Commercial & Community Interiors",
    category: "Commercial",
    description:
      "Offices, showrooms, and community spaces run through the same studio process as our residences. Because a commercial interior absorbs more traffic and more scrutiny than a home, we choose materials for wear, plan lighting around the working day, and detail the millwork ourselves instead of ordering it. The test is how the space looks in its fifth year, not its first week.",
    image: "/services/the-shul-bal-harbour-surfside-fl.jpg",
    imageAlt:
      "Custom bronze and stone millwork in the sanctuary interior designed by Sarvian Design Group at The Shul.",
  },
];
