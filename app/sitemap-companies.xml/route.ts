import { NextResponse } from "next/server";
import { COMPANIES, SITE_URL } from "@/lib/data";

export async function GET() {
  const urls = COMPANIES.map(
    (c) =>
      `  <url>
    <loc>${SITE_URL}/firma/${c.slug}/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
