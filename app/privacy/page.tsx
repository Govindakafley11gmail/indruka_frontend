// app/privacy-policy/page.tsx
// Next.js App Router page — just drop this in your app directory.

import type { Metadata } from "next";
import { PrivacyPage } from "./PrivacyPage";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Indruka Tours and Travels",
  description:
    "Read the Privacy Policy for Indruka Tours and Travels — Bhutan's premier licensed travel specialist.",
};

export default function PrivacyPolicyPage() {
  return (
  <>

    <Navbar isActive={false} />
     <PrivacyPage />
     <Footer/>
  </>
  );
}
