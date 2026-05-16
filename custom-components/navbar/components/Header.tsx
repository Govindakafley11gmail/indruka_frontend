"use client";

import { useState } from "react";
import { ChevronDown, Phone, HeadphonesIcon, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { YatraLogo } from "./YatraLogo";
import { CorporatesDropdown } from "./CorporatesDropdown";
import {
  CORPORATE_MENU_ITEMS,
  CORPORATE_MENU_Bhutan_ITEMS,
} from "../constants";
import { FilterMainDrawer } from "@/app/components/drawer/drawer-horizontal";
import { MobileMenuContent } from "@/app/components/drawer/mobileMenuContent";
import Link from "next/link";
import { socials } from "@/custom-components/footer/footer";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="relative z-20 p-4">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <YatraLogo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
                <CorporatesDropdown
                title="Bhutan"
                items={CORPORATE_MENU_Bhutan_ITEMS}
                icon="/bhutan.png"
                variant="titles-only" // ← only change needed
              />

              <CorporatesDropdown
                title="India"
                items={CORPORATE_MENU_ITEMS}
                icon="/india.png"
              />

            
              <Button variant="outline" className="flex items-center gap-1.5">
                <HeadphonesIcon className="w-4 h-4" />
                <Link href={"/about"}>
                ABout Us
                </Link>
              </Button>

              <Button variant="outline" className="flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                 
                <Link href={"/support"}>
                Support
                </Link>
              </Button>
            </nav>

            {/* Desktop Login */}
            <div className="hidden md:block">
              <div className="flex gap-3">
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

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <FilterMainDrawer open={open} onClose={() => setOpen(false)}>
        <MobileMenuContent />
      </FilterMainDrawer>
    </>
  );
}
