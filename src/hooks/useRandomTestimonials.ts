"use client";

import { useEffect, useState } from "react";
import {
  pickRandomTestimonial,
  pickUniqueRandomTestimonials,
  type Testimonial,
  type TestimonialTag,
} from "@/lib/testimonials";

const ALL = "all";

/**
 * Callers pass tag arrays inline, so the array identity changes every render.
 * Collapse it to a string key and rebuild the array inside the effect so the
 * effect only re-runs when the tags actually change.
 */
function tagsKey(tags?: readonly TestimonialTag[]) {
  return tags?.join("|") ?? ALL;
}

function tagsFromKey(key: string): TestimonialTag[] | undefined {
  return key === ALL ? undefined : (key.split("|") as TestimonialTag[]);
}

export function useRandomTestimonial(tags?: readonly TestimonialTag[]) {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);
  const key = tagsKey(tags);

  useEffect(() => {
    setTestimonial(pickRandomTestimonial(tagsFromKey(key)));
  }, [key]);

  return testimonial;
}

export function useRandomTestimonials(
  count: number,
  tags?: readonly TestimonialTag[],
) {
  const [items, setItems] = useState<Testimonial[]>([]);
  const key = tagsKey(tags);

  useEffect(() => {
    setItems(pickUniqueRandomTestimonials(count, tagsFromKey(key)));
  }, [count, key]);

  return items;
}
