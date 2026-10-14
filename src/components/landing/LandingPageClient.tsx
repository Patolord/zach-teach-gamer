"use client";

import { Video } from "@imagekit/next";
import LandingContent from "@/components/landing/LandingContent";
import { useLandingAnimation } from "@/hooks/useLandingAnimation";
import { MEDIA } from "@/lib/media";

export default function LandingPageClient() {
  const { landingSectionRef, videoRef, headerRef, playAnimation, isLoading } =
    useLandingAnimation();

  return (
    <>
      {/* Video element - optimized with ImageKit SDK */}
      <Video
        ref={videoRef}
        src="/landing-video.mp4"
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        disablePictureInPicture
        poster={MEDIA.poster.landingFrame}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      <div
        ref={landingSectionRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div
        ref={headerRef}
        className="absolute inset-0 flex items-center justify-center will-change-transform"
      >
        <LandingContent onButtonClick={playAnimation} isLoading={isLoading} />
      </div>
    </>
  );
}
