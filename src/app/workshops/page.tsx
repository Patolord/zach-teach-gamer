"use client";

import { ArrowLeft, CalendarDays, MapPin, Play, Star } from "lucide-react";
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

export default function WorkshopsPage() {
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
          </div>
        </div>

        {/* Featured Workshop */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-accent/30 overflow-hidden">
              <div className="relative w-full aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/3MFP4a4H37U"
                  title="Frontloading Life Skills During the 11–14 Window – ISEP Webinar"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider">
                    <Play className="w-3 h-3" />
                    ISEP Webinar
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                    <CalendarDays className="w-3.5 h-3.5" />
                    March 4, 2026 · 4:00 PM
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-white/50 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    ISEP — Polytechnic of Porto, Portugal
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  Frontloading Life Skills During the 11–14 Window
                </h2>
                <p className="text-white/60 text-sm">
                  Z Reznichek — Teacher-Gamer
                </p>
                <p className="text-white/70 leading-relaxed">
                  Exploring practical &lsquo;eruptive methodologies&rsquo; that are embodied, off-screen, and collective — moving through &lsquo;possibility thinking&rsquo; into PBL, SEL, GBL and world-building role-playing games that are, pedagogically speaking, co-designed learning environments for agency, risk, and imagination in this Window of Wonder from 11–14 years old.
                </p>
              </div>
            </div>
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
