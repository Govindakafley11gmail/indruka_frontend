"use client";

import { Mail, Phone, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "#" },
  ],
  indruka2026: [
    { label: "Help Center", href: "/support" },
    { label: "Contact", href: "/support" },
  ],
};

export const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    bg: "#1877F2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.532-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    bg: "#000000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.17 8.17 0 004.78 1.53V7.04a4.85 4.85 0 01-1.01-.35z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    bg: "#FF0000",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];
function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);
  const phone = "97577367954";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: hovered ? "10px" : "0px",
        background: "#25D366",
        borderRadius: "50px",
        padding: hovered ? "13px 20px 13px 16px" : "13px",
        boxShadow: hovered
          ? "0 8px 30px rgba(37,211,102,0.55)"
          : "0 4px 18px rgba(37,211,102,0.4)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        textDecoration: "none",
        overflow: "hidden",
        maxWidth: hovered ? "220px" : "50px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="24"
        height="24"
        fill="white"
        style={{ flexShrink: 0 }}
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.49.655 4.83 1.8 6.858L2 30l7.363-1.768A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.6a11.56 11.56 0 0 1-5.9-1.613l-.423-.252-4.37 1.05 1.082-4.253-.277-.437A11.56 11.56 0 0 1 4.4 16.003c0-6.4 5.203-11.6 11.603-11.6 6.397 0 11.597 5.2 11.597 11.6 0 6.397-5.2 11.597-11.597 11.597zm6.37-8.677c-.35-.175-2.065-1.018-2.385-1.134-.32-.117-.553-.175-.785.175-.233.35-.9 1.134-1.104 1.368-.203.233-.407.262-.757.087-.35-.175-1.478-.545-2.815-1.736-1.04-.927-1.742-2.072-1.946-2.422-.203-.35-.022-.54.153-.714.157-.157.35-.41.525-.614.175-.204.233-.35.35-.583.117-.233.058-.437-.029-.614-.087-.175-.785-1.892-1.075-2.59-.283-.68-.571-.587-.785-.598l-.668-.012c-.233 0-.61.087-.93.437-.32.35-1.22 1.192-1.22 2.908s1.25 3.372 1.423 3.605c.175.233 2.46 3.756 5.96 5.267.833.36 1.483.574 1.99.735.836.265 1.597.228 2.199.138.67-.1 2.065-.844 2.357-1.66.29-.816.29-1.515.203-1.66-.087-.146-.32-.233-.67-.408z" />
      </svg>

      <span
        style={{
          color: "white",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "14px",
          whiteSpace: "nowrap",
          opacity: hovered ? 1 : 0,
          width: hovered ? "auto" : 0,
          transition: "opacity 0.2s ease 0.05s",
          pointerEvents: "none",
        }}
      >
        Chat with us
      </span>

      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50px",
          animation: "wa-ping 2s ease-out infinite",
          pointerEvents: "none",
        }}
      />

      <style>{`
        @keyframes wa-ping {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
          70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </a>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-gray-100">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #3b82f6 0px, #3b82f6 1px, transparent 1px, transparent 40px)",
          }}
        />

        {/* ── TOP CTA BAND ── */}
        <div className="relative border-b border-gray-300">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-1">
                Ready to get started?
              </p>
              <h2
                className="text-2xl font-bold text-gray-800 md:text-3xl"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Keep your space spotless,{" "}
                <span className="text-blue-400">every time.</span>
              </h2>
            </div>
            <Link
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-600/40 hover:gap-3 whitespace-nowrap"
            >
              Get a Free Quote
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="relative mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* BRAND */}
          <div className="md:col-span-2">
            <div className="mb-5 inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-md shadow-blue-900/50">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L11.5 8.5L18 10L11.5 11.5L10 18L8.5 11.5L2 10L8.5 8.5L10 2Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                className="text-xl font-bold text-gray-800"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Enjoy<span className="text-blue-400">With Us</span>
              </span>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Trust & Professionalism Professional travel services built on
              trust, precision, and a passion for unforgettable experiences —
              planned right for you.
            </p>

            <div className="mt-7 flex gap-3">
              {/* {["FB", "TW", "IG"].map((s) => (
                <button
                  key={s}
                  className="h-9 w-9 rounded-full border border-gray-300 bg-white text-xs font-semibold text-gray-500 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  {s}
                </button>
                
              ))} */}
              {socials.map(({ label, href, bg, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-80"
                  style={{ background: bg }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAV COLUMNS — now using { label, href } objects */}
          {Object.entries(navLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group flex items-center gap-1 text-sm text-gray-500 transition-colors duration-200 hover:text-blue-600"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-blue-400"
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
              <Link
                href="/support"
                className="hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+97577367954"
                className="group flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-blue-600"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Phone size={13} />
                </span>
                +975 77367954
              </a>
              <a
                href="mailto:indruka2026@gmail.com"
                className="group flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-blue-600"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-500 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Mail size={13} />
                </span>
                indruka2026@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="relative border-t border-blue-900/40">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-blue-400/60 md:flex-row">
            <p>© 2026 Indruka tours & travels. All rights reserved.</p>
            <div className="flex gap-6">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Legal", href: "#" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors hover:text-blue-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ── */}
      <WhatsAppFloat />
    </>
  );
}
