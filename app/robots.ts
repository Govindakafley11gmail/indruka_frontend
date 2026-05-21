export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/dashboard/",
      ],
    },
    sitemap: "https://indrukatours.com/sitemap.xml",
  };
}