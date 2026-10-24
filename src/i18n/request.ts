import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { localeMeta } from "./config";
import { routing } from "./routing";

/**
 * The locale comes from the URL segment (see src/proxy.ts and
 * src/app/[locale]). Unknown segments fall back to the default language.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

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
