import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  (await draftMode()).disable();
  const url = new URL(request.url);
  const back = url.searchParams.get("redirect") ?? "/";
  // Only allow same-origin paths to avoid an open redirect.
  const target = back.startsWith("/") && !back.startsWith("//") ? back : "/";
  return NextResponse.redirect(new URL(target, url.origin));
}
