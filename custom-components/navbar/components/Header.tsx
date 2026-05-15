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
              <Button className="rounded-full bg-blue-600 text-white">
                Login / Signup
              </Button>
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
