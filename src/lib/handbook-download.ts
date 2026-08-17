import { issueSignedToken, presignUrl } from "@vercel/blob";

export const downloadableProductTypes = [
  "handbook",
  "screen_landscape",
  "screen_portrait",
] as const;

export type DownloadableProductType =
  (typeof downloadableProductTypes)[number];

const downloadableProducts: Record<
  DownloadableProductType,
  { blobPath: string | undefined; envName: string; label: string }
> = {
  handbook: {
    blobPath: process.env.HANDBOOK_BLOB_PATH,
    envName: "HANDBOOK_BLOB_PATH",
    label: "handbook",
  },
  screen_landscape: {
    blobPath: process.env.TG_SCREEN_LANDSCAPE_BLOB_PATH,
    envName: "TG_SCREEN_LANDSCAPE_BLOB_PATH",
    label: "landscape screen PDF",
  },
  screen_portrait: {
    blobPath: process.env.TG_SCREEN_PORTRAIT_BLOB_PATH,
    envName: "TG_SCREEN_PORTRAIT_BLOB_PATH",
    label: "portrait screen PDF",
  },
};

export function isDownloadableProductType(
  productType: string | undefined,
): productType is DownloadableProductType {
  return downloadableProductTypes.includes(
    productType as DownloadableProductType,
  );
}

export function getDownloadableProductLabel(
  productType: DownloadableProductType,
) {
  return downloadableProducts[productType].label;
}

export async function getProductDownloadUrl(
  productType: DownloadableProductType,
) {
  const product = downloadableProducts[productType];

  if (!product.blobPath) {
    throw new Error(`${product.envName} is not configured`);
  }

  const signedToken = await issueSignedToken({
    pathname: product.blobPath,
    operations: ["get"],
  });

  const validUntil = Date.now() + 1000 * 60 * 60 * 24 * 7;

  const { presignedUrl } = await presignUrl(signedToken, {
    access: "private",
    operation: "get",
    pathname: product.blobPath,
    validUntil,
  });

  return presignedUrl;
}

export async function getHandbookDownloadUrl() {
  return getProductDownloadUrl("handbook");
}

export function isHandbookBlobConfigured() {
  return isProductBlobConfigured("handbook");
}

export function isProductBlobConfigured(productType: DownloadableProductType) {
  return Boolean(downloadableProducts[productType].blobPath);
}
