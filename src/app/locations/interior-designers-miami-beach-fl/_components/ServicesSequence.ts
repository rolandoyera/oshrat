import type { SequenceService } from "../../_components/LocationServices";

// Miami Beach's services list, passed to the shared ServicesSequence.
// Max 7 entries (the converge animation defines 7 flight paths).
export const SERVICES: SequenceService[] = [
  {
    title: "Residential Interior Design",
    category: "Whole home",
    description:
      "Whole interiors, whether the property is an apartment high in a tower, a house on one of the islands, or a residence lived in only part of the year.",
    image: "/services/residential-interior-design-16x9.jpg",
    imageAlt:
      "A modern, luxury home interior design project with a large entry way and staircase featuring bespoke art and styling.",
  },
  {
    title: "Full Home Renovations",
    category: "Renovation",
    description:
      "Renovations taken back to structure and carried to the last item on the punch list. On Miami Beach the first job is establishing what the building will actually permit, because risers, ceiling depths, and available electrical capacity in an older tower shape a plan far more than any reference image will.",
    image: "/services/full-home-renovations-16x9.jpg",
    imageAlt:
      "Exterior view of a luxury modern estate full home renovation featuring a stone travertine facade, bold black steel rooflines, and expansive glass walls.",
  },
  {
    title: "New Construction",
    category: "New build",
    description:
      "Island lots are tight, neighbors are close, and finished floors sit high for flood elevation, which changes how you arrive at a house and how the ground floor meets the garden. Those things are settled with your architect in plan, before the shell goes up, because no amount of furnishing fixes an entry sequence that was decided wrong on paper.",
    image: "/services/new-construction-16x9.jpg",
    imageAlt:
      "Interior view of a new construction luxury double-height living room featuring an open-concept layout.",
  },
  {
    title: "Kitchen Design",
    category: "Single space",
    description:
      "Kitchens planned around how the household actually cooks and gathers. In a Miami Beach tower the constraints come first, since venting, gas, and plumbing locations are frequently fixed by the building, and a layout drawn without confirming them gets redrawn later.",
    image: "/services/aventura-kitchen-interior-design-6.jpg",
    imageAlt:
      "Luxury modern kitchen design featuring a large waterfall island wrapped in heavily veined grey marble with integrated dual sinks and gold faucets.",
  },
  {
    title: "Bathroom Design",
    category: "Single space",
    description:
      "A bathroom works when the stone, the fittings, and the light were decided together rather than bought separately. Slabs get selected in person and dry-laid so the veining resolves where the eye actually lands, and every surface is chosen to survive ordinary daily use plus the salt that arrives with a barrier island address.",
    image: "/services/master-bath-interior-design.jpg",
    imageAlt:
      "High-angle view of a luxury primary bathroom design emphasizing premium stone and tile integration.",
  },
  {
    title: "Custom Furnishings",
    category: "Made to order",
    description:
      "Cabinetry and freestanding pieces drawn specifically for the room that will hold them. On this island the delivery route shapes a design almost as much as the brief does, since anything large has to clear a service elevator, a stair turn, or a narrow street off the causeway.",
    image: "/services/custom-furnishings-16x9.jpg",
    imageAlt:
      "A design graphic for a luxury custom cabinet for a primary suite.",
  },
  {
    title: "Commercial & Community Interiors",
    category: "Beyond the home",
    description:
      "A small number of commercial, hospitality, and community commissions, taken where a full-service process genuinely pays for itself. The sanctuary at The Shul on Collins Avenue in Surfside came out of exactly that process, its bronze, stone, and joinery drawn in this office and followed all the way through fabrication and the day of installation.",
    image: "/services/the-shul-bal-harbour-surfside-fl.jpg",
    imageAlt:
      "Sanctuary interior at The Shul of Bal Harbour with an engraved bronze ark, bookmatched marble surround, oak bimah, and curved library wall.",
  },
];
