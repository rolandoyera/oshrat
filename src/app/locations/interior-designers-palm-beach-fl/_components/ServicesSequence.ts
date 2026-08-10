import type { SequenceService } from "../../_components/LocationServices";

// Palm Beach's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete residential interiors for oceanfront apartments, estate-section houses, and the seasonal residences that fill much of the island. Because many of these homes host their owners for only part of the year, we layer the furniture, finishes, lighting, and art into a whole that reads as inherited taste rather than recent shopping.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovation on the island runs from refreshing a South Ocean Boulevard apartment to rebuilding an older house around its original plaster and cypress. We carry the project from demolition to the last punch item, drawing the millwork ourselves and staying close to the trades, and where a building or the town requires review, that approval is folded into the schedule from day one.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "A new house on the island still has to sit comfortably among neighbors built decades earlier. Proportion, ceiling heights, and the weight of the materials are settled with your architect while the drawings are open, so the interior belongs to an exterior that had to satisfy the town's review before it was ever built.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "A Palm Beach kitchen has two jobs: quiet family mornings most of the year and a staffed dinner party in season. We plan for both, working out storage, prep, and service routes before a single cabinet is drawn, so the cabinetry, stone, and appliances serve the way the room is actually run.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Bathrooms composed like the best rooms in the house, with stone, fixtures, and light considered as one decision rather than three. An island address is hard on materials, so every surface is specified to shrug off salt air, strong light, and months of a closed-up house and still feel crisp on arrival day.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Furniture and built-ins conceived for a particular wall in a particular room, drawn and engineered in our studio and made by South Florida craftsmen we have worked with for years. Because custom carries the longest lead times on the island, those orders are sequenced first, so nothing is missing when the season begins.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
