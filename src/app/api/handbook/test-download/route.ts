import { NextResponse } from "next/server";
import {
  getHandbookDownloadUrl,
  isHandbookBlobConfigured,
} from "@/lib/handbook-download";

export async function GET() {
  const configured = isHandbookBlobConfigured();

  if (!configured) {
    return NextResponse.json(
      {
        ok: false,
        configured,
        error: "HANDBOOK_BLOB_PATH is not configured",
      },
      { status: 500 },
    );
  }

  try {
    const downloadUrl = await getHandbookDownloadUrl();

    return NextResponse.json({
      ok: true,
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
