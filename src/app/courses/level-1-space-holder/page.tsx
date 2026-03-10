"use client";

import {
  ArrowLeft,
  Award,
  Book,
  CheckCircle,
  Clock,
  Quote,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

const courseFeatures = [
  "Master out-game character development techniques",
  "Transition seamlessly from character building to role-playing",
  "Run your first pilot session with confidence",
  "Earn Teacher Gamer Level 1 Certification",
  "Comprehensive session planning guides",
  "Behavior management strategies for game sessions",
  "Assessment and evaluation tools",
  "Access to exclusive educator community",
];

const whatYouWillLearn = [
  {
    icon: Users,
    title: "Space-Holding Skills",
    description: "Create safe, engaging environments for student-led play",
  },
  {
    icon: Book,
    title: "Session Management",
    description: "Plan and facilitate effective RPG sessions",
  },
  {
    icon: Award,
    title: "Level 1 Certification",
    description: "Complete your pilot and earn professional recognition",
  },
];

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function Level1SpaceHolderPage() {
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary"
                >
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">BEST VALUE</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-white">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    Certification Course
                  </span>
                </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Level 1 TG Space-Holder Certificate Course
              </h1>

              <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
                Learn to move from out-game character development to in-game
                role-playing and run a pilot to get teacher gamer level one
                certified.
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>10-12 weeks</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>Cohort-based learning</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Award className="w-5 h-5 text-secondary" />
                  <span>Level 1 Certification</span>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <Quote className="w-6 h-6 text-secondary" />
                What Certified Educators Are Saying
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-secondary/20">
                  <p className="text-white/90 italic mb-3 leading-relaxed text-sm">
                    {`"I really like the methods used so far. The way the discussions about various topics naturally emerge from simple concepts of character and world-building is highly effective for learning. I have received all the support I need. Zach is an excellent teacher, and everyone studying alongside me has been great as well."`}
                  </p>
                  <p className="text-secondary font-semibold text-sm">— Eduardo Vancsek Andreoli</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-secondary/20">
                  <p className="text-white/90 italic mb-3 leading-relaxed text-sm">
                    {`"The course provides a safe space where we can openly discuss emerging topics, be ourselves, and let emotions flow. We experience firsthand how emotional and social care is crucial and powerful for learning, as it is an integral part of the lessons."`}
                  </p>
                  <p className="text-secondary font-semibold text-sm">— Eduardo Vancsek Andreoli</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-secondary/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-secondary/10 pointer-events-none" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Ready to Earn Your Certification?
                  </h3>
                  <p className="text-white/70 mb-5 leading-relaxed">
                    Book a free 15-minute discovery call to discuss your certification journey. We'll map out the best path for your goals.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-white/60">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      No commitment required
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-secondary" />
                      15-minute call
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-secondary" />
                      Includes certification
                    </span>
                  </div>
                </div>
                <div className="shrink-0">
                  <Button
                    size="lg"
                    className="text-lg font-bold text-white px-10 py-6 bg-secondary hover:scale-105 transition-transform"
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
                    <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center bg-secondary/20">
                      <Icon className="w-6 h-6 text-secondary" />
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
                        className="w-5 h-5 mt-0.5 shrink-0 text-secondary"
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
                    title: "Advanced Character Development",
                    lessons: 6,
                  },
                  {
                    module: "Module 2",
                    title: "Facilitating In-Game Role-Playing",
                    lessons: 8,
                  },
                  {
                    module: "Module 3",
                    title: "Space-Holding Techniques",
                    lessons: 7,
                  },
                  {
                    module: "Module 4",
                    title: "Running Your Pilot Session",
                    lessons: 5,
                  },
                  {
                    module: "Module 5",
                    title: "Certification Preparation",
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
                          className="text-sm font-semibold mb-1 text-secondary"
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
            <div className="bg-gradient-to-br from-secondary/20 to-transparent rounded-xl p-8 border border-secondary/30 text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Ready to Get Certified?
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Join the next cohort and earn your Level 1 Teacher Gamer
                Certification.
              </p>
              <Button
                size="lg"
                className="text-lg font-bold text-white px-12 py-6 bg-secondary"
                {...calProps}
              >
                Enroll in Level 1 Certification
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
