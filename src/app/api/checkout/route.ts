import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const workshopPriceId =
  process.env.STRIPE_LEVEL1_WORKSHOP_PRICE_ID ??
  "price_1To7HtIDMam6NySx5ztOftuW";
const productPriceEnv: Record<string, string | undefined> = {
  handbook: process.env.STRIPE_PRICE_ID,
  level1_workshop: workshopPriceId,
  screen_landscape: process.env.STRIPE_SCREEN_LANDSCAPE_PRICE_ID,
  screen_portrait: process.env.STRIPE_SCREEN_PORTRAIT_PRICE_ID,
};

function checkoutErrorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown error";
  const isProduction = process.env.VERCEL_ENV === "production";

  return NextResponse.json(
    {
      error: "Failed to create checkout session",
      ...(isProduction ? {} : { message }),
    },
    { status: 500 },
  );
}

async function createCheckoutSession(request: NextRequest, productType: string) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    throw new Error("Stripe checkout is not configured");
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2026-02-25.clover",
  });
  const priceId = productPriceEnv[productType];

  if (!priceId) {
    throw new Error("Price ID not configured");
  }

  const origin = request.headers.get("origin") || request.nextUrl.origin;

  return stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    customer_creation: "always",
    billing_address_collection: "auto",
    metadata: {
      productType,
    },
    success_url: `${origin}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/shop/cancel`,
  });
}

export async function GET(request: NextRequest) {
  try {
    const productType =
      request.nextUrl.searchParams.get("productType") ?? "handbook";
    const session = await createCheckoutSession(request, productType);

    if (!session.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    return NextResponse.redirect(session.url);
  } catch (error) {
    console.error("Stripe checkout redirect error:", error);
    return checkoutErrorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      productType?: string;
    };
    const productType = body.productType ?? "handbook";
    const session = await createCheckoutSession(request, productType);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return checkoutErrorResponse(error);
  }
}
