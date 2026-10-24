"use client";

import { ArrowRight, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { forwardRef } from "react";
import RandomTestimonialQuote from "@/components/testimonials/RandomTestimonialQuote";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/shinytext";
import { Link } from "@/i18n/navigation";
import { MEDIA } from "@/lib/media";
import ShopSectionCard from "../shop/ShopSectionCard";

const features = [
  { id: "proven", icon: Shield },
  { id: "classrooms", icon: Users },
  { id: "expert", icon: Star },
] as const;

const CombinedHeroSection = forwardRef<HTMLElement>((_props, ref) => {
  const t = useTranslations("home");

  return (
    <section
      id="hero-section"
      ref={ref}
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
    >
      {/* 40% black overlay - provides contrast while maintaining magical atmosphere */}
      <div
        className="absolute inset-0 animate-hero-fade-in"
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Hero Section Content with CSS fade-in animation */}
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24 relative z-10 animate-hero-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <ShinyText
                speed={3}
                delay={1}
                color="var(--color-primary)"
                shineColor="var(--color-white)"
                spread={30}
                yoyo
              >
                {t.rich("hero.title", {
                  highlight: (chunks) => (
                    <span
                      className="bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)",
                      }}
                    >
                      {chunks}
                    </span>
                  ),
                })}
              </ShinyText>
            </h1>

            <p
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--color-lighter)" }}
            >
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-background)",
                  boxShadow:
                    "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)",
                }}
                onClick={() => {
                  const coursesSection =
                    document.getElementById("courses-section");
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-accent-light)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 30px var(--color-accent), 0 0 50px var(--color-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)";
                }}
              >
                {t("hero.exploreCourses")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 text-white transition-all duration-300"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "var(--color-primary-light)",
                  borderWidth: "2px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary-subtle)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
                asChild
              >
                <Link href="/media">{t("hero.watchHowItWorks")}</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map(({ id, icon: Icon }) => (
                <div key={id} className="flex items-center gap-2">
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-lighter)" }}
                  >
                    {t(`hero.features.${id}`)}
                  </span>
                </div>
              ))}
            </div>

            <RandomTestimonialQuote tags={["hero", "training", "educator"]} />
          </div>

          <div className="relative">
            <div
              className="aspect-square overflow-hidden rounded-4xl shadow-2xl"
              style={{
                backgroundColor: "var(--color-white)",
                border: "4px solid var(--color-primary)",
                boxShadow:
                  "0 25px 50px -12px var(--color-primary-glow), 0 0 60px var(--color-primary-subtle)",
              }}
            >
              <Image
                src={MEDIA.hero.image}
                alt={t("hero.imageAlt")}
                fill
                className="object-cover rounded-4xl transparent"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 sm:bottom-16 left-1/2 transform -translate-x-1/2 z-10 animate-hero-fade-in">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span
            className="text-sm uppercase tracking-wider"
            style={{ color: "var(--color-lighter)" }}
          >
            {t("hero.scroll")}
          </span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ color: "var(--color-accent)" }}
            aria-label={t("hero.scrollDownLabel")}
            role="img"
          >
            <title>{t("hero.scrollDownTitle")}</title>
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Shop Section Content */}
      <div
        data-scroll-section={0}
        className="pt-20 pb-40 flex justify-center items-center relative"
      >
        <div
          data-section-content
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl w-full px-6 md:px-8 relative z-10"
        >
          <div className="flex justify-center shrink-0 mb-6 md:mb-0">
            <ShopSectionCard image={MEDIA.assets.bookCover} />
          </div>

          <div className="flex flex-col text-left space-y-6 md:space-y-4 w-full">
            <h1 className="text-3xl md:text-4xl">
              <ShinyText
                speed={3}
                delay={1}
                color="var(--color-accent)"
                shineColor="var(--color-white)"
                spread={30}
                yoyo
              >
                {t("handbook.title")}
              </ShinyText>
            </h1>

            <h2
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-lighter)" }}
            >
              {t("handbook.subtitle")}
            </h2>

            <ul
              className="list-disc list-inside text-sm md:text-base space-y-2"
              style={{ color: "var(--color-lighter)" }}
            >
              <li>{t("handbook.bullets.pages")}</li>
              <li>{t("handbook.bullets.skills")}</li>
              <li>{t("handbook.bullets.designed")}</li>
              <li>{t("handbook.bullets.hours")}</li>
            </ul>

            <h2
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-lighter)" }}
            >
              {t("handbook.framework")}
            </h2>

            <Link href="/shop">
              <button
                type="button"
                className="self-start px-8 py-3 font-semibold rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-background)",
                  boxShadow:
                    "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-accent-light)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 30px var(--color-accent), 0 0 50px var(--color-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)";
                }}
              >
                {t("handbook.cta")}
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom horizontal transition element - magical glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, var(--color-secondary-soft), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-60"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
          }}
        />
      </div>
    </section>
  );
});

CombinedHeroSection.displayName = "CombinedHeroSection";

export default CombinedHeroSection;
