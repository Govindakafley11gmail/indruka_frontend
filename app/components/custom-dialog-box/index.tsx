/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Formik,
  Field,
  FieldProps,
  useFormikContext,
  getIn,
  FieldArray,
} from "formik";
import * as Yup from "yup";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export type FieldType =
  | "text"
  | "date"
  | "select"
  | "checkbox"
  | "checkbox-group"
  | "number"
  | "array"
  | "input"
  | "file"
  | "radio";

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  storeLabel?: boolean;
  placeholder?: string;
  defaultValue?: any;
  validation?: any;
  disabled?: boolean;
  fields?: FieldConfig[]; // used by "array" type
  optionGroups?: {
    groupName: string;
    options: { label: string; value: string | number }[];
  }[];
  options?: { label: string; value: string | number }[];
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onChange?: (value: any) => void;
}

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fields: FieldConfig[];
  OnSubmitTitle?: string;
  onSubmit: (values: Record<string, any>) => void;
  defaultValues?: Record<string, any>;
  CustomDialogBoxStyle?: string;
  DisableDivStyle?: string;
  maxwidth?: number;
}

interface FormikSelectFieldProps {
  name: string;
  options: { label: string; value: any }[];
  storeLabel?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
}

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function getDefaultForType(type: FieldType): any {
  switch (type) {
    case "checkbox":
      return false;
    case "checkbox-group":
      return [];
    case "array":
      return [];
    case "number":
      return undefined;
    default:
      return "";
  }
}

