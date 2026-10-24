"use client";

import { XCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { MEDIA } from "@/lib/media";

export default function CancelPage() {
  const t = useTranslations("shop.cancel");

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
      />
      <div className="fixed inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 space-y-6">
          <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <XCircle className="w-10 h-10 text-red-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {t("title")}
          </h1>

          <p className="text-white/80 text-lg">{t("description")}</p>

          <div className="pt-4 space-y-3">
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent-dark text-background font-bold"
              asChild
            >
              <Link href="/shop">{t("tryAgain")}</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 font-bold"
              asChild
            >
              <Link href="/contact">{t("contactSupport")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
