// app/terms-and-conditions/page.tsx
// Next.js App Router page — drop this in your app directory.

import type { Metadata } from "next";
import { TermsPage } from "./TermsPage";
import Navbar from "@/custom-components/navbar/navbar";
import Footer from "@/custom-components/footer/footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Indruka Tours and Travels",
  description:
    "Read the Terms and Conditions for Indruka Tours and Travels — Bhutan's premier licensed travel specialist.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
    
        <Navbar isActive={false} />
  <TermsPage />;
         <Footer/>
      </>
  )
  
}
