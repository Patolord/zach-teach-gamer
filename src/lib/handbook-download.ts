import { issueSignedToken, presignUrl } from "@vercel/blob";

const handbookBlobPath = process.env.HANDBOOK_BLOB_PATH;

export async function getHandbookDownloadUrl() {
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

export function isHandbookBlobConfigured() {
  return Boolean(handbookBlobPath);
}
