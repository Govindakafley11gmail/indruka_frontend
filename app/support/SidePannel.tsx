import { CheckCircle2, ChevronRight } from "lucide-react";

const checklist = [
  "Custom itineraries for every budget",
  "Licensed Bhutanese tour operator",
  "Visa & SDF permit assistance",
  "24 / 7 in-country support",
  "Sustainable & responsible travel",
];

const quickLinks = [
  {
    label: "WhatsApp Chat",
    href: "https://wa.me/97577367954",
    target: "_blank",
    rel: "noopener noreferrer",
    bg: "#25D366",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.824L.057 23.57a.75.75 0 00.92.921l5.925-1.519A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 01-5.073-1.384l-.362-.214-3.754.963.998-3.648-.235-.374A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "Send Email",
  href: "https://mail.google.com/mail/?view=cm&to=indruka2026@gmail.com",
    target: "_self",
  rel: "noopener noreferrer",
    bg: "#EA4335",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
  {
    label: "Call Now",
    href: "tel:+97577367954",
    target: "_self",
    rel: "",
    bg: "#0ea5e9",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
];

export function SidePanel() {
  return (
    <aside className="space-y-8 lg:col-span-2">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">
          Plan Your <span className="text-blue-600">Dream Journey</span>
        </h2>
        <p className="mt-3 leading-relaxed text-slate-500">
          Fill out the form and one of our Bhutan travel specialists will get
          back to you within 24 hours with a personalised itinerary and quote.
        </p>
      </div>

      <ul className="space-y-3">
        {checklist.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm text-slate-700"
          >
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            {item}
          </li>
        ))}
      </ul>

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
          Quick Connect
        </p>
        {quickLinks.map(({ icon, label, href, bg, target, rel }) => (
          <a
            key={label}
            href={href}
            target={target}
            rel={rel}
            className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-100"
          >
            <span className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ background: bg }}
              >
                {icon}
              </span>
              {label}
            </span>
            <ChevronRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-0.5" />
          </a>
        ))}
      </div>
    </aside>
  );
}