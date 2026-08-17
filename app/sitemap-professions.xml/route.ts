import { NextResponse } from "next/server";
import {
  PROFESSION_SLUGS,
  SITE_URL,
  getJobsByProfession,
  isProfessionIndexable,
} from "@/lib/data";

export async function GET() {
  const now = new Date();
  const urls = Object.keys(PROFESSION_SLUGS)
    .filter((slug) => {
      const activeCount = getJobsByProfession(slug).filter(
        (j) => new Date(j.validThrough) >= now
      ).length;
      return isProfessionIndexable(slug, activeCount);
    })
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
