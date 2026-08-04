import { issueSignedToken, presignUrl } from "@vercel/blob";
import { NextResponse } from "next/server";

const handbookBlobPath = process.env.HANDBOOK_BLOB_PATH;
const resendApiKey = process.env.RESEND_API_KEY;
const orderConfirmFromEmail = process.env.ORDER_CONFIRM_FROM_EMAIL;

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
    throw new Error(
      "RESEND_API_KEY or ORDER_CONFIRM_FROM_EMAIL is missing",
    );
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
      subject: "Test: Your Teacher-Gamer Handbook PDF",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <p>This is a test delivery for <strong>The Teacher-Gamer Handbook</strong>.</p>
          <p>Your PDF link is:</p>
          <p><a href="${handbookDownloadUrl}">${handbookDownloadUrl}</a></p>
        </div>
      `,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send handbook email: ${errorText}`);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const sendEmail = searchParams.get("sendEmail") === "true";

  const config = {
    handbookBlobPathConfigured: Boolean(handbookBlobPath),
    resendConfigured: Boolean(resendApiKey),
    fromEmailConfigured: Boolean(orderConfirmFromEmail),
  };

  if (!sendEmail) {
    return NextResponse.json({
      ok: true,
      mode: "dry-run",
      config,
      message:
        "Webhook test route is live. Add ?sendEmail=true&email=you@example.com to send a real test email.",
    });
  }

  if (!email) {
    return NextResponse.json(
      {
        ok: false,
        mode: "send-email",
        config,
        error: "Missing email query parameter",
      },
      { status: 400 },
    );
  }

  try {
    await sendHandbookEmail(email);

    return NextResponse.json({
      ok: true,
      mode: "send-email",
      config,
      email,
      message: "Test handbook email sent successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        mode: "send-email",
        config,
        email,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
