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

// Optimized SEO Metadata for Indruka Tours and Travels
export const metadata: Metadata = {
  title: {
    template: "%s | Indruka Tours and Travels",
    default: "Bhutan Tour Packages & Travel Agency | Indruka Tours and Travels", 
  },
  description: "Discover the Land of the Thunder Dragon with Indruka Tours and Travels. We offer customized Bhutan cultural tours, trekking packages, and authentic travel experiences.",
  metadataBase: new URL("https://indrukatours.com"),
  alternates: {
    canonical: "/",
  },
  // Explicitly defining your favicon icon here
  icons: {
    icon: "/favicon.ico",
  },
 keywords: [
  "Indruka Tours and Travels", // 1. Your brand
  "Bhutan travel agency",       // 2. Main category
  "Bhutan tour packages",       // 3. Main service
  "Travel to Bhutan",           // 4. Broad intent
  "Bhutan trekking tours",      // 5. Niche activity
  "Thimphu tour operator",      // 6. Local search
  "Paro holiday packages",      // 7. Core destination
  "Bhutan cultural tours",      // 8. Popular trip type
  "Book Bhutan trip",           // 9. Actionable keyword
  "Bhutan luxury travel"        // 10. High-value keyword
],
  openGraph: {
    title: "Bhutan Tour Packages & Travel Agency | Indruka Tours and Travels",
    description: "Discover the Land of the Thunder Dragon with Indruka Tours and Travels. Book customized cultural and trekking tours.",
    url: "https://indrukatours.com",
    siteName: "Indruka Tours and Travels",
    locale: "en_BT",
    type: "website",
    images: [
      {
        url: "/punakhadzong.jpg", // Place your Bhutan image banner in your public/ folder
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
         <Providers>
            {children}
         </Providers>
      </body>
    </html>
  );
}