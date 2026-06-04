"use client";

import { MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import { homeCourseCards } from "@/data/course-themes";
import EletricCard from "./EletricCard";

interface CoursesSectionProps {
  sectionIndex?: number;
}

export default function CoursesSection({ sectionIndex }: CoursesSectionProps) {

  return (
    <section
      id="courses-section"
      data-scroll-section={sectionIndex}
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center py-40"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
    >
      {/* 40% black overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)", left: "-103px", top: "-5px" }}
      />

      {/* Top horizontal transition element */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)"
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--color-secondary-soft), transparent)"
        }}
      />

      <div className="container mx-auto px-8 relative" style={{ zIndex: 10 }}>
        <div data-animate className="text-center mb-16">
          <h2 className="text-4xl font-semibold tracking-tight mb-4 text-center inline-block">
            <ShinyText
              speed={3}
              delay={1}
              color="var(--color-accent)"
              shineColor="var(--color-white)"
              spread={30}
              yoyo
            >
              Choose your next Adventure!
            </ShinyText>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mt-4" style={{ color: "var(--color-lighter)" }}>
            Step into the Teacher-Gamer multiverse—an interconnected set of storyworlds and training paths that help educators use role-playing games as metaphors for real-world learning. Each adventure equips you with new tools, new perspectives, and new ways to bring collaborative storytelling into your classroom.
          </p>
        </div>
        <div
          data-animate-stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {homeCourseCards.map((course) => (
            <EletricCard
              key={course.id}
              title={course.title}
              description={course.description}
              color={course.color}
              badge={course.badge}
              href={course.href}
              diceImage={course.diceImage}
            />
          ))}
        </div>

        {/* Workshops Banner */}
        <div className="max-w-7xl mx-auto mt-12">
          <Link
            href="/workshops"
            className="group relative block w-full rounded-2xl p-[2px] overflow-hidden transition-all duration-500 hover:scale-[1.01]"
            style={{
              background: "linear-gradient(135deg, var(--color-accent), var(--color-secondary), var(--color-accent-light), var(--color-primary-light), var(--color-accent))",
              backgroundSize: "300% 300%",
              animation: "shimmer 4s ease-in-out infinite",
            }}
          >
            <div className="relative w-full rounded-2xl px-4 sm:px-8 py-6 flex items-center justify-center backdrop-blur-sm text-center" style={{ backgroundColor: "rgba(26, 26, 31, 0.85)" }}>
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-balance" style={{ color: "var(--color-lighter)" }}>
                Teacher Gamers Tour 2026 &amp; Workshops Near You
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom horizontal transition element */}
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
    </section>
  );
}
