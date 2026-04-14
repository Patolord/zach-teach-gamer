"use client";

import gsap from "gsap";
import { useEffect } from "react";
import CalendarBookingSection from "@/components/home/calendar/CalendarBookingSection";
import ContactSection from "@/components/home/contact/ContactSection";
import CoursesSection from "@/components/home/courses/CoursesSection";
import CombinedHeroSection from "@/components/home/hero-section/CombinedHeroSection";
import ResearchSection from "@/components/home/research/ResearchSection";
import SubstackSection from "@/components/home/substack/SubstackSection";
import Testimonials from "@/components/home/testimonials/TestimonialsSection";
import TourPopup from "@/components/shared/TourPopup";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HomePage() {
  // Enable scroll-triggered animations
  useScrollAnimation();

  useEffect(() => {
    // Check if we came from landing page transition
    if (sessionStorage.getItem("transitionOverlay") === "true") {
      sessionStorage.removeItem("transitionOverlay");

      // Find and fade out the overlay
      const overlay = document.querySelector<HTMLDivElement>(
        '[style*="z-index: 99999"], [style*="z-index:99999"]',
      );
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => overlay.remove(),
        });
      }
    }
  }, []);

  return (
    <div>
      <TourPopup />
      <CombinedHeroSection />
      <Testimonials />
      <CoursesSection />
      <SubstackSection />
      <ResearchSection />
      <CalendarBookingSection />
      <ContactSection />
    </div>
  );
}
