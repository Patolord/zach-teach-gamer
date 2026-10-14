export const locales = ["en-CA", "pt-BR"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-CA";

/** Cookie that persists the visitor's chosen language. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" && (locales as readonly string[]).includes(value)
  );
}

/** Per-locale presentation details used by the toggle and the layout. */
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
