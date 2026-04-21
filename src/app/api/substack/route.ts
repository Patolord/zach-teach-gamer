import { NextResponse } from "next/server";
import Parser from "rss-parser";

type CustomItem = {
  enclosure?: { url?: string };
  "content:encoded"?: string;
};

const parser: Parser<unknown, CustomItem> = new Parser({
  customFields: {
    item: ["enclosure", "content:encoded"],
  },
});

// Substack posts typically embed the cover image as the first <img> in the
// rendered HTML content. Fall back to the RSS <enclosure> when present.
function extractImage(item: Parser.Item & CustomItem): string | null {
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }

  const html = item["content:encoded"] || item.content || "";
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] ?? null;
}

export async function GET() {
  try {
    const feed = await parser.parseURL(
      "https://zacharyreznichek.substack.com/feed",
    );

    const posts = feed.items.map((item) => ({
      title: item.title || "",
      description: item.contentSnippet || item.content || "",
      link: item.link || "",
      pubDate: item.pubDate || "",
      image: extractImage(item),
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch RSS feed" },
      { status: 500 },
    );
  }
}
