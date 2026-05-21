/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetadataRoute } from "next";
import { ALL_TOURS } from "./tours/[country]/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://indrukatours.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    ...ALL_TOURS.map((tour: any) => ({
      url: `${baseUrl}/view-details/${tour.seoMeta.slug}`,
      lastModified: new Date(),
    })),
  ];
}