import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale, LOCALE_COOKIE, localeMeta } from "./config";

/**
 * Locale resolution without URL prefixes: the language lives in a cookie
 * that the LocaleToggle sets, and every page re-renders in that language.
 */
export default getRequestConfig(async () => {
  const store = await cookies();
  const requested = store.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(requested) ? requested : defaultLocale;

  const messages =
    locale === "pt-BR"
      ? (await import("../../messages/pt-BR")).default
      : (await import("../../messages/en-CA")).default;

  return {
    locale,
    messages,
    timeZone: localeMeta[locale].timeZone,
  };
});