// ─────────────────────────────────────────────
// SELECT FIELD
// ─────────────────────────────────────────────
export function FormikSelectField({
  name,
  options,
  storeLabel = false,
  placeholder = "Select option",
  className = "",
  disabled = false,
  onChange,
}: FormikSelectFieldProps) {
  const { values, setFieldValue, setFieldTouched } = useFormikContext<any>();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const fieldValue = getIn(values, name);

  const selectedOption = storeLabel
    ? fieldValue
    : options.find((o) => o.value === fieldValue);

  const handleSelect = (opt: { label: string; value: any }) => {
    const val = storeLabel ? opt : opt.value;
    setFieldValue(name, val);
    setFieldTouched(name, true);
    onChange?.(val);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen((p) => !p)}
        className={`h-10 w-full border-2 border-gray-300 rounded-xl px-3 text-left flex items-center justify-between focus:ring-2 focus:ring-blue-500 ${disabled ? "bg-gray-100 cursor-not-allowed text-gray-400" : "bg-white"
          }`}
      >
        <span className="truncate text-sm">
          {selectedOption?.label || (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </span>
        <svg
          className={`h-4 w-4 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-56 overflow-y-auto">
          {options.length === 0 ? (
            <p className="px-3 py-2 text-sm text-gray-400">No options</p>
          ) : (
            options.map((opt) => (
              <button
                key={String(opt.value)}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`w-full px-3 py-2 text-left text-sm hover:bg-blue-50 ${(storeLabel ? fieldValue?.value : fieldValue) === opt.value
                  ? "bg-blue-50 font-medium text-blue-600"
                  : ""
                  }`}
              >
                {opt.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// ERROR MESSAGE
// ─────────────────────────────────────────────
function FieldError({ name }: { name: string }) {
  const { errors, touched } = useFormikContext<any>();
  const error = getIn(errors, name);
  const isTouched = getIn(touched, name);
  if (!error || !isTouched) return null;
  return <p className="text-xs text-red-500 mt-1">{error}</p>;
}

// ─────────────────────────────────────────────
// TOGGLE (checkbox)
// ─────────────────────────────────────────────
function ToggleSwitch({
  value,
  onChange,
  label,
  disabled,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  label: string;
  disabled?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      onClick={() => !disabled && onChange(!value)}
    >
      <div
        className={`w-10 h-5 rounded-full p-0.5 transition-colors ${value ? "bg-blue-500" : "bg-gray-300"
          }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow transition-transform ${value ? "translate-x-5" : "translate-x-0"
            }`}
        />
      </div>
      <span className="text-sm select-none">{label}</span>
    </div>
  );
}

// ─────────────────────────────────────────────
// CUSTOM DIALOG
// ─────────────────────────────────────────────
export function CustomDialog({
  isOpen,
  onClose,
  title,
  fields,
  maxwidth,
  onSubmit,
  OnSubmitTitle = "Submit",
  defaultValues = {},
  CustomDialogBoxStyle = "grid grid-cols-4 gap-3 p-3",
}: CustomDialogProps) {
  // ── Initial Values ──────────────────────────
  const initialValues = useMemo(
    () =>
      fields.reduce((acc, f) => {
        acc[f.name] =
          defaultValues[f.name] !== undefined
            ? defaultValues[f.name]
            : f.defaultValue !== undefined
              ? f.defaultValue
              : getDefaultForType(f.type);
        return acc;
      }, {} as Record<string, any>),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fields, defaultValues]
  );

  // ── Validation Schema ───────────────────────
  const validationSchema = useMemo(
    () =>
      Yup.object(
        fields.reduce((acc, f) => {
          if (f.validation) acc[f.name] = f.validation;
          return acc;
        }, {} as Record<string, any>)
      ),
    [fields]
  );

  // ── Render Individual Field ─────────────────
  const renderField = (field: FieldConfig, setFieldValue: any) => {
    switch (field.type) {
      // ── TEXT / INPUT ──
      case "text":
      case "input":
        return (
          <Field name={field.name}>
            {({ field: f }: FieldProps) => (
              <Input
                {...f}
                placeholder={field.placeholder}
                disabled={field.disabled}
                className={`h-10 border-2 rounded-xl px-3 text-sm focus:ring-2 focus:ring-blue-500 ${field.disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white"
                  }`}
              />
            )}
          </Field>
        );

      // ── DATE ──
      case "date":
        return (
          <Field name={field.name}>
            {({ field: f }: FieldProps) => (
              <Input
                type="date"
                {...f}
                disabled={field.disabled}
                className={`h-10 border-2 rounded-xl px-3 text-sm focus:ring-2 focus:ring-blue-500 ${field.disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white"
                  }`}
              />
            )}
          </Field>
        );

      // ── NUMBER ──
      case "number":
        return (
          <Field name={field.name}>
            {({ field: f }: FieldProps) => (
              <Input
                type="number"
                {...f}
                value={f.value ?? ""}
                disabled={field.disabled}
                placeholder={field.placeholder}
                onChange={(e) =>
                  setFieldValue(
                    field.name,
                    e.target.value === "" ? undefined : Number(e.target.value)
                  )
                }
                className={`h-10 border-2 rounded-xl px-3 text-sm focus:ring-2 focus:ring-blue-500 ${field.disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : "bg-white"
                  }`}
              />
            )}
          </Field>
        );

      // ── SELECT ──
      case "select":
        return (
          <FormikSelectField
            name={field.name}
            options={field.options || []}
            storeLabel={field.storeLabel}
            placeholder={field.placeholder}
            disabled={field.disabled}
            onChange={(value) => {
              field.onChange?.(value);
            }}
          />
        );

      // ── CHECKBOX (toggle) ──
      case "checkbox":
        return (
          <Field name={field.name}>
            {({ field: f }: FieldProps) => (
              <ToggleSwitch
                value={!!f.value}
                onChange={(v) => setFieldValue(field.name, v)}
                label={field.label}
                disabled={field.disabled}
              />
            )}
          </Field>
        );

      // ── CHECKBOX GROUP ──
      case "checkbox-group":
        return (
          <Field name={field.name}>
            {({ field: f }: FieldProps) => {
              const selected: (string | number)[] = Array.isArray(f.value)
                ? f.value
                : [];
              return (
                <div className="flex flex-wrap gap-2">
                  {(field.options || []).map((opt) => {
                    const checked = selected.includes(opt.value);
                    return (
                      <label
                        key={String(opt.value)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 cursor-pointer text-sm select-none transition-colors ${checked
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-gray-200 bg-white text-gray-700 hover:border-blue-300"
                          } ${field.disabled ? "cursor-not-allowed opacity-50" : ""}`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          disabled={field.disabled}
                          checked={checked}
                          onChange={() => {
                            if (field.disabled) return;
                            const next = checked
                              ? selected.filter((v) => v !== opt.value)
                              : [...selected, opt.value];
                            setFieldValue(field.name, next);
                            field.onChange?.(next);
                          }}
                        />
                        {checked && (
                          <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" />
                          </svg>
                        )}
                        {opt.label}
                      </label>
                    );
                  })}
                </div>
              );
            }}
          </Field>
        );

      // ── RADIO ──
      case "radio":
        return (
          <Field name={field.name}>
            {({ field: f }: FieldProps) => (
              <div className="flex flex-wrap gap-3">
                {(field.options || []).map((opt) => {
                  const selected = f.value === opt.value;
                  return (
                    <label
                      key={String(opt.value)}
                      className={`flex items-center gap-2 cursor-pointer text-sm select-none ${field.disabled ? "cursor-not-allowed opacity-50" : ""
                        }`}
                    >
                      <div
                        onClick={() => {
                          if (!field.disabled) {
                            setFieldValue(field.name, opt.value);
                            field.onChange?.(opt.value);
                          }
                        }}
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${selected
                          ? "border-blue-500 bg-white"
                          : "border-gray-300 bg-white"
                          }`}
                      >
                        {selected && (
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </Field>
        );

      // ── ARRAY (dynamic rows) ──
      case "array":
        return (
          <FieldArray name={field.name}>
            {({ push, remove, form }) => {
              const rows: any[] = getIn(form.values, field.name) || [];
              const subFields = field.fields || [];
              return (
                <div className="w-full space-y-2">
                  {rows.map((_, rowIdx) => (
                    <div key={rowIdx} className="flex items-start gap-2">
                      {subFields.map((sub) => (
                        <div key={sub.name} className="flex-1 flex flex-col">
                          <label className="text-xs text-gray-500 mb-0.5">
                            {sub.label}
                          </label>
                          {renderField(
                            { ...sub, name: `${field.name}[${rowIdx}].${sub.name}` },
                            form.setFieldValue
                          )}
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => remove(rowIdx)}
                        className="mt-5 text-red-400 hover:text-red-600 transition-colors"
                        title="Remove row"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const empty = subFields.reduce(
                        (acc, s) => ({ ...acc, [s.name]: getDefaultForType(s.type) }),
                        {}
                      );
                      push(empty);
                    }}
                    className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add Row
                  </button>
                </div>
              );
            }}
          </FieldArray>
        );

      default:
        return null;
    }
  };

  // ── Render ──────────────────────────────────
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-0 max-h-[90vh] flex flex-col overflow-hidden !shadow-none"
        style={{ maxWidth: maxwidth ?? 900, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
      >
        {/* Header */}
        <div className="bg-blue-500 px-6 py-3 rounded-t-2xl flex-shrink-0">
          <DialogTitle className="text-white text-lg font-bold">{title}</DialogTitle>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          enableReinitialize
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values);
            setSubmitting(false);
            onClose();
          }}
        >
          {({ setFieldValue, handleSubmit, isSubmitting }) => (
            <>
              {/* Fields */}
              <div className={`${CustomDialogBoxStyle} overflow-y-auto flex-1`}>
                {fields.map((field) => {
                  // Checkbox type renders its own label inline
                  const isInlineLabel = field.type === "checkbox";
                  return (
                    <div key={field.name} className="flex flex-col">
                      {!isInlineLabel && (
                        <label className="text-xs font-semibold text-gray-600 mb-1">
                          {field.label}
                        </label>
                      )}
                      {renderField(field, setFieldValue)}
                      <FieldError name={field.name} />
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <DialogFooter className="px-6  border-red-100 flex justify-end gap-2 flex-shrink-0 rounded-b-2xl overflow-hidden">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="h-9 px-4 rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => handleSubmit()}
                  className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                  {OnSubmitTitle}
                </Button>
              </DialogFooter>
            </>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}