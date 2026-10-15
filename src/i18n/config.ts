export const locales = ["en-CA", "pt-BR"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-CA";

/** Per-locale presentation details used by the toggle, sitemap and layout. */
export const localeMeta: Record<
  Locale,
  { label: string; shortLabel: string; region: string; timeZone: string }
> = {
  "en-CA": {
    label: "English (Canada)",
    shortLabel: "EN",
    region: "Canada",
    timeZone: "America/Toronto",
  },
  "pt-BR": {
    label: "Português (Brasil)",
    shortLabel: "PT",
    region: "Brasil",
    timeZone: "America/Sao_Paulo",
  },
};
