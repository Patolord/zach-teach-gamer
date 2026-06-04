"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MEDIA } from "@/lib/media";
import { pickUniqueRandomTestimonials } from "@/lib/testimonials";
import ShinyText from "@/components/ui/shinytext";
import "./Testimonials.css";

type TextMarqueeItem = {
  id: number;
  kind: "text";
  text: string;
  handle: string;
};

type ImageMarqueeItem = {
  id: number;
  kind: "image";
  image: string;
};

type MarqueeItem = TextMarqueeItem | ImageMarqueeItem;

interface TestimonialsProps {
  sectionIndex?: number;
}

const IMAGE_CARDS: ImageMarqueeItem[] = [
  { id: 9001, kind: "image", image: MEDIA.testimonials.testimonial1 },
  { id: 9002, kind: "image", image: MEDIA.testimonials.testimonial2 },
  { id: 9003, kind: "image", image: MEDIA.testimonials.testimonial3 },
];

function interleaveTextAndImages(
  texts: TextMarqueeItem[],
  images: ImageMarqueeItem[],
): MarqueeItem[] {
  if (!images.length) return texts;

  const result: MarqueeItem[] = [];
  const gap = Math.max(2, Math.floor(texts.length / images.length));
  let textIndex = 0;

  for (let imageIndex = 0; imageIndex < images.length; imageIndex += 1) {
    for (let n = 0; n < gap && textIndex < texts.length; n += 1) {
      result.push(texts[textIndex]);
      textIndex += 1;
    }
    result.push(images[imageIndex]);
  }

  while (textIndex < texts.length) {
    result.push(texts[textIndex]);
    textIndex += 1;
  }

  return result;
}

function buildMarqueeRows(): { row1: MarqueeItem[]; row2: MarqueeItem[] } {
  const textCards: TextMarqueeItem[] = pickUniqueRandomTestimonials(11, [
    "marquee",
  ]).map((item, index) => ({
    id: index + 1,
    kind: "text" as const,
    text: item.quote,
    handle: item.author,
  }));

  // Top row: text → 3 photos side by side → text
  const row1: MarqueeItem[] = [
    ...textCards.slice(0, 3),
    ...IMAGE_CARDS,
    ...textCards.slice(3, 7),
  ];

  // Bottom row: remaining quotes woven with photos
  const row2 = interleaveTextAndImages(
    textCards.slice(7),
    [...IMAGE_CARDS].reverse(),
  );

  return { row1, row2 };
}

const cardShell =
  "shrink-0 w-[300px] min-h-[180px] sm:w-[340px] sm:min-h-[200px] rounded-2xl border-2 transition-transform duration-200 ease-in-out hover:-translate-y-1";

function TextCard({
  item,
  onReadMore,
}: {
  item: TextMarqueeItem;
  onReadMore: (item: TextMarqueeItem) => void;
}) {
  const MAX_LENGTH = 200;
  const needsTruncation = item.text.length > MAX_LENGTH;
  const displayText = needsTruncation
    ? `${item.text.slice(0, MAX_LENGTH)}...`
    : item.text;

  return (
    <button
      type="button"
      onClick={() => needsTruncation && onReadMore(item)}
      disabled={!needsTruncation}
      className={`${cardShell} cursor-pointer p-5 text-left backdrop-blur-sm disabled:cursor-default sm:p-6`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.35)",
        borderColor: "var(--color-primary-light)",
        boxShadow: "0 4px 12px var(--color-primary-glow)",
      }}
    >
      <p
        className="m-0 grow text-[0.95rem] leading-relaxed whitespace-normal"
        style={{ color: "var(--color-lighter)" }}
      >
        {displayText}
        {needsTruncation ? (
          <span
            className="ml-2 font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            Read more
          </span>
        ) : null}
      </p>
      <p
        className="mt-4 text-sm font-medium"
        style={{ color: "var(--color-lighter)" }}
      >
        {item.handle}
      </p>
    </button>
  );
}

