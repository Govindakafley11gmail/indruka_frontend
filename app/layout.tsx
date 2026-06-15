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
    default: "Book Bhutan Tours – Licensed Local Guide | Indruka Tours",
  },

  description:
    "Plan your Bhutan trip with a licensed local expert. Cultural tours, Tiger's Nest treks, festival packages & luxury stays. Land entry via Phuentsholing. Trusted by travelers from the USA, India & Canada. Get a free custom quote today!",

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
    "book Bhutan tour online",
    "Bhutan tour package price",
    "Bhutan guided tour",
    "Bhutan travel 2025",
    "Bhutan travel 2026",
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
    title: "Book Bhutan Tours – Licensed Local Guide | Indruka Tours",
    description:
      "Trusted Bhutan travel agency for travelers from the USA, India & Canada. Tiger's Nest treks, cultural tours & festival packages — fully customized. Get your free quote today!",
    url: "https://www.indrukatours.com",
    siteName: "Indruka Tours and Travels",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.indrukatours.com/punakhadzong.jpg",
        width: 1200,
        height: 630,
        alt: "Punakha Dzong Bhutan – Indruka Tours and Travels",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Book Bhutan Tours – Licensed Local Guide | Indruka Tours",
    description:
      "Trusted Bhutan travel agency for travelers from the USA, India & Canada. Tiger's Nest treks, cultural tours & festival packages — fully customized. Get your free quote today!",
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
      "Licensed Bhutan travel agency offering cultural tours, trekking, festival tours, and luxury travel experiences. Land entry via Phuentsholing. Serving travelers from the USA, India, Canada, and beyond.",
    telephone: "+97577367954",
    email: "indruka2026@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Phuentsholing",
      addressLocality: "Phuentsholing",
      addressRegion: "Chukha",
      addressCountry: "BT",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+97577367954",
        contactType: "customer service",
        areaServed: ["US", "IN", "CA", "GB", "AU", "DE"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+97577367954",
        contactType: "reservations",
        areaServed: ["US", "IN", "CA", "GB", "AU", "DE"],
        availableLanguage: ["English"],
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Bhutan" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "United Kingdom" },
    ],
    // Only real social links — fake YouTube removed
    sameAs: [
      "https://www.facebook.com/indrukatours",
      "https://www.instagram.com/indrukatours",
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
    // NEW: Booking/offer schema to signal booking intent to Google
    makesOffer: [
      {
        "@type": "Offer",
        name: "Bhutan Cultural Tour Package",
        description:
          "Guided cultural tour of Bhutan including Thimphu, Paro, and Tiger's Nest Monastery. Customized itineraries for individuals and groups.",
        url: "https://www.indrukatours.com",
        seller: {
          "@type": "TravelAgency",
          name: "Indruka Tours and Travels",
        },
      },
      {
        "@type": "Offer",
        name: "Bhutan Trekking Tour Package",
        description:
          "Guided trekking tours in Bhutan including Tiger's Nest and Druk Path Trek. Suitable for all fitness levels.",
        url: "https://www.indrukatours.com",
        seller: {
          "@type": "TravelAgency",
          name: "Indruka Tours and Travels",
        },
      },
      {
        "@type": "Offer",
        name: "Bhutan Festival Tour Package",
        description:
          "Experience Bhutan's famous Tshechu festivals including Paro Tshechu and Thimphu Tshechu with a licensed local guide.",
        url: "https://www.indrukatours.com",
        seller: {
          "@type": "TravelAgency",
          name: "Indruka Tours and Travels",
        },
      },
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