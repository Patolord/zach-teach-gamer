import { Star } from "lucide-react";

const STARS = [1, 2, 3, 4, 5] as const;

type StarRatingProps = {
  /** Tailwind size classes for each star, e.g. "w-5 h-5" */
  className?: string;
};

/** Five filled accent stars, used by review/testimonial cards. */
export default function StarRating({ className = "w-5 h-5" }: StarRatingProps) {
  return (
    <>
      {STARS.map((n) => (
        <Star key={n} className={`${className} text-accent fill-accent`} />
      ))}
    </>
  );
}
