"use client";

import { ArrowLeft, Book, CheckCircle, Clock, Star, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import {
  CAL_CONFIG,
  getCalUIConfig,
  getCalConfig,
} from "@/components/home/calendar/cal-config";
import RandomTestimonialsGrid from "@/components/testimonials/RandomTestimonialsGrid";

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

const courseFeatures = [
  "fundamentals",
  "multiverse",
  "pbl",
  "sel",
  "phases",
  "exercises",
  "handbook",
  "certificate",
] as const;

const whatYouWillLearn = [
  { id: "foundation", icon: Book },
  { id: "character", icon: Users },
  { id: "integration", icon: CheckCircle },
] as const;

const curriculum = [
  {
    id: "theory",
    lessons: 6,
    bullets: [
      "safeSessions",
      "worldBuild",
      "outcomes",
      "facilitate",
      "quests",
      "settings",
    ],
  },
  {
    id: "skills",
    lessons: 6,
    bullets: [
      "characterBuild",
      "gamify",
      "skillset",
      "terrain",
      "miniatures",
      "kinaesthetic",
    ],
  },
] as const;

export default function IntroToMultiversePage() {
  const t = useTranslations("courses");

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
      <div className="fixed inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <Link
            href="/home#courses-section"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("common.backToCourses")}
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-course-intro/20 border border-course-intro/30 text-course-intro">
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {t("intro.page.badge")}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {t("intro.title")}
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                {t("intro.page.lead")}
              </p>

              <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                {t("intro.page.intro")}
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-course-intro" />
                  <span>{t("intro.page.stats.duration")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-course-intro" />
                  <span>{t("intro.page.stats.format")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="w-5 h-5 text-course-intro" />
                  <span>{t("intro.page.stats.delivery")}</span>
                </div>
              </div>
            </div>

            <RandomTestimonialsGrid
              count={2}
              tags={["intro-multiverse", "training"]}
              title={t("intro.page.testimonialsTitle")}
              iconClassName="w-6 h-6 text-course-intro"
              accentClassName="text-course-intro"
              borderClassName="border-course-intro/20"
            />

            {/* CTA */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-course-intro/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-course-intro/5 via-transparent to-course-intro/10 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t("intro.page.cta.title")}
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    {t("intro.page.cta.description")}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-course-intro" />
                      {t("intro.page.cta.dates")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-course-intro" />
                      {t("intro.page.cta.time")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-course-intro" />
                      {t("intro.page.cta.location")}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg font-bold text-black px-10 py-6 bg-course-intro hover:scale-105 transition-transform"
                  >
                    <Link href="/shop">{t("common.enrollNow")}</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("common.whatYouWillLearn")}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {whatYouWillLearn.map(({ id, icon: Icon }) => (
                  <div
                    key={id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-course-intro/20">
                      <Icon className="w-6 h-6 text-course-intro" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`intro.page.learn.${id}.title`)}
                    </h3>
                    <p className="text-white/80">
                      {t(`intro.page.learn.${id}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Features */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("common.courseIncludes")}
              </h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <ul className="grid md:grid-cols-2 gap-4">
                  {courseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-course-intro" />
                      <span className="text-white/90">
                        {t(`intro.page.features.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("common.courseCurriculum")}
              </h2>
              <div className="space-y-4">
                {curriculum.map((module) => (
                  <div
                    key={module.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-lg md:text-xl font-semibold mb-2 text-course-intro">
                          {t(`intro.page.curriculum.modules.${module.id}`)}
                        </p>
                      </div>
                      <span className="text-white/60 text-sm">
                        {t("common.lessons", { count: module.lessons })}
                      </span>
                    </div>
                    <ul className="mt-5 space-y-4">
                      {module.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-course-intro" />
                          <span className="text-xl md:text-2xl font-bold leading-tight text-white">
                            {t(`intro.page.curriculum.bullets.${item}`)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-course-intro/20 to-transparent rounded-xl p-8 border border-course-intro/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("intro.page.finalCta.title")}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {t("intro.page.finalCta.description")}
              </p>
              <Button
                asChild
                size="lg"
                className="text-lg font-bold text-black px-12 py-6 bg-course-intro"
              >
                <Link href="/shop">{t("intro.page.finalCta.button")}</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
