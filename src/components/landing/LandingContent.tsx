import { Loader2, Swords } from "lucide-react";
import dynamic from "next/dynamic";
import ScrambledText from "@/components/shared/ScrambledText";

// Lazy load SocialProof to reduce initial bundle size
const SocialProof = dynamic(
  () => import("@/components/home/hero-section/SocialProof"),
  {
    ssr: false,
    loading: () => null,
  },
);

type Props = {
  onButtonClick?: () => void;
  isLoading?: boolean;
};

export default function LandingContent({
  onButtonClick,
  isLoading = false,
}: Props) {
  return (
    <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-4 w-full max-w-5xl mx-auto">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white px-2 sm:px-5 leading-tight text-shadow-hero">
        Teacher Gamer Revolution
      </h1>

      <div className="pb-30 text-lg sm:text-xl md:text-2xl px-2 text-center text-shadow-subtitle flex flex-col gap-2">
        <ScrambledText
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          The future of education is here,
        </ScrambledText>
        <ScrambledText
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          happening on tabletops & in schools everywhere.
        </ScrambledText>
        <ScrambledText
          radius={50}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Join the community and revolutionize the way we learn.
        </ScrambledText>
      </div>

      <button
        type="button"
        onClick={onButtonClick}
        disabled={isLoading}
        className="text-base sm:text-lg font-semibold py-3 px-8 uppercase tracking-wider flex items-center gap-2 cursor-pointer transition-all duration-300 rounded-lg border-2 border-primary-light bg-transparent text-white btn-3d hover:bg-primary-subtle disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:translate-y-0 active:scale-95"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Swords className="w-5 h-5" />
        )}
        <span>{isLoading ? "Loading..." : "Get Started Now"}</span>
      </button>

      <SocialProof />
    </div>
  );
}
