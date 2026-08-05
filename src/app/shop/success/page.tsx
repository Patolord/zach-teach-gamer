import { CheckCircle, Download } from "lucide-react";
import Link from "next/link";
import Stripe from "stripe";
import { Button } from "@/components/ui/button";
import { getHandbookDownloadUrl } from "@/lib/handbook-download";
import { MEDIA } from "@/lib/media";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

type SuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

async function getSessionState(sessionId?: string) {
  if (!sessionId || !stripeSecretKey) {
    return { handbookDownloadUrl: null, isHandbookPurchase: false };
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-02-25.clover",
  });

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const isHandbookPurchase = session.metadata?.productType === "handbook";
    const isPaid = session.payment_status === "paid";

    if (isHandbookPurchase && isPaid) {
      const handbookDownloadUrl = await getHandbookDownloadUrl();
      return { handbookDownloadUrl, isHandbookPurchase: true };
    }

    return { handbookDownloadUrl: null, isHandbookPurchase };
  } catch (error) {
    console.error("Failed to load Stripe success session:", error);
    return { handbookDownloadUrl: null, isHandbookPurchase: false };
  }
}

export default async function SuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams;
  const { handbookDownloadUrl, isHandbookPurchase } =
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
            Payment Successful!
          </h1>

          <p className="text-white/80 text-lg">
            {handbookDownloadUrl
              ? "Your handbook is ready. Use the button below to download your private copy."
              : isHandbookPurchase
                ? "We confirmed your handbook purchase, but the download link is not ready yet. Please contact support if this does not resolve shortly."
                : "Thank you for your purchase! Your payment was completed successfully."}
          </p>

          <div className="pt-4 space-y-3">
            {handbookDownloadUrl ? (
              <Button
                size="lg"
                className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold"
                asChild
              >
                <a href={handbookDownloadUrl} target="_blank" rel="noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </a>
              </Button>
            ) : null}

            <Button
              size="lg"
              className="w-full bg-amber-400 hover:bg-amber-300 text-zinc-900 font-bold"
              asChild
            >
              <Link href="/shop">Continue Shopping</Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 font-bold"
              asChild
            >
              <Link href="/home">Back to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
