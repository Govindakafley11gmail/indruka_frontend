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
    template: "%s | Indruka Tours",
    default: "Bhutan Tour Packages & Cultural Holidays | Indruka Tours",
  },

  description:
    "Discover Bhutan with a licensed local expert. Cultural tours, treks, festival packages & luxury stays — customized for you. Land entry from Phuentsholing. Get a free quote today!",

  keywords: [
    "Bhutan Tour Packages",
    "Bhutan Travel Agency",
    "Bhutan Tour Operator",
    "Bhutan Cultural Tours",
    "Bhutan Trekking Tours",
    "Bhutan Luxury Tours",
    "Bhutan Festival Tours",
    "Bhutan Holiday Packages",
    "Tiger's Nest Bhutan Tour",
    "Paro Bhutan Tour",
    "Thimphu Bhutan Tour",
    "Punakha Bhutan Tour",
    "Bumthang Tour",
    "Bhutan Vacation Packages",
    "Bhutan Tourism",
    "Bhutan tour from USA",
    "Bhutan tour from India",
    "Bhutan travel from America",
    "best Bhutan tour operator",
    "licensed Bhutan tour operator",
    "Bhutan land entry Phuentsholing",
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
    title: "Bhutan Tour Packages & Cultural Holidays | Indruka Tours",
    description:
      "Discover Bhutan with a licensed local expert. Cultural tours, treks, festival packages & luxury stays — customized for you. Get a free quote today!",
    url: "https://www.indrukatours.com",
    siteName: "Indruka Tours and Travels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.indrukatours.com/punakhadzong.jpg",
        width: 1200,
        height: 630,
        alt: "Bhutan Tour Packages - Indruka Tours and Travels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhutan Tour Packages & Cultural Holidays | Indruka Tours",
    description:
      "Discover Bhutan with a licensed local expert. Cultural tours, treks, festival packages & luxury stays — customized for you. Get a free quote today!",
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
      "Licensed Bhutan travel agency offering cultural tours, trekking, festival tours, and luxury travel experiences. Land entry via Phuentsholing.",
    telephone: "+97577367954",
    email: "indruka2026@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Phuentsholing",
      addressLocality: "Phuentsholing",
      addressRegion: "Chukha",
      addressCountry: "BT",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+97577367954",
      contactType: "customer service",
      areaServed: ["US", "IN", "CA", "GB", "AU", "DE"],
      availableLanguage: ["English"],
    },
    areaServed: [
      { "@type": "Country", name: "Bhutan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Canada" },
    ],
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
      "Land Entry Phuentsholing",
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