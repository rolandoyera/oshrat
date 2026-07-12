// Communities the studio works in, grouped by county, for /locations.
// `slug` is the future area page under /locations/<slug> — rows link there
// once those pages exist.

export type StudioLocation = {
  slug: string;
  name: string;
  blurb: string;
  materials: string[];
  houses: number;
};

export type CountyGroup = {
  county: string;
  locations: StudioLocation[];
};

export const COUNTIES: CountyGroup[] = [
  {
    county: "Broward County",
    locations: [
      {
        slug: "interior-design-fort-lauderdale",
        name: "Fort Lauderdale",
        blurb: "Waterfront moderns along the canals and the beach.",
        materials: ["Shell stone", "Teak", "Board-formed concrete"],
        houses: 6,
      },
      {
        slug: "interior-design-weston",
        name: "Weston & Southwest Ranches",
        blurb: "Low, shaded houses on wide inland lots.",
        materials: ["Stucco", "White oak", "Clay tile"],
        houses: 4,
      },
      {
        slug: "interior-design-parkland",
        name: "Parkland",
        blurb: "Family houses set back under the pines.",
        materials: ["Lime plaster", "Cedar", "Limestone"],
        houses: 3,
      },
    ],
  },
  {
    county: "Miami-Dade County",
    locations: [
      {
        slug: "interior-design-miami",
        name: "Miami",
        blurb: "Tropical modernism, woven into the city.",
        materials: ["Terrazzo", "Coral rock", "Brass"],
        houses: 8,
      },
      {
        slug: "interior-design-coral-gables",
        name: "Coral Gables",
        blurb: "Mediterranean bones, quietly reworked.",
        materials: ["Keystone", "Iron", "Plaster"],
        houses: 5,
      },
    ],
  },
  {
    county: "Palm Beach County",
    locations: [
      {
        slug: "interior-design-boca-raton",
        name: "Boca Raton",
        blurb: "Coastal calm at a considered scale.",
        materials: ["Travertine", "Walnut", "Glass"],
        houses: 4,
      },
      {
        slug: "interior-design-palm-beach",
        name: "Palm Beach & West Palm Beach",
        blurb: "Island light and inland ease.",
        materials: ["Cypress", "Tabby", "Limewash"],
        houses: 5,
      },
    ],
  },
];

export const ALL_LOCATIONS = COUNTIES.flatMap((c) => c.locations);
export const TOTAL_HOUSES = ALL_LOCATIONS.reduce((n, l) => n + l.houses, 0);
