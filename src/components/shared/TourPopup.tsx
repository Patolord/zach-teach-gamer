"use client";

import { CalendarDays, MapPin, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function TourPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
        onClick={dismiss}
      />

      <div
        className="relative w-full max-w-md rounded-2xl overflow-hidden border-2 animate-hero-fade-in"
        style={{
          backgroundColor: "rgba(26, 26, 31, 0.97)",
          borderColor: "var(--color-accent)",
          boxShadow:
            "0 0 60px var(--color-accent-glow), 0 0 120px var(--color-primary-glow)",
        }}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          style={{ color: "var(--color-lighter)" }}
        >
          <X className="w-4 h-4" />
        </button>

        <div
          className="w-full h-2"
          style={{
            background:
              "linear-gradient(90deg, var(--color-accent), var(--color-secondary), var(--color-primary-light), var(--color-accent))",
            backgroundSize: "300% 100%",
            animation: "shimmer 3s ease-in-out infinite",
          }}
        />

        <div className="px-6 pt-8 pb-6 text-center space-y-5">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-background)",
            }}
          >
            Coming Soon
          </div>

          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "var(--color-lighter)" }}
          >
            Teacher-Gamer
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-accent), var(--color-secondary))",
              }}
            >
              Tour 2026
            </span>
          </h2>

          <p className="text-sm leading-relaxed" style={{ color: "var(--color-lighter)", opacity: 0.7 }}>
            Live workshops, immersive experiences, and the Teacher-Gamer methodology — coming to cities around the world. Details dropping soon.
          </p>

          <div className="flex items-center justify-center gap-6 text-xs" style={{ color: "var(--color-lighter)", opacity: 0.5 }}>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Multiple Cities
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-3.5 h-3.5" />
              2026
            </span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Button
              size="lg"
              className="w-full font-bold text-base"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-background)",
              }}
              asChild
            >
              <Link href="/workshops" onClick={dismiss}>
                Learn More
              </Link>
            </Button>
            <button
              type="button"
              onClick={dismiss}
              className="text-sm cursor-pointer hover:underline"
              style={{ color: "var(--color-lighter)", opacity: 0.5 }}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
