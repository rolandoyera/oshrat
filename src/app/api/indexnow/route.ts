import { NextResponse } from "next/server";
import { z } from "zod";
import { submitToIndexNow } from "@/lib/server/indexnow";

const BASE_URL = "https://www.sarviandg.com";

// Sanity webhook projection: {"slug": slug.current}. Fires on project
// create/update/delete — for deletes IndexNow takes the same URL submission
// (engines re-crawl and see the 404).
const Schema = z.object({
  slug: z.string().trim().min(1).nullish(),
});

export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "INDEXNOW_SECRET is not configured." },
      { status: 500 },
    );
  }
  if (new URL(request.url).searchParams.get("secret") !== secret) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const parsed = Schema.safeParse(await request.json().catch(() => ({})));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // The changed project page (when we got a slug) plus the listing that
  // surfaces it.
  const urls = [
    ...(parsed.data.slug ? [`${BASE_URL}/projects/${parsed.data.slug}`] : []),
    `${BASE_URL}/projects`,
  ];

  try {
    const status = await submitToIndexNow(urls);
    return NextResponse.json({ submitted: urls, indexNowStatus: status });
  } catch (error) {
    console.error("IndexNow submission failed:", error);
    return NextResponse.json({ error: "Submission failed." }, { status: 502 });
  }
}
