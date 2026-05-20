export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
           // Hidden management dashboards
        "/dashboard/", // Hidden client portals
      ],
    },
    sitemap: "https://indrukatours.com/sitemap.xml",
  };
}