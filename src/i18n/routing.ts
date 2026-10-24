import { defineRouting } from "next-intl/routing";
import { defaultLocale, locales } from "./config";

/**
 * URL-based locales: English stays unprefixed (`/about`), Portuguese lives
 * under `/pt` (`/pt/about`). Every page can therefore be prerendered once per
 * language and search engines get a distinct URL for each.
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      "pt-BR": "/pt",
    },
  },
});
