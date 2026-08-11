import type { SequenceService } from "../../_components/LocationServices";

// Bal Harbour's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Complete interiors for tower apartments, bay-side houses, and the pied-à-terre kept for the winter months. Furniture, finishes, lighting, and art are chosen against the ocean light they will actually live in, so the finished residence carries a sense of history rather than of recent delivery.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Remodels that go to the concrete shell and come back finished. We redraw the plan, detail the millwork, and hold the design through construction, and because almost every building here reviews renovation drawings, the association package and its calendar are part of the project plan from the first week.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "When we join at the architect's first drawings, the interior is settled while the walls are still lines: circulation, finishes, and lighting agreed before framing, so nothing has to be unpicked later. The small permanent compromises that haunt projects designed in two separate phases simply never happen.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "In an apartment the kitchen often shares its room with the view, which puts a premium on order: everything wants a home that is not the countertop. We resolve the storage and the cook's path before drawing a single cabinet, then let the cabinetry, stone, and appliances follow, so the kitchen design holds up to a quiet breakfast and a full table alike.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "Bathrooms treated as the residence's still point, with stone, fixtures, and layered light designed as a single quiet gesture. Materials are chosen for the reality of coastal living, humidity, salt air, hard water, and daily use, so the room stays serene well past its first year.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "One-off case goods and built-ins designed to their exact wall, engineered in the studio, and made by South Florida workshops we trust. The drawings leave nothing to guesswork, so nothing arrives on site as a surprise, and in a tower it is often the custom work that makes a difficult plan feel effortless.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Commercial & Community Interiors",
    category: "Beyond the home",
    description:
      "Select commercial, hospitality, and community projects where a full-service approach earns its place. The sanctuary at The Shul of Bal Harbour was drawn this way, with custom bronze, stone, and millwork specified in-house and carried through fabrication and installation. A space used by hundreds of people asks for the same restraint as a private home, and considerably more durability.",
    image: "/services/the-shul-bal-harbour-surfside-fl.jpg",
    imageAlt:
      "Sanctuary interior at The Shul of Bal Harbour with an engraved bronze ark, bookmatched marble surround, oak bimah, and curved library wall.",
  },
];
