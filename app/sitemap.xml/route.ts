// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // 🌟 WRITE YOUR XML TEXT INSIDE THESE BACKTICKS (``) BELOW:
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://sitemaps.org">
    
    <!-- 1. Homepage -->
    <url>
      <loc>https://indrukatours.com</loc>
      <changefreq>daily</changefreq>
      <priority>1.0</priority>
    </url>

    <!-- 2. About Page -->
    <url>
      <loc>https://indrukatours.comabout</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>

    <!-- 3. Contact Page -->
    <url>
      <loc>https://indrukatours.com/contact</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>

    <!-- 4. Cultural Tours Package Page -->
    <url>
      <loc>https://indrukatours.com/tours</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>

    <!-- 5. Trekking Tours Package Page -->
    <url>
      <loc>https://indrukatours.com/tours?country=Bhutan</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>

    <!-- 6. Luxury Travel Page -->
    <url>
      <loc>https://indrukatours.com/tours?country=India</loc>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>

  </urlset>`;

  // This returns the text data straight to the browser with the correct format header
  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml', 
    },
  });
}