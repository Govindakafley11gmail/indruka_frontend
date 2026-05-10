"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Country data – extend as needed
// ---------------------------------------------------------------------------
const COUNTRIES = [
  { code: "BJ", name: "Benin", dialCode: "+229", flag: "🇧🇯" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { code: "GH", name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function RequestCallBack() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("BJ");
  const [errors, setErrors] = useState({ fullName: false, phone: false });
  const [submitted, setSubmitted] = useState(false);

  const selectedCountry =
    COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];

  const validate = () => {
    const newErrors = {
      fullName: fullName.trim() === "",
      phone: phone.trim() === "",
    };
    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.phone;
  };

  const handleSubmit = () => {
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="  bg-gray-50 border border-gray-200   flex flex-col items-center gap-3 text-center shadow-sm">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">
          We&apos;ll call you soon!
        </h3>
        <p className="text-sm text-gray-500">
          Thanks, <span className="font-medium text-gray-700">{fullName}</span>.
          Expect a call at{" "}
          <span className="font-medium text-gray-700">
            {selectedCountry.dialCode} {phone}
          </span>
          .
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-1 text-xs"
          onClick={() => {
            setSubmitted(false);
            setFullName("");
            setPhone("");
          }}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto bg-[#F5F8FF] border border-gray-200 rounded-2xl h-70 p-6 shadow-sm">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Want us to call you?
      </h2>

      <div className="flex flex-col gap-4">
        {/* ── Full Name ── */}
        <div className="flex flex-col gap-1">
          <Input
            id="fullName"
            placeholder="Full Name*"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (errors.fullName && e.target.value.trim())
                setErrors((prev) => ({ ...prev, fullName: false }));
            }}
            className={cn(
              "bg-white border rounded-lg h-11 px-4 text-sm placeholder:text-gray-400 focus-visible:ring-1",
              errors.fullName
                ? "border-red-500 focus-visible:ring-red-400"
                : "border-gray-300 focus-visible:ring-yellow-400"
            )}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 pl-1">Full name is required</p>
          )}
        </div>

        {/* ── Mobile Number ── */}
        <div className="flex flex-col gap-1">
          <div
            className={cn(
              "flex items-center rounded-lg border bg-white overflow-hidden h-11",
              errors.phone ? "border-red-500" : "border-gray-300"
            )}
          >
            {/* Country selector */}
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger
                className={cn(
                  "w-[90px] h-full border-0 border-r rounded-none px-2 focus:ring-0 focus:ring-offset-0 shrink-0",
                  errors.phone ? "border-r-red-500" : "border-r-gray-300"
                )}
              >
                <SelectValue>
                  <span className="flex items-center gap-1 text-sm">
                    <span>{selectedCountry.flag}</span>
                    <span className="text-gray-500 text-xs">▾</span>
                  </span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {COUNTRIES.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    <span className="flex items-center gap-2">
                      <span>{c.flag}</span>
                      <span className="text-sm">{c.dialCode}</span>
                      <span className="text-xs text-gray-400">{c.name}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Dial code label */}
            <span className="text-sm text-gray-600 px-2 select-none border-r border-gray-200">
              {selectedCountry.dialCode}
            </span>

            {/* Phone input */}
            <Input
              id="phone"
              type="tel"
              placeholder="Mobile No.*"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone && e.target.value.trim())
                  setErrors((prev) => ({ ...prev, phone: false }));
              }}
              className="border-0 h-full rounded-none flex-1 text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none"
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500 pl-1">
              Mobile number is required
            </p>
          )}
        </div>

        {/* ── Submit Button ── */}
        <Button
          onClick={handleSubmit}
          className="w-full h-12 bg-blue-700  font-semibold rounded-xl shadow-none border-0 flex items-center justify-center gap-2 transition-colors duration-200"
        >
          <Phone className="w-4 h-4" />
          Request Call Back
        </Button>
      </div>
    </div>
  );
}