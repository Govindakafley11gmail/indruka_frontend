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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.indrukatours.com"),

  title: {
    template: "%s | Indruka Tours and Travels",
    default:
      "Bhutan Travel Agency, Tour Operator & Holiday Packages | Indruka Tours and Travels",
  },

  description:
    "Indruka Tours and Travels is a trusted Bhutan travel agency and tour operator offering Bhutan tour packages, cultural tours, trekking adventures, luxury holidays, festival tours, and customized trips to Paro, Thimphu, Punakha, Bumthang, and Tiger's Nest Monastery.",

  keywords: [
    "Bhutan Travel Agency",
    "Bhutan Tour Operator",
    "Bhutan Tour Packages",
    "Bhutan Holiday Packages",
    "Bhutan Cultural Tours",
    "Bhutan Trekking Tours",
    "Bhutan Luxury Tours",
    "Bhutan Festival Tours",
    "Tiger Nest Bhutan Tour",
    "Paro Bhutan Tour",
    "Thimphu Bhutan Tour",
    "Punakha Bhutan Tour",
    "Bumthang Tour",
    "Bhutan Vacation Packages",
    "Best Bhutan Travel Agency",
    "Bhutan Tourism",
    "Travel Bhutan",
  ],

  alternates: {
    canonical: "https://www.indrukatours.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title:
      "Bhutan Travel Agency, Tour Operator & Holiday Packages | Indruka Tours and Travels",
    description:
      "Discover Bhutan through cultural tours, trekking adventures, festival tours, and customized Bhutan holiday packages.",
    url: "https://www.indrukatours.com",
    siteName: "Indruka Tours and Travels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.indrukatours.com/punakhadzong.jpg",
        width: 1200,
        height: 630,
        alt: "Bhutan Travel Agency - Indruka Tours and Travels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Bhutan Travel Agency, Tour Operator & Holiday Packages | Indruka Tours and Travels",
    description:
      "Explore Bhutan with customized cultural tours, trekking adventures, and holiday packages.",
    images: ["https://www.indrukatours.com/punakhadzong.jpg"],
  },

  category: "Travel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",

    name: "Indruka Tours and Travels",

    url: "https://www.indrukatours.com",

    logo: "https://www.indrukatours.com/indrukalogo.png",

    image: "https://www.indrukatours.com/punakhadzong.jpg",

    description:
      "Trusted Bhutan travel agency offering Bhutan tour packages, trekking tours, cultural tours, festival tours, and luxury travel experiences.",

    telephone: "+97577367954",

    email: "indruka2026@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Thimphu",
      addressRegion: "Thimphu",
      addressCountry: "BT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+97577367954",
      contactType: "customer service",
      areaServed: "BT",
      availableLanguage: ["English"],
    },
    areaServed: {
      "@type": "Country",
      name: "Bhutan",
    },

    sameAs: [
      "https://www.facebook.com/indrukatours",
      "https://www.instagram.com/indrukatours",
      "https://www.linkedin.com/indrukatours",
      "https://www.youtube.com/channel/UC9X5q8v4V4V4V4V4V4V4V4",
    ],

    knowsAbout: [
      "Bhutan Tour Packages",
      "Bhutan Travel Agency",
      "Bhutan Tour Operator",
      "Bhutan Cultural Tours",
      "Bhutan Trekking Tours",
      "Bhutan Festival Tours",
      "Tiger's Nest Monastery",
      "Paro Travel",
      "Thimphu Travel",
      "Punakha Tours",
      "Bumthang Tours",
      "Luxury Bhutan Holidays",
      "Bhutan Tourism",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}