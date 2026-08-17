import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/sitemap-jobs.xml`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/sitemap-locations.xml`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/sitemap-professions.xml`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/sitemap-companies.xml`,
      lastModified: new Date(),
    },
  ];
}
