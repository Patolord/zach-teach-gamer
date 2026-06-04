"use client";

import { Quote } from "lucide-react";
import { useRandomTestimonials } from "@/hooks/useRandomTestimonials";
import type { TestimonialTag } from "@/lib/testimonials";

type Props = {
  count?: number;
  tags?: readonly TestimonialTag[];
  title?: string;
  iconClassName?: string;
  accentClassName?: string;
  borderClassName?: string;
  columns?: 1 | 2;
};

export default function RandomTestimonialsGrid({
  count = 2,
  tags,
  title,
  iconClassName = "w-6 h-6 text-accent",
  accentClassName = "text-accent",
  borderClassName = "border-accent/20",
  columns = 2,
}: Props) {
  const items = useRandomTestimonials(count, tags);

  if (!items.length) return null;

  return (
    <div className="space-y-6">
      {title && (
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <Quote className={iconClassName} />
          {title}
        </h2>
      )}
      <div
        className={
          columns === 1
            ? "grid grid-cols-1 gap-5"
            : "grid md:grid-cols-2 gap-5"
        }
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`bg-white/10 backdrop-blur-sm rounded-xl p-5 border ${borderClassName}`}
          >
            <p className="text-white/90 italic mb-3 leading-relaxed text-sm">
              &ldquo;{item.quote}&rdquo;
            </p>
            <p className={`font-semibold text-sm ${accentClassName}`}>
              — {item.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
