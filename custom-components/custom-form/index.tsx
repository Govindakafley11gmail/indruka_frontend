/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Dialog,
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
  Users,
  Globe,
  Calendar as CalendarIcon,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { CountryCodePicker } from "@/app/support/CountryCodePicker";
import { useCallingCodes, type Country } from "@/app/support/hooks/useCallingCodes";
import * as Yup from "yup";

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
  options?: string[] | { label: string; value: string }[];
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
  tourName?: string;
  price?: string;
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

  const normalized =
    field.options?.map((opt) =>
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
          setSearch("");
        }}
        className={cn(
          "w-full h-11 px-4 flex items-center justify-between border border-gray-200 rounded-xl bg-white text-sm focus:outline-none hover:border-blue-400 transition-colors",
          !value && "text-gray-400"
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
                    value === opt.value && "bg-blue-50 text-blue-700 font-medium"
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

// ---------------------------------------------------------------------------
// PhoneField
// ---------------------------------------------------------------------------
function PhoneField({
  value,
  onChange,
  onCountryDetected,
}: {
  value: string;
  onChange: (v: unknown) => void;
  onCountryDetected?: (name: string | null) => void;
}) {
  const { countries, detectCountry } = useCallingCodes();
  const [selected, setSelected] = useState<Country | null>(null);

  // Set India as default once countries load
  useEffect(() => {
    if (countries.length === 0) return;
    const india = countries.find((c) => c.name === "India");
    if (india && !selected) {
      setSelected(india);
      onChange(`${india.callingCode} `);
      onCountryDetected?.(india.name);
    }
  }, [countries]);

  // Auto-detect country as user types
  useEffect(() => {
    if (!value) return;
    const detected = detectCountry(value);
    if (detected) {
      setSelected(detected);
      onCountryDetected?.(detected.name);
    }
  }, [value, countries]);

  function handleSelect(country: Country) {
    setSelected(country);
    const local = (value as string).replace(/^\+\d+\s?/, "").trim();
    onChange(`${country.callingCode} ${local}`);
    onCountryDetected?.(country.name);
  }

  return (
    <div className="flex gap-2">
      <CountryCodePicker
        countries={countries}
        selected={selected}
        onSelect={handleSelect}
        buttonStyle="flex shrink-0 items-center gap-1.5 border-slate-200 p-5 text-sm font-normal text-slate-700 hover:bg-slate-50"
      />
      <Input
        type="tel"
        placeholder={
          selected ? `${selected.callingCode} 98765 43210` : "+91 98765 43210"
        }
        value={(value as string) || ""}
        onChange={(e) => onChange(e.target.value)}
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
  onCountryDetected,
}: {
  field: BookingField;
  value: unknown;
  onChange: (v: unknown) => void;
  error?: string;
  onCountryDetected?: (name: string | null) => void;
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
          <PhoneField
            value={(value as string) || ""}
            onChange={onChange}
            onCountryDetected={onCountryDetected}
          />
        );

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
  tourName,
  price,
  pricePerPerson,
  guestsFieldId,
}: {
  config: BookingModalConfig;
  open: boolean;
  onClose?: () => void;
  tourName?: string;
  price?: string;
  pricePerPerson?: number;
  guestsFieldId?: string;
}) {
  // ── Build Yup schema dynamically from fields ──
  const buildSchema = () => {
    const shape: Record<string, Yup.AnySchema> = {};
    config.fields.forEach((f) => {
      if (!f.required) return;
      switch (f.type) {
        case "email":
          shape[f.id] = Yup.string()
            .email(`${f.label} must be a valid email`)
            .required(`${f.label} is required`);
          break;
        case "number":
          shape[f.id] = Yup.number()
            .min(1, `${f.label} must be at least 1`)
            .required(`${f.label} is required`);
          break;
        case "daterange":
          shape[f.id] = Yup.object()
            .shape({ from: Yup.date().required() })
            .nullable()
            .required(`${f.label} is required`);
          break;
        case "phone":
          shape[f.id] = Yup.string()
            .matches(/^\+?[\d\s\-().]{7,}$/, "Enter a valid phone number")
            .required(`${f.label} is required`);
          break;
        default:
          shape[f.id] = Yup.string()
            .trim()
            .required(`${f.label} is required`);
      }
    });
    return Yup.object().shape(shape);
  };

  // ── Initial form state ──
  const getInitialData = () => {
    const init: Record<string, unknown> = {};
    config.fields.forEach((f) => {
      if (f.defaultValue !== undefined) init[f.id] = f.defaultValue;
    });
    return init;
  };

  const [formData, setFormData] = useState<Record<string, unknown>>(getInitialData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (open) {
      setFormData(getInitialData());
      setErrors({});
      setSubmitted(false);
    }
  }, [open]);

  const handleChange = (id: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  // ── Yup async validation ──
  const validate = async (): Promise<boolean> => {
    const schema = buildSchema();
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const next: Record<string, string> = {};
        err.inner.forEach((e) => {
          if (e.path) next[e.path] = e.message;
        });
        setErrors(next);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    const valid = await validate();
    if (!valid) return;
    config.onSubmit?.(formData);
    setSubmitted(true);
  };

  // ── Only close when X or Close button is clicked explicitly ──
  const closeModal = () => {
    onClose?.();
    config.onClose?.();
  };

  const guestCount =
    guestsFieldId && Number(formData[guestsFieldId]) > 0
      ? Number(formData[guestsFieldId])
      : 1;

  const computedTotal = pricePerPerson
    ? `$${(pricePerPerson * guestCount).toLocaleString()}`
    : price;

  return (
    // no-op onOpenChange: prevents Radix closing on backdrop/Escape
    <Dialog open={open} onOpenChange={() => {}}>

      {/*
        Use DialogPrimitive.Content directly instead of shadcn's DialogContent.
        shadcn's DialogContent always injects its own × button — by going to the
        primitive we get full control and only our own X button renders.
      */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl bg-white shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        >
          {submitted ? (
            /* ── Success state ── */
            <div className="p-10 text-center relative">
              <DialogTitle className="sr-only">Booking Confirmed</DialogTitle>

              {/* Only X button — no duplicate */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-blue-600" strokeWidth={1.5} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                Booking Requested!
              </h2>
              <p className="text-sm text-gray-500">
                We&rsquo;ll get back to you within 24 hours.
              </p>
              <Button
                onClick={closeModal}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              {/* ── Header with single X button ── */}
              <DialogHeader className="bg-[#F5F5F5] px-5 py-4 border-b relative">
                <DialogTitle className="text-xl text-start font-semibold text-gray-800 pr-8">
                  {tourName}
                </DialogTitle>
                {config.subtitle && (
                  <p className="text-sm text-gray-500 mt-0.5">{config.subtitle}</p>
                )}
                {/* Single X button — only one, no Radix duplicate */}
                <button
                  onClick={closeModal}
                  className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </DialogHeader>

              {/* ── Scrollable form body ── */}
              <div className="overflow-y-auto px-6 py-5 max-h-[60vh]">
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
                        onCountryDetected={
                          field.type === "phone"
                            ? (name) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  phoneCountry: name ?? "",
                                }))
                            : undefined
                        }
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
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </Dialog>
  );
}

// ---------------------------------------------------------------------------
// useBookingModal
// ---------------------------------------------------------------------------
export function useBookingModal() {
  const [open, setOpen] = useState(false);
  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
  };
}