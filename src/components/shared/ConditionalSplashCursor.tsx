"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// The WebGL fluid simulation is ~1400 lines; load it only when it will run.
const SplashCursor = dynamic(() => import("./SplashCursor"), { ssr: false });

// Pages where SplashCursor should be disabled (the map has its own pointer UX)
const DISABLED_PATHS = ["/map"];

export default function ConditionalSplashCursor() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Mouse-driven effect: skip on touch devices and for reduced motion.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canHover.matches || reducedMotion.matches) return;

    // Defer until the browser is idle so it never competes with page load.
    const idle =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(() => setEnabled(true), { timeout: 3000 })
        : window.setTimeout(() => setEnabled(true), 1500);

    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idle as number);
      } else {
        window.clearTimeout(idle as number);
      }
    };
  }, []);

  const isDisabled = DISABLED_PATHS.some((path) => pathname?.startsWith(path));

  if (isDisabled || !enabled) {
    return null;
  }

  return <SplashCursor />;
}
