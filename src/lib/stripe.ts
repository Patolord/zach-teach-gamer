import Stripe from "stripe";

/**
 * Pinned to the current stable Stripe API version.
 * Source: https://docs.stripe.com/api/versioning (2026-10-28.endive).
 * Stripe Node 23.1.0 bundles this same version.
 */
export const stripeApiVersion = "2026-10-28.endive" as const;

export function createStripeClient(secretKey: string) {
  return new Stripe(secretKey, {
    apiVersion: stripeApiVersion,
  });
}
