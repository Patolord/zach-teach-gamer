import { NextResponse } from "next/server";

export const runtime = "edge";

const BASE = "https://api.counterapi.dev/v2";

function getConfig() {
  const workspace = process.env.COUNTERAPI_WORKSPACE;
  const counter = process.env.COUNTERAPI_COUNTER;
  const token = process.env.COUNTERAPI_TOKEN;
  if (!workspace || !counter || !token) return null;
  return { workspace, counter, token };
}

async function callCounterApi(
  cfg: { workspace: string; counter: string; token: string },
  action: "up" | "get",
): Promise<number> {
  const path = action === "up" ? "/up" : "";
  const url = `${BASE}/${cfg.workspace}/${cfg.counter}${path}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${cfg.token}` },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`counterapi ${res.status}: ${await res.text()}`);
  }
  const json = (await res.json()) as {
    data?: { up_count?: number; count?: number; value?: number };
  };
  return Number(json?.data?.up_count ?? json?.data?.count ?? json?.data?.value ?? 0);
}

export async function GET() {
  const cfg = getConfig();
  if (!cfg) {
    console.error("Missing CounterAPI env vars");
    return NextResponse.json({ count: 0 });
  }
  try {
    const count = await callCounterApi(cfg, "get");
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error reading visitor count:", error);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST() {
  const cfg = getConfig();
  if (!cfg) {
    console.error("Missing CounterAPI env vars");
    return NextResponse.json({ count: 0 });
  }
  try {
    const count = await callCounterApi(cfg, "up");
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Error incrementing visitor count:", error);
    try {
      const count = await callCounterApi(cfg, "get");
      return NextResponse.json({ count });
    } catch {
      return NextResponse.json({ count: 0 });
    }
  }
}
