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

// ✅ GLOBAL SEO (Root Layout - brand only)
export const metadata: Metadata = {
  metadataBase: new URL("https://indrukatours.com"),

  title: {
    template: "%s | Indruka Tours and Travels",
    default: "Bhutan Tours & Travels Agency | Indruka Tours and Travels",
  },

  description:
    "Discover Bhutan with Indruka Tours and Travels. We offer customized Bhutan cultural tours, trekking packages, and authentic Himalayan travel experiences.",

  // ✅ FIXED canonical (correct Next.js way)
  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  // ⚠️ keywords (optional, Google mostly ignores)
  keywords: [
    "Bhutan travel agency",
    "Bhutan tour packages",
    "Bhutan trekking tours",
    "Paro Bhutan tours",
    "Thimphu Bhutan travel",
    "Bhutan cultural tours",
    "Himalayan travel Bhutan",
  ],

  openGraph: {
    title: "Bhutan Tours & Travels Agency | Indruka Tours and Travels",
    description:
      "Discover Bhutan with Indruka Tours and Travels. Book cultural tours, trekking packages, and Himalayan adventures.",
    url: "https://indrukatours.com",
    siteName: "Indruka Tours and Travels",
    locale: "en_US",
    type: "website",

    // ✅ FIXED (must be absolute URL)
    images: [
      {
        url: "https://indrukatours.com/punakhadzong.jpg",
        width: 1200,
        height: 630,
        alt: "Bhutan Tours by Indruka Tours and Travels",
      },
    ],
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
        {/* ✅ GLOBAL JSON-LD STRUCTURED DATA (SEO BOOST) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Indruka Tours and Travels",
              url: "https://indrukatours.com",
              description:
                "Bhutan travel agency offering cultural tours, trekking packages, and customized Himalayan experiences.",
              areaServed: {
                "@type": "Country",
                name: "Bhutan",
              },
              knowsAbout: [
                "Bhutan Tours",
                "Trekking in Bhutan",
                "Cultural Travel",
                "Himalayan Tourism",
                "Tour Packages",
              ],
            }),
          }}
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}