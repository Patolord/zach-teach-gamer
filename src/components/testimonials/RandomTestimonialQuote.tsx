"use client";

import { Quote } from "lucide-react";
import { useRandomTestimonial } from "@/hooks/useRandomTestimonials";
import type { TestimonialTag } from "@/lib/testimonials";

type Props = {
  tags?: readonly TestimonialTag[];
  className?: string;
};

export default function RandomTestimonialQuote({ tags, className = "" }: Props) {
  const testimonial = useRandomTestimonial(tags);

  if (!testimonial) return null;

  return (
    <div
      className={`relative rounded-xl p-4 border backdrop-blur-sm max-w-xl ${className}`}
      style={{
        backgroundColor: "rgba(26, 26, 31, 0.5)",
        borderColor: "var(--color-accent-glow)",
      }}
    >
      <Quote
        className="w-4 h-4 absolute top-3 left-3 opacity-40"
        style={{ color: "var(--color-accent)" }}
      />
      <p
        className="text-sm italic leading-relaxed pl-6"
        style={{ color: "var(--color-lighter)" }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p
        className="text-xs font-semibold mt-2 pl-6"
        style={{ color: "var(--color-accent)" }}
      >
        — {testimonial.author}
      </p>
    </div>
  );
}
