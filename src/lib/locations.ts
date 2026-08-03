// Communities the studio works in, grouped by county, for /locations.
// Rows with an `href` link to that community's built location page; rows
// without one render as plain text until their page exists.

export type StudioLocation = {
  name: string;
  /** Shown only when the community has a built page; unlinked rows display
   * "Page Coming Soon" instead (see /locations). */
  blurb?: string;
  /** Path of the community's location page, once built. */
  href?: string;
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
        name: "Fort Lauderdale",
        blurb: "Waterfront moderns along the canals and the beach.",
        href: "/locations/interior-designers-fort-lauderdale-fl",
      },
      {
        name: "Las Olas",
        blurb: "The isles off the boulevard, house by house.",
        href: "/locations/interior-designers-las-olas-fl",
      },
      {
        name: "Weston & Southwest Ranches",
        blurb: "Low, shaded houses on wide inland lots.",
      },
      {
        name: "Parkland",
        blurb: "Family houses set back under the pines.",
      },
      {
        name: "Coral Ridge",
      },
    ],
  },
  {
    county: "Miami-Dade County",
    locations: [
      {
        name: "Miami",
        blurb: "Tropical modernism, woven into the city.",
        href: "/locations/interior-designers-miami-fl",
      },
      {
        name: "Miami Beach",
      },
      {
        name: "Coral Gables",
        blurb: "Mediterranean bones, quietly reworked.",
      },
      {
        name: "Golden Beach",
        blurb: "A private beachfront town, estate by estate.",
        href: "/locations/interior-designers-golden-beach-fl",
      },
      {
        name: "Bal Harbour",
        blurb: "Oceanfront towers and quiet bayside streets.",
        href: "/locations/interior-designers-bal-harbour-fl",
      },
      {
        name: "Surfside",
        blurb: "A low-key beach town between the ocean and the bay.",
        href: "/locations/interior-designers-surfside-fl",
      },
    ],
  },
  {
    county: "Palm Beach County",
    locations: [
      {
        name: "Palm Beach",
        blurb: "Island light and inland ease.",
        href: "/locations/interior-designers-palm-beach-fl",
      },
      {
        name: "Palm Beach Gardens",
      },
      {
        name: "Boca Raton",
        blurb: "Coastal calm at a considered scale.",
      },
      {
        name: "Delray Beach",
      },
      {
        name: "West Palm Beach",
      },
      {
        name: "Highland Beach",
      },
    ],
  },
];

export const ALL_LOCATIONS = COUNTIES.flatMap((c) => c.locations);
