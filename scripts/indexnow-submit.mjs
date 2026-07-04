// Manual IndexNow submission: reads the LIVE sitemap and submits every URL.
// Run after deploys or bulk content changes: `npm run indexnow`.
// (Publishing a single project in Sanity already pings automatically via the
// /api/indexnow webhook — this script is for everything-at-once.)
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const HOST = "www.sarviandg.com";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

// The key lives in ONE place: the public/{key}.txt file Bing verifies against.
const publicDir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
);
const keyFile = readdirSync(publicDir).find((f) =>
  /^[0-9a-f]{16,64}\.txt$/i.test(f),
);
if (!keyFile) {
  console.error("No IndexNow key file (public/{key}.txt) found.");
  process.exit(1);
}
const key = readFileSync(path.join(publicDir, keyFile), "utf8").trim();

const sitemapRes = await fetch(SITEMAP_URL);
if (!sitemapRes.ok) {
  console.error(`Failed to fetch ${SITEMAP_URL}: ${sitemapRes.status}`);
  process.exit(1);
}
const xml = await sitemapRes.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (urls.length === 0) {
  console.error("Sitemap contained no URLs.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: HOST,
    key,
    keyLocation: `https://${HOST}/${key}.txt`,
    urlList: urls,
  }),
});

console.log(`Submitted ${urls.length} URLs from ${SITEMAP_URL}`);
for (const url of urls) console.log(`  ${url}`);
console.log(`IndexNow response: ${res.status} ${res.statusText}`);
process.exit(res.ok ? 0 : 1);
