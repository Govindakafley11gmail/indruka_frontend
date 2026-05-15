"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Calendar,
  User,
  Mail,
  Users,
  Globe,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarUI } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";

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
  options?: string[];
  colSpan?: 1 | 2;
  defaultValue?: string | number;
}

export interface BookingFormConfig {
  title: string;
  subtitle?: string;
  fields: BookingField[];
  estimatedTotal?: string;
  estimatedLabel?: string;
  submitLabel?: string;
  onSubmit?: (data: Record<string, unknown>) => void;
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
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((p) => !p)}
        className={cn(
          "w-full h-11 px-4 flex items-center justify-between",
          "border border-gray-200 rounded-xl bg-white",
          "text-sm focus:outline-none hover:border-blue-400 transition-colors",
          !value && "text-gray-400"
        )}
      >
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-gray-400 shrink-0" />
          <span className={value ? "text-gray-800" : "text-gray-400"}>
            {value || field.placeholder || `Select ${field.label}`}
          </span>
        </div>
        {open ? (
          <ChevronUp size={14} className="text-gray-400" />
        ) : (
          <ChevronDown size={14} className="text-gray-400" />
        )}
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-52 overflow-y-auto">
          {field.options?.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={cn(
                "w-full px-4 py-2.5 text-left text-sm hover:bg-blue-50 transition-colors",
                value === opt && "bg-blue-50 text-blue-700 font-medium"
              )}
            >
              {opt}
            </button>
          ))}
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
          className={cn(
            "w-full h-11 px-4 flex items-center justify-between",
            "border border-gray-200 rounded-xl bg-white",
            "text-sm hover:border-blue-400 transition-colors focus:outline-none"
          )}
        >
          <span className={display ? "text-gray-800" : "text-gray-400"}>
            {display || "Pick dates"}
          </span>
          <Calendar size={15} className="text-gray-400" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 rounded-2xl shadow-xl"
        align="start"
      >
        <CalendarUI
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
        return (
          <div className="flex gap-2">
            <div className="flex items-center gap-1.5 h-11 px-3 border border-gray-200 rounded-xl bg-white text-sm text-gray-600 whitespace-nowrap shrink-0">
              🇧🇹 <span>+975</span>
            </div>
            <Input
              type="tel"
              placeholder={field.placeholder || "Number"}
              value={(value as string) || ""}
              onChange={(e) => onChange(e.target.value)}
              className={baseInput + " flex-1"}
            />
          </div>
        );

      case "textarea":
        return (
          <Textarea
            placeholder={field.placeholder || `Enter ${field.label}`}
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm resize-none min-h-[88px] bg-white"
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
        {field.required && (
          <span className="text-blue-500 ml-0.5">*</span>
        )}
      </label>
      {renderControl()}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

// ---------------------------------------------------------------------------
// BookingForm — main export (inline, no modal)
// ---------------------------------------------------------------------------
export function BookingForm({ config }: { config: BookingFormConfig }) {
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
        if (v === undefined || v === null || v === "" || v === 0) {
          next[f.id] = `${f.label} is required`;
        }
      }
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    config.onSubmit?.(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-10 text-center">
        <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-1">
          Booking Requested!
        </h2>
        <p className="text-gray-500 text-sm">
          We&rsquo;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-blue-600 hover:underline"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto bg-[#faf9f7] rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
          {config.title}
        </h2>
        {config.subtitle && (
          <p className="text-sm text-gray-500 mt-0.5">{config.subtitle}</p>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="px-6 py-5">
          <div className="grid grid-cols-2 gap-4">
            {config.fields.map((field) => (
              <div
                key={field.id}
                className={field.colSpan === 1 ? "col-span-1" : "col-span-2"}
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

        {/* Footer */}
        <div className="px-6 pb-6 pt-2 space-y-4">
          {config.estimatedTotal && (
            <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
              <span className="text-gray-500">
                {config.estimatedLabel || "Estimated total"}:
              </span>
              <span className="font-bold text-gray-900 text-base">
                {config.estimatedTotal}
              </span>
            </div>
          )}
          <Button
            type="submit"
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold tracking-widest uppercase text-sm transition-all"
          >
            {config.submitLabel || "Request to Book"}
          </Button>
        </div>
      </form>
    </div>
  );
}