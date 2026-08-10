import type { SequenceService } from "../../_components/LocationServices";

// Boca Raton's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for waterfront houses east of the Intracoastal, club residences inland, and the new builds replacing them across the city. We develop the furniture, finishes, lighting, and art together over the course of the project, so the finished house reads as one considered residence rather than an installation that arrived in a week.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Gut renovations carried from demolition through the last item on the punch list. Many houses here were built in the seventies and eighties, with compartmented plans and low ceilings that reward real structural thinking rather than new finishes over an old layout. We redraw the plan, detail the millwork, and stay involved with your contractor until the design has made it through the job site intact.",
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
      "In Boca the kitchen is usually the room the whole plan pivots on, open to the family room and working hardest when the house is full. We settle the practical questions first, where prep happens, what stays hidden, who sits at the island, and let the cabinetry, stone, and appliances take their cues from those answers.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Primary baths treated as the quietest room in the house rather than a showpiece. Stone, fixtures, and lighting are drawn as a single composition, and every surface is chosen to stand up to hard daily use and the coastal air without losing its finish or asking much in upkeep.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "When a new build arrives wearing catalog finishes, custom work is the fastest way to put the house on its own terms. Built-ins, case goods, and one-off pieces are drawn and engineered in our studio, specified to the millimeter, and made by the South Florida fabricators who have built our work for years.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
