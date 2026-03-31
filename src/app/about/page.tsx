"use client";

import { ArrowLeft, Award, BookOpen, Heart, Target, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";

const values = [
  {
    icon: Heart,
    title: "Student-Centered",
    description:
      "Youth success is our primary focus, creating safe spaces for growth and discovery",
  },
  {
    icon: BookOpen,
    title: "Narrative Learning",
    description:
      "Teaching critical thinking through storytelling and collaborative role-play",
  },
  {
    icon: Users,
    title: "Social-Emotional Growth",
    description:
      "Building life skills, empathy, and emotional intelligence through gaming",
  },
  {
    icon: Target,
    title: "Purposeful Play",
    description:
      "Transforming education through intentional, meaningful game experiences",
  },
];

export default function AboutPage() {
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
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-lighter/80 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 md:py-10">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Page Title */}
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="text-lighter">About </span>
                <span className="text-accent">Teacher-Gamer</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
            </div>

            {/* Zach Reznichek Section */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Photo */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-4 border-primary-light/20 shadow-2xl">
                <Image
                  src={MEDIA.about.zachProfile}
                  alt="Zach Reznichek"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    <span className="text-accent">Zach </span>
                    <span className="text-lighter">Reznichek</span>
                  </h2>
                  <p className="text-xl text-secondary italic">
                    MA Education, .b Mindfulness certified
                  </p>
                </div>

                <div className="space-y-4 text-lighter/90 leading-relaxed">
                  <p>
                    Life-skills innovator, mindfulness coach, teacher-gamer.
                    Zach has figured out how to combine game theory and literary
                    criticism… into social emotional learning through
                    role-playing games with his Masters in Education, teacher
                    training and producing artists.
                  </p>

                  <p>
                    "The satisfaction of youth success is second to none. I
                    shared my love of role-playing games with kids in schools,
                    homeschools, summer camps and youth workshops to glowing
                    success. For the last 5 years, I have been honing this
                    socio-emotional life-skills curriculum to be ready to share
                    with the world."
                  </p>

                  <p>
                    "We are all in this journey together to make the world more
                    sustainable, conscious and connected. Bringing RPGs into
                    education is teaching narrative and critical thinking, while
                    refereeing collaboration and risk taking. Boom! It is so
                    fun!"
                  </p>
                </div>

                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-background font-semibold px-8"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/zreznichek/" target="_blank" rel="noopener noreferrer">More About Zach</a>
                </Button>
              </div>
            </div>

            {/* Social Emotional Learning Section */}
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold leading-tight">
                    <span className="text-accent">Social Emotional Learning</span>
                    <span className="text-lighter"> through Role-Playing Games</span>
                  </h2>

                  <div className="space-y-4 text-lighter/90 leading-relaxed">
                    <p>
                      Although millions of people have played role-playing
                      games, to put them into cognitive, psychological, social,
                      mindful and educational terms is to begin to run along the
                      cutting edge of transformative opportunities that are, as
                      yet, barely measured.
                    </p>

                    <p>
                      For the last 10 years, Zach has spent countless hours with
                      students and observed the need for more offscreen learning
                      opportunities. What he found with role playing games, is
                      that students have the freedom to propose ideas, disagree,
                      and take a stand when they wouldn't normally feel
                      comfortable, because, as their character, they do not have
                      to uphold the social dictates of their friends – in fact
                      the rules of role-playing require they uphold their
                      character's values and motivations.
                    </p>

                    <p>
                      Students can literally try out what it feels like to go
                      against everything they stand for as a person, because
                      they have aligned their character's personality arc to be
                      completely different from their own. And why? Just to see
                      what happens, or how it feels!
                    </p>
                  </div>
                </div>

                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-primary-light/20 shadow-2xl">
                  <Image
                    src={MEDIA.about.classroomRpg}
                    alt="Students learning through role-playing games"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Additional Content */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20">
                <p className="text-lighter/90 leading-relaxed text-lg">
                  This is teaching role-playing games as a skillset where
                  students can learn to accept, process and move on from defeat
                  and be gracious winners socially. Without telling their
                  classmates or teacher how they should feel, or hiding it in a
                  container, teachers can facilitate this implicit learning
                  through careful observation and space holding.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-lighter">Our </span>
                  <span className="text-accent">Core Values</span>
                </h2>
                <p className="text-xl text-secondary/90 max-w-3xl mx-auto">
                  The principles that guide our approach to transformative
                  education
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {values.map(({ icon: Icon, title, description }) => (
                  <div
                    key={title}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-primary-light/20 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-accent mb-2">
                          {title}
                        </h3>
                        <p className="text-lighter/90">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-subtle to-accent/5 rounded-2xl p-12 border border-primary-light/30 text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Join Our Community</span>
              </div>

              <h2 className="text-4xl font-bold">
                <span className="text-accent">Ready to Transform</span>
                <span className="text-lighter"> Education?</span>
              </h2>

              <p className="text-xl text-lighter/90 max-w-2xl mx-auto">
                Discover how role-playing games can revolutionize learning in
                your classroom or educational setting.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-background font-semibold px-8"
                  asChild
                >
                  <Link href="/home#courses-section">Explore Our Courses</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-light/30 text-lighter hover:bg-white/10 font-semibold px-8"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-background font-semibold px-8"
                  asChild
                >
                  <Link href="/shop">Get the Hand Book</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
      </div>
    </main>
  );
}
