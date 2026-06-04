"use client";

import { useEffect, useState } from "react";
import {
  type Testimonial,
  type TestimonialTag,
  pickRandomTestimonial,
  pickUniqueRandomTestimonials,
} from "@/lib/testimonials";

function tagsKey(tags?: readonly TestimonialTag[]) {
  return tags?.join("|") ?? "all";
}

export function useRandomTestimonial(tags?: readonly TestimonialTag[]) {
  const [testimonial, setTestimonial] = useState<Testimonial | null>(null);

  useEffect(() => {
    setTestimonial(pickRandomTestimonial(tags));
  }, [tagsKey(tags)]);

  return testimonial;
}

export function useRandomTestimonials(
  count: number,
  tags?: readonly TestimonialTag[],
) {
  const [items, setItems] = useState<Testimonial[]>([]);

  useEffect(() => {
    setItems(pickUniqueRandomTestimonials(count, tags));
  }, [count, tagsKey(tags)]);

  return items;
}
