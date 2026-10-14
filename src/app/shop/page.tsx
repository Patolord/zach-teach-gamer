"use client";

import {
  ArrowLeft,
  Book,
  CheckCircle,
  ExternalLink,
  ShoppingCart,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RandomTestimonialsShop from "@/components/testimonials/RandomTestimonialsShop";
import { MEDIA } from "@/lib/media";

const bookFeatures = [
  "pages",
  "lifeSkills",
  "audience",
  "hours",
  "guides",
  "activities",
  "assessment",
  "tips",
] as const;

const benefits = [
  { id: "framework", icon: Book },
  { id: "proven", icon: Star },
  { id: "easy", icon: CheckCircle },
] as const;

export default function ShopPage() {
  const t = useTranslations("shop");

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
      />
      <div className="fixed inset-0 bg-black-80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with Back Button */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t("backToHome")}
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Book Image Section */}
              <div className="space-y-6">
                <div className="relative aspect-3/4 w-full max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-2xl blur-3xl bg-gradient-to-br from-accent-glow to-secondary-soft" />
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-primary shadow-[0_25px_50px_-12px_var(--color-primary-glow),0_0_60px_var(--color-primary-subtle)]">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt={t("hero.coverAlt")}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Rating/Reviews */}
                <div className="backdrop-blur-sm rounded-xl p-6 max-w-md mx-auto bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-accent"
                      />
                    ))}
                  </div>
                  <p className="text-center text-lg font-semibold text-lighter">
                    {t("hero.rating")}
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                  {benefits.map(({ id, icon: Icon }) => (
                    <div
                      key={id}
                      className="backdrop-blur-sm rounded-xl p-3 text-center space-y-1.5 bg-primary-subtle border border-primary-light/25"
                    >
                      <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center bg-accent-glow">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xs font-bold text-accent leading-tight">
                        {t(`benefits.${id}.title`)}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Book Details Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm bg-primary-subtle border-2 border-primary-light shadow-[0_0_20px_var(--color-primary-glow)]">
                    <Book className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-lighter">
                      {t("hero.badge")}
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    {t.rich("hero.title", {
                      accent: (chunks) => (
                        <span className="text-accent">{chunks}</span>
                      ),
                    })}
                  </h1>

                  <p className="text-xl leading-relaxed text-lighter">
                    {t("hero.tagline")}
                  </p>
                </div>

                {/* Price */}
                <div className="backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-lighter">
                      $29.99 CAD
                    </span>
                    <span className="text-lg line-through text-light">
                      $36.99 USD
                    </span>
                  </div>
                  <p className="mt-2 text-lighter">{t("hero.formats")}</p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Buy the PDF Button - Triggers Checkout (Primary CTA) */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent via-accent-light to-accent opacity-75 blur-sm animate-pulse" />
                    <div className="absolute -top-3 -right-2 z-10 px-3 py-1 text-sm font-extrabold rounded-full bg-accent text-background shadow-[0_2px_10px_var(--color-accent-glow)] animate-bounce">
                      {t("hero.discountBadge")}
                    </div>
                    <Button
                      asChild
                      size="lg"
                      className="relative w-full text-xl font-extrabold py-7 transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)] hover:scale-[1.02]"
                    >
                      <a href="/api/checkout?productType=handbook">
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        {t("hero.buyPdf")}
                      </a>
                    </Button>
                  </div>
                  <p className="text-center text-sm text-accent/80 font-medium -mt-1">
                    {t("hero.buyPdfNote")}
                  </p>

                  {/* Buy Physical Book - External Link (Secondary) */}
                  <Button
                    asChild
                    size="lg"
                    className="w-full text-base font-bold py-5 transition-all duration-300 bg-primary/60 text-lighter border border-primary-light/40 hover:bg-primary hover:text-white shadow-[0_4px_15px_var(--color-primary-glow)] hover:shadow-[0_6px_25px_var(--color-primary-glow)]"
                  >
                    <a
                      href="https://www.drivethrurpg.com/pt/product/354223/teacher-gamer-handbook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Book className="w-4 h-4 mr-2" />
                      {t("hero.buyPhysical")}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                {/* What's Inside */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    {t.rich("features.title", {
                      accent: (chunks) => (
                        <span className="text-accent">{chunks}</span>
                      ),
                    })}
                  </h2>
                  <ul className="space-y-3">
                    {bookFeatures.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-lg text-lighter"
                      >
                        <span>{t(`features.items.${feature}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center mb-10">
                {t.rich("testimonials.title", {
                  accent: (chunks) => (
                    <span className="text-accent">{chunks}</span>
                  ),
                })}
              </h2>

              <RandomTestimonialsShop />
            </div>

            {/* Products Section */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center">
                {t.rich("products.title", {
                  accent: (chunks) => (
                    <span className="text-accent">{chunks}</span>
                  ),
                })}
              </h2>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1: Teacher Gamer Handbook (PDF) */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt={t("products.handbookPdf.name")}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-center text-lighter">
                      {t("products.handbookPdf.name")}
                    </h3>
                    <p className="text-2xl font-bold text-center mb-4 text-lighter">
                      $29.99 CAD
                    </p>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a href="/api/checkout?productType=handbook">
                        {t("products.handbookPdf.cta")}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 2: Teacher Gamer Handbook (Softcover / Hardcover) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover2}
                      alt={t("products.handbookPrint.name")}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      {t("products.handbookPrint.name")}
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        {t("products.startingFrom")}
                      </p>
                      <p className="text-2xl font-bold text-lighter">
                        $36.99 USD
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a
                        href="https://www.drivethrurpg.com/pt/product/354223/teacher-gamer-handbook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t("products.handbookPrint.cta")}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 3: Teacher Gamer Screen (Landscape) */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover3}
                      alt={t("products.screenLandscape.name")}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      {t("products.screenLandscape.name")}
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-2xl font-bold text-lighter">$9 CAD</p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a href="/api/checkout?productType=screen_landscape">
                        {t("products.screenLandscape.cta")}
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 4: Teacher Gamer Screen (Portrait) */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover4}
                      alt={t("products.screenPortrait.name")}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      {t("products.screenPortrait.name")}
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-2xl font-bold text-lighter">$9 CAD</p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a href="/api/checkout?productType=screen_portrait">
                        {t("products.screenPortrait.cta")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-primary-light/30 bg-primary-subtle/90 p-8 shadow-[0_18px_50px_var(--color-primary-glow)] backdrop-blur-sm md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-course-intro/10 via-transparent to-primary/30 pointer-events-none" />
                <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-5">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-primary-light/40 bg-white/10 p-2 shadow-[0_0_25px_rgba(83,190,255,0.22)]">
                      <Image
                        src="/partners/hero-workshop-logo.png"
                        alt={t("partner.logoAlt")}
                        fill
                        className="object-contain p-2"
                        sizes="96px"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-course-intro">
                        {t("partner.eyebrow")}
                      </p>
                      <h3 className="text-3xl font-bold text-lighter">
                        {t("partner.title")}
                      </h3>
                      <p className="max-w-2xl text-lg leading-relaxed text-lighter/80">
                        {t("partner.intro")}
                        <span className="my-3 block h-px w-32 bg-course-intro/60" />
                        <strong className="block text-2xl md:text-3xl font-bold text-lighter">
                          {t("partner.dates")}
                        </strong>
                        <span className="mt-1 block text-xl font-semibold text-course-intro">
                          {t("partner.hours")}
                        </span>
                        <span className="mt-3 block">
                          {t("partner.description")}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-lighter/75">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-course-intro" />
                          {t("partner.storyLed")}
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-course-intro" />
                          {t("partner.creativeFacilitation")}
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-course-intro" />
                          {t("partner.spotlight")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 space-y-3 text-center">
                    <p className="text-3xl font-bold text-lighter">$450 USD</p>
                    <Button
                      asChild
                      size="lg"
                      className="text-lg font-bold px-10 py-6 bg-course-intro text-background hover:scale-105 transition-transform shadow-[0_0_30px_rgba(83,190,255,0.24)]"
                    >
                      <a href="/api/checkout?productType=level1_workshop">
                        {t("partner.enroll")}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center space-y-6">
              <h2 className="text-3xl font-bold">
                {t.rich("cta.title", {
                  accent: (chunks) => (
                    <span className="text-accent">{chunks}</span>
                  ),
                })}
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-lighter">
                {t("cta.description")}
              </p>
              <Button
                asChild
                size="lg"
                className="text-lg font-bold px-12 py-6 transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)]"
              >
                <a href="/api/checkout?productType=handbook">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {t("cta.button")}
                </a>
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
