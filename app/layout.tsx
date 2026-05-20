import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO METADATA (correct and optimized)
export const metadata: Metadata = {
  title: {
    template: "%s | Indruka Tours and Travels",
    default: "Bhutan Tour Packages & Travel Agency | Indruka Tours and Travels",
  },
  description:
    "Discover Bhutan with Indruka Tours and Travels. We offer customized Bhutan cultural tours, trekking packages, and authentic travel experiences.",

  metadataBase: new URL("https://indrukatours.com"),

  alternates: {
    canonical: "https://indrukatours.com/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  keywords: [
    "Indruka Tours and Travels",
    "Bhutan travel agency",
    "Bhutan tour packages",
    "Travel to Bhutan",
    "Bhutan trekking tours",
    "Thimphu tour operator",
    "Paro holiday packages",
    "Bhutan cultural tours",
    "Book Bhutan trip",
    "Bhutan luxury travel",
  ],

  openGraph: {
    title: "Bhutan Tour Packages & Travel Agency | Indruka Tours and Travels",
    description:
      "Discover Bhutan with Indruka Tours and Travels. Book customized cultural and trekking tours.",
    url: "https://indrukatours.com",
    siteName: "Indruka Tours and Travels",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/punakhadzong.jpg",
        width: 1200,
        height: 630,
        alt: "Beautiful Bhutan landscape by Indruka Tours and Travels",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ✅ JSON-LD SCHEMA (IMPORTANT FOR GOOGLE) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Indruka Tours and Travels",
              url: "https://indrukatours.com",
              description:
                "Indruka Tours and Travels offers Bhutan cultural tours, trekking packages, and customized travel experiences.",
              areaServed: "Bhutan",
              knowsAbout: [
                "Bhutan Tours",
                "Trekking in Bhutan",
                "Cultural Travel",
                "Holiday Packages",
              ],
            }),
          }}
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}