"use client";

import { getCalApi } from "@calcom/embed-react";
import {
  ArrowLeft,
  Award,
  Book,
  CheckCircle,
  Clock,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import {
  CAL_CONFIG,
  getCalConfig,
  getCalUIConfig,
} from "@/components/home/calendar/cal-config";
import RandomTestimonialsGrid from "@/components/testimonials/RandomTestimonialsGrid";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const courseFeatures = [
  "worlds",
  "stories",
  "technology",
  "implement",
  "frameworks",
  "engagement",
  "crossCurricular",
  "certification",
] as const;

const whatYouWillLearn = [
  { id: "world", icon: Sparkles },
  { id: "story", icon: Book },
  { id: "certification", icon: Award },
] as const;

const curriculum = [
  { id: "foundations", lessons: 7 },
  { id: "creatures", lessons: 8 },
  { id: "magic", lessons: 9 },
  { id: "storyArc", lessons: 6 },
  { id: "implementation", lessons: 7 },
  { id: "project", lessons: 4 },
] as const;

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level2WorldBuilderPage() {
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
              <div className="flex gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-course-level-2/20 border border-course-level-2/30 text-course-level-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {t("level2.page.badge")}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-course-level-2/10 border border-course-level-2/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {t("common.certificationCourse")}
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {t("level2.page.heading")}
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                {t("level2.page.lead")}
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-course-level-2" />
                  <span>{t("level2.page.stats.duration")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-course-level-2" />
                  <span>{t("common.cohortBased")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-course-level-2" />
                  <span>{t("level2.page.stats.certification")}</span>
                </div>
              </div>
            </div>

            <RandomTestimonialsGrid
              count={2}
              tags={["level-2", "training"]}
              title={t("level2.page.testimonialsTitle")}
              iconClassName="w-6 h-6 text-course-level-2"
              accentClassName="text-course-level-2"
              borderClassName="border-course-level-2/20"
              columns={1}
            />

            {/* Prerequisites */}
            <div className="bg-course-level-2/10 backdrop-blur-sm rounded-xl p-6 border border-course-level-2/30">
              <p className="text-white/90">
                <strong className="text-course-level-2">
                  {t("common.prerequisite")}
                </strong>{" "}
                {t("level2.page.prerequisite")}
              </p>
            </div>

            {/* CTA */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-course-level-2/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-course-level-2/5 via-transparent to-course-level-2/10 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {t("level2.page.cta.title")}
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    {t("level2.page.cta.description")}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-course-level-2" />
                      {t("common.noCommitment")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-course-level-2" />
                      {t("common.fifteenMinuteCall")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-course-level-2" />
                      {t("level2.page.cta.projectBased")}
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    size="lg"
                    className="text-lg font-bold text-white px-10 py-6 bg-course-level-2 hover:scale-105 transition-transform"
                    {...calProps}
                  >
                    {t("common.enrollNow")}
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-course-level-2/20">
                      <Icon className="w-6 h-6 text-course-level-2" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {t(`level2.page.learn.${id}.title`)}
                    </h3>
                    <p className="text-white/80">
                      {t(`level2.page.learn.${id}.description`)}
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
                      <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-course-level-2" />
                      <span className="text-white/90">
                        {t(`level2.page.features.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("common.courseCurriculum")}
              </h2>
              <div className="space-y-4">
                {curriculum.map((module, index) => (
                  <div
                    key={module.id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold mb-1 text-course-level-2">
                          {t("common.module", { n: index + 1 })}
                        </p>
                        <h3 className="text-xl font-bold text-white">
                          {t(`level2.page.curriculum.${module.id}`)}
                        </h3>
                      </div>
                      <span className="text-white/60 text-sm">
                        {t("common.lessons", { count: module.lessons })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-course-level-2/20 to-transparent rounded-xl p-8 border border-course-level-2/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                {t("level2.page.finalCta.title")}
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {t("level2.page.finalCta.description")}
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-course-level-2"
                {...calProps}
              >
                {t("level2.page.finalCta.button")}
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
