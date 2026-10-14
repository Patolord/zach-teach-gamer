"use client";

import type React from "react";
import { useEffect, useRef } from "react";

interface ShinyTextProps {
  text?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  /** Seconds for one sweep of the shine across the text */
  speed?: number;
  className?: string;
  color?: string;
  shineColor?: string;
  /** Gradient angle in degrees */
  spread?: number;
  /** Sweep back and forth instead of restarting from the same side */
  yoyo?: boolean;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  /** Seconds to hold at the end of each sweep */
  delay?: number;
}

/**
 * Gradient "shine" sweeping across text.
 *
 * Runs on the Web Animations API instead of a JS-per-frame loop, so it has
 * no animation-library dependency and the browser can throttle it when the
 * tab is hidden. Honours prefers-reduced-motion by rendering a static gradient.
 */
const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  children,
  disabled = false,
  speed = 2,
  className = "",
  color = "var(--color-light)",
  shineColor = "var(--color-lighter)",
  spread = 120,
  yoyo = false,
  pauseOnHover = false,
  direction = "left",
  delay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof el.animate !== "function") return;

    const sweepMs = Math.max(speed, 0.01) * 1000;
    const holdMs = Math.max(delay, 0) * 1000;
    const total = sweepMs + holdMs;
    // p=0 -> shine off the right edge, p=1 -> shine off the left edge
    const from = direction === "left" ? "150% center" : "-50% center";
    const to = direction === "left" ? "-50% center" : "150% center";

    const animation = el.animate(
      [
        { backgroundPosition: from, offset: 0 },
        { backgroundPosition: to, offset: sweepMs / total },
        { backgroundPosition: to, offset: 1 },
      ],
      {
        duration: total,
        iterations: Number.POSITIVE_INFINITY,
        direction: yoyo ? "alternate" : "normal",
        easing: "linear",
      },
    );
    animationRef.current = animation;

    return () => {
      animation.cancel();
      animationRef.current = null;
    };
  }, [disabled, speed, delay, direction, yoyo]);

  const handleMouseEnter = () => {
    if (pauseOnHover) animationRef.current?.pause();
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) animationRef.current?.play();
  };

  const gradientStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
    backgroundSize: "200% auto",
    backgroundPosition: direction === "left" ? "150% center" : "-50% center",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover only pauses a decorative animation; nothing is actionable
    <span
      ref={ref}
      className={`inline-block ${className}`}
      style={gradientStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children || text}
    </span>
  );
};

export default ShinyText;
