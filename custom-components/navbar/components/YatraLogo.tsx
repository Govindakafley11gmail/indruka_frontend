"use client";

import Image from "next/image";
import Link from "next/link";

export function YatraLogo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300 border border-white/20">
        <Link href={"/"}>
          <Image
            src="/logo.jpg"
            alt="Yatra Logo"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            priority
          />
        </Link>
      </div>

   
      <Link href={"/"}>
        <span className="relative inline-flex text-3xl sm:text-3xl  text-black font-mono">
          Indruka
          <span
            className="absolute left-0 -bottom-1 h-0.5 w-0
    transition-all duration-300
    group-hover:w-full"
          />
        </span>
      </Link>
    </div>
  );
}
