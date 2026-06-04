import {
  type Testimonial,
  type TestimonialTag,
  testimonials,
} from "@/data/testimonials";

export type { Testimonial, TestimonialTag };

export function shuffle<T>(items: readonly T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function filterTestimonials(tags?: readonly TestimonialTag[]): Testimonial[] {
  if (!tags?.length) return [...testimonials];
  return testimonials.filter((item) =>
    tags.some((tag) => item.tags.includes(tag)),
  );
}

export function pickRandomTestimonial(
  tags?: readonly TestimonialTag[],
): Testimonial | null {
  const pool = filterTestimonials(tags);
  if (!pool.length) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function pickRandomTestimonials(
  count: number,
  tags?: readonly TestimonialTag[],
): Testimonial[] {
  return shuffle(filterTestimonials(tags)).slice(0, count);
}

export function pickUniqueRandomTestimonials(
  count: number,
  tags?: readonly TestimonialTag[],
): Testimonial[] {
  const pool = shuffle(filterTestimonials(tags));
  return pool.slice(0, Math.min(count, pool.length));
}
