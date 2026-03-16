"use client";

import { ArrowRight, Quote, Shield, Star, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import ShopSectionCard from "../shop/ShopSectionCard";
import ShinyText from "@/components/ui/shinytext";

const features = [
  { icon: Shield, label: "Proven Method" },
  { icon: Users, label: "For All Classrooms" },
  { icon: Star, label: "Expert-Led Training" },
];

const testimonials = [
  {
    quote: "Zach is incredibly patient and manages to break everything down into the manageable chunks each individual needs. He fosters a beautiful sense of belonging with the trainees.",
    author: "Beki Stoiber",
  },
  {
    quote: "The way we create a character while learning is definitely unique... throughout the process, we not only develop a well-structured character but also gain valuable insights into SEL.",
    author: "Eduardo Vancsek Andreoli",
  },
  {
    quote: "This experience has been a wonderful journey of learning how to be a better teacher, not just a teacher-gamer. It is teaching me to pay attention to what students are saying and doing, and more importantly, what they are not saying and not doing.",
    author: "Reynaldo Barochelo Jr.",
  },
  {
    quote: "The course provides a safe space where we can openly discuss emerging topics, be ourselves, and let emotions flow. We experience firsthand how emotional and social care is crucial and powerful for learning.",
    author: "Eduardo Vancsek Andreoli",
  },
  {
    quote: "I have never had a training experience like this before. The integration of SEL into the lessons and the way broader discussions naturally arise from the simple goal of creating a character make this course truly different.",
    author: "Eduardo Vancsek Andreoli",
  },
];


const CombinedHeroSection = forwardRef<HTMLElement>((_props, ref) => {
  const [testimonial, setTestimonial] = useState(testimonials[0]);

  useEffect(() => {
    setTestimonial(testimonials[Math.floor(Math.random() * testimonials.length)]);
  }, []);

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
                Transform Your Classroom with{" "}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ 
                    backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-secondary) 50%, var(--color-accent) 100%)"
                  }}
                >
                  Educational RPGs
                </span>
              </ShinyText>
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--color-lighter)" }}
            >
              Learn the Teacher-Gamer method and bring role-playing games into
              your classroom. Engage students, build social-emotional skills,
              and create meaningful learning experiences through collaborative
              storytelling and purposeful play.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-lg px-8 transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-background)",
                  boxShadow: "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)",
                }}
                onClick={() => {
                  const coursesSection =
                    document.getElementById("courses-section");
                  if (coursesSection) {
                    coursesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent-light)";
                  e.currentTarget.style.boxShadow = "0 6px 30px var(--color-accent), 0 0 50px var(--color-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.boxShadow = "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)";
                }}
              >
                Explore Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-lg px-8 text-white transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  borderColor: "var(--color-primary-light)",
                  borderWidth: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-primary-subtle)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
                asChild
              >
                <Link href="/media">Watch How It Works</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon 
                    className="w-5 h-5" 
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span 
                    className="text-sm font-medium"
                    style={{ color: "var(--color-lighter)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="relative rounded-xl p-4 border backdrop-blur-sm max-w-xl"
              style={{
                backgroundColor: "rgba(26, 26, 31, 0.5)",
                borderColor: "var(--color-accent-glow)",
              }}
            >
              <Quote
                className="w-4 h-4 absolute top-3 left-3 opacity-40"
                style={{ color: "var(--color-accent)" }}
              />
              <p
                className="text-sm italic leading-relaxed pl-6"
                style={{ color: "var(--color-lighter)" }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p
                className="text-xs font-semibold mt-2 pl-6"
                style={{ color: "var(--color-accent)" }}
              >
                — {testimonial.author}
              </p>
            </div>
          </div>

          <div className="relative">
            <div 
              className="aspect-square overflow-hidden rounded-4xl shadow-2xl"
              style={{ 
                backgroundColor: "var(--color-white)",
                border: "4px solid var(--color-primary)",
                boxShadow: "0 25px 50px -12px var(--color-primary-glow), 0 0 60px var(--color-primary-subtle)"
              }}
            >
              <Image
                src={MEDIA.hero.image}
                alt="Children learning and playing safely in an educational environment"
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
            Scroll
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
            aria-label="Scroll down indicator"
            role="img"
          >
            <title>Scroll down</title>
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
                The Teacher-Gamer Handbook
              </ShinyText>
            </h1>

            <h2 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-lighter)" }}
            >
              Build literacy. Spark imagination. Empower learners. Transform
              classrooms into immersive adventures where students learn by
              playing, failing, and growing together.
            </h2>

            <ul 
              className="list-disc list-inside text-sm md:text-base space-y-2"
              style={{ color: "var(--color-lighter)" }}
            >
              <li>300 pages of creative strategies and lesson plans</li>
              <li>36 life skills through collaborative RPG experiences</li>
              <li>Designed for educators guiding 10+ year-old learners</li>
              <li>40+ hours of co-creative play and storytelling</li>
            </ul>

            <h2 
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--color-lighter)" }}
            >
              A complete framework to bring the power of role-playing into
              education.
            </h2>

            <Link href="/shop">
              <button
                type="button"
                className="self-start px-8 py-3 font-semibold rounded-full transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-accent)",
                  color: "var(--color-background)",
                  boxShadow: "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent-light)";
                  e.currentTarget.style.boxShadow = "0 6px 30px var(--color-accent), 0 0 50px var(--color-secondary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--color-accent)";
                  e.currentTarget.style.boxShadow = "0 4px 20px var(--color-accent-glow), 0 0 40px var(--color-secondary-soft)";
                }}
              >
                Get the Handbook
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom horizontal transition element - magical glow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to top, var(--color-secondary-soft), transparent)"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 right-0 h-px opacity-60"
          style={{
            background: "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)"
          }}
        />
      </div>
    </section>
  );
});

CombinedHeroSection.displayName = "CombinedHeroSection";

export default CombinedHeroSection;
