import { CheckCircle, Download } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Stripe from "stripe";
import { Button } from "@/components/ui/button";
import {
  type DownloadableProductType,
  getProductDownloadUrl,
  isDownloadableProductType,
} from "@/lib/handbook-download";
import { MEDIA } from "@/lib/media";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

type SessionState = {
  downloadUrl: string | null;
  downloadableType: DownloadableProductType | null;
  isDownloadablePurchase: boolean;
};

async function getSessionState(sessionId?: string): Promise<SessionState> {
  if (!sessionId || !stripeSecretKey) {
    return {
      downloadUrl: null,
      downloadableType: null,
      isDownloadablePurchase: false,
    };
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-02-25.clover",
  });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const productType = session.metadata?.productType;
    const isDownloadablePurchase = isDownloadableProductType(productType);
    const isPaid = session.payment_status === "paid";

    if (isDownloadablePurchase && isPaid) {
      return {
        downloadUrl: await getProductDownloadUrl(productType),
        downloadableType: productType,
        isDownloadablePurchase: true,
      };
    }

    return {
      downloadUrl: null,
      downloadableType: null,
      isDownloadablePurchase,
    };
  } catch (error) {
    console.error("Failed to load Stripe success session:", error);
    return {
      downloadUrl: null,
      downloadableType: null,
      isDownloadablePurchase: false,
    };
  }
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const t = await getTranslations("shop");
  const { session_id: sessionId } = await searchParams;
  const { downloadUrl, downloadableType, isDownloadablePurchase } =
    await getSessionState(sessionId);

  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${MEDIA.backgrounds.hero}')` }}
      />
      <div className="fixed inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4 max-w-xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20 space-y-6">
          <div className="w-20 h-20 mx-auto bg-amber-400/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-amber-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {t("success.title")}
          </h1>

          <p className="text-white/80 text-lg">
            {downloadUrl && downloadableType
              ? t("success.ready", {
                  product: t(`success.productLabels.${downloadableType}`),
                })
              : isDownloadablePurchase
                ? t("success.pending")
                : t("success.thanks")}
          </p>

          <div className="pt-4 space-y-3">
            {downloadUrl && downloadableType ? (
              <Button
                size="lg"
                className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold"
                asChild
              >
                <a href={downloadUrl} target="_blank" rel="noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  {t("success.download")}
                </a>
              </Button>
            ) : null}

            <Button
              size="lg"
              className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold"
              asChild
            >
              <Link href="/shop">{t("success.continueShopping")}</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 font-bold"
              asChild
            >
              <Link href="/home">{t("backToHome")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
