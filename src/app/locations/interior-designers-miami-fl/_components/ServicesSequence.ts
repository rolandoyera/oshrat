import type { SequenceService } from "../../_components/LocationServices";

// Miami's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Whole-home interiors for Miami's waterfront houses, bay-view towers, and garden neighborhoods. We develop the furniture plan, finishes, lighting, and art together rather than in sequence, so the finished residence has the layered, collected quality that no single shopping trip can produce.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Gut renovations planned from the drawing set forward. We rework the floor plan, detail the millwork, and walk the site alongside your contractor until the punch list closes. Where a Miami building requires association sign-off, that review is scheduled into the project before demolition rather than discovered during it.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "In Miami the line between inside and outside is the whole project, and it gets drawn long before anyone pours a slab. Where the glass pockets away, how the ceiling and floor carry through to the terrace, and where the shade lands at four in the afternoon are decided with your architect rather than discovered afterward.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "The kitchen carries more of daily life than any other room, so we design it from the workflow inward. Prep, storage, seating, and the sightline to the terrace or the water are settled first, and only then are the cabinetry, stone, and appliances selected to serve that plan instead of driving it.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Primary baths and powder rooms treated as complete compositions, with stone, fixtures, and lighting chosen to read as one surface story rather than a set of purchases. Every material is vetted for humid air, salt exposure, and daily use, so the room keeps its calm long after the reveal.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "When the right piece does not exist, we draw it. Dining tables, beds, wall units, and built-ins are designed and engineered in the studio, then produced by South Florida fabricators we have returned to across many projects. Approval happens on precise shop drawings, so what is delivered is exactly what was designed.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
];
