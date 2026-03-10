"use client";

import {
  ArrowLeft,
  Calendar,
  Clock,
  Globe,
  MapPin,
  Sparkles,
  Star,
  Ticket,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { MEDIA } from "@/lib/media";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

type Workshop = {
  id: string;
  title: string;
  location: string;
  city: string;
  country: string;
  flag: string;
  date: string;
  time: string;
  spotsLeft: number;
  totalSpots: number;
  description: string;
  tags: string[];
  featured?: boolean;
};

const upcomingWorkshops: Workshop[] = [
  {
    id: "ws-1",
    title: "RPG Fundamentals for Educators",
    location: "Community Learning Hub",
    city: "Vancouver",
    country: "Canada",
    flag: "🇨🇦",
    date: "March 22, 2026",
    time: "9:00 AM – 4:00 PM PST",
    spotsLeft: 8,
    totalSpots: 20,
    description:
      "A full-day hands-on workshop where you'll learn the foundations of running RPGs in your classroom. Leave with a ready-to-use session plan.",
    tags: ["Beginner Friendly", "Full Day", "Hands-On"],
    featured: true,
  },
  {
    id: "ws-2",
    title: "Character Building & SEL Integration",
    location: "Education Innovation Centre",
    city: "Toronto",
    country: "Canada",
    flag: "🇨🇦",
    date: "April 5, 2026",
    time: "10:00 AM – 3:00 PM EST",
    spotsLeft: 12,
    totalSpots: 25,
    description:
      "Discover how the 13 Phases of Character Building develop social-emotional skills. Practice facilitation techniques with fellow educators.",
    tags: ["SEL Focus", "Half Day", "Interactive"],
  },
  {
    id: "ws-3",
    title: "World Building Masterclass",
    location: "Espaço Educativo Criativo",
    city: "São Paulo",
    country: "Brazil",
    flag: "🇧🇷",
    date: "April 19, 2026",
    time: "9:00 AM – 5:00 PM BRT",
    spotsLeft: 5,
    totalSpots: 15,
    description:
      "An advanced workshop for educators ready to create their own campaign worlds. Build immersive narratives tied to your curriculum.",
    tags: ["Advanced", "Full Day", "Portuguese"],
  },
  {
    id: "ws-4",
    title: "Game-Based Learning Summit",
    location: "Teachers' Resource Center",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    date: "May 10, 2026",
    time: "10:00 AM – 4:00 PM GMT",
    spotsLeft: 18,
    totalSpots: 30,
    description:
      "A collaborative summit bringing together educators to share best practices in RPG-based learning. Includes networking lunch and resource pack.",
    tags: ["Summit", "Networking", "All Levels"],
  },
  {
    id: "ws-5",
    title: "Intro to Tabletop RPGs in Schools",
    location: "District Education Office",
    city: "Auckland",
    country: "New Zealand",
    flag: "🇳🇿",
    date: "May 24, 2026",
    time: "9:30 AM – 2:30 PM NZST",
    spotsLeft: 15,
    totalSpots: 20,
    description:
      "Perfect for educators curious about RPGs. Experience a live demo session, learn the basics, and plan your first classroom adventure.",
    tags: ["Beginner Friendly", "Half Day", "Live Demo"],
  },
  {
    id: "ws-6",
    title: "RPG & Literacy: Storytelling That Teaches",
    location: "Cape Town Convention Centre",
    city: "Cape Town",
    country: "South Africa",
    flag: "🇿🇦",
    date: "June 7, 2026",
    time: "9:00 AM – 3:00 PM SAST",
    spotsLeft: 20,
    totalSpots: 25,
    description:
      "Explore how collaborative storytelling through RPGs can boost reading, writing, and critical thinking in learners of all ages.",
    tags: ["Literacy", "Storytelling", "All Levels"],
  },
];

const filterOptions = ["All", "Beginner Friendly", "Advanced", "Full Day", "Half Day"] as const;

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function WorkshopsPage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
  }, []);

  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredWorkshops =
    activeFilter === "All"
      ? upcomingWorkshops
      : upcomingWorkshops.filter((ws) => ws.tags.includes(activeFilter));

  return (
    <main className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.courses}')` }}
      />
      <div className="fixed inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 pt-6 pb-2">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-10 pb-16">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/30">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">
                In-Person Events
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              <span className="text-accent">Workshops</span> Near You
            </h1>

            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join us in person for hands-on, immersive workshops. Learn
              game-based teaching methods side-by-side with fellow educators in
              your region.
            </p>

            {/* Quick stats */}
            <div className="flex items-center justify-center gap-8 pt-4 flex-wrap">
              <div className="flex items-center gap-2 text-white/70">
                <Globe className="w-5 h-5 text-accent" />
                <span>6 Countries</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-5 h-5 text-accent" />
                <span>6 Upcoming Events</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Users className="w-5 h-5 text-accent" />
                <span>500+ Educators Trained</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-5xl mx-auto">
            <div className="flex gap-2 flex-wrap justify-center">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeFilter === filter
                      ? "bg-accent text-black"
                      : "bg-white/10 text-white/70 border border-white/20 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto space-y-6">
            {filteredWorkshops.length === 0 && (
              <div className="text-center py-16">
                <p className="text-white/50 text-lg">
                  No workshops match that filter. Try another category.
                </p>
              </div>
            )}

            {filteredWorkshops.map((ws) => (
              <div
                key={ws.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 hover:bg-white/8 group ${
                  ws.featured
                    ? "border-accent/40 shadow-[0_0_30px_var(--color-accent-glow)]"
                    : "border-white/15 hover:border-white/30"
                }`}
              >
                {ws.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-accent text-black text-xs font-extrabold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      FEATURED
                    </div>
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                    {/* Left: Date block */}
                    <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-2 lg:min-w-[140px] shrink-0">
                      <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                        <span className="text-3xl">{ws.flag}</span>
                        <div>
                          <p className="text-accent font-bold text-lg leading-tight">
                            {ws.date}
                          </p>
                          <div className="flex items-center gap-1.5 text-white/50 text-sm mt-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{ws.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center: Details */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {ws.title}
                      </h3>

                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span>
                          {ws.location} — {ws.city}, {ws.country}
                        </span>
                      </div>

                      <p className="text-white/70 leading-relaxed">
                        {ws.description}
                      </p>

                      <div className="flex gap-2 flex-wrap pt-1">
                        {ws.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full bg-white/10 text-white/60 text-xs font-medium border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: CTA */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 lg:min-w-[160px] shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-white/40" />
                        <span
                          className={`text-sm font-semibold ${
                            ws.spotsLeft <= 5
                              ? "text-red-400"
                              : ws.spotsLeft <= 10
                                ? "text-amber-400"
                                : "text-white/50"
                          }`}
                        >
                          {ws.spotsLeft} spots left
                        </span>
                      </div>
                      <Button
                        size="lg"
                        className="font-bold px-8 bg-accent text-black hover:bg-accent-light transition-all duration-300"
                        {...calProps}
                      >
                        <Ticket className="w-4 h-4 mr-2" />
                        Register
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Spots progress bar */}
                <div className="h-1 bg-white/5">
                  <div
                    className="h-full bg-accent/40 transition-all duration-500"
                    style={{
                      width: `${((ws.totalSpots - ws.spotsLeft) / ws.totalSpots) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Want a Workshop in Your City? */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-accent/20 text-center space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/15 flex items-center justify-center">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Want a Workshop in{" "}
                <span className="text-accent">Your City</span>?
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
                We're expanding to new locations all the time. If you'd like to
                host or request a Teacher Gamer workshop in your area, let us
                know!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button
                  size="lg"
                  className="text-lg font-bold px-10 py-6 bg-accent text-black hover:bg-accent-light"
                  {...calProps}
                >
                  Request a Workshop
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg font-bold px-10 py-6 border-white/30 text-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
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
