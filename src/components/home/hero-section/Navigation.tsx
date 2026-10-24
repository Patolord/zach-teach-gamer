"use client";

import { useTranslations } from "next-intl";
import { type CSSProperties, forwardRef } from "react";

interface NavigationProps {
  style?: CSSProperties;
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ style }, ref) => {
    const t = useTranslations("home.nav");

    return (
      <nav
        ref={ref}
        className="fixed w-full px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 flex items-center justify-between gap-2 sm:gap-4 md:gap-8 z-[2]"
        style={{ willChange: "opacity", ...style }}
      >
        {/* Left - Blank space for dial */}
        <div className="flex-1 min-[550px]:w-[180px]" />

        {/* Center Logo */}
        <div className="flex-1 min-[550px]:flex-none flex justify-center items-center">
          <a
            href="/home"
            className="text-base sm:text-xl md:text-2xl text-black font-normal whitespace-nowrap"
          >
            Teacher Gamer
          </a>
        </div>

        {/* Right - Menu links and buttons */}
        <div className="flex-1 flex items-center gap-4 sm:gap-6 md:gap-8 justify-end">
          {/* Menu Links */}
          <div className="hidden min-[550px]:flex gap-4 sm:gap-6 md:gap-8">
            <a
              href="#courses-section"
              className="text-black hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
            >
              {t("courses")}
            </a>
            <a
              href="#calendar-section"
              className="text-black hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
            >
              {t("calendar")}
            </a>
            <a
              href="/shop"
              className="text-black hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
            >
              {t("shop")}
            </a>
            <a
              href="/about"
              className="text-black hover:opacity-70 transition-opacity text-[10px] sm:text-xs font-medium uppercase whitespace-nowrap"
            >
              {t("contact")}
            </a>
          </div>
          {/* Buttons */}
          <div className="flex gap-2 sm:gap-4 md:gap-6">
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded bg-white">
              <a
                href="#courses-section"
                className="text-[10px] sm:text-xs font-medium uppercase text-black whitespace-nowrap"
              >
                {t("training")}
              </a>
            </div>
            <div className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded bg-black border border-white">
              <a
                href="#shop-section"
                className="text-[10px] sm:text-xs font-medium uppercase text-white whitespace-nowrap"
              >
                {t("shopNow")}
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  },
);

Navigation.displayName = "Navigation";

export default Navigation;
