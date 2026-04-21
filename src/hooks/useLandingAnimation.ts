"use client";

import { useGSAP } from "@gsap/react";
import { buildSrc } from "@imagekit/next";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { startTransition, useCallback, useRef, useState } from "react";

const floatingTextStyle = `
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  color: var(--color-lighter);
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: bold;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  white-space: nowrap;
`;

function createFloatingText(text: string, zIndex: number, blur = false) {
  const el = document.createElement("div");
  el.textContent = text;
  el.style.cssText = `${floatingTextStyle}z-index:${zIndex};${
    blur ? "filter:blur(2px);" : ""
  }`;
  document.body.appendChild(el);
  return el;
}

function animateFloatingText(
  tl: gsap.core.Timeline,
  el: HTMLElement,
  startAt: number,
  duration: number,
) {
  // Fade in and float up
  tl.to(
    el,
    {
      opacity: 1,
      y: -20,
      scale: 0.9,
      duration: duration * 0.03,
      ease: "power2.out",
    },
    startAt,
  );
  // Hold visible
  tl.to(
    el,
    { opacity: 1, duration: duration * 0.04, ease: "none" },
    startAt + duration * 0.03,
  );
  // Fade out
  tl.to(
    el,
    {
      opacity: 0,
      y: -40,
      scale: 0.85,
      duration: duration * 0.03,
      ease: "power2.in",
    },
    startAt + duration * 0.07,
  );
  // Remove element
  tl.call(() => el.remove(), [], startAt + duration * 0.1);
}

export function useLandingAnimation() {
  const headerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const landingSectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useGSAP(() => {
    const video = videoRef.current;
    const header = headerRef.current;

    if (!video) return;

    // Set video source and start loading immediately so it's ready when user clicks
    // Build ImageKit URL using buildSrc
    const imageKitVideoUrl = buildSrc({
      urlEndpoint: "https://ik.imagekit.io/TeacherGamer/Site/",
      src: "/landing-video.mp4",
    });
    video.src = imageKitVideoUrl;
    video.preload = "auto";
    video.pause();
    video.currentTime = 0;

    // Track video loading state
    const handleCanPlay = () => {
      setIsVideoLoading(false);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };

    const handleError = () => {
      setIsVideoLoading(false);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };

    // If video is already ready, don't show loading
    if (video.readyState >= 2 && video.duration) {
      setIsVideoLoading(false);
    } else {
      video.addEventListener("canplay", handleCanPlay, { once: true });
      video.addEventListener("error", handleError, { once: true });
    }

    // Start loading the video immediately
    video.load();

    if (header) {
      gsap.set(header, { opacity: 1 });
    }
  });

  const playAnimation = useCallback(() => {
    const header = headerRef.current;
    const video = videoRef.current;

    if (!video || isLoading) return;

    // Set loading state immediately for visual feedback
    setIsLoading(true);

    const startAnimation = () => {
      if (!video.duration) {
        setIsLoading(false);
        return;
      }

      timelineRef.current?.kill();

      const videoDuration = video.duration;

      // Show video and fade out header (runs immediately)
      if (video) {
        gsap.set(video, { opacity: 1 });
      }
      if (header) {
        gsap.to(header, {
          opacity: 0,
          duration: videoDuration * 0.15,
          ease: "power2.out",
        });
      }

      // Track video progress for floating text and overlay
      let text1Created = false;
      let text2Created = false;
      let overlayAnimated = false;

      const handleTimeUpdate = () => {
        const progress = video.currentTime / videoDuration;

        // Floating text 1 at ~35% progress
        if (progress >= 0.35 && !text1Created) {
          text1Created = true;
          const text1 = createFloatingText(
            "Welcome to the Revolution",
            1000,
            true,
          );
          const tl = gsap.timeline();
          animateFloatingText(tl, text1, 0, videoDuration);
        }

        // Floating text 2 at ~45% progress
        if (progress >= 0.45 && !text2Created) {
          text2Created = true;
          const text2 = createFloatingText("Join the Movement", 1001);
          const tl = gsap.timeline();
          animateFloatingText(tl, text2, 0, videoDuration);
        }

        // Start overlay fade at ~80% progress
        if (progress >= 0.8 && !overlayAnimated) {
          overlayAnimated = true;
          let overlay = overlayRef.current;
          if (!overlay) {
            overlay = document.createElement("div");
            overlay.style.cssText =
              "position:fixed;inset:0;background:#000;z-index:99999;opacity:0;pointer-events:none";
            document.body.appendChild(overlay);
            overlayRef.current = overlay;
          }

          gsap.to(overlay, {
            opacity: 1,
            duration: videoDuration * 0.1,
            ease: "power2.in",
          });
        }
      };

      const handleVideoEnd = () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", handleVideoEnd);
        sessionStorage.setItem("transitionOverlay", "true");
        try {
          localStorage.setItem("hasWatchedIntro", "true");
        } catch {}
        startTransition(() => router.push("/home"));
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", handleVideoEnd);

      // Start video playback - let it play naturally (works on iOS!)
      video.currentTime = 0;
      video
        .play()
        .then(() => {
          // Clear loading state once video starts playing
          setIsLoading(false);
        })
        .catch((err) => {
          console.warn("Video play failed:", err);
          setIsLoading(false);
          // Fallback: if video can't play, just navigate after a delay
          setTimeout(() => {
            sessionStorage.setItem("transitionOverlay", "true");
            startTransition(() => router.push("/home"));
          }, 2000);
        });
    };

    // Video should already be loading from useGSAP, but check if it's ready
    if (video.readyState >= 2 && video.duration) {
      // Video is ready, start immediately (most common case)
      startAnimation();
    } else {
      // Video is still loading, wait for it (should be rare since we preload)
      const handleCanPlay = () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
        if (video.duration) {
          startAnimation();
        } else {
          setIsLoading(false);
        }
      };

      const handleError = () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
        setIsLoading(false);
      };

      video.addEventListener("canplay", handleCanPlay, { once: true });
      video.addEventListener("error", handleError, { once: true });

      // Ensure video is loading (in case it wasn't already)
      if (video.readyState === 0) {
        video.load();
      }
    }
  }, [router, isLoading]);

  return {
    landingSectionRef,
    videoRef,
    headerRef,
    playAnimation,
    isLoading: isLoading || isVideoLoading,
  };
}
