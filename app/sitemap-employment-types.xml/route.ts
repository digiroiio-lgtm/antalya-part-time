import { NextResponse } from "next/server";
import { EMPLOYMENT_TYPE_SLUGS, GEO_SLUGS, SITE_URL } from "@/lib/data";

export async function GET() {
  const topLevel = Object.keys(EMPLOYMENT_TYPE_SLUGS).map(
    (slug) =>
      `  <url>
    <loc>${SITE_URL}/${slug}-is-ilanlari/</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  );

  const geoCombos = Object.keys(GEO_SLUGS).flatMap((geo) =>
    Object.keys(EMPLOYMENT_TYPE_SLUGS).map(
      (et) =>
        `  <url>
    <loc>${SITE_URL}/${geo}/${et}-is-ilanlari/</loc>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>`
    )
  );

  const urls = [...topLevel, ...geoCombos].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
