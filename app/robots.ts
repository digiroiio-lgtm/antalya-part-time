import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/hesap/", "/giris/", "/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
