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

export async function POST(request: NextRequest) {
  try {
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: "Stripe checkout is not configured" },
        { status: 500 },
      );
    }

    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2026-02-25.clover",
    });
    const body = (await request.json().catch(() => ({}))) as {
      productType?: string;
    };
    const productType = body.productType ?? "handbook";
    const priceId = productPriceEnv[productType];

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID not configured" },
        { status: 500 },
      );
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
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

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
