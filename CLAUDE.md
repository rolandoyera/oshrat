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

Confirmed as of 2026-08-05: **Golden Beach ranks #1** and is cited in Google AI Overviews.
**Bal Harbour and Surfside are on page one.** Surfside is now also named in the AI Overview for
"luxury interior designers in surfside" (localized to Aventura 33180), paraphrasing the page's own
"turnkey… oceanfront apartment layouts… final styling" language — evidence the generative layer
reads and reuses this copy.

Caveat on that Surfside citation: every competing firm in the same Overview carries a named,
multi-source chip (`DKOR Interiors +1`). Ours is a bare unnamed link — one source, the site itself.
The placement is real but unsupported off-site, which is the reviews and NAP gap in the open items
below showing up where it's visible.

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
| `LocationProjects` | hand-picked `slugs` + a children blurb. **This is the current component** for location pages; the homepage and `/services` use `ProjectsSectionHome`. |
| `_components/ServicesSequence.ts` | max **7** entries (the converge animation defines 7 flight paths) |
| `_components/Faqs.ts` | per-city Q&A. Put the city in **every question** — they render as `<h3>` *and* land in the JSON-LD, so each one counts twice. |
| `LocationEditorial` | three long keyword-bearing paragraphs |
| `<Why>` (shared `@/components/Why`) | **every** page's why section, sitewide (home, services, projects, all locations); copy lives inline in `page.tsx` as children cells; the grid is `md:grid-cols-3`, so exactly 3 cells |

Fort Lauderdale now composes the same shared pieces as every other city. The **only** things it does
differently: its own `_components/Hero.tsx` (bottom-left copy over an art-directed backdrop, rather
than the shared centered `LocationHero`), its own `_components/FeaturedProjects.tsx` (3-up, versus
the shared 2-up `LocationProjects`), and projects placed **above** the services sequence.

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

## Areas-served pages (ads only)

`src/app/areas-served/*` is reserved for **paid-ads landing pages only** — it is not part of the
organic location-page system above. Keep it that way deliberately: no entries in `locations.ts`,
the footer, the sitemap, or the internal link graph (the route is intentionally an orphan — ad
traffic arrives by URL). Don't clone organic `/locations` pages from these, and don't apply the
location-page anatomy/link rules to them. Ads pages must **never** import the shared organic
`@/components/Why` — the lander keeps its own `_components/LocationWhy.tsx` (currently unimported,
kept deliberately) so ad copy stays fully decoupled from the organic pages.

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
  They'd need an optional heading prop to go city-specific. Both sections carry `data-dup-ignore`,
  which the CRM's Keyword Analyzer site crawl reads to keep them out of its duplicate-content
  comparison. Put it on any other block that is deliberately identical sitewide, so the report keeps
  showing only the cloned *city copy* we actually care about. It does not affect keyword density
  (Google indexes this text, so the density tables must keep counting it) and it is not a signal to
  search engines — it means nothing outside our own tooling.
- **The services `<h2>` is `sr-only` on purpose, not by oversight.** The converge animation flies
  cards in from the screen edges toward the centre, so nothing can be drawn in that space until the
  first slide settles. It is still a real `<h2>` in the DOM and Google reads it normally, which
  makes it a free keyword-bearing heading. Keep it to one natural phrase per page — an invisible
  heading stuffed with terms is the pattern that draws manual actions.
- **Every page now uses the shared `LocationServices`; only the data differs.** Fort Lauderdale used
  to ship its own `ServicesSequence.tsx` component with the copy hardcoded inside it, and Golden
  Beach imported it — so both pages rendered the same ~600 words, and a Fort Lauderdale `<h2>`
  leaked onto Golden Beach, our #1 page. Both now pass their own `_components/ServicesSequence.ts`
  data file to the shared component. Keep it that way: copy belongs in the data file, never in a
  component another page might import.
- **Fort Lauderdale's hero does not fade.** It briefly paired a `fixed` backdrop that faded to
  opacity 0 with a scroll-driven `--hero-mix` that darkened the copy from white to `taupe-800`. Those
  were one mechanism: the text had to darken because the image dissolved out from under it. The hero
  is now a normal `absolute` backdrop that parallaxes at 0.35 like `LocationHero`, with plain white
  copy. `LocationHero.tsx` still references `var(--hero-mix,0%)`, which has no producer anywhere and
  always computes to white — dead, harmless, safe to simplify.

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

- **Fort Lauderdale is only half a hub.** It links out to Las Olas ("interior designers in Las
  Olas") and nothing else. Deliberate for now — more outbound links dilute the phrase focus on the
  hardest target we have. Revisit once it holds a position worth spending equity from.
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
