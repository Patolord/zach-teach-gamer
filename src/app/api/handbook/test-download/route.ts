import { NextResponse } from "next/server";
import {
  downloadableProductTypes,
  getProductDownloadUrl,
  getHandbookDownloadUrl,
  isDownloadableProductType,
  isHandbookBlobConfigured,
  isProductBlobConfigured,
} from "@/lib/handbook-download";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const productType = url.searchParams.get("productType") ?? "handbook";

  if (!isDownloadableProductType(productType)) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error: `Unsupported productType. Use one of: ${downloadableProductTypes.join(", ")}`,
      },
      { status: 400 },
    );
  }

  const configured =
    productType === "handbook"
      ? isHandbookBlobConfigured()
      : isProductBlobConfigured(productType);

  if (!configured) {
    return NextResponse.json(
      {
        ok: false,
        productType,
        configured,
        error: `${productType} Blob path is not configured`,
      },
      { status: 500 },
    );
  }

  try {
    const downloadUrl =
      productType === "handbook"
        ? await getHandbookDownloadUrl()
        : await getProductDownloadUrl(productType);

    return NextResponse.json({
      ok: true,
      productType,
      configured,
      downloadUrl,
      message: "Temporary private download URL generated successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        configured,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
