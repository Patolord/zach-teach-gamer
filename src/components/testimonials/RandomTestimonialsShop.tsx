"use client";

import { Star } from "lucide-react";
import { useRandomTestimonials } from "@/hooks/useRandomTestimonials";

export default function RandomTestimonialsShop() {
  const items = useRandomTestimonials(3, ["handbook", "educator"]);

  if (!items.length) return null;

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col backdrop-blur-sm rounded-xl p-6 bg-primary-subtle border-2 border-primary-light/25 shadow-[0_10px_30px_var(--color-primary-glow)]"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`${item.id}-star-${i}`}
                  className="w-4 h-4 text-accent fill-accent"
                />
              ))}
            </div>
            <span className="text-xs text-lighter/50">Community</span>
          </div>
          <p className="text-base italic mb-4 text-light flex-1">
            &ldquo;{item.quote}&rdquo;
          </p>
          <p className="font-semibold text-lighter text-sm mt-auto">
            — {item.author}
          </p>
        </div>
      ))}
    </div>
  );
}
