import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import ElectricBorder from "@/components/shared/ElectricBorder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EletricCardProps = {
  title: string;
  description: string;
  color: string;
  badge?: string;
  href?: string;
  diceImage?: string;
};

export default function EletricCard({
  title,
  description,
  color,
  badge: _badge,
  href,
  diceImage,
}: EletricCardProps) {
  const t = useTranslations("home.courses");

  return (
    <ElectricBorder
      color={color}
      speed={1}
      chaos={0.5}
      thickness={2}
      className="h-full"
      style={{ borderRadius: 16 }}
    >
      <Card className="border-0 h-full min-h-[400px] bg-black/50 backdrop-blur-sm flex flex-col rounded-2xl overflow-hidden text-lighter">
        <CardHeader className="relative pt-8">
          {diceImage && (
            <div className="absolute top-3 right-3 w-14 h-14 drop-shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-12 -z-10 opacity-70">
              <Image
                src={diceImage}
                alt={t("diceAlt")}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
          )}
          <CardTitle className="text-3xl mb-4 font-pirata-one pr-12 text-lighter">
            {title}
          </CardTitle>
          <CardDescription className="font-light text-base text-lighter">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="font-light text-base text-medium"></CardContent>
        <CardFooter className="mt-auto px-6">
          <Button
            variant="outline"
            className="w-full border-2 rounded-xl py-6 flex items-center justify-center gap-2 font-semibold transition-all duration-300 bg-transparent text-lighter hover:bg-opacity-20"
            style={{
              borderColor: color,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${color}20`;
              e.currentTarget.style.borderColor = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = color;
            }}
            asChild
          >
            <Link href={href || "#"}>
              {t("learnMore")}
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </ElectricBorder>
  );
}
