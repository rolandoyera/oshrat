import type { StructureResolver } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

// Projects use a drag-and-drop list; the order drives the projects page,
// the home page sections and the prev/next links on project pages.
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        S,
        context,
      }),
      S.divider(),
      S.documentTypeListItem("slide").title("Homepage Slides"),
    ]);
