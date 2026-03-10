"use client";

import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getCalApi } from "@calcom/embed-react";
import { CAL_CONFIG, getCalUIConfig, getCalConfig } from "@/components/home/calendar/cal-config";

export default function FloatingBookingButton() {
  const pathname = usePathname();
  const [minimized, setMinimized] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_CONFIG.username });
      cal("ui", getCalUIConfig());
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible || pathname === "/") return null;

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => setMinimized(false)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent-light text-black flex items-center justify-center shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)] transition-all duration-300 hover:scale-110 cursor-pointer"
        aria-label="Open booking"
      >
        <CalendarDays className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 animate-in slide-in-from-right-8 fade-in duration-500">
      {/* Tooltip card */}
      <div className="hidden sm:flex flex-col gap-1 bg-black/90 backdrop-blur-md border border-accent/30 rounded-xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] max-w-[200px]">
        <p className="text-sm font-bold text-accent leading-tight">
          Free Discovery Call
        </p>
        <p className="text-xs text-white/70 leading-snug">
          Book a 15-min chat to see how RPGs can transform your classroom.
        </p>
      </div>

      {/* Floating button group */}
      <div className="relative flex flex-col items-end gap-2">
        {/* Minimize button */}
        <button
          type="button"
          onClick={() => setMinimized(true)}
          className="absolute -top-2 -right-2 z-10 w-5 h-5 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
          aria-label="Minimize"
        >
          <span className="text-xs font-bold leading-none mb-0.5">−</span>
        </button>

        {/* Main CTA button */}
        <button
          type="button"
          data-cal-namespace={CAL_CONFIG.username}
          data-cal-link={CAL_CONFIG.username}
          data-cal-config={JSON.stringify(getCalConfig())}
          className={`group flex items-center gap-3 bg-accent hover:bg-accent-light text-black font-bold px-5 py-3.5 rounded-full shadow-[0_4px_20px_var(--color-accent-glow),0_0_40px_var(--color-secondary-soft)] hover:shadow-[0_6px_30px_rgba(218,255,13,0.45),0_0_50px_rgba(255,216,90,0.25)] transition-all duration-300 hover:scale-105 cursor-pointer ${pulse ? "animate-bounce" : ""}`}
        >
          <CalendarDays className="w-5 h-5 shrink-0" />
          <span className="text-sm sm:text-base whitespace-nowrap">
            Book a Discovery Call
          </span>
        </button>
      </div>
    </div>
  );
}
