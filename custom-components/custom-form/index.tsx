"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  User,
  Mail,
  Phone,
  Users,
  Globe,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { COUNTRIES } from "@/app/view-details/callbacks-data";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface BookingField {
  id: string;
  type:
    | "text"
    | "email"
    | "phone"
    | "select"
    | "daterange"
    | "number"
    | "textarea";
  label: string;
  placeholder?: string;
  required?: boolean;
    options?: string[] | { label: string; value: string }[];  // ← update this line

  colSpan?: 1 | 2;
  defaultValue?: string | number;
}

export interface BookingModalConfig {
  title: string;
  subtitle?: string;
  fields: BookingField[];
  estimatedTotal?: string;
  estimatedLabel?: string;
  submitLabel?: string;
  tourName?: string; // ← add
  price?: string; // ← add
  onSubmit?: (data: Record<string, unknown>) => void;
  onClose?: () => void;
}

// ---------------------------------------------------------------------------
// SelectField
// ---------------------------------------------------------------------------
function SelectField({
  field,
  value,
  onChange,
}: {
  field: BookingField;
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const normalized = field.options?.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  ) ?? [];

  const filtered = normalized.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const displayLabel = normalized.find((o) => o.value === value)?.label;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => {
          setOpen((p) => !p);
          setSearch(""); // reset search on open
        }}
        className={cn(
          "w-full h-11 px-4 flex items-center justify-between border border-gray-200 rounded-xl bg-white text-sm focus:outline-none hover:border-blue-400 transition-colors",
          !value && "text-gray-400",
        )}
      >
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-gray-400 shrink-0" />
          <span className={value ? "text-gray-800" : "text-gray-400"}>
            {displayLabel || field.placeholder || `Select ${field.label}`}
          </span>
        </div>
        {open ? (
          <ChevronUp size={14} className="text-gray-400" />
        ) : (
          <ChevronDown size={14} className="text-gray-400" />
        )}
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl">
          {/* Search input */}
          <div className="p-2 border-b border-gray-100">
            <input
              autoFocus
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-blue-400"
            />
          </div>

          {/* Options list */}
          <div className="max-h-48 overflow-y-auto">
            {filtered.length === 0 ? (
              <p className="px-4 py-3 text-sm text-gray-400 text-center">
                No results found
              </p>
            ) : (
              filtered.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={cn(
                    "w-full px-4 py-2.5 text-left text-sm hover:bg-blue-50 transition-colors",
                    value === opt.value && "bg-blue-50 text-blue-700 font-medium",
                  )}
                >
                  {opt.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// DateRangeField
// ---------------------------------------------------------------------------
function DateRangeField({
  value,
  onChange,
}: {
  value: DateRange | undefined;
  onChange: (r: DateRange | undefined) => void;
}) {
  const [open, setOpen] = useState(false);

  const display = value?.from
    ? value.to
      ? `${format(value.from, "d MMM")} – ${format(value.to, "d MMM yyyy")}`
      : format(value.from, "d MMM yyyy")
    : undefined;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="w-full h-11 px-4 flex items-center justify-between border border-gray-200 rounded-xl bg-white text-sm hover:border-blue-400 transition-colors focus:outline-none"
        >
          <span className={display ? "text-gray-800" : "text-gray-400"}>
            {display || "Pick dates"}
          </span>
          <CalendarIcon size={15} className="text-gray-400" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 rounded-2xl shadow-xl"
        align="start"
      >
        <Calendar
          mode="range"
          selected={value}
          onSelect={onChange}
          numberOfMonths={2}
          disabled={{ before: new Date() }}
          className="rounded-2xl"
        />
      </PopoverContent>
    </Popover>
  );
}
function PhoneField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: unknown) => void;
}) {
  const [input, setInput] = useState(value);

  // find matching country from what user typed
  const detectedCountry = COUNTRIES.find((c) =>
    input.replace(/\D/g, "").startsWith(c.dialCode.replace(/\D/g, ""))
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setInput(raw);
    onChange(raw);
  };

  return (
    <div className="flex gap-2">
      {/* Auto detected flag + code */}
      <div className="flex items-center gap-1.5 h-11 px-3 border border-gray-200 rounded-xl bg-gray-50 text-sm text-gray-700 whitespace-nowrap shrink-0 min-w-[80px] justify-center">
        {detectedCountry ? (
          <>
            <span>{detectedCountry.flag}</span>
            <span className="text-xs">{detectedCountry.dialCode}</span>
          </>
        ) : (
          <span className="text-gray-400 text-xs">🌐 Code</span>
        )}
      </div>

      {/* Input */}
      <Input
        type="tel"
        placeholder="Enter number with country code e.g. +9751234567"
        value={input}
        onChange={handleChange}
        className="h-11 rounded-xl border-gray-200 focus:border-blue-500 text-sm flex-1"
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// FieldRenderer
// ---------------------------------------------------------------------------
function FieldRenderer({
  field,
  value,
  onChange,
  error,
}: {
  field: BookingField;
  value: unknown;
  onChange: (v: unknown) => void;
  error?: string;
}) {
  const baseInput =
    "h-11 rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm bg-white";

  const renderControl = () => {
    switch (field.type) {
      case "select":
        return (
          <SelectField
            field={field}
            value={value as string}
            onChange={onChange}
          />
        );
      case "daterange":
        return (
          <DateRangeField
            value={value as DateRange | undefined}
            onChange={onChange}
          />
        );
     case "phone":
  return <PhoneField value={(value as string) || ""} onChange={onChange} />;
      case "textarea":
        return (
          <Textarea
            placeholder={field.placeholder || `Enter ${field.label}`}
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm resize-none min-h-[80px] bg-white"
          />
        );
      case "number":
        return (
          <div className="relative">
            <Users
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="number"
              min={1}
              placeholder={field.placeholder || "1"}
              value={(value as number) || ""}
              onChange={(e) => onChange(Number(e.target.value))}
              className={cn(baseInput, "pl-9")}
            />
          </div>
        );
      case "email":
        return (
          <div className="relative">
            <Mail
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="email"
              placeholder={field.placeholder}
              value={(value as string) || ""}
              onChange={(e) => onChange(e.target.value)}
              className={cn(baseInput, "pl-9")}
            />
          </div>
        );
      default:
        return (
          <div className="relative">
            <User
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <Input
              type="text"
              placeholder={field.placeholder}
              value={(value as string) || ""}
              onChange={(e) => onChange(e.target.value)}
              className={cn(baseInput, "pl-9")}
            />
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-blue-500 ml-0.5">*</span>}
      </label>
      {renderControl()}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// BookingModal
// ---------------------------------------------------------------------------
export function BookingModal({
  config,
  open,
  onClose,
  tourName, // ← add
  price,
  pricePerPerson, // ← add
  guestsFieldId, // ← add
}: {
  config: BookingModalConfig;
  open: boolean;
  onClose?: () => void;
  tourName?: string; // ← add
  price?: string;
  pricePerPerson?: number; // ← add
  guestsFieldId?: string; // ← add
  // ← add
}) {
  const [formData, setFormData] = useState<Record<string, unknown>>(() => {
    const init: Record<string, unknown> = {};
    config.fields.forEach((f) => {
      if (f.defaultValue !== undefined) init[f.id] = f.defaultValue;
    });
    return init;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    config.fields.forEach((f) => {
      if (f.required) {
        const v = formData[f.id];
        if (v === undefined || v === null || v === "" || v === 0)
          next[f.id] = `${f.label} is required`;
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    config.onSubmit?.(formData);
    setSubmitted(true);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      onClose?.();
      config.onClose?.();
    }
  };
  const guestCount =
    guestsFieldId && Number(formData[guestsFieldId]) > 0
      ? Number(formData[guestsFieldId])
      : 1;

  const computedTotal = pricePerPerson
    ? `$${(pricePerPerson * guestCount).toLocaleString()}`
    : price;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="w-full max-w-md p-0 overflow-hidden rounded-3xl gap-0">
        {submitted ? (
          /* ── Success state ── */
          <div className="p-10 text-center">
            <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2
                className="w-7 h-7 text-blue-600"
                strokeWidth={1.5}
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              Booking Requested!
            </h2>
            <p className="text-sm text-gray-500">
              We&rsquo;ll get back to you within 24 hours.
            </p>
            <Button
              onClick={() => handleClose(false)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* ── Header ── */}
            <DialogHeader className="bg-[#F5F5F5] px-5 py-4 border-b">
              <DialogTitle className="text-xl text-start font-semibold text-gray-800">
                {tourName} {/* ← use it */}
              </DialogTitle>
              {config.subtitle && (
                <p className="text-sm text-gray-500 mt-0.5">
                  {config.subtitle}
                </p>
              )}
            </DialogHeader>

            {/* ── Scrollable form body ── */}
            <div className="overflow-y-auto px-6 py-5 max-h-[60vh]">
              <div className="grid grid-cols-2 gap-4">
                {config.fields.map((field) => (
                  <div
                    key={field.id}
                    className={
                      field.colSpan === 1 ? "col-span-1" : "col-span-2"
                    }
                  >
                    <FieldRenderer
                      field={field}
                      value={formData[field.id]}
                      onChange={(v) => handleChange(field.id, v)}
                      error={errors[field.id]}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── Footer ── */}
            <div className="px-6 pb-6 pt-4 border-t border-gray-100 space-y-4">
              {computedTotal && (
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">
                    {config.estimatedLabel || "Estimated total"}
                    {pricePerPerson && guestCount > 1 && (
                      <span className="text-gray-400 ml-1">
                        ({guestCount} × ${pricePerPerson.toLocaleString()})
                      </span>
                    )}
                    :
                  </span>
                  <span className="font-bold text-gray-900 text-base">
                    {computedTotal}
                  </span>
                </div>
              )}
              <Button
                type="button"
                onClick={handleSubmit}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold tracking-widest uppercase text-sm transition-all"
              >
                {config.submitLabel || "Request to Book"}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// useBookingModal hook
// ---------------------------------------------------------------------------
export function useBookingModal() {
  const [open, setOpen] = useState(false);
  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  };
}
