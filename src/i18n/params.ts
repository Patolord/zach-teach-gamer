import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import type { Locale } from "./config";
import { routing } from "./routing";

/** `params` shape for every page under src/app/[locale]. */
export type LocaleParams = Promise<{ locale: Locale }>;

/**
 * Layouts receive `params.locale` as a plain string (Next's generated route
 * types). Narrow it to a supported locale or render the 404 page.
 */
export async function resolveLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return locale;
}
