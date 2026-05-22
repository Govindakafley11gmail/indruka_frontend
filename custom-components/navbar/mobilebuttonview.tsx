"use client";

import { Home, Map, Phone, User } from "lucide-react";
import { NavItem } from "./components/navItem";

export function MobileBottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md z-50 md:hidden">
      <div className="flex justify-around items-center h-14">

        <NavItem icon={Home} label="Home" />
        <NavItem icon={Map} label="Trips" />
        <NavItem icon={Phone} label="Contact" />
        <NavItem icon={User} label="Account" />

      </div>
    </div>
  );
}