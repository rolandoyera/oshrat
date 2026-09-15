// Sanity Live: `sanityFetch` serves published content from the CDN, tagged so
// the Live Content API can revalidate exactly the pages a publish affects.
// While Next draft mode is on (entered via /api/draft-mode/enable, typically
// from the Studio's Presentation tool) the same call returns drafts with stega
// encoding so the Presentation tool can map clicked text back to fields.
// `<SanityLive />` (rendered once in the root layout) holds the live connection.
import { defineLive } from "next-sanity/live";
import { client } from "./client";
import { readToken } from "../env";

const { sanityFetch: liveFetch, SanityLive } = defineLive({
  client: client.withConfig({
    // Presentation tool needs this to build click-to-edit links.
    stega: { studioUrl: "/studio" },
  }),
  // Server-only: lets sanityFetch read drafts in draft mode.
  serverToken: readToken,
  // Sent to the browser only while draft mode is on; needs Viewer rights only.
  browserToken: readToken,
});

/**
 * Every fetch is also tagged "sanity" so the /api/revalidate webhook can expire
 * all Sanity-backed data at once. Sync tags from Sanity Live still provide
 * fine-grained revalidation from connected browsers.
 */
export const sanityFetch: typeof liveFetch = (options) =>
  liveFetch({ ...options, tags: [...(options.tags ?? []), "sanity"] });

export { SanityLive };
