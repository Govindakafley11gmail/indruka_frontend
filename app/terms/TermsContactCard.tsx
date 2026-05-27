// components/terms/TermsContactCard.tsx
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_NAME, COMPANY_PHONE } from "./termsData";

export function TermsContactCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 text-white shadow-lg">
      <h3 className="text-xl font-bold mb-1">Have a question?</h3>
      <p className="text-blue-200 text-sm mb-6">
        Our team at {COMPANY_NAME} is happy to clarify any part of these terms.
      </p>

      <div className="space-y-4">
        <a
          href={`mailto:${COMPANY_EMAIL}`}
          className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/20 transition-colors ring-1 ring-white/20"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-blue-200 font-medium">Email us</p>
            <p className="font-semibold">{COMPANY_EMAIL}</p>
          </div>
          <ExternalLink className="ml-auto h-3.5 w-3.5 text-blue-300" />
        </a>

        <a
          href={`tel:${COMPANY_PHONE}`}
          className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/20 transition-colors ring-1 ring-white/20"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-blue-200 font-medium">Call us</p>
            <p className="font-semibold">{COMPANY_PHONE}</p>
          </div>
          <ExternalLink className="ml-auto h-3.5 w-3.5 text-blue-300" />
        </a>

        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm ring-1 ring-white/20">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-blue-200 font-medium">Address</p>
            <p className="font-semibold">{COMPANY_ADDRESS}</p>
          </div>
        </div>
      </div>

      <Button
        asChild
        className="mt-6 w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-sm"
      >
        <a href={`mailto:${COMPANY_EMAIL}`}>Send us a message</a>
      </Button>
    </div>
  );
}
