import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, type Locale, locales } from "@/i18n/config";
import { createStripeClient } from "@/lib/stripe";

/** Stable label so this shop flow can be compared in the Stripe Dashboard. */
const shopCheckoutIntegrationId = "teacher-gamer-shop-bvkqmwnx";

const workshopPriceId =
  process.env.STRIPE_LEVEL1_WORKSHOP_PRICE_ID ??
  "price_1To7HtIDMam6NySx5ztOftuW";
const productPriceEnv: Record<string, string | undefined> = {
  handbook: process.env.STRIPE_PRICE_ID,
  level1_workshop: workshopPriceId,
  screen_landscape: process.env.STRIPE_SCREEN_LANDSCAPE_PRICE_ID,
  screen_portrait: process.env.STRIPE_SCREEN_PORTRAIT_PRICE_ID,
};

function isLocale(value: string | null | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

function resolveCheckoutLocale(
  request: NextRequest,
  explicitLocale: string | null,
): Locale {
  if (isLocale(explicitLocale)) return explicitLocale;
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (isLocale(cookieLocale)) return cookieLocale;
  return defaultLocale;
}

function shopReturnUrl(
  origin: string,
  locale: Locale,
  page: "success" | "cancel",
) {
  const prefix = locale === "pt-BR" ? "/pt" : "";
  const session = page === "success" ? "?session_id={CHECKOUT_SESSION_ID}" : "";
  return `${origin}${prefix}/shop/${page}${session}`;
}

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

async function createCheckoutSession(
  request: NextRequest,
  productType: string,
  locale: Locale,
) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    throw new Error("Stripe checkout is not configured");
  }

  const stripe = createStripeClient(stripeSecretKey);
  const priceId = productPriceEnv[productType];

  if (!priceId) {
    throw new Error(`Price ID not configured for ${productType}`);
  }

  const origin = request.nextUrl.origin;

  return stripe.checkout.sessions.create({
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    customer_creation: "always",
    billing_address_collection: "auto",
    integration_identifier: shopCheckoutIntegrationId,
    metadata: {
      productType,
    },
    success_url: shopReturnUrl(origin, locale, "success"),
    cancel_url: shopReturnUrl(origin, locale, "cancel"),
  });
}

export async function GET(request: NextRequest) {
  try {
    const productType =
      request.nextUrl.searchParams.get("productType") ?? "handbook";
    const locale = resolveCheckoutLocale(
      request,
      request.nextUrl.searchParams.get("locale"),
    );
    const session = await createCheckoutSession(request, productType, locale);

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
      locale?: string;
      productType?: string;
    };
    const productType = body.productType ?? "handbook";
    const locale = resolveCheckoutLocale(request, body.locale ?? null);
    const session = await createCheckoutSession(request, productType, locale);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return checkoutErrorResponse(error);
  }
}
