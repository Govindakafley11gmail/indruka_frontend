/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import { Check, Phone, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { COUNTRIES } from "./callbacks-data";
import { useCallBackMutations } from "./call-back";
import { showToast } from "nextjs-toast-notify";



export default function RequestCallBack() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("BT");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({ fullName: false, phone: false });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedCountry = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];
const {
    createCallBack,
  
  } = useCallBackMutations({
    onSuccess: (data) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
      
    },
    onError: (error) => {
      showToast.error(error?.data?.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
  });
  const filteredCountries = useMemo(() => {
    const q = search.toLowerCase();
    return COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q)
    );
  }, [search]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Focus search on open
  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
    else setSearch("");
  }, [open]);

  const validate = () => {
    const err = { fullName: !fullName.trim(), phone: !phone.trim() };
    setErrors(err);
    return !err.fullName && !err.phone;
  };

const handleSubmit = () => {
  if (!validate()) return;
  setIsLoading(true);

  const payload = {
    name: fullName,
    contact: `${selectedCountry.dialCode}${phone}`,
  };

  createCallBack(payload, {
    onSettled: () => setIsLoading(false),
    onSuccess: () => {
      setSubmitted(true);
    },
  });
};

  // ── Success state ──────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 p-8 flex flex-col items-center text-center"
          style={{ animation: "fadeSlideUp 0.4s ease both" }}
        >
          {/* Decorative ring */}
          <div className="relative mb-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center ring-4 ring-emerald-100">
              <Phone className="w-7 h-7 text-emerald-500 fill-emerald-100" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
            </span>
          </div>

          <h3 className="text-lg font-semibold text-slate-800 tracking-tight">
            We&lsquo;ll call you shortly
          </h3>
          <p className="mt-1.5 text-sm text-slate-400 leading-relaxed">
            Hey <span className="font-medium text-slate-600">{fullName}</span>, expect
            us at{" "}
            <span className="font-medium text-slate-700 tabular-nums">
              {selectedCountry.dialCode} {phone}
            </span>
          </p>

          <button
            onClick={() => { setSubmitted(false); setFullName(""); setPhone(""); }}
            className="mt-6 text-xs font-medium text-slate-400 hover:text-slate-600 underline underline-offset-4 transition-colors"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  // ── Main form ──────────────────────────────────────────────────
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');
        .cb-root { font-family: 'DM Sans', sans-serif; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cb-dropdown { animation: dropIn 0.18s ease both; }
        .cb-input {
          width: 100%; background: #f8fafc; border: 1.5px solid #e2e8f0;
          border-radius: 10px; height: 36px; padding: 0 12px;
          font-size: 13px; color: #1e293b; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .cb-input::placeholder { color: #94a3b8; }
        .cb-input:focus { border-color: #6366f1; box-shadow: 0 0 0 3px rgba(99,102,241,0.12); background: #fff; }
        .cb-input.error { border-color: #f87171; box-shadow: 0 0 0 3px rgba(248,113,113,0.1); }
        .cb-btn {
          width: 100%; height: 38px; border-radius: 10px; border: none; cursor: pointer;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: #fff; font-size: 13px; font-weight: 600;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
        }
        .cb-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(99,102,241,0.45); }
        .cb-btn:active:not(:disabled) { transform: translateY(0); }
        .cb-btn:disabled { opacity: 0.75; cursor: not-allowed; }
        .cb-country-btn {
          display: flex; align-items: center; gap: 5px; padding: 0 10px 0 10px;
          height: 100%; border: none; background: transparent; cursor: pointer;
          border-right: 1.5px solid #e2e8f0; border-radius: 0;
          transition: background 0.15s; flex-shrink: 0;
        }
        .cb-country-btn:hover { background: #f1f5f9; }
        .cb-country-item {
          display: flex; align-items: center; gap: 10px; width: 100%;
          padding: 7px 12px; background: none; border: none; cursor: pointer;
          font-size: 13px; color: #334155; text-align: left;
          transition: background 0.1s; font-family: 'DM Sans', sans-serif;
          border-radius: 8px;
        }
        .cb-country-item:hover { background: #f1f5f9; }
        .cb-country-item.selected { background: #eef2ff; color: #4f46e5; }
        .cb-spinner {
          width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.35);
          border-top-color: #fff; border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .cb-label {
          display: block; font-size: 11px; font-weight: 500;
          color: #64748b; margin-bottom: 4px; letter-spacing: 0.02em;
        }
        .cb-error-msg {
          font-size: 11.5px; color: #ef4444; margin-top: 5px; padding-left: 4px;
          display: flex; align-items: center; gap: 4px;
        }
      `}</style>

      <div
        className="cb-root w-full max-w-sm mx-auto h-70"
        style={{ animation: "fadeSlideUp 0.35s ease both" }}
      >
        <div className="relative overflow-visible rounded-3xl bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 p-4">

          {/* Header */}
          <div className="mb-3">
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
                <Phone className="w-3.5 h-3.5 text-indigo-500" />
              </div>
              <div>
                <h2 className="text-[13px] font-semibold text-slate-800 leading-tight tracking-tight">
                  Request a Callback
                </h2>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">
                  We&lsquo;ll reach you within minutes
                </p>
              </div>
            </div>
            {/* Subtle divider */}
            <div className="mt-3 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          </div>

          <div className="space-y-2.5">

            {/* Full Name */}
            <div>
              <label className="cb-label">Full name</label>
              <input
                type="text"
                placeholder="e.g. Tshering Dorji"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (errors.fullName && e.target.value.trim())
                    setErrors((p) => ({ ...p, fullName: false }));
                }}
                className={cn("cb-input", errors.fullName && "error")}
              />
              {errors.fullName && (
                <p className="cb-error-msg">
                  <X className="w-3 h-3" /> Full name is required
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="cb-label">Mobile number</label>
              <div
                className={cn(
                  "flex items-center bg-slate-50 border-[1.5px] rounded-[10px] overflow-visible h-9 transition-all duration-200",
                  errors.phone
                    ? "border-red-400 shadow-[0_0_0_3px_rgba(248,113,113,0.1)]"
                    : "border-slate-200 focus-within:border-indigo-400 focus-within:shadow-[0_0_0_3px_rgba(99,102,241,0.12)] focus-within:bg-white"
                )}
              >
                {/* Country picker */}
                <div ref={dropdownRef} className="relative h-full flex-shrink-0">
                  <button
                    type="button"
                    className="cb-country-btn h-full rounded-l-[9px]"
                    onClick={() => setOpen((o) => !o)}
                    aria-label="Select country"
                  >
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    <span className="text-[11px] font-medium text-slate-500 tabular-nums">
                      {selectedCountry.dialCode}
                    </span>
                    <svg
                      className={cn(
                        "w-3 h-3 text-slate-400 transition-transform duration-200",
                        open && "rotate-180"
                      )}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {open && (
                    <div
                      className="cb-dropdown absolute left-0 top-[calc(100%+6px)] z-50 w-72 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/80 overflow-hidden"
                    >
                      {/* Search */}
                      <div className="p-2.5 border-b border-slate-100">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                          <input
                            ref={searchRef}
                            type="text"
                            placeholder="Search country or code…"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full h-9 pl-8 pr-3 text-[13px] bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-400 focus:bg-white transition-all"
                            style={{ fontFamily: "'DM Sans', sans-serif" }}
                          />
                          {search && (
                            <button
                              onClick={() => setSearch("")}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>

                      {/* List */}
                      <div className="max-h-52 overflow-y-auto p-1.5">
                        {filteredCountries.length === 0 ? (
                          <p className="text-center text-xs text-slate-400 py-6">
                            No countries found
                          </p>
                        ) : (
                          filteredCountries.map((c) => (
                            <button
                              key={c.code}
                              type="button"
                              onClick={() => {
                                setCountryCode(c.code);
                                setOpen(false);
                              }}
                              className={cn(
                                "cb-country-item",
                                c.code === countryCode && "selected"
                              )}
                            >
                              <span className="text-base leading-none flex-shrink-0">{c.flag}</span>
                              <span className="flex-1 truncate text-[13px]">{c.name}</span>
                              <span className="tabular-nums text-[12px] text-slate-400 flex-shrink-0">
                                {c.dialCode}
                              </span>
                              {c.code === countryCode && (
                                <Check className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0" />
                              )}
                            </button>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone input */}
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone && e.target.value.trim())
                      setErrors((p) => ({ ...p, phone: false }));
                  }}
                  className="flex-1 h-full bg-transparent border-none outline-none text-sm text-slate-700 placeholder:text-slate-400 px-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>
              {errors.phone && (
                <p className="cb-error-msg">
                  <X className="w-3 h-3" /> Mobile number is required
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="button"
              className="cb-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="cb-spinner" />
              ) : (
                <>
                  <Phone className="w-3.5 h-3.5" />
                  Call Me Back
                </>
              )}
            </button>
          </div>

          {/* Footer note */}
          <p className="text-center text-[10px] text-slate-400 mt-3">
            🔒 Your number is never shared with third parties
          </p>
        </div>
      </div>
    </>
  );
}