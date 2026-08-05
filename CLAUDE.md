# Sarvian Design Group — working notes

Marketing site for Sarvian Design Group, a luxury interior design firm based in Fort Lauderdale, FL,
founded 2014 and led by Oshrat Rothschild. Next.js App Router + Sanity + Tailwind, deployed on Vercel.

Most work on this repo is **SEO-driven copy**, not features. Read the strategy section before
rewriting anything on a location page.

---

## The strategy (read this first)

The domain has close to zero authority. The site sat stagnant for years — four projects, a few
images, no body copy, no contact form, no analytics — and was picked up again in June 2026.
Backlinks will take a long time, so we deliberately **do not** fight head terms head-on.

Instead: build landing pages for cities and neighborhoods with low search volume that established
firms ignore, because their domain authority already wins the head terms without them. Rank those,
then pass equity inward to the three money pages — **Fort Lauderdale, Miami, Palm Beach**.

Confirmed as of 2026-08-04: **Golden Beach ranks #1** and is cited in Google AI Overviews.
**Bal Harbour and Surfside are on page one.**

Benchmark: `sdhstudio.com/fort-lauderdale-interior-designers/` holds #1 for Fort Lauderdale with
only 1,479 visible words (ours: 2,052) and **zero** mentions of kitchen, bathroom, renovation, new
construction, or commercial. They win on exact-phrase placement — URL slug, title, H1, four H2s, and
all ten FAQ questions — plus heavy E-E-A-T. Their service-level long-tail is uncontested, and that
gap is ours to take.

---

## Copy rules

These are standing instructions from the owner. They are not stylistic suggestions.

- **No em dashes.** Anywhere in visible copy. If a dash was carrying a parenthetical or a list,
  restructure the sentence — don't just swap in a comma.
- **Keep signalling the money terms:** residential, commercial, interior designers, top, best, firm,
  luxury, and the city name. A page that reads beautifully but doesn't repeatedly signal
  "Interior Designers in {City}" will not rank.
- **Never reuse a paragraph across cities.** Pages get cloned, so duplicates pile up fast. Before
  calling a page done, grep the sibling location folders for its distinctive sentences.
- **Don't overclaim.** The Shul (Surfside) is the only commercial/community project. Write
  "a shop, a restaurant, or a community space," never "our restaurants."
- `Why` item titles are **3–4 words** and must not duplicate another page's title.

**Where the phrase actually goes.** Density follows from structure; it isn't the lever itself. Put
the target phrase in the title tag, H1, three or four H2s, the FAQ **questions**, and internal
**anchor text**. That buys the signal without wrecking the prose. Sprinkling it through paragraphs
does not.

---

## Location pages

Live in `src/app/locations/interior-designers-{city}-fl/`. Shared pieces are in
`src/app/locations/_components/`.

Anatomy:

| Piece | Notes |
|---|---|
| `LocationHero` | eyebrow (the H1), 2-line heading, blurb |
| `LocationTopSection` | a **real, specific** local project with its own copy. No local project yet? Change the eyebrow to "Our Approach in {City}" and point links at `/projects`. |
| `LocationProjects` | hand-picked `slugs` + a children blurb. **This is the current component** — `@/components/ProjectsSection` is legacy and only `/services` still uses it. |
| `_components/ServicesSequence.ts` | max **7** entries (the converge animation defines 7 flight paths) |
| `_components/Faqs.ts` | per-city Q&A. Put the city in **every question** — they render as `<h3>` *and* land in the JSON-LD, so each one counts twice. |
| `LocationEditorial` | three long keyword-bearing paragraphs |
| `_components/WhyItems.ts` | `WHY` object; the grid is `md:grid-cols-3`, so exactly 3 items |

Fort Lauderdale is the odd one out: it uses a `LocationContent` object fed to `LocationLanding`, and
`_components/location-faqs.ts` (`buildLocationFaqs()`). **Only Fort Lauderdale uses that helper** —
every other city has its own `Faqs.ts`.

### Adding a page

1. Copy the closest existing city, then **grep the new folder for every other city's name.** This is
   the #1 failure mode; cloned pages ship saying "Golden Beach" throughout.
2. Rewrite all copy per the rules above. Fresh angle per city — find what's actually distinct about
   that market (tower rules, historic districts, teardowns, seasonal occupancy).
