/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  ErrorMessage,
  Field,
  useFormikContext,
  getIn,
  FieldProps,
} from "formik";
import { CalendarIcon, Eye, EyeOff, User, Upload, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export interface FieldConfig {
  type?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  values?: unknown;
  multiple?: boolean;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  subType?: string;
  options?: { label: string; value: any }[];
  storeLabel?: boolean;
  required?: boolean;
  accept?: string;
  maxSize?: number;
  disabled?: boolean;
  validation?: string | Yup.StringSchema | Yup.NumberSchema | Yup.DateSchema | Yup.BooleanSchema;
  onChange?: (value: any) => void;
  onClick?: () => void;
}

export interface FormikControllerProps {
  control?: string;
  label?: string;
  name?: string;
  fieldConfig: FieldConfig;
  className?: string;
  fieldstyle?: string;
  inputWidthIconStyle?: string;
  checkstyle?: string;
  checkmainstyle?: string;
  id?: string;
  theme?: "light" | "dark";
  setFieldValue?: (key: string, value: unknown | unknown[]) => void;
}

interface FormikSelectFieldProps {
  name: string;
  options: { label: string; value: any }[];
  storeLabel?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

// ---------------------------------------------------------------------------
// Searchable FormikSelectField
// ---------------------------------------------------------------------------
export function FormikSelectField({
  name,
  options,
  storeLabel = false,
  placeholder = "Select option",
  className = "",
  disabled = false,
}: FormikSelectFieldProps) {
  const { values, setFieldValue } = useFormikContext<any>();
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const fieldValue = getIn(values, name);

  // Get currently selected option for display
  const selectedOption = useMemo(() => {
    if (fieldValue === undefined || fieldValue === null) return null;
    if (storeLabel) {
      return options.find((o) => o.label === fieldValue);
    }
    return options.find((o) => o.value === fieldValue);
  }, [fieldValue, options, storeLabel]);

  // Filter options based on search term
  const filteredOptions = useMemo(() => {
    if (!searchTerm.trim()) return options;

    const term = searchTerm.toLowerCase().trim();
    return options.filter((opt) =>
      opt.label.toLowerCase().includes(term)
    );
  }, [options, searchTerm]);

  const handleSelect = (opt: { label: string; value: any }) => {
    const valueToStore = storeLabel ? opt.label : opt.value;
    setFieldValue(name, valueToStore);
    setOpen(false);
    setSearchTerm(""); // Clear search after selection
  };

  const handleButtonClick = () => {
    if (disabled) return;
    setOpen((prev) => !prev);
    if (!open) {
      // Auto focus search input when dropdown opens
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 10);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={handleButtonClick}
        disabled={disabled}
        className={`
          h-10 w-full
          bg-white border border-gray-300 rounded-lg
          px-3 text-left text-sm
          flex items-center justify-between
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200
          ${disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "hover:border-gray-400"
          }
        `}
      >
        <span className="truncate">
          {selectedOption?.label || placeholder}
        </span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>

      {/* Dropdown with Search */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden text-sm">
          {/* Search Input */}
          <div className="p-2 border-b border-gray-100 sticky top-0 bg-white z-10">
            <input
              ref={searchInputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Options List */}
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 && (
              <div className="px-4 py-3 text-gray-400 text-center">
                No matching options found
              </div>
            )}

            {filteredOptions.map((opt, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(opt)}
                className={`
                  w-full px-4 py-2.5 text-left hover:bg-blue-50 transition-colors
                  ${selectedOption &&
                    ((storeLabel && selectedOption.label === opt.label) ||
                      (!storeLabel && selectedOption.value === opt.value))
                    ? "bg-blue-100 font-medium"
                    : ""
                  }
                `}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// FormikController
// ---------------------------------------------------------------------------
function FormikController({
  label,
  name,
  className = "flex flex-col gap-1",
  fieldstyle = "h-10 w-full px-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none",
  inputWidthIconStyle = "h-10 w-full pl-9 pr-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none",
  fieldConfig,
  setFieldValue,
  theme = "light",
}: FormikControllerProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const { values, setFieldError } = useFormikContext<any>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const labelClass = "text-sm font-medium text-gray-700 mb-1";
  const errorClass = "text-xs text-red-600 mt-1";
  const isDisabled = fieldConfig.disabled ?? false;

  switch (fieldConfig.type) {
    case "input":
      return (
        <div className={className}>
          <label htmlFor={name} className={labelClass}>
            {label}{fieldConfig.required && <span className="text-red-600 ml-1">*</span>}
          </label>
          <Field name={name}>
            {({ field }: FieldProps) => (
              <input
                {...field}
                id={name}
                type={fieldConfig.subType || "text"}
                placeholder={fieldConfig.placeholder}
                className={`${isDisabled ? "bg-gray-200 text-gray-500 border-gray-300" : "bg-white text-gray-900 border-gray-300"} ${fieldstyle}`}
                autoComplete="off"
                disabled={isDisabled}
               value={field.value ?? ""}   // ✅ CHANGE HERE
                onClick={() => fieldConfig.onClick && fieldConfig.onClick()}
              />
            )}
          </Field>
          <ErrorMessage name={name ?? ""} component="div" className={errorClass} />
        </div>
      );

    case "inputwithicon": {
      const Icon = fieldConfig.Icon || User;
      const inputType = fieldConfig.subType === "password" && !showPassword ? "password" : "text";

      return (
        <div className={className}>
          <label htmlFor={name} className={labelClass}>
            {label}{fieldConfig.required && <span className="text-red-600 ml-1">*</span>}
          </label>
          <div className="relative">
            <Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <Field
              type={inputType}
              id={name}
              name={name}
              placeholder={fieldConfig.placeholder}
              className={inputWidthIconStyle}
              disabled={isDisabled}
              value={name ? values[name] ?? "" : ""}
            />
            {fieldConfig.subType === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            )}
          </div>
          <ErrorMessage name={name ?? ""} component="div" className={errorClass} />
        </div>
      );
    }

    case "switch":
      return (
        <div className={className}>
          <label className="flex items-center justify-between h-10 border border-gray-300 rounded-lg px-3">
            <span className="text-sm font-medium">{label}</span>
            <Field name={name}>
              {({ field }: any) => (
                <Switch
                  checked={field.value}
                  onCheckedChange={(checked) => setFieldValue?.(name ?? "", checked)}
                />
              )}
            </Field>
          </label>
          <ErrorMessage name={name ?? ""} className={errorClass} />
        </div>
      );

    case "textarea":
      return (
        <div className={className}>
          <label className="flex flex-col text-sm font-medium w-full">
            {label}
            <Field
              as="textarea"
              name={name ?? ""}
              className="mt-1 p-2 border border-gray-300 rounded-lg resize-none text-sm"
              placeholder={`Enter ${label}`}
            />
          </label>
          <ErrorMessage name={name ?? ""} className={errorClass} />
        </div>
      );

    case "number":
      return (
        <div className={className}>
          <label className={labelClass}>
            {label}{fieldConfig.required && <span className="text-red-600 ml-1">*</span>}
          </label>
          <Field name={name}>
            {({ field }: FieldProps) => (
              <div className="relative">
                <Input
                  className={`${inputWidthIconStyle}`}
                  type="number"
                  {...field}
                  disabled={isDisabled}
                  value={field.value ?? ""}
                />
                {fieldConfig.Icon && (
                  <fieldConfig.Icon className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" width={16} height={16} />
                )}
              </div>
            )}
          </Field>
          <ErrorMessage name={name ?? ""} component="div" className={errorClass} />
        </div>
      );

    case "select":
      return (
        <div className={className}>
          <label className={labelClass}>
            {label}{fieldConfig.required && <span className="text-red-600 ml-1">*</span>}
          </label>
          <FormikSelectField
            name={name ?? ""}
            options={Array.isArray(fieldConfig.options) && fieldConfig.options.length > 0 ? fieldConfig.options : []}
            storeLabel={fieldConfig.storeLabel}
            placeholder={`Select ${fieldConfig.label}`}
          // disabled={isDisabled}
          />
          <ErrorMessage component="div" name={name ?? ""} className={errorClass} />
        </div>
      );

    case "date":
      return (
        <div className={className}>
          <label className={labelClass}>{label}</label>
          <Field name={name}>
            {({ field, form }: FieldProps) => (
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    disabled={isDisabled}
                    className={`h-10 w-full justify-start text-left font-normal flex items-center gap-2
                    ${theme === "dark" ? "bg-black text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
                  >
                    <CalendarIcon className={`h-4 w-4 ${theme === "dark" ? "text-gray-300" : "text-gray-500"}`} />
                    {field.value ? new Date(field.value).toLocaleDateString() : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => {
                      form.setFieldValue(name ?? "", date?.toISOString());
                      setOpen(false);
                    }}
                    captionLayout="dropdown"
                    fromYear={1900}
                    toYear={2100}
                    className={theme === "dark" ? "bg-black text-white border border-gray-700" : "bg-white"}
                  />
                </PopoverContent>
              </Popover>
            )}
          </Field>
          <ErrorMessage name={name ?? ""} component="div" className={errorClass} />
        </div>
      );

    case "file":
    case "fileupload":
      return (
        <div className={className}>
          <label className={labelClass}>
            {label}{fieldConfig.required && <span className="text-red-600 ml-1">*</span>}
          </label>
          <Field name={name}>
            {({ form }: FieldProps) => {
              const currentFile = getIn(values, name ?? "");
              const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const maxSize = fieldConfig.maxSize || 5;
                if (file.size > maxSize * 1024 * 1024) {
                  setFieldError?.(name ?? "", `File size must be less than ${maxSize}MB`);
                  return;
                }
                form.setFieldValue(name ?? "", { type: "new", file: file });
                form.setFieldError(name ?? "", undefined);
              };
              const handleRemoveFile = () => {
                form.setFieldValue(name ?? "", null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              };
              let fileName = "";
              let fileSize = 0;
              let isExisting = false;
              if (currentFile) {
                if (currentFile instanceof File) {
                  fileName = currentFile.name;
                  fileSize = currentFile.size;
                } else if (currentFile.type === "new") {
                  fileName = currentFile.file.name;
                  fileSize = currentFile.file.size;
                } else if (currentFile.type === "existing") {
                  fileName = currentFile.name;
                  fileSize = 0;
                  isExisting = true;
                }
              }
              return (
                <div className="space-y-2 text-sm">
                  <input ref={fileInputRef} type="file" accept={fieldConfig.accept || "*"} onChange={handleFileChange} className="hidden" id={`file-input-${name}`} />
                  {!currentFile ? (
                    <label htmlFor={`file-input-${name}`} className="h-10 w-full flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer text-gray-600 hover:text-gray-700 transition-colors">
                      <Upload size={16} />
                      <span>{fieldConfig.placeholder || "Click to upload file"}</span>
                    </label>
                  ) : (
                    <div className="space-y-1">
                      <div className="h-10 w-full flex items-center justify-between border border-gray-300 rounded-lg bg-white px-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Upload size={16} className={`${isExisting ? "text-green-500" : "text-blue-500"} flex-shrink-0`} />
                          <span className="truncate">{fileName}</span>
                          {fileSize > 0 && <span className="text-xs text-gray-500">({(fileSize / 1024).toFixed(1)} KB)</span>}
                          {isExisting && <span className="text-xs text-green-600 bg-green-50 px-1 py-0.5 rounded flex-shrink-0">Current</span>}
                        </div>
                        <button type="button" onClick={handleRemoveFile} className="ml-1 p-1 rounded-full hover:bg-red-50 text-red-500 transition-colors flex-shrink-0" title="Remove file">
                          <X size={14} />
                        </button>
                      </div>
                      <label htmlFor={`file-input-${name}`} className="h-8 w-full flex items-center justify-center gap-2 border border-blue-300 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer text-blue-600 hover:text-blue-700 transition-colors text-sm">
                        <Upload size={14} />
                        <span>Replace with new file</span>
                      </label>
                    </div>
                  )}
                  {!currentFile && (
                    <p className="text-xs text-gray-500">
                      {fieldConfig.accept ? <>Accepted formats: {fieldConfig.accept.replace(/\./g, "").toUpperCase()} {fieldConfig.maxSize && `• Max size: ${fieldConfig.maxSize}MB`}</> : <>All file types accepted {fieldConfig.maxSize && `• Max size: ${fieldConfig.maxSize}MB`}</>}
                    </p>
                  )}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name={name ?? ""} component="div" className={errorClass} />
        </div>
      );

    default:
      return null;
  }
}

export default FormikController;