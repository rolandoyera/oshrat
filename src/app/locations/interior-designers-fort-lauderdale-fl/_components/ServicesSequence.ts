import type { SequenceService } from "../../_components/LocationServices";

// Fort Lauderdale's services list, passed to the shared LocationServices.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete interiors for the waterfront houses that define the city, from the Las Olas isles to Harbor Beach, Rio Vista, and Coral Ridge. A canal house has a street side and a water side, and they ask for different things. Furniture, finishes, lighting, and art are layered in across the project so the rooms read as gathered rather than delivered.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations carried from the first measured plan to the final punch list. Plenty of houses on the canals were built low and closed off, with the best view in the property walled away from the rooms that needed it. Undoing that is structural work, so we draw the millwork and stay beside your contractor until the intent survives the site.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Interiors drawn alongside your architect while the house is still a set of plans. On a canal lot the dock, the setbacks, and the finished floor elevation shape the interior long before anyone selects a finish, so the earlier the two are working together the fewer compromises turn up at framing.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens planned around how the house actually entertains, which here almost always means the room opens toward the terrace and the water. Storage, sightlines, and the path people take between the island and the outside get solved first. The cabinetry, stone, and appliances follow from those decisions rather than setting them.",
    image: "/services/kitchen-design.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Primary suites and guest baths resolved as one composition of stone, fittings, and light rather than three separate purchases. Square foot for square foot it is the most expensive room in the house, so the plan and the full specification are settled before anything is ordered or opened up.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Case goods and built-ins drawn for the room rather than adapted to it afterward. Older canal houses are rarely square, and stock casework shows every millimeter of it. Pieces are engineered in-house and specified in full before fabrication starts, so what lands on site is what was approved.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
