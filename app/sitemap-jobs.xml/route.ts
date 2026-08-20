import { NextResponse } from "next/server";
import { JOBS, buildJobSlug, SITE_URL } from "@/lib/data";

export async function GET() {
  const now = new Date();
  const activeJobs = JOBS.filter((j) => new Date(j.validThrough) >= now);

  const urls = activeJobs
    .map(
      (job) =>
        `  <url>
    <loc>${SITE_URL}/ilan/${buildJobSlug(job)}/</loc>
    <lastmod>${new Date(job.postedAt).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
