import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/site-url";

/** Public pages; each entry lists its translations as hreflang alternates. */
const pages = [
  "/",
  "/home",
  "/about",
  "/faq",
  "/contact",
  "/partners",
  "/workshops",
  "/map",
  "/shop",
  "/media",
  "/press",
  "/courses/intro-to-multiverse",
  "/courses/level-1-space-holder",
  "/courses/level-2-world-builder",
  "/courses/level-3-planes-walker",
] as const;

const absolute = (
  href: (typeof pages)[number],
  locale: (typeof routing.locales)[number],
) => `${siteUrl}${getPathname({ href, locale })}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((href) => ({
    url: absolute(href, routing.defaultLocale),
    changeFrequency: href === "/" || href === "/home" ? "weekly" : "monthly",
    priority: href === "/" || href === "/home" ? 1 : 0.7,
    alternates: {
      languages: {
        ...Object.fromEntries(
          routing.locales.map((locale) => [locale, absolute(href, locale)]),
        ),
        "x-default": absolute(href, routing.defaultLocale),
      },
    },
  }));
}
