"use client";

import { ArrowLeft, Award, BookOpen, Heart, Target, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { MEDIA } from "@/lib/media";

const values = [
  { id: "studentCentered", icon: Heart },
  { id: "narrativeLearning", icon: BookOpen },
  { id: "socialEmotionalGrowth", icon: Users },
  { id: "purposefulPlay", icon: Target },
] as const;

export default function AboutPage() {
  const t = useTranslations("about");
  const light = (chunks: React.ReactNode) => (
    <span className="text-lighter">{chunks}</span>
  );
  const accent = (chunks: React.ReactNode) => (
    <span className="text-accent">{chunks}</span>
  );

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
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("backToHome")}
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                {t.rich("title", { light, accent })}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
            </div>

            {/* Zach Reznichek Section */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-primary-light/20 shadow-2xl">
                <Image
                  src={MEDIA.about.zachProfile}
                  alt={t("zach.photoAlt")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    {t.rich("zach.name", { light, accent })}
                  </h2>
                  <p className="text-xl text-secondary italic">
                    {t("zach.credentials")}
                  </p>
                </div>

                <div className="space-y-4 text-lighter/90 leading-relaxed">
                  <p>{t("zach.bio")}</p>

                  <p>{t("zach.quote1")}</p>

                  <p>{t("zach.quote2")}</p>
                </div>

                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-background font-semibold px-8"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/zreznichek/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("zach.moreAboutZach")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Social Emotional Learning Section */}
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold leading-tight">
                    {t.rich("sel.title", { light, accent })}
                  </h2>

                  <div className="space-y-4 text-lighter/90 leading-relaxed">
                    <p>{t("sel.paragraph1")}</p>

                    <p>{t("sel.paragraph2")}</p>

                    <p>{t("sel.paragraph3")}</p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-primary-light/20 shadow-2xl">
                  <Image
                    src={MEDIA.about.classroomRpg}
                    alt={t("sel.imageAlt")}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Additional Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20">
                <p className="text-lighter/90 leading-relaxed text-lg">
                  {t("sel.callout")}
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  {t.rich("values.title", { light, accent })}
                </h2>
                <p className="text-xl text-secondary/90 max-w-3xl mx-auto">
                  {t("values.subtitle")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map(({ id, icon: Icon }) => (
                  <div
                    key={id}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary-light/20 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent mb-2">
                          {t(`values.items.${id}.title`)}
                        </h3>
                        <p className="text-lighter/90">
                          {t(`values.items.${id}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-subtle to-accent/5 rounded-2xl p-12 border border-primary-light/30 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
                <Award className="w-5 h-5" />
                <span className="font-semibold">{t("cta.badge")}</span>
              </div>

              <h2 className="text-4xl font-bold">
                {t.rich("cta.title", { light, accent })}
              </h2>

              <p className="text-xl text-lighter/90 max-w-2xl mx-auto">
                {t("cta.body")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-background font-semibold px-8"
                  asChild
                >
                  <Link href="/home#courses-section">
                    {t("cta.exploreCourses")}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-light/30 text-lighter hover:bg-white/10 font-semibold px-8"
                  asChild
                >
                  <Link href="/contact">{t("cta.getInTouch")}</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-background font-semibold px-8"
                  asChild
                >
                  <Link href="/shop">{t("cta.getHandbook")}</Link>
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
