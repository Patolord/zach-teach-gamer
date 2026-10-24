"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { type Locale, locales } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";

const FLAGS: Record<Locale, { flag: string; short: string; label: string }> = {
  "en-CA": { flag: "🇨🇦", short: "EN", label: "English (Canada)" },
  "pt-BR": { flag: "🇧🇷", short: "PT", label: "Português (Brasil)" },
};

type LocaleToggleProps = {
  /** "light" sits on the white header pill; "dark" floats over video/photos. */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Canada / Brazil language switch. Navigates to the same page under the other
 * locale's URL (`/about` <-> `/pt/about`); the proxy remembers the choice in
 * the NEXT_LOCALE cookie. The <html data-locale> attribute set by the root
 * layout drives the purple (Canada) -> green (Brazil) theme swap in globals.css.
 */
export default function LocaleToggle({
  variant = "light",
  className = "",
}: LocaleToggleProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const isDark = variant === "dark";

  const switchTo = (next: Locale) => {
    if (next === locale || isPending) return;
    startTransition(() => {
      // Swap theme immediately so the colour change feels instant.
      document.documentElement.lang = next;
      document.documentElement.dataset.locale = next;
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex h-10 items-center gap-0.5 rounded-full border p-1 shadow-md backdrop-blur-sm transition-opacity ${
        isDark
          ? "border-white/20 bg-black/40"
          : "border-gray-200 bg-white/90 hover:bg-white"
      } ${isPending ? "opacity-70" : ""} ${className}`}
    >
      {locales.map((code) => {
        const active = code === locale;
        const { flag, short, label } = FLAGS[code];
        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => switchTo(code)}
            aria-pressed={active}
            aria-label={label}
            title={label}
            disabled={isPending}
            className={`inline-flex h-8 items-center gap-1 rounded-full px-2 text-xs font-semibold transition-colors cursor-pointer disabled:cursor-wait ${
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : isDark
                  ? "text-white/70 hover:bg-white/10 hover:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <span aria-hidden className="text-base leading-none">
              {flag}
            </span>
            <span>{short}</span>
          </button>
        );
      })}
    </div>
  );
}
