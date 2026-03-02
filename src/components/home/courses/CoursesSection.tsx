"use client";

import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import EletricCard from "./EletricCard";

// Using global CSS theme variables

interface CoursesSectionProps {
  sectionIndex?: number;
}

export default function CoursesSection({ sectionIndex }: CoursesSectionProps) {
  const courses = [
    {
      title: "Intro to Multiverse",
      description:
        "Get an introduction to how RPGs and the multiverse can drive adult readiness through PBL and SEL as we work through the 13 Phases of Character Building.",
      color: "var(--color-accent)",
      href: "/courses/intro-to-multiverse",
      diceImage: "/dices/dice-blue.webp",
    },
    {
      title: "Level 1 TG Space-Holder Certificate Course",
      description:
        "Learn to move from out-game character development to in-game role-playing and run a pilot to get teacher gamer level one certified.",
      color: "var(--color-secondary)",
      badge: "BEST VALUE",
      href: "/courses/level-1-space-holder",
      diceImage: "/dices/dice-purple.webp",
    },
    {
      title: "Level 2 TG World Builder Certificate",
      description:
        "Build & implement your own campaign world. Uncharted territory: New stories, creatures, magic & tech",
      color: "var(--color-primary-light)",
      href: "/courses/level-2-world-builder",
      diceImage: "/dices/dice-green.webp",
    },
    {
      title: "Level 3 TG Planes Walker Certificate Course",
      description:
        "Integrate your own RPGs campaign into your local school system's learning objectives with guidance",
      color: "var(--color-secondary-dark)",
      href: "/courses/level-3-planes-walker",
      diceImage: "/dices/dice-yellow.webp",
    },
  ];

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
          {courses.map((course) => (
            <EletricCard
              key={course.title}
              title={course.title}
              description={course.description}
              color={course.color}
              badge={course.badge}
              href={course.href}
              diceImage={course.diceImage}
            />
          ))}
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