3. Wire internal links (see below).
4. Add to `src/lib/locations.ts` (`href` + `blurb`), `src/components/Footer.tsx` (`PLACE_LINKS`, and
   the `REGIONS` list if the city isn't there), and `src/app/sitemap.ts`.
5. `npm run indexnow` after deploy to push the new URLs.

### Internal link graph

Every location page's projects blurb carries two links, and **the anchor text is the point**.

- **County hub:** Miami-Dade (Aventura, Bal Harbour, Golden Beach, Surfside) → Miami.
  Palm Beach County (West Palm Beach, Palm Beach Gardens, Boca Raton, Delray Beach) → Palm Beach.
  Broward (Las Olas) → Fort Lauderdale.
- **Plus Fort Lauderdale**, via the "our studio works out of…" sentence. True (it's HQ) and it's the
  hardest Big 3 target, so it should collect the most inbound equity.
- **Every anchor is a unique keyword phrase.** "interior designers in Miami", "a Fort Lauderdale
  interior design firm", "our Palm Beach interior designers". Never the bare city name; never the
  same phrasing on two pages — identical exact-match anchors at this volume look manipulative.

---

## Gotchas

- **`FaqSection` accordion is patched, don't revert it.** `src/components/ui/accordion.tsx` uses
  `forceMount` + a CSS `grid-rows-[0fr]/[1fr]` collapse. Radix unmounts closed panels by default,
  which kept every FAQ *answer* out of the server-rendered HTML — present only inside the JSON-LD
  script. The stock shadcn version silently costs ~400–600 crawlable words per page.
- **The accordion transition must stay on the inner div, not on `AccordionPrimitive.Content`.**
  Radix sets `node.style.transitionDuration = "0s"` on the Content element in a layout effect so it
  can measure the panel, then restores it. That runs *after* `data-state` flips, so a transition on
  that element never plays — the panel snaps. Keyframes survive it (restoring `animationName`
  restarts an animation), which is why stock shadcn pairs `data-state` with
  `animate-accordion-up/down` — but keyframes need the measured height, which only exists under the
  unmount-on-close model we removed. Hence: `group/panel` on Content, and the
  `group-data-[state=open]/panel:grid-rows-[1fr]` transition on a child Radix never touches.
- **One JSON-LD graph per page.** `siteGraph()`'s docstring says so, and `faqPageGraph()` wraps it —
  so `faqPageGraph` *replaces* `siteGraph`, never accompanies it. Pass the same FAQ array to both
  `<FaqSection />` and `faqPageGraph()` so schema matches visible copy.
- **`npm run lint` is dead.** `next lint` was removed in Next 16; the script errors out. Use
  `npx tsc --noEmit`.
- **Sanity reads don't need auth.** The dataset is public and `SANITY_API_READ_TOKEN` fails with
  `projectUserNotFoundError`. The env vars are `NEXT_PUBLIC_SANITY_PROJECT_ID` / `_DATASET` /
  `_API_VERSION`.
- **Testimonials and Cta headings are sitewide.** "The work speaks. So do the clients." and "Let's
  design something beautiful." come from shared components — changing them rewrites every page.
  They'd need an optional heading prop to go city-specific.
- **The services `<h2>` is `sr-only` on purpose, not by oversight.** The converge animation flies
  cards in from the screen edges toward the centre, so nothing can be drawn in that space until the
  first slide settles. It is still a real `<h2>` in the DOM and Google reads it normally, which
  makes it a free keyword-bearing heading. Keep it to one natural phrase per page — an invisible
  heading stuffed with terms is the pattern that draws manual actions.
- **`LocationServices` is shared; the Fort Lauderdale folder has its own copy.**
  `interior-designers-fort-lauderdale-fl/_components/ServicesSequence.tsx` is a separate component
  with its services hardcoded, used only by that page. Golden Beach used to import it, so both pages
  rendered the same ~600 words *and* a Fort Lauderdale heading leaked onto Golden Beach. Golden
  Beach now has its own data file on the shared component. Don't re-point another page at the
  Fort Lauderdale component.

---

## Verifying

```bash
npx tsc --noEmit      # always
npx next build        # prerenders to .next/server/app/**.html
```

Audit rendered output, not source — source greps can't tell you what a crawler actually sees:

```bash
# Which anchor points at which target, per page
node -e '
const fs=require("fs"), dir=".next/server/app/locations";
for (const f of fs.readdirSync(dir).filter(x=>x.endsWith(".html"))) {
  const main=(fs.readFileSync(dir+"/"+f,"utf8").match(/<main[^>]*>([\s\S]*?)<\/main>/i)||["",""])[1];
  const re=/<a[^>]+href="(\/locations\/interior-designers-[^"]+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m; while((m=re.exec(main))) console.log(f, "->", m[1], JSON.stringify(m[2].replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim()));
}'
```

For visible word counts, strip `<script>`, `<style>`, and `<svg>` before counting — Next embeds the
full RSC payload in script tags, so a naive grep will find copy that no crawler renders.

---

## Open items

- **Fort Lauderdale has no outbound links to the neighborhoods.** Making it a real hub closes the
  loop on the whole strategy.
- **NAP conflict.** Houzz lists the business at North Miami Beach with a bio saying "based in Palm
  Beach"; the site and schema say Fort Lauderdale. Three cities across our own properties, which
  suppresses local pack placement. *Blocked:* Oshrat holds the Houzz password and is in Israel.
- **Reviews.** Houzz shows 5.0 from 5 reviews (SDH: 5.0 from 54). The legitimate path to rating rich
  results is visible reviews on the page marked up as `Review` nodes — self-serving
  `aggregateRating` on a `LocalBusiness` node with no visible reviews has produced no stars since
  Google's Sept 2019 change, which is what SDH is doing. Google Business Profile reviews are the
  higher-leverage target anyway; they drive the local pack, which sits above organic. The `g.page`
  review link is already in the site's `sameAs`.
- **Press/awards are underused.** Aventura Modern Living was featured in Florida Design Magazine for
  Art Basel, and it only appears on the Aventura page. "award" appears zero times on Fort Lauderdale.
