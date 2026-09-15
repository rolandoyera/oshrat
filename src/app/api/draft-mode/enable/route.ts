// Presentation tool opens the site through this route. It verifies the secret
// the Studio generated, turns on Next draft mode (a cookie), and redirects to
// the requested page. Nothing here touches the public, cookie-less site.
import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import { readToken } from "@/sanity/env";

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token: readToken }),
});
