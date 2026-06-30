"use client";

import { ArrowLeft, Book, CheckCircle, Clock, Star, Users } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";
import RandomTestimonialsGrid from "@/components/testimonials/RandomTestimonialsGrid";

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

const courseFeatures = [
  "Introduction to Role-Playing Games (RPGs) fundamentals",
  "Understanding the multiverse concept in education",
  "Project-Based Learning (PBL) integration strategies",
  "Social-Emotional Learning (SEL) through gaming",
  "Complete guide through the 13 Phases of Character Building",
  "Practical exercises and activities",
  "A PDF copy of the Teacher-Gamer Handbook",
  "Certificate of completion",
];

const whatYouWillLearn = [
  {
    icon: Book,
    title: "TTRPG Foundation & LARPing",
    description:
      "Master the basics of introducing tabletop role-playing, co-storytelling, and live action role-playing (LARP)",
  },
  {
    icon: Users,
    title: "Character Development",
    description:
      "Guide students through meaningful character creation and game-based learning (GBL)",
  },
  {
    icon: CheckCircle,
    title: "Learning Integration",
    description:
      "Connect gaming mechanics and project-based learning (PBL) to educational outcomes and social-emotional learning (SEL)",
  },
];

export default function IntroToMultiversePage() {
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
            Back to Courses
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-course-intro/20 border border-course-intro/30 text-course-intro"
              >
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Beginner Level</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 1 TG: Intro to the Multiverse Certificate Course
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Get an introduction to how RPGs and the multiverse can drive
                adult readiness through PBL and SEL as we work through the 13
                Phases of Character Building. Learn to move from out-game
                character development to in-game role-playing.
              </p>

              <p className="text-lg text-white/80 leading-relaxed max-w-3xl">
                Intro to the Multiverse - Level 1 Teacher-Gamer is a
                beginner-friendly, hands-on introduction to the Teacher-Gamer
                Method — perfect for DMs, teachers, therapists, youth workers,
                and parents who want to bring tabletop role-playing games into
                learning spaces safely, confidently, and creatively.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-course-intro" />
                  <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-course-intro" />
                  <span>Small group sessions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="w-5 h-5 text-course-intro" />
                  <span>In-person & online courses available</span>
                </div>
              </div>
            </div>

            <RandomTestimonialsGrid
              count={2}
              tags={["intro-multiverse", "training"]}
              title="What Trainees Are Saying"
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
                    Level 1 TG: Intro to the Multiverse Certificate Course at
                    Hero Workshop, in-person Culver City, California
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    24-hour in-person accelerator course designed for educators,
                    facilitators, and creative guides ready to step into the
                    Teacher-Gamer world.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-course-intro" />
                      August 9, 15, 16, 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-course-intro" />
                      8:30am - 5:15pm
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-course-intro" />
                      Culver City, California
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg font-bold text-black px-10 py-6 bg-course-intro hover:scale-105 transition-transform"
                  >
                    <Link href="/shop">Enroll Now</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {whatYouWillLearn.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-course-intro/20">
                      <Icon className="w-6 h-6 text-course-intro" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {title}
                    </h3>
                    <p className="text-white/80">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Features */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Course Includes</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <ul className="grid md:grid-cols-2 gap-4">
                  {courseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 shrink-0 text-course-intro"
                      />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {[
                  {
                    module: "Theory meets Practicum",
                    title: null,
                    lessons: 6,
                    bullets: [
                      "How to introduce running safe SEL (social emotional learning) tabletop role-playing game (TTRPG) sessions for youth and adults",
                      "How to ramp up and co-world build with players from scratch",
                      "How to turn gameplay into SEL, collaboration, and real learning outcomes",
                      "How to facilitate groups with confidence (even if you're new to DMing)",
                      "How to co-design quests, challenges, and story arcs that support growth",
                      "How to bring TTRPGs into classrooms, homeschools, therapy, and camps",
                    ],
                  },
                  {
                    module: "Hands-on creative skills you'll practice",
                    title: null,
                    lessons: 6,
                    bullets: [
                      "The 13-Phase Character Build",
                      "Role-play gamify regular tabletop games",
                      "The Teacher-Gamer Skillset + How-To-Play Skillset",
                      "Terrain building basics (10 phases)",
                      "Miniature painting",
                      "Kinaesthetic activities for embodied learning",
                    ],
                  },
                ].map((module) => (
                  <div
                    key={module.module}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-lg md:text-xl font-semibold mb-2 text-course-intro"
                        >
                          {module.module}
                        </p>
                        {module.title ? (
                          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            {module.title}
                          </h3>
                        ) : null}
                      </div>
                      <span className="text-white/60 text-sm">
                        {module.lessons} lessons
                      </span>
                    </div>
                    {"bullets" in module ? (
                      <ul className="mt-5 space-y-4">
                        {module.bullets.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-course-intro" />
                            <span className="text-xl md:text-2xl font-bold leading-tight text-white">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-course-intro/20 to-transparent rounded-xl p-8 border border-course-intro/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join hundreds of educators who are transforming their classrooms
                through game-based learning.
              </p>
              <Button
                asChild
                size="lg"
                className="text-lg font-bold text-black px-12 py-6 bg-course-intro"
              >
                <Link href="/shop">Enroll in Intro to Multiverse</Link>
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
