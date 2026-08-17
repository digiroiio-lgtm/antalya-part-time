import { NextResponse } from "next/server";
import { PROFESSION_SLUGS, SITE_URL } from "@/lib/data";

export async function GET() {
  const urls = Object.keys(PROFESSION_SLUGS)
    .map(
      (slug) =>
        `  <url>
    <loc>${SITE_URL}/${slug}-is-ilanlari/</loc>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
