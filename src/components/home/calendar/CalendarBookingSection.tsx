"use client";

import { useTranslations } from "next-intl";
import { MEDIA } from "@/lib/media";
import ShinyText from "@/components/ui/shinytext";
import Calendar from "./Calendar";
import CalendarModal from "./CalendarModal";

// Using global CSS theme variables

interface CalendarBookingSectionProps {
  sectionIndex?: number;
}

export default function CalendarBookingSection({
  sectionIndex,
}: CalendarBookingSectionProps) {
  const t = useTranslations("home.calendar");

  return (
    <section
      id="calendar-section"
      data-scroll-section={sectionIndex}
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url('${MEDIA.backgrounds.calendar}')` }}
    >
      {/* 40% black overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      {/* Top horizontal transition element */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60 z-20"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-secondary-soft), transparent)",
        }}
      />

      <div
        data-section-content
        data-animate
        className="py-30 px-16 bg-no-repeat bg-backdrop-none space-y-4 relative"
        style={{ zIndex: 20 }}
      >
        <h2 className="text-3xl text-center font-pirata-one pb-8">
          <ShinyText
            speed={3}
            delay={1}
            color={"var(--color-accent)"}
            shineColor="#fff"
            spread={30}
            yoyo
          >
            {t("title")}
          </ShinyText>
        </h2>
        <p
          className="text-xl text-center font-amarante"
          style={{ color: "var(--color-lighter)" }}
        >
          {t("subtitle")}
        </p>

        <div className="hidden lg:block">
          <Calendar />
        </div>
        <div className="lg:hidden justify-center max-w-sm mx-auto">
          <CalendarModal />
        </div>
      </div>

      {/* Bottom horizontal transition element */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to top, var(--color-secondary-soft), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-60 z-20"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
        }}
      />
    </section>
  );
}
