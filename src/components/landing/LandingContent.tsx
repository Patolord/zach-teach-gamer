"use client";

import { ChevronRight, Loader2, Swords } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LocaleToggle from "@/components/shared/LocaleToggle";
import ScrambledText from "@/components/shared/ScrambledText";
import { Link } from "@/i18n/navigation";

type Props = {
  onButtonClick?: () => void;
  isLoading?: boolean;
};

export default function LandingContent({
  onButtonClick,
  isLoading = false,
}: Props) {
  const t = useTranslations("landing");
  const locale = useLocale();
  const [hasWatchedIntro, setHasWatchedIntro] = useState(false);

  useEffect(() => {
    try {
      setHasWatchedIntro(localStorage.getItem("hasWatchedIntro") === "true");
    } catch {}
  }, []);

  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-4 w-full max-w-5xl mx-auto">
      <LocaleToggle
        variant="dark"
        className="pointer-events-auto fixed top-4 left-4 z-30"
      />

      {hasWatchedIntro ? (
        <Link
          href="/home"
          className="pointer-events-auto fixed top-4 right-4 z-30 inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-white/70 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
        >
          <span>{t("skipIntro")}</span>
          <ChevronRight className="h-3 w-3" />
        </Link>
      ) : null}

      <h1 className="w-full max-w-4xl px-2 sm:px-5">
        <Image
          src="/teacher-gamer-revolution-logo-transparent.png"
          alt={t("logoAlt")}
          width={1024}
          height={265}
          priority
          unoptimized
          className="w-full h-auto object-contain"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 896px"
        />
      </h1>

      {/* Keyed by locale: ScrambledText splits the text into spans on mount,
          so it must remount to show the newly selected language. */}
      <div
        key={locale}
        className="pb-30 text-lg sm:text-xl md:text-2xl px-2 text-center text-shadow-subtitle flex flex-col gap-2"
      >
        <ScrambledText
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          {t("tagline1")}
        </ScrambledText>
        <ScrambledText
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          {t("tagline2")}
        </ScrambledText>
        <ScrambledText
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          {t("tagline3")}
        </ScrambledText>
      </div>

      <button
        type="button"
        onClick={onButtonClick}
        disabled={isLoading}
        className="text-base sm:text-lg font-semibold py-3 px-8 uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-lg border-2 border-primary-light bg-transparent text-white btn-3d hover:bg-primary-subtle disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0 active:scale-95"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Swords className="w-5 h-5" />
        )}
        <span>{isLoading ? t("loading") : t("getStarted")}</span>
      </button>
    </div>
  );
}
