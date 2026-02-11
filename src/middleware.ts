import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales } from "@/i18n";

function negotiateLocale(req: NextRequest): string {
  // 1) explicit ?lang=xx wins
  const q = req.nextUrl.searchParams.get("lang");
  if (q && isLocale(q)) return q;

  // 2) Accept-Language
  const al = req.headers.get("accept-language") ?? "";
  for (const part of al.split(",")) {
    const tag = part.trim().split(";")[0];
    if (!tag) continue;
    const base = tag.toLowerCase().split("-")[0];
    if (isLocale(base)) return base;
  }

  // 3) fallback
  return defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip Next.js internals
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap")
  ) {
    return NextResponse.next();
  }

  // Already prefixed with locale?
  const seg = pathname.split("/")[1];
  if (seg && (locales as readonly string[]).includes(seg)) return NextResponse.next();

  const locale = negotiateLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
