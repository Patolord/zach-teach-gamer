"use client";

import { getCalApi } from "@calcom/embed-react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ClipboardList,
  MapPin,
  Play,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import {
  CAL_CONFIG,
  getCalConfig,
  getCalUIConfig,
} from "@/components/home/calendar/cal-config";
import { Button } from "@/components/ui/button";
import { WORKSHOP_HOST_SURVEY_URL } from "@/config/surveys";
import { workshopPosters } from "@/data/workshop-posters";
import { MEDIA } from "@/lib/media";

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function WorkshopsPage() {
  const t = useTranslations("workshops");

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
      />
      <div className="fixed inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("backToHome")}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-10 pb-16">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              {t.rich("hero.title", {
                accent: (chunks) => (
                  <span className="text-accent">{chunks}</span>
                ),
              })}
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </div>
        </div>

        {/* Tour 2026 */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-2xl p-[2px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-accent), var(--color-secondary), var(--color-primary-light), var(--color-accent))",
                backgroundSize: "300% 300%",
                animation: "shimmer 4s ease-in-out infinite",
              }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: "rgba(26, 26, 31, 0.93)" }}
              >
                {/* Photo */}
                <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
                  <Image
                    src="/tour-workshop-group.png"
                    alt={t("tour.photoAlt")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/70" />
                </div>

                <div className="p-8 md:p-12 text-center space-y-5">
                  <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-background)",
                    }}
                  >
                    {t("tour.comingSoon")}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    {t.rich("tour.title", {
                      gradient: (chunks) => (
                        <span
                          className="bg-clip-text text-transparent"
                          style={{
                            backgroundImage:
                              "linear-gradient(135deg, var(--color-accent), var(--color-secondary))",
                          }}
                        >
                          {chunks}
                        </span>
                      ),
                    })}
                  </h2>

                  <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
                    {t("tour.description")}
                  </p>

                  <div className="flex items-center justify-center gap-6 text-sm text-white/40">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {t("tour.region")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="w-4 h-4" />
                      {t("tour.dates")}
                    </span>
                  </div>

                  <p className="text-sm text-white/30 italic pt-2">
                    {t("tour.stayTuned")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Host a workshop near you — survey bubble (Teacher-Gamer Tour) */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-accent/90 text-center mb-3">
              {t("hostSurvey.eyebrow")}
            </p>
            <a
              href={WORKSHOP_HOST_SURVEY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-5 rounded-xl border-2 border-primary-light/50 bg-white/10 px-5 py-6 sm:px-6 sm:py-7 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent hover:shadow-[0_0_24px_rgba(218,255,13,0.25)]"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20">
                <ClipboardList className="h-7 w-7 text-accent group-hover:text-background" />
              </div>

              <div className="flex-1 min-w-0 space-y-2 text-center sm:text-left">
                <p className="text-lg sm:text-xl font-bold leading-snug text-lighter group-hover:text-background">
                  {t("hostSurvey.title")}
                </p>
                <p className="text-base leading-relaxed text-lighter/80 group-hover:text-background/95">
                  {t("hostSurvey.description")}
                </p>
              </div>

              <div className="flex shrink-0 items-center justify-center gap-2 text-sm font-bold text-accent group-hover:text-background">
                <span>{t("hostSurvey.cta")}</span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-background" />
              </div>
            </a>
          </div>
        </div>

        {/* Tour 2026 Poster */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {workshopPosters.map((poster, index) => (
              <div
                key={poster.src}
                className="relative rounded-2xl p-[2px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), var(--color-secondary), var(--color-primary-light), var(--color-accent))",
                  backgroundSize: "300% 300%",
                  animation: "shimmer 4s ease-in-out infinite",
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: "rgba(26, 26, 31, 0.93)" }}
                >
                  {/* Title bar */}
                  <div className="w-full px-4 py-4 text-center">
                    <h2
                      className="text-xl md:text-2xl font-bold uppercase tracking-widest bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, var(--color-accent), var(--color-secondary))",
                      }}
                    >
                      {t(`posters.items.${poster.id}.title`)}
                    </h2>
                  </div>

                  {/* Poster image */}
                  <Image
                    src={poster.src}
                    alt={t(`posters.items.${poster.id}.alt`)}
                    width={poster.width}
                    height={poster.height}
                    className="w-full h-auto block"
                    sizes="(max-width: 768px) 100vw, 768px"
                    priority={index === 0}
                  />

                  {/* CTA bar */}
                  <div className="w-full px-6 py-5 text-center">
                    <button
                      type="button"
                      className="text-base md:text-lg font-semibold cursor-pointer hover:underline transition-colors"
                      style={{ color: "var(--color-accent)" }}
                      {...calProps}
                    >
                      {t("posters.cta")}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Workshop */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-accent/30 overflow-hidden">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/3MFP4a4H37U"
                  title={t("featured.videoTitle")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                    <Play className="w-3 h-3" />
                    {t("featured.badge")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                    <CalendarDays className="w-3.5 h-3.5" />
                    {t("featured.date")}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {t("featured.location")}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  {t("featured.title")}
                </h2>
                <p className="text-white/60 text-sm">{t("featured.speaker")}</p>
                <p className="text-white/70 leading-relaxed">
                  {t("featured.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Want a Workshop in Your City? */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-accent/20 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/15 flex items-center justify-center">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                {t.rich("requestWorkshop.title", {
                  accent: (chunks) => (
                    <span className="text-accent">{chunks}</span>
                  ),
                })}
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                {t("requestWorkshop.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  size="lg"
                  className="text-lg font-bold px-10 py-6 bg-accent text-black hover:bg-accent-light"
                  {...calProps}
                >
                  {t("requestWorkshop.request")}
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold px-10 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/contact">{t("requestWorkshop.contact")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
