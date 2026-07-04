import "server-only";

// IndexNow (https://www.indexnow.org) — instant URL-change pings to Bing & co.
// The key is PUBLIC by design: search engines verify ownership by fetching
// `https://www.sarviandg.com/{key}.txt` (the file in `public/`, downloaded from
// Bing Webmaster Tools). The key here and that filename/content must match.
const INDEXNOW_KEY = "e7ad80727c39479894525cba4795e212";
const HOST = "www.sarviandg.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * Submit changed URLs (added, updated, or deleted) to IndexNow. Callers treat
 * this as best-effort — indexing pings must never fail the caller's flow.
 * Returns the IndexNow HTTP status (200/202 = accepted).
 */
export async function submitToIndexNow(urls: string[]): Promise<number> {
  if (urls.length === 0) return 200;
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });
  return res.status;
}
