import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
  remotePatterns: [
    { protocol: "https", hostname: "flagcdn.com" },
    { protocol: "https", hostname: "upload.wikimedia.org" }, // some countries still use this
  ],
},
};

export default nextConfig;
