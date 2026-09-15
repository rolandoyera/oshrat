"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {
  presentationTool,
  defineDocuments,
  defineLocations,
} from "sanity/presentation";

import { schemaTypes } from "./src/sanity/schemaTypes"; // this now only exports schemaTypes[]
import { apiVersion, dataset, projectId } from "./src/sanity/env";

export default defineConfig({
  name: "default",
  title: "Sarvian Design Group CMS",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool(),
    // Live preview: embeds the site in the Studio, updates as editors type,
    // and maps clicked text back to its field. The site is on the same origin
    // as the Studio, so the default preview URL (this origin) is correct.
    presentationTool({
      previewUrl: {
        previewMode: { enable: "/api/draft-mode/enable" },
      },
      resolve: {
        // Which site pages show a given document (sidebar in the editor).
        locations: {
          project: defineLocations({
            select: { title: "title", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled project",
                  href: `/projects/${doc?.slug}`,
                },
                { title: "All projects", href: "/projects" },
                { title: "Home", href: "/" },
              ],
            }),
          }),
        },
        // Which document to open when navigating to a URL in the preview.
        mainDocuments: defineDocuments([
          {
            route: "/projects/:slug",
            filter: `_type == "project" && slug.current == $slug`,
          },
        ]),
      },
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
