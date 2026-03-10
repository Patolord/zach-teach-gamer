"use client";

import {
  ArrowLeft,
  Award,
  CheckCircle,
  Clock,
  GraduationCap,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

const courseFeatures = [
  "Align RPG campaigns with district learning standards",
  "Navigate educational policy and approval processes",
  "Build administrator buy-in and support",
  "Create cross-curricular learning connections",
  "Develop assessment and evaluation frameworks",
  "Scale RPG programs within your district",
  "Mentor other educators in RPG integration",
  "Master Teacher Gamer Certification",
];

const whatYouWillLearn = [
  {
    icon: GraduationCap,
    title: "Standards Alignment",
    description: "Map RPG elements to educational learning objectives",
  },
  {
    icon: Users,
    title: "Program Scaling",
    description: "Expand RPG integration across multiple classrooms",
  },
  {
    icon: Award,
    title: "Master Certification",
    description: "Achieve the highest level of Teacher Gamer recognition",
  },
];

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level3PlanesWalkerPage() {
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-dark/20 border border-secondary-dark/30 text-secondary-dark"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm font-semibold">Master Level</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-dark/10 border border-secondary-dark/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Master Certification
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 3 TG Planes Walker Certificate Course
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Integrate your own RPGs campaign into your local school system's
                learning objectives with guidance.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-secondary-dark" />
                  <span>16-20 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-secondary-dark" />
                  <span>Mentored implementation</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-secondary-dark" />
                  <span>Master Certification</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}

            {/* Prerequisites */}
            <div className="bg-secondary-dark/10 backdrop-blur-sm rounded-xl p-6 border border-secondary-dark/30">
              <p className="text-white/90">
                <strong className="text-secondary-dark">Prerequisite:</strong>{" "}
                Level 2 TG World Builder Certificate and at least one year of
                campaign experience
              </p>
            </div>

            {/* CTA */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-secondary-dark/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-dark/5 via-transparent to-secondary-dark/10 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Walk Between Worlds?
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    Book a free 15-minute discovery call to discuss the Planes Walker path. This is the highest level of mastery — let's see if you're ready.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-secondary-dark" />
                      No commitment required
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-secondary-dark" />
                      15-minute call
                    </span>
                    <span className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-secondary-dark" />
                      1-on-1 mentorship included
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    size="lg"
                    className="text-lg font-bold text-white px-10 py-6 bg-secondary-dark hover:scale-105 transition-transform"
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-secondary-dark/20">
                      <Icon className="w-6 h-6 text-secondary-dark" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-secondary-dark"
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
                    title: "Understanding Educational Standards",
                    lessons: 6,
                  },
                  {
                    module: "Module 2",
                    title: "Standards-Aligned Campaign Design",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Building Administrative Support",
                    lessons: 5,
                  },
                  {
                    module: "Module 4",
                    title: "Assessment & Documentation",
                    lessons: 7,
                  },
                  {
                    module: "Module 5",
                    title: "Program Implementation & Scaling",
                    lessons: 9,
                  },
                  {
                    module: "Module 6",
                    title: "Mentoring Future Teacher Gamers",
                    lessons: 6,
                  },
                  {
                    module: "Module 7",
                    title: "Master Certification Capstone",
                    lessons: 5,
                  },
                ].map((module) => (
                  <div
                    key={module.module}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p
                          className="text-sm font-semibold mb-1 text-secondary-dark"
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
            <div className="bg-gradient-to-br from-secondary-dark/20 to-transparent rounded-xl p-8 border border-secondary-dark/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Become a Master Teacher Gamer?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Lead the transformation of education in your school district
                through game-based learning.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-secondary-dark"
                {...calProps}
              >
                Enroll in Level 3 Certification
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
