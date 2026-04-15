"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

const calProps = {
  "data-cal-namespace": CAL_CONFIG.username,
  "data-cal-link": CAL_CONFIG.username,
  "data-cal-config": JSON.stringify(getCalConfig()),
};

export default function TourPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
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
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden border-2 animate-hero-fade-in"
        style={{
          borderColor: "var(--color-accent)",
          boxShadow:
            "0 0 60px var(--color-accent-glow), 0 0 120px var(--color-primary-glow)",
        }}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/70 transition-colors cursor-pointer"
          style={{ color: "var(--color-lighter)" }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title bar */}
        <div
          className="w-full px-4 py-3 text-center"
          style={{ backgroundColor: "rgba(26, 26, 31, 0.97)" }}
        >
          <h2
            className="text-lg font-bold uppercase tracking-widest bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, var(--color-accent), var(--color-secondary))",
            }}
          >
            Teacher-Gamer Tour 2026
          </h2>
        </div>

        {/* Poster image — links to workshops */}
        <Link href="/workshops" onClick={dismiss} className="block">
          <Image
            src="/poster.jpg.jpeg"
            alt="Teacher-Gamer Tour 2026 poster"
            width={1200}
            height={1600}
            className="w-full h-auto block"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </Link>

        {/* CTA bar */}
        <div
          className="w-full px-6 py-4 text-center"
          style={{ backgroundColor: "rgba(26, 26, 31, 0.97)" }}
        >
          <button
            type="button"
            className="text-sm sm:text-base font-semibold cursor-pointer hover:underline transition-colors"
            style={{ color: "var(--color-accent)" }}
            {...calProps}
          >
            Book a Discovery Call to talk it over and set things in motion.
          </button>
        </div>
      </div>
    </div>
  );
}
