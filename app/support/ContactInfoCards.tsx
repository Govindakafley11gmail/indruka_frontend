import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactDetails = [
  { icon: Phone,  title: "Call Us",       lines: ["+975 77367954", "+975 17949827"],          sub: "Mon – Sat, 9 AM – 6 PM (BST)" },
  { icon: Mail,   title: "Email Us",      lines: ["indruka2026@gmail.com"],                   sub: "We reply within 24 hours" },
  { icon: MapPin, title: "Our Office",    lines: ["Babesa, Thimphu", "Bhutan – 11001"],       sub: "Walk-ins welcome" },
  { icon: Clock,  title: "Working Hours", lines: ["Mon – Fri: 9:00 – 18:00", "Sat: 10:00 – 15:00"], sub: "Closed on national holidays" },
];

export function ContactInfoCards() {
  return (
    <section className="mx-auto -mt-12 max-w-6xl px-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactDetails.map(({ icon: Icon, title, lines, sub }) => (
          <Card key={title} className="group relative overflow-hidden border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100">
            <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            <CardContent className="px-5 pb-5 pt-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">{title}</p>
              {lines.map((l) => <p key={l} className="text-sm font-medium text-slate-800">{l}</p>)}
              <p className="mt-1.5 text-xs text-slate-400">{sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}