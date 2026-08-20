import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/hakkimizda/`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/iletisim/`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/gizlilik/`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/kullanim-kosullari/`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/sitemap-employment-types.xml`,
      lastModified: new Date(),
    },
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