function ImageCard({ item }: { item: ImageMarqueeItem }) {
  return (
    <div
      className={`${cardShell} relative overflow-hidden`}
      style={{
        borderColor: "var(--color-accent)",
        boxShadow: "0 4px 12px var(--color-primary-glow)",
      }}
    >
      <Image
        src={item.image}
        alt="Testimonial"
        fill
        className="object-cover"
        sizes="340px"
      />
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  speed,
  onReadMore,
}: {
  items: MarqueeItem[];
  direction: "left" | "right";
  speed: number;
  onReadMore: (item: TextMarqueeItem) => void;
}) {
  if (!items.length) return null;

  const track = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-1">
      <div
        className={`testimonial-marquee testimonial-marquee-${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {track.map((item, index) =>
          item.kind === "image" ? (
            <ImageCard key={`${item.id}-${index}`} item={item} />
          ) : (
            <TextCard
              key={`${item.id}-${index}`}
              item={item}
              onReadMore={onReadMore}
            />
          ),
        )}
      </div>
    </div>
  );
}

const Testimonials = ({ sectionIndex }: TestimonialsProps) => {
  const [modalItem, setModalItem] = useState<TextMarqueeItem | null>(null);
  const [row1, setRow1] = useState<MarqueeItem[]>([]);
  const [row2, setRow2] = useState<MarqueeItem[]>([]);

  useEffect(() => {
    const { row1: r1, row2: r2 } = buildMarqueeRows();
    setRow1(r1);
    setRow2(r2);
  }, []);

  return (
    <section
      id="testimonials-section"
      data-scroll-section={sectionIndex}
      className="relative w-full overflow-x-hidden pt-28 pb-40"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.testimonials}')` }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(26, 26, 31, 0.4)" }}
      />

      <div
        className="absolute top-0 right-0 left-0 z-10 h-px opacity-60"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-24"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-secondary-soft), transparent)",
        }}
      />

      <div data-section-content className="relative z-20 mx-auto max-w-7xl px-4">
        <div className="relative z-20 mb-12 text-center">
          <h3 className="text-4xl font-semibold tracking-tight text-accent">
            <ShinyText
              speed={3}
              delay={0}
              color="var(--color-accent)"
              shineColor="#ffffff"
              spread={30}
              yoyo
            >
              Testimonials
            </ShinyText>
          </h3>
        </div>

        <div className="relative mx-auto w-full max-w-[1500px] overflow-hidden mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex flex-col gap-5">
            <MarqueeRow
              items={row1}
              direction="left"
              speed={55}
              onReadMore={setModalItem}
            />
            <MarqueeRow
              items={row2}
              direction="right"
              speed={50}
              onReadMore={setModalItem}
            />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-24"
        style={{
          background:
            "linear-gradient(to top, var(--color-secondary-soft), transparent)",
        }}
      />
      <div
        className="absolute right-0 bottom-0 left-0 z-10 h-px opacity-60"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-accent), var(--color-secondary), var(--color-accent), transparent)",
        }}
      />

      {modalItem ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-sm"
            onClick={() => setModalItem(null)}
          />
          <div
            className="relative w-full max-w-lg rounded-2xl border-2 p-8 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(26, 26, 31, 0.95)",
              borderColor: "var(--color-accent)",
              boxShadow:
                "0 8px 40px var(--color-accent-glow), 0 0 60px var(--color-primary-glow)",
            }}
          >
            <button
              type="button"
              onClick={() => setModalItem(null)}
              className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              style={{ color: "var(--color-lighter)" }}
              aria-label="Close"
            >
              ×
            </button>
            <p
              className="text-base leading-relaxed whitespace-normal"
              style={{ color: "var(--color-lighter)" }}
            >
              {modalItem.text}
            </p>
            <p
              className="mt-4 text-sm font-semibold"
              style={{ color: "var(--color-accent)" }}
            >
              {modalItem.handle}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Testimonials;
