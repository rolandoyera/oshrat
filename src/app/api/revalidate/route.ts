// Sanity webhook target. Open browser tabs already revalidate pages through
// Sanity Live, but only tabs that are NOT in draft mode do so. An editor
// publishing from the Studio with the preview open would otherwise leave the
// public cache stale until some visitor happened to be connected. This route
// makes publishing reliable: Sanity calls it on every create/update/delete.
//
// Configure at sanity.io/manage -> API -> Webhooks:
//   URL:     https://www.sarviandg.com/api/revalidate
//   Trigger: create, update, delete   Filter: _type in ["project", "slide"]
//   Secret:  same value as SANITY_REVALIDATE_SECRET (Vercel + .env.local)
import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookBody = { _type?: string; slug?: { current?: string } | string };

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json(
      { message: "SANITY_REVALIDATE_SECRET is not set" },
      { status: 500 },
    );
  }

  try {
    const { isValidSignature, body } = await parseBody<WebhookBody>(
      req,
      secret,
    );
    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }
    if (!body?._type) {
      return NextResponse.json({ message: "Missing _type" }, { status: 400 });
    }

    // Every sanityFetch is tagged "sanity" (see src/sanity/lib/live.ts), so
    // one tag expires all Sanity-backed data. The path call also drops the
    // rendered pages so the next visitor gets fresh HTML.
    revalidateTag("sanity", "max");
    revalidatePath("/", "layout");

    return NextResponse.json({
      revalidated: true,
      type: body._type,
      now: new Date().toISOString(),
    });
  } catch (err) {
    console.error("[api/revalidate]", err);
    return NextResponse.json(
      { message: err instanceof Error ? err.message : "Unknown error" },
      { status: 500 },
    );
  }
}
