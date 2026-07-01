"use client";

import {
  ArrowLeft,
  Book,
  CheckCircle,
  ExternalLink,
  Loader2,
  ShoppingCart,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RandomTestimonialsShop from "@/components/testimonials/RandomTestimonialsShop";
import { MEDIA } from "@/lib/media";

const bookFeatures = [
  "📘 300 pages of creative strategies and lesson plans",
  "🎲 36 life skills through collaborative RPG experiences",
  "⚔️ Designed for educators guiding 10+ year-old learners",
  "🔥 40+ hours of co-creative play and storytelling",
  "✨ Step-by-step implementation guides",
  "🎯 Classroom-tested activities and scenarios",
  "📊 Assessment tools and progress tracking",
  "💡 Tips from experienced game master educators",
];

const benefits = [
  {
    icon: Book,
    title: "Complete Framework",
    description: "Everything you need to integrate RPGs into your curriculum",
  },
  {
    icon: Star,
    title: "Proven Methods",
    description: "Tested in real classrooms with measurable results",
  },
  {
    icon: CheckCircle,
    title: "Easy to Follow",
    description: "Clear instructions for educators of all experience levels",
  },
];

export default function ShopPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async (productType: "handbook" | "level1_workshop" = "handbook") => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productType }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Checkout error:", data.error);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };

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
            Back to Home
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
                      alt="The Teacher-Gamer Handbook Cover"
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
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-center text-lg font-semibold text-lighter">
                    4.9/5 from 200+ Educators
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
                  {benefits.map(({ icon: Icon, title }) => (
                    <div
                      key={title}
                      className="backdrop-blur-sm rounded-xl p-3 text-center space-y-1.5 bg-primary-subtle border border-primary-light/25"
                    >
                      <div className="w-10 h-10 mx-auto rounded-full flex items-center justify-center bg-accent-glow">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-xs font-bold text-accent leading-tight">
                        {title}
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
                      Educational Resource
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="text-accent">The Teacher-Gamer</span>
                    <span className="text-lighter"> Handbook</span>
                  </h1>

                  <p className="text-xl leading-relaxed text-lighter">
                    Build literacy. Spark imagination. Empower learners. Transform
                    classrooms into immersive adventures where students learn by
                    playing, failing, and growing together.
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
                  <p className="mt-2 text-lighter">
                    Digital & Physical versions available
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {/* Buy the PDF Button - Triggers Checkout (Primary CTA) */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent via-accent-light to-accent opacity-75 blur-sm animate-pulse" />
                    <div className="absolute -top-3 -right-2 z-10 px-3 py-1 text-sm font-extrabold rounded-full bg-accent text-background shadow-[0_2px_10px_var(--color-accent-glow)] animate-bounce">
                      19% OFF
                    </div>
                    <Button
                      size="lg"
                      className="relative w-full text-xl font-extrabold py-7 transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)] hover:scale-[1.02]"
                      onClick={() => handleCheckout("handbook")}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-5 h-5 mr-2" />
                          Get The PDF — Instant Download
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-center text-sm text-accent/80 font-medium -mt-1">
                    Save 19% vs Physical Book — $29.99 CAD via Stripe — Instant Download
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
                      Buy Physical Book
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>

                {/* What's Inside */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">
                    <span className="text-accent">What's</span>
                    <span className="text-lighter"> Inside</span>
                  </h2>
                  <ul className="space-y-3">
                    {bookFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-lg text-lighter"
                      >
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center mb-10">
                <span className="text-accent">What Educators</span>
                <span className="text-lighter"> Are Saying</span>
              </h2>

              <RandomTestimonialsShop />
            </div>

            {/* Products Section */}
            <div className="mt-20 space-y-8">
              <h2 className="text-3xl font-bold text-center">
                <span className="text-accent">Available</span>
                <span className="text-lighter"> Products</span>
              </h2>

              {/* Products Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Product 1: Teacher Gamer Handbook (PDF) */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover}
                      alt="Teacher Gamer Handbook (PDF)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-4 text-center text-lighter">
                      Teacher Gamer Handbook (PDF)
                    </h3>
                    <p className="text-2xl font-bold text-center mb-4 text-lighter">
                      $29.99 CAD
                    </p>
                    <Button
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                      onClick={() => handleCheckout("handbook")}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "ADD TO CART"
                      )}
                    </Button>
                  </div>
                </div>

                {/* Product 2: Teacher Gamer Handbook (Softcover / Hardcover) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover2}
                      alt="Teacher Gamer Handbook (Softcover / Hardcover)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      Teacher Gamer Handbook (Softcover / Hardcover)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        Starting From:
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
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 3: Teacher Gamer Screen (Landscape) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover3}
                      alt="Teacher Gamer Screen (Landscape)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      Teacher Gamer Screen (Landscape)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-lighter">
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a
                        href="https://www.drivethrurpg.com/pt/product/364211/teacher-gamer-screen-landscape"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Product 4: Teacher Gamer Screen (Portrait) - External Link */}
                <div className="backdrop-blur-sm rounded-xl overflow-hidden flex flex-col bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]">
                  <div className="relative aspect-3/4 w-full">
                    <Image
                      src={MEDIA.assets.bookCover4}
                      alt="Teacher Gamer Screen (Portrait)"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2 text-center text-lighter">
                      Teacher Gamer Screen (Portrait)
                    </h3>
                    <div className="text-center mb-4">
                      <p className="text-sm mb-1 text-light">
                        Starting From:
                      </p>
                      <p className="text-2xl font-bold text-lighter">
                        $4.99 USD
                      </p>
                    </div>
                    <Button
                      asChild
                      className="w-full font-bold mt-auto transition-all duration-300 bg-accent text-background hover:bg-accent-light"
                    >
                      <a
                        href="https://www.drivethrurpg.com/product/364214/TeacherGamer-Screen-portrait"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BUY NOW
                        <ExternalLink className="w-4 h-4 ml-2" />
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
                        alt="Hero Workshop"
                        fill
                        className="object-contain p-2"
                        sizes="96px"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-course-intro">
                        Partner Highlight
                      </p>
                      <h3 className="text-3xl font-bold text-lighter">
                        Level 1 TG: Intro to the Multiverse Certificate Course
                        at Hero Workshop, in-person Culver City, California
                      </h3>
                      <p className="max-w-2xl text-lg leading-relaxed text-lighter/80">
                        24-hour in-person accelerator course!
                        <span className="my-3 block h-px w-32 bg-course-intro/60" />
                        <strong className="block text-2xl md:text-3xl font-bold text-lighter">
                          August 9, 15, 16, 2026.
                        </strong>
                        <span className="mt-1 block text-xl font-semibold text-course-intro">
                          (8:30am - 5:15pm)
                        </span>
                        <span className="mt-3 block">
                          We are teaming up with Hero Workshop to bring the
                          Teacher-Gamer Revolution to the Los Angeles education
                          community.
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-lighter/75">
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-course-intro" />
                          Story-led learning
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-course-intro" />
                          Creative facilitation
                        </span>
                        <span className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-course-intro" />
                          Partner spotlight
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 space-y-3 text-center">
                    <p className="text-3xl font-bold text-lighter">$450 USD</p>
                    <Button
                      size="lg"
                      className="text-lg font-bold px-10 py-6 bg-course-intro text-background hover:scale-105 transition-transform shadow-[0_0_30px_rgba(83,190,255,0.24)]"
                      onClick={() => handleCheckout("level1_workshop")}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        "Enroll Now"
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-accent">Ready to Get</span>
                <span className="text-lighter"> Started?</span>
              </h2>
              <p className="text-xl max-w-2xl mx-auto text-lighter">
                Explore our collection of educational resources designed to transform
                your classroom into an engaging learning adventure.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold px-12 py-6 transition-all duration-300 bg-accent text-background hover:bg-accent-light shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)]"
                onClick={() => handleCheckout("handbook")}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Get Started - Buy PDF
                  </>
                )}
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
