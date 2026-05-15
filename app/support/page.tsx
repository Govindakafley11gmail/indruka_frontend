"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/custom-components/footer/footer";
import Navbar from "@/custom-components/navbar/navbar";

// ─── Contact Info Cards ────────────────────────────────────────────────────
const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+975 17 123 456", "+975 77 654 321"],
    sub: "Mon – Sat, 9 AM – 6 PM (BST)",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@yourtour.bt", "bookings@yourtour.bt"],
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Norzin Lam, Thimphu", "Bhutan – 11001"],
    sub: "Walk-ins welcome",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Fri: 9:00 – 18:00", "Sat: 10:00 – 15:00"],
    sub: "Closed on national holidays",
  },
];

const travellerOptions = ["1", "2", "3–5", "6–10", "11–20", "20+"];
const durationOptions = [
  "3–5 days",
  "6–8 days",
  "9–12 days",
  "13–15 days",
  "16+ days",
  "Custom",
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    travellers: "",
    duration: "",
    arrivalDate: "",
    message: "",
  });

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white font-[family-name:var(--font-body)]">
        <Navbar isActive={false}/>
  

      {/* ── Info Cards ──────────────────────────────────────────── */}
      <section className="mx-auto -mt-12 max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map(({ icon: Icon, title, lines, sub }) => (
            <Card
              key={title}
              className="group relative overflow-hidden border border-slate-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100"
            >
              {/* accent bar */}
              <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400" />
              <CardContent className="pt-6 pb-5 px-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {title}
                </p>
                {lines.map((l) => (
                  <p key={l} className="text-sm font-medium text-slate-800">
                    {l}
                  </p>
                ))}
                <p className="mt-1.5 text-xs text-slate-400">{sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Form + Side ─────────────────────────────────────────── */}
      <section className="mx-auto mt-16 max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* left side-panel */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Plan Your{" "}
                <span className="text-blue-600">Dream Journey</span>
              </h2>
              <p className="mt-3 text-slate-500 leading-relaxed">
                Fill out the form and one of our Bhutan travel specialists will
                get back to you within 24 hours with a personalised itinerary
                and quote.
              </p>
            </div>

            {/* checklist */}
            <ul className="space-y-3">
              {[
                "Custom itineraries for every budget",
                "Licensed Bhutanese tour operator",
                "Visa & SDF permit assistance",
                "24 / 7 in-country support",
                "Sustainable & responsible travel",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>

            {/* quick links */}
            <div className="rounded-2xl bg-blue-50 p-5 border border-blue-100">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
                Quick Connect
              </p>
              {[
                { icon: Globe, label: "WhatsApp Chat", href: "#" },
                { icon: Mail, label: "Send Email", href: "mailto:info@yourtour.bt" },
                { icon: Phone, label: "Call Now", href: "tel:+97517123456" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-100"
                >
                  <span className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <Icon className="h-4 w-4 text-blue-500" />
                    {label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-blue-400 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </aside>

          {/* form panel */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-blue-100 bg-blue-50 p-12 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">
                  Message Received!
                </h3>
                <p className="text-slate-500">
                  Thank you for reaching out. Our team will contact you within
                  24 hours with your personalised Bhutan travel plan.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-8 border-blue-200 text-blue-600 hover:bg-blue-100"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-slate-100/60"
              >
                <h3 className="mb-6 text-xl font-bold text-slate-800">
                  Send Us a Message
                </h3>

                {/* Name row */}
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="firstName" className="text-slate-700 text-sm">
                      First Name <span className="text-blue-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Dorji"
                      required
                      value={form.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className="border-slate-200 focus-visible:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="lastName" className="text-slate-700 text-sm">
                      Last Name <span className="text-blue-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Wangchuk"
                      required
                      value={form.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className="border-slate-200 focus-visible:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-slate-700 text-sm">
                      Email Address <span className="text-blue-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="border-slate-200 focus-visible:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-slate-700 text-sm">
                      Phone / WhatsApp
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="border-slate-200 focus-visible:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Travellers + Duration */}
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label className="text-slate-700 text-sm">
                      Number of Travellers
                    </Label>
                    <Select onValueChange={(v) => handleChange("travellers", v)}>
                      <SelectTrigger className="border-slate-200 focus:ring-blue-500">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {travellerOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o} {parseInt(o) === 1 ? "person" : "people"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-slate-700 text-sm">
                      Trip Duration
                    </Label>
                    <Select onValueChange={(v) => handleChange("duration", v)}>
                      <SelectTrigger className="border-slate-200 focus:ring-blue-500">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {durationOptions.map((o) => (
                          <SelectItem key={o} value={o}>
                            {o}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Arrival Date */}
                <div className="mb-4 space-y-1.5">
                  <Label htmlFor="arrivalDate" className="text-slate-700 text-sm">
                    Planned Arrival Date
                  </Label>
                  <Input
                    id="arrivalDate"
                    type="date"
                    value={form.arrivalDate}
                    onChange={(e) => handleChange("arrivalDate", e.target.value)}
                    className="border-slate-200 focus-visible:ring-blue-500"
                  />
                </div>

                {/* Message */}
                <div className="mb-6 space-y-1.5">
                  <Label htmlFor="message" className="text-slate-700 text-sm">
                    Your Message <span className="text-blue-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your travel interests, preferred destinations within Bhutan, or any special requirements…"
                    required
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className="resize-none border-slate-200 focus-visible:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 py-6 text-base font-semibold tracking-wide hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 shadow-md shadow-blue-200 transition-all"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="h-4 w-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  By submitting you agree to our{" "}
                  <a href="/PrivacyPolicy" className="text-blue-500 underline underline-offset-2 hover:text-blue-700">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

  <Footer/>
    </main>
  );
}