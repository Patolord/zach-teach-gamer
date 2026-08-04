import { issueSignedToken, presignUrl } from "@vercel/blob";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const handbookBlobPath = process.env.HANDBOOK_BLOB_PATH;
const resendApiKey = process.env.RESEND_API_KEY;
const orderConfirmFromEmail = process.env.ORDER_CONFIRM_FROM_EMAIL;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY environment variable is not set");
}

if (!stripeWebhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET environment variable is not set");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2026-02-25.clover",
});
const verifiedWebhookSecret = stripeWebhookSecret;

async function getHandbookDownloadUrl() {
  if (!handbookBlobPath) {
    throw new Error("HANDBOOK_BLOB_PATH is not configured");
  }

  const signedToken = await issueSignedToken({
    pathname: handbookBlobPath,
    operations: ["get"],
  });

  const validUntil = Date.now() + 1000 * 60 * 60 * 24 * 7;

  const { presignedUrl } = await presignUrl(signedToken, {
    access: "private",
    operation: "get",
    pathname: handbookBlobPath,
    validUntil,
  });

  return presignedUrl;
}

async function sendHandbookEmail(email: string) {
  if (!resendApiKey || !orderConfirmFromEmail) {
    console.warn(
      "RESEND_API_KEY or ORDER_CONFIRM_FROM_EMAIL is missing; webhook confirmed payment but no custom email was sent",
    );
    return;
  }

  const handbookDownloadUrl = await getHandbookDownloadUrl();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: orderConfirmFromEmail,
      to: [email],
      subject: "Your Teacher-Gamer Handbook PDF",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <p>Hi there,</p>
          <p>Thanks for purchasing <strong>The Teacher-Gamer Handbook</strong>.</p>
          <p>You can download your PDF here:</p>
          <p><a href="${handbookDownloadUrl}">${handbookDownloadUrl}</a></p>
          <p>This private download link expires in 7 days.</p>
          <p>If you have any trouble accessing it, just reply to this email and we will help.</p>
          <p>Best,<br />Teacher-Gamer</p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send handbook email: ${errorText}`);
  }
}

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      payload,
      signature,
      verifiedWebhookSecret,
    );
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error);
    return NextResponse.json(
      { error: "Invalid webhook signature" },
      { status: 400 },
    );
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const productType = session.metadata?.productType;
      const email = session.customer_details?.email ?? session.customer_email;

      if (productType === "handbook" && email) {
        await sendHandbookEmail(email);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 },
    );
  }
}
