import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { services, PRIORITY_SERVICE_IDS } from "@/data/services";
import { cities } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages
  const corePages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/method`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/texas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/subcontractors`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Resource/blog pages
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/resources/how-to-choose-a-contractor-in-texas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/resources/licensed-trades-in-texas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/resources/how-subcontractors-get-steady-work`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Service hub pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // City hub pages
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/texas/${city.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Service x City leaf pages (customer)
  const serviceCityPages: MetadataRoute.Sitemap = [];
  for (const city of cities) {
    for (const serviceId of PRIORITY_SERVICE_IDS) {
      serviceCityPages.push({
        url: `${SITE_URL}/texas/${city.id}/${serviceId}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // Subcontractor city hubs
  const subCityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${SITE_URL}/subcontractors/${city.id}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Subcontractor trade x city leaves
  const subTradeCityPages: MetadataRoute.Sitemap = [];
  for (const city of cities) {
    for (const serviceId of PRIORITY_SERVICE_IDS) {
      subTradeCityPages.push({
        url: `${SITE_URL}/subcontractors/${city.id}/${serviceId}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return [
    ...corePages,
    ...resourcePages,
    ...servicePages,
    ...cityPages,
    ...serviceCityPages,
    ...subCityPages,
    ...subTradeCityPages,
  ];
}
