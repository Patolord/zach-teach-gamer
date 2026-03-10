"use client";

import {
  ArrowLeft,
  Award,
  Book,
  CheckCircle,
  Clock,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

const courseFeatures = [
  "Design comprehensive campaign worlds",
  "Create original stories, creatures, and magic systems",
  "Develop unique technology and world mechanics",
  "Implement your campaign in real classrooms",
  "Advanced world-building frameworks",
  "Student engagement optimization strategies",
  "Cross-curricular integration techniques",
  "Level 2 Teacher Gamer Certification",
];

const whatYouWillLearn = [
  {
    icon: Sparkles,
    title: "World Creation",
    description: "Build immersive, engaging campaign worlds from scratch",
  },
  {
    icon: Book,
    title: "Story Crafting",
    description: "Develop compelling narratives and plot structures",
  },
  {
    icon: Award,
    title: "Level 2 Certification",
    description: "Demonstrate mastery through your own campaign",
  },
];

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level2WorldBuilderPage() {
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
              <div className="flex gap-3 flex-wrap">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/20 border border-primary-light/30 text-primary-light"
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">Advanced Level</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light/10 border border-primary-light/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Certification Course
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 2 TG World Builder Certificate
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Build & implement your own campaign world. Uncharted territory:
                New stories, creatures, magic & tech.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-primary-light" />
                  <span>14-16 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-primary-light" />
                  <span>Cohort-based learning</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-primary-light" />
                  <span>Level 2 Certification</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-primary-light" />
                What World Builders Are Saying
              </h2>
              <div className="grid md:grid-cols-1 gap-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-primary-light/20">
                  <p className="text-white/90 italic mb-3 leading-relaxed text-sm">
                    {`"I have never had a training experience like this before. The integration of SEL into the lessons and the way broader discussions naturally arise from the simple goal of creating a character make this course truly different. I believe this approach is highly important because it helps us draw parallels between the emotional and social aspects of our lives and our characters' stories, making everything more fluid and offering new perspectives."`}
                  </p>
                  <p className="text-primary-light font-semibold text-sm">— Eduardo Vancsek Andreoli</p>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-primary-light/10 backdrop-blur-sm rounded-xl p-6 border border-primary-light/30">
              <p className="text-white/90">
                <strong className="text-primary-light">Prerequisite:</strong>{" "}
                Level 1 TG Space-Holder Certificate or equivalent experience
              </p>
            </div>

            {/* CTA */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-primary-light/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 via-transparent to-primary-light/10 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Build Your World?
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    Book a free 15-minute discovery call to explore how World Builder certification can elevate your practice. Let's design your next step.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-primary-light" />
                      No commitment required
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary-light" />
                      15-minute call
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-primary-light" />
                      Project-based certification
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    size="lg"
                    className="text-lg font-bold text-white px-10 py-6 bg-primary-light hover:scale-105 transition-transform"
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-primary-light/20">
                      <Icon className="w-6 h-6 text-primary-light" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-primary-light"
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
                    title: "World-Building Foundations",
                    lessons: 7,
                  },
                  {
                    module: "Module 2",
                    title: "Creating Creatures & Characters",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Magic Systems & Technology",
                    lessons: 9,
                  },
                  {
                    module: "Module 4",
                    title: "Story Arc Development",
                    lessons: 6,
                  },
                  {
                    module: "Module 5",
                    title: "Campaign Implementation",
                    lessons: 7,
                  },
                  {
                    module: "Module 6",
                    title: "Certification Project",
                    lessons: 4,
                  },
                ].map((module) => (
                  <div
                    key={module.module}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-semibold mb-1 text-primary-light"
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
            <div className="bg-gradient-to-br from-primary-light/20 to-transparent rounded-xl p-8 border border-primary-light/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Build Your World?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Create an unforgettable campaign that will engage and inspire
                your students.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-primary-light"
                {...calProps}
              >
                Enroll in Level 2 Certification
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
