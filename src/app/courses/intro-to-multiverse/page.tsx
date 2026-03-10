"use client";

import { ArrowLeft, Book, CheckCircle, Clock, Quote, Star, Users } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

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
  "Downloadable resources and templates",
  "Certificate of completion",
];

const whatYouWillLearn = [
  {
    icon: Book,
    title: "RPG Foundations",
    description: "Master the basics of tabletop role-playing and storytelling",
  },
  {
    icon: Users,
    title: "Character Development",
    description: "Guide students through meaningful character creation",
  },
  {
    icon: CheckCircle,
    title: "Learning Integration",
    description: "Connect gaming mechanics to educational outcomes",
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
            href="/home"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/home";
              setTimeout(() => {
                const coursesSection =
                  document.getElementById("courses-section");
                if (coursesSection) {
                  coursesSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent"
              >
                <Star className="w-4 h-4" />
                <span className="text-sm font-semibold">Beginner Level</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Intro to Multiverse
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Get an introduction to how RPGs and the multiverse can drive
                adult readiness through PBL and SEL as we work through the 13
                Phases of Character Building.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-accent" />
                  <span>6-8 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Small group sessions</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="w-5 h-5 text-accent" />
                  <span>Self-paced learning</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-accent" />
                What Trainees Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-accent/20">
                  <p className="text-white/90 italic mb-3 leading-relaxed text-sm">
                    {`"Zach is incredibly patient and manages to break everything down into the manageable chunks each individual needs. He fosters a beautiful sense of belonging with the trainees."`}
                  </p>
                  <p className="text-accent font-semibold text-sm">— Beki Stoiber</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-accent/20">
                  <p className="text-white/90 italic mb-3 leading-relaxed text-sm">
                    {`"The way we create a character while learning is definitely unique... throughout the process, we not only develop a well-structured character but also gain valuable insights into SEL (Social Emotional Learning)."`}
                  </p>
                  <p className="text-accent font-semibold text-sm">— Eduardo Vancsek Andreoli</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-accent/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Begin Your Adventure?
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    Book a free 15-minute discovery call to learn how this training can transform your classroom. We'll find the right path for you.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      No commitment required
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-accent" />
                      15-minute call
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-accent" />
                      Personalized guidance
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    size="lg"
                    className="text-lg font-bold text-black px-10 py-6 bg-accent hover:scale-105 transition-transform"
                    {...calProps}
                  >
                    Enroll Now
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-accent/20">
                      <Icon className="w-6 h-6 text-accent" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-accent"
                      />
                      <span className="text-white/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Course Curriculum */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Course Curriculum
              </h2>
              <div className="space-y-4">
                {[
                  {
                    module: "Module 1",
                    title: "Introduction to RPGs in Education",
                    lessons: 5,
                  },
                  {
                    module: "Module 2",
                    title: "The 13 Phases of Character Building",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Project-Based Learning Integration",
                    lessons: 6,
                  },
                  {
                    module: "Module 4",
                    title: "Social-Emotional Learning Through Gaming",
                    lessons: 7,
                  },
                ].map((module) => (
                  <div
                    key={module.module}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-semibold mb-1 text-accent"
                        >
                          {module.module}
                        </p>
                        <h3 className="text-xl font-bold text-white">
                          {module.title}
                        </h3>
                      </div>
                      <span className="text-white/60 text-sm">
                        {module.lessons} lessons
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-xl p-8 border border-accent/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join hundreds of educators who are transforming their classrooms
                through game-based learning.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-black px-12 py-6 bg-accent"
                {...calProps}
              >
                Enroll in Intro to Multiverse
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
