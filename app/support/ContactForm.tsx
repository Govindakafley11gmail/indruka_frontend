/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";
import { PhoneInput } from "./PhoneInput";
import { useContactMutations } from "./tanstack-function";
import { showToast } from "nextjs-toast-notify";

const travellerOptions = ["1", "2", "3–5", "6–10", "11–20", "20+"];
const durationOptions  = ["3–5 days", "6–8 days", "9–12 days", "13–15 days", "16+ days", "Custom"];

const initialForm = {
  firstName: "", lastName: "", email: "", phone: "",
  travellers: "", duration: "", arrivalDate: "", message: "",
};

// ✅ Yup validation schema
const schema = Yup.object({
  firstName:   Yup.string().min(2, "First name must be at least 2 characters").required("First name is required"),
  lastName:    Yup.string().min(2, "Last name must be at least 2 characters").required("Last name is required"),
  email:       Yup.string().email("Enter a valid email address").required("Email is required"),
  phone:       Yup.string().min(6, "Phone number must be at least 6 digits").required("Phone number is required"),
  travellers:  Yup.string().required("Please select number of travellers"),
  duration:    Yup.string().required("Please select trip duration"),
  arrivalDate: Yup.string().required("Please select arrival date"),
  message:     Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

type FormErrors = Partial<Record<keyof typeof initialForm, string>>;

export function ContactForm() {
  const [form, setForm]           = useState(initialForm);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const { createContact } = useContactMutations({
    onSuccess: (data: any) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
    onError: (error: any) => {
      showToast.error(error?.data?.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // ✅ Clear error on change
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // FIX 1: Accept the form event (not `data`), and call e.preventDefault() correctly.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // FIX 2: was `e.predefault()` — typo and wrong method name.
    try {
      await schema.validate(form, { abortEarly: false });
      setErrors({});
      setLoading(true);
      createContact({
        firstName:           form.firstName,
        lastName:            form.lastName,
        email:               form.email,
        phone:               form.phone,
        numberOfTravellers:  parseInt(form.travellers, 10),
        tripDuration:        parseInt(form.duration, 10),
        plannedArrivalDate:  form.arrivalDate,
        message:             form.message,
      });
      await new Promise((r) => setTimeout(r, 1400));
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      if (err instanceof Yup.ValidationError) {
        const fieldErrors: FormErrors = {};
        err.inner.forEach((e) => {
          if (e.path) fieldErrors[e.path as keyof typeof initialForm] = e.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-blue-100 bg-blue-50 p-12 text-center shadow-sm">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-slate-900">Message Received!</h3>
        <p className="text-slate-500">Our team will contact you within 24 hours with your personalised Bhutan travel plan.</p>
        <Button onClick={() => { setSubmitted(false); setForm(initialForm); setErrors({}); }} variant="outline" className="mt-8 border-blue-200 text-blue-600 hover:bg-blue-100">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200">
      <h3 className="mb-6 text-xl font-bold text-slate-800">Send Us a Message</h3>

      {/* Name */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {(["firstName", "lastName"] as const).map((field) => (
          <div key={field} className="space-y-1.5">
            <Label htmlFor={field} className="text-sm text-slate-700">
              {field === "firstName" ? "First" : "Last"} Name <span className="text-blue-500">*</span>
            </Label>
            <Input
              id={field}
              placeholder={field === "firstName" ? "Enter First Name" : "Enter Last Name"}
              value={form[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              className={`border-slate-200 focus-visible:ring-blue-500 ${errors[field] ? "border-red-400" : ""}`}
            />
            {errors[field] && <p className="text-xs text-red-500">{errors[field]}</p>}
          </div>
        ))}
      </div>

      {/* Email + Phone */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-sm text-slate-700">
            Email Address <span className="text-blue-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`border-slate-200 focus-visible:ring-blue-500 ${errors.email ? "border-red-400" : ""}`}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm text-slate-700">
            Phone / WhatsApp <span className="text-blue-500">*</span>
          </Label>
          <PhoneInput
            value={form.phone}
            onChange={(v) => handleChange("phone", v)}
            // FIX 5: ternary was outside the template literal interpolation `${}`.
            className={`${errors.phone ? "border-red-400" : ""} border-slate-200 focus-visible:ring-blue-500`}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      {/* Travellers + Duration */}
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {[
          { field: "travellers", label: "Number of Travellers", options: travellerOptions, render: (o: string) => `${o} ${o === "1" ? "person" : "people"}` },
          { field: "duration",   label: "Trip Duration",        options: durationOptions,  render: (o: string) => o },
        ].map(({ field, label, options, render }) => (
          <div key={field} className="space-y-1.5">
            <Label className="text-sm text-slate-700">
              {label} <span className="text-blue-500">*</span>
            </Label>
            <Select onValueChange={(v) => handleChange(field, v)}>
              <SelectTrigger className={`w-full border-slate-200 focus:ring-blue-500 ${errors[field as keyof typeof initialForm] ? "border-red-400" : ""}`}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {options.map((o) => <SelectItem key={o} value={o}>{render(o)}</SelectItem>)}
              </SelectContent>
            </Select>
            {errors[field as keyof typeof initialForm] && (
              <p className="text-xs text-red-500">{errors[field as keyof typeof initialForm]}</p>
            )}
          </div>
        ))}
      </div>

      {/* Arrival Date */}
      <div className="mb-4 space-y-1.5">
        <Label htmlFor="arrivalDate" className="text-sm text-slate-700">
          Planned Arrival Date <span className="text-blue-500">*</span>
        </Label>
        <Input
          id="arrivalDate"
          type="date"
          value={form.arrivalDate}
          onChange={(e) => handleChange("arrivalDate", e.target.value)}
          className={`border-slate-200 focus-visible:ring-blue-500 ${errors.arrivalDate ? "border-red-400" : ""}`}
        />
        {errors.arrivalDate && <p className="text-xs text-red-500">{errors.arrivalDate}</p>}
      </div>

      {/* Message */}
      <div className="mb-6 space-y-1.5">
        <Label htmlFor="message" className="text-sm text-slate-700">
          Your Message <span className="text-blue-500">*</span>
        </Label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Tell us about your travel interests…"
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className={`resize-none border-slate-200 focus-visible:ring-blue-500 ${errors.message ? "border-red-400" : ""}`}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-blue-600 py-6 text-base font-semibold tracking-wide hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 shadow-md shadow-blue-200 transition-all">
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </span>
        ) : (
          <span className="flex items-center gap-2"><Send className="h-4 w-4" />Send Message</span>
        )}
      </Button>

      <p className="mt-4 text-center text-xs text-slate-400">
        By submitting you agree to our{" "}
        <a href="/PrivacyPolicy" className="text-blue-500 underline underline-offset-2 hover:text-blue-700">Privacy Policy</a>.
      </p>
    </form>
  );
}