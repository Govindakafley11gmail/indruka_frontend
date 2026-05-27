// components/privacy/PrivacyContactCard.tsx
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrivacyContactCard() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 text-white shadow-lg">
      <h3 className="text-xl font-bold mb-1">Still have questions?</h3>
      <p className="text-blue-200 text-sm mb-6">
        Our team at Indruka Tours and Travels is happy to help clarify any privacy concerns.
      </p>

      <div className="space-y-4">
        <a
          href={`mailto:indruka2026@gmail.com`}
          className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/20 transition-colors ring-1 ring-white/20"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Mail className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-blue-200 font-medium">Email us</p>
            <p className="font-semibold">indruka2026@gmail.com</p>
          </div>
          <ExternalLink className="ml-auto h-3.5 w-3.5 text-blue-300" />
        </a>

        <a
          href={`tel:+97577367954`}
          className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm hover:bg-white/20 transition-colors ring-1 ring-white/20"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-blue-200 font-medium">Call us</p>
            <p className="font-semibold">+975 77367954</p>
          </div>
          <ExternalLink className="ml-auto h-3.5 w-3.5 text-blue-300" />
        </a>

        <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm ring-1 ring-white/20">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-blue-200 font-medium">Address</p>
            <p className="font-semibold">Thimphu, Bhutan</p>
          </div>
        </div>
      </div>

      <Button
        asChild
        className="mt-6 w-full bg-white text-blue-700 hover:bg-blue-50 font-semibold shadow-sm"
      >
        <a href="mailto:indruka2026@gmail.com">Send us a message</a>
      </Button>
    </div>
  );
}
