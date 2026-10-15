"use client";

import { useTranslations } from "next-intl";
import type React from "react";
import { type ReactNode, useEffect, useRef } from "react";
import { MEDIA } from "@/lib/media";

interface ShopSectionCardProps {
  width?: number;
  height?: number;
  image?: string;
  children?: ReactNode;
}

const ShopSectionCard: React.FC<ShopSectionCardProps> = ({
  width = 300,
  height = 400,
  image = MEDIA.assets.bookCover,
  children,
}) => {
  const t = useTranslations("home.handbook");
  const svgRef = useRef<HTMLDivElement | null>(null);
  const displacementMapRef = useRef<SVGFEDisplacementMapElement | null>(null);
  const cursor = useRef<{ x: number; y: number }>({
    x: typeof window !== "undefined" ? window.innerWidth / 2 : 0,
    y: typeof window !== "undefined" ? window.innerHeight / 2 : 0,
  });
  const cachedCursor = useRef<{ x: number; y: number }>({ ...cursor.current });
  const winsize = useRef<{ width: number; height: number }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const lerp = (a: number, b: number, n: number): number =>
      (1 - n) * a + n * b;
    const map = (
      x: number,
      a: number,
      b: number,
      c: number,
      d: number,
    ): number => ((x - a) * (d - c)) / (b - a) + c;
    const distance = (x1: number, x2: number, y1: number, y2: number): number =>
      Math.hypot(x1 - x2, y1 - y2);

    const handleResize = (): void => {
      winsize.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    };

    const handleMouseMove = (ev: MouseEvent): void => {
      cursor.current = { x: ev.clientX, y: ev.clientY };
    };

    // The effect only reacts to a mouse, so skip the per-frame loop entirely
    // on touch devices and for people who prefer reduced motion.
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canHover.matches || reducedMotion.matches) return;

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const imgValues = {
      imgTransforms: { x: 0, y: 0, rz: 0 },
      displacementScale: 0,
    };

    let frameId: number | null = null;
    let isVisible = true;

    const render = () => {
      frameId = null;
      if (!isVisible) return;
      let targetX = lerp(
        imgValues.imgTransforms.x,
        map(cursor.current.x, 0, winsize.current.width, -120, 120),
        0.1,
      );
      let targetY = lerp(
        imgValues.imgTransforms.y,
        map(cursor.current.y, 0, winsize.current.height, -120, 120),
        0.1,
      );
      const targetRz = lerp(
        imgValues.imgTransforms.rz,
        map(cursor.current.x, 0, winsize.current.width, -10, 10),
        0.1,
      );

      const bound = 50;
      if (targetX > bound) targetX = bound + (targetX - bound) * 0.2;
      if (targetX < -bound) targetX = -bound + (targetX + bound) * 0.2;
      if (targetY > bound) targetY = bound + (targetY - bound) * 0.2;
      if (targetY < -bound) targetY = -bound + (targetY + bound) * 0.2;

      imgValues.imgTransforms.x = targetX;
      imgValues.imgTransforms.y = targetY;
      imgValues.imgTransforms.rz = targetRz;

      if (svgRef.current) {
        svgRef.current.style.transform = `translate3d(${imgValues.imgTransforms.x}px, ${imgValues.imgTransforms.y}px, 0) rotate(${imgValues.imgTransforms.rz}deg)`;
      }

      const cursorTravelledDistance = distance(
        cachedCursor.current.x,
        cursor.current.x,
        cachedCursor.current.y,
        cursor.current.y,
      );
      imgValues.displacementScale = lerp(
        imgValues.displacementScale,
        map(cursorTravelledDistance, 0, 200, 0, 400),
        0.06,
      );

      if (displacementMapRef.current) {
        displacementMapRef.current.setAttribute(
          "scale",
          String(imgValues.displacementScale),
        );
      }

      cachedCursor.current = { ...cursor.current };

      frameId = requestAnimationFrame(render);
    };

    // Only animate while the card is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && frameId === null) {
        frameId = requestAnimationFrame(render);
      }
    });
    if (svgRef.current) observer.observe(svgRef.current);

    return () => {
      observer.disconnect();
      if (frameId !== null) cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={svgRef}
      className="relative"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <svg
        viewBox="-60 -75 720 900"
        preserveAspectRatio="xMidYMid slice"
        className="relative w-full h-full block [will-change:transform]"
        aria-label={t("cardLabel")}
        role="img"
      >
        <filter id="imgFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.015"
            numOctaves="5"
            seed="4"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence1"
          />
          <feDisplacementMap
            ref={displacementMapRef}
            in="SourceGraphic"
            in2="turbulence1"
            scale="0"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap3"
          />
        </filter>
        <g>
          <image
            href={image}
            x="0"
            y="0"
            width="600"
            height="750"
            filter="url(#imgFilter)"
            preserveAspectRatio="xMidYMid slice"
          />
        </g>
      </svg>
      <div className="absolute bottom-[1.2em] left-[1em] tracking-[-0.5px] font-black text-[2.5rem] leading-[1.5em] first-line:text-[6rem]">
        {children}
      </div>
    </div>
  );
};

export default ShopSectionCard;
