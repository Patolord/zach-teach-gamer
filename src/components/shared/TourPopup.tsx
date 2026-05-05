"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { workshopPosters } from "@/data/workshop-posters";

const STORAGE_KEY = "tour-popup-seen";
const ANIMATION_MS = 500;

type PosterState = "hidden" | "entering" | "open" | "closing";

export default function TourPopup() {
  const [mounted, setMounted] = useState(false);
  const [posterState, setPosterState] = useState<PosterState>("hidden");
  const [activePosterIndex, setActivePosterIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const hasSeen =
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) === "1";

    if (hasSeen) return;

    const showTimer = setTimeout(() => setPosterState("entering"), 200);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (posterState !== "entering") return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPosterState("open"));
    });
    return () => cancelAnimationFrame(raf);
  }, [posterState]);

  const dismiss = () => {
    if (posterState === "closing" || posterState === "hidden") return;
    setPosterState("closing");
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
    setTimeout(() => setPosterState("hidden"), ANIMATION_MS);
  };

  const reopen = () => {
    setPosterState("entering");
  };

  const showPreviousPoster = () => {
    setActivePosterIndex((index) =>
      index === 0 ? workshopPosters.length - 1 : index - 1,
    );
  };

  const showNextPoster = () => {
    setActivePosterIndex((index) => (index + 1) % workshopPosters.length);
  };

  if (!mounted) return null;

  const isCollapsed = posterState === "hidden";
  const isOpen = posterState === "open";
  const activePoster = workshopPosters[activePosterIndex] ?? workshopPosters[0];
  const hasMultiplePosters = workshopPosters.length > 1;

  const posterStyle: CSSProperties = isOpen
    ? {
        transform: "translate(0, 0) scale(1)",
        opacity: 1,
      }
    : {
        transform:
          "translate(calc(-50vw + 56px), calc(50vh - 72px)) scale(0.065)",
        opacity: 0,
      };

  return (
    <>
      {isCollapsed && (
        <button
          type="button"
          onClick={reopen}
          aria-label="Open Teacher-Gamer Tour 2026 poster"
          className="fixed bottom-6 left-6 z-50 w-16 h-24 rounded-md overflow-hidden border-2 hover:scale-110 transition-transform cursor-pointer animate-in fade-in zoom-in-50 duration-300"
          style={{
            borderColor: "var(--color-accent)",
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.5), 0 0 20px var(--color-accent-glow), 0 0 40px var(--color-primary-glow)",
          }}
        >
          <Image
            src={activePoster.src}
            alt=""
            width={160}
            height={240}
            className="w-full h-full object-cover"
          />
        </button>
      )}

      {!isCollapsed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-1 pointer-events-none">
          <button
            type="button"
            aria-label="Close"
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default transition-opacity duration-500 ${
              isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
            }`}
            onClick={dismiss}
          />

          <div
            className="relative h-[98vh] pointer-events-auto transition-all ease-out"
            style={{
              ...posterStyle,
              transitionDuration: `${ANIMATION_MS}ms`,
              transformOrigin: "center",
              willChange: "transform, opacity",
            }}
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close popup"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90 border border-white/20 transition-colors cursor-pointer"
              style={{ color: "var(--color-lighter)" }}
            >
              <X className="w-5 h-5" />
            </button>

            {hasMultiplePosters && (
              <>
                <button
                  type="button"
                  onClick={showPreviousPoster}
                  aria-label="Show previous poster"
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 transition-colors hover:bg-black/90 cursor-pointer"
                  style={{ color: "var(--color-lighter)" }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={showNextPoster}
                  aria-label="Show next poster"
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 transition-colors hover:bg-black/90 cursor-pointer"
                  style={{ color: "var(--color-lighter)" }}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-semibold tracking-wide text-white">
                  {activePosterIndex + 1} / {workshopPosters.length}
                </div>
              </>
            )}

            <Link href="/workshops" onClick={dismiss} className="block h-full">
              <Image
                src={activePoster.src}
                alt={activePoster.alt}
                width={activePoster.width}
                height={activePoster.height}
                className="h-full w-auto object-contain"
                sizes="100vh"
                priority
              />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
