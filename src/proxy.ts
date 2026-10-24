import { type NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

/**
 * Adds/strips the `/pt` prefix, redirects a bare `/` visitor with a saved
 * NEXT_LOCALE cookie (or matching Accept-Language) to their language, and sets
 * the cookie when they switch.
 *
 * The internal route segment is the full code (`/pt-BR/...`), so a visitor who
 * types that directly would get a second copy of every Portuguese page. Send
 * them to the canonical `/pt/...` URL instead.
 */
export default function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/pt-BR(\/.*)?$/);
  if (match) {
    const url = request.nextUrl.clone();
    url.pathname = `/pt${match[1] ?? ""}`;
    return NextResponse.redirect(url, 308);
  }
  return intlMiddleware(request);
}

export const config = {
  // Skip API routes, Next internals, Vercel internals and any file with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
