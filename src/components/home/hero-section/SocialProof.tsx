import { useTranslations } from "next-intl";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  {
    seed: "1",
    fallback: "TG",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    seed: "2",
    fallback: "JD",
    gradient: "from-amber-400 to-amber-500",
  },
  {
    seed: "3",
    fallback: "SK",
    gradient: "from-amber-400 to-amber-500",
  },
  {
    seed: "4",
    fallback: "MR",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    seed: "5",
    fallback: "AL",
    gradient: "from-indigo-500 to-blue-600",
  },
];

type SocialProofProps = {
  align?: "left" | "center";
  variant?: "light" | "dark";
};

export default function SocialProof({
  align = "center",
  variant = "dark",
}: SocialProofProps) {
  const t = useTranslations("home.socialProof");
  const alignmentClass = align === "left" ? "items-start" : "items-center";
  const isLight = variant === "light";

  return (
    <div className={`flex flex-col ${alignmentClass} gap-3 mt-2`}>
      {/* Avatar Group */}
      <div className="flex items-center -space-x-3">
        {avatars.map((avatar, index) => (
          <Avatar
            key={avatar.seed}
            className={`w-12 h-12 border-2 ${isLight ? "border-gray-200" : "border-white"}`}
          >
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar.seed}`}
              alt={t("avatarAlt", { n: index + 1 })}
              loading="lazy"
              fetchPriority="low"
            />
            <AvatarFallback
              className={`bg-gradient-to-br ${avatar.gradient} text-white font-semibold`}
            >
              {avatar.fallback}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>

      {/* Social Proof Text */}
      <div className={`flex flex-col ${alignmentClass} gap-1`}>
        <div className="flex items-center gap-1">
          <span className={isLight ? "text-yellow-600" : "text-yellow-400"}>
            ★★★★★
          </span>
        </div>
        <p className={`text-sm ${isLight ? "text-gray-700" : "text-gray-300"}`}>
          {t.rich("text", {
            strong: (chunks) => (
              <span
                className={`font-bold ${isLight ? "text-gray-900" : "text-white"}`}
              >
                {chunks}
              </span>
            ),
          })}
        </p>
      </div>
    </div>
  );
}
