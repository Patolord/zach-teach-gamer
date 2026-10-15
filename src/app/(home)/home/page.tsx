"use client";

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
        // Plain CSS transition: keeps GSAP out of the home route bundle.
        overlay.style.transition = "opacity 0.5s ease-out";
        overlay.addEventListener("transitionend", () => overlay.remove(), {
          once: true,
        });
        requestAnimationFrame(() => {
          overlay.style.opacity = "0";
        });
        // Safety net in case transitionend never fires (e.g. tab hidden).
        setTimeout(() => overlay.remove(), 800);
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
