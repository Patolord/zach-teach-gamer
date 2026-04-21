"use client";

import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "tour-popup-seen";

export default function TourPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasSeen =
      typeof window !== "undefined" &&
      window.localStorage.getItem(STORAGE_KEY) === "1";

    if (hasSeen) return;

    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
  };

  const reopen = () => {
    setVisible(true);
  };

  if (!mounted) return null;

  if (!visible) {
    return (
      <button
        type="button"
        onClick={reopen}
        aria-label="Open Teacher-Gamer Tour 2026 poster"
        className="fixed bottom-6 left-6 z-50 w-16 h-24 rounded-md overflow-hidden border-2 hover:scale-110 transition-transform cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-300"
        style={{
          borderColor: "var(--color-accent)",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.5), 0 0 20px var(--color-accent-glow), 0 0 40px var(--color-primary-glow)",
        }}
      >
        <Image
          src="/poster.jpg.jpeg"
          alt=""
          width={160}
          height={240}
          className="w-full h-full object-cover"
        />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-1">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
        onClick={dismiss}
      />

      <div className="relative h-[98vh] animate-hero-fade-in">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close popup"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-black/70 hover:bg-black/90 border border-white/20 transition-colors cursor-pointer"
          style={{ color: "var(--color-lighter)" }}
        >
          <X className="w-5 h-5" />
        </button>

        <Link href="/workshops" onClick={dismiss} className="block h-full">
          <Image
            src="/poster.jpg.jpeg"
            alt="Teacher-Gamer Tour 2026 poster"
            width={1422}
            height={2133}
            className="h-full w-auto object-contain"
            sizes="100vh"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
