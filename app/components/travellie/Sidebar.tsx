/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { ChevronDown, Menu } from "lucide-react";
import clsx from "clsx";
import { usePathname, useSearchParams } from "next/navigation";
import { Lato } from "next/font/google";
import { sidebarMenuMain, sidebarMenuParty } from "./SidebarItem";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

interface SidebarItem {
  title: string;
  href?: string;
  icon: React.ElementType;
  children?: SidebarItem[];
}

interface SidebarMenu {
  section: string;
  items: SidebarItem[];
}

export function Sidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);
  const [sidebarMenu, setSidebarMenu] = useState<SidebarMenu[]>(sidebarMenuMain);
  const [isPartySidebar, setIsPartySidebar] = useState(false);

  const partyId = searchParams.get("partyId");

  const partyRoutes = useMemo(
    () =>
      sidebarMenuParty
        .flatMap((s) => s.items)
        .map((i) => i.href)
        .filter(Boolean) as string[],
    [],
  );

  useEffect(() => {
    const isParty = partyRoutes.some((route) => pathname.startsWith(route));
    setIsPartySidebar(isParty);
    setSidebarMenu(isParty ? sidebarMenuParty : sidebarMenuMain);
  }, [pathname, partyRoutes]);

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [title],
    );
  };

  const renderMenu = (items: SidebarItem[], level = 0) =>
    items.map(({ title, href, icon: Icon, children }) => {
      const hasChildren = !!children?.length;
      const isOpen = openMenus.includes(title);
      const isActive =
        href === pathname || children?.some((c) => c.href === pathname);

      let hrefWithPartyId = href;

      if (isPartySidebar && href && partyId) {
        const url = new URL(href, "http://dummy");
        url.searchParams.set("partyId", partyId);
        hrefWithPartyId = url.pathname + url.search;
      }

      return (
        <div key={title} className="relative group">
          {hasChildren ? (
            <button
              onClick={() => !collapsed && toggleMenu(title)}
              className={clsx(
                "w-full flex items-center rounded-lg px-3 py-2 text-sm font-bold transition",
                collapsed ? "justify-center" : "justify-between",
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
              )}
            >
              <span
                className={clsx("flex items-center", collapsed ? "" : "gap-3")}
              >
                <Icon size={18} />
                {!collapsed && title}
              </span>

              {!collapsed && (
                <ChevronDown
                  size={16}
                  className={clsx(
                    "transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              )}
            </button>
          ) : (
            <Link
              href={hrefWithPartyId!}
              className={clsx(
                "flex items-center rounded-lg px-3 py-2 text-sm font-bold transition",
                collapsed ? "justify-center" : "gap-3",
                isActive
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                  : "text-gray-700 dark:text-gray-300",
                "hover:bg-gray-100 dark:hover:bg-gray-800",
              )}
            >
              <Icon size={18} />
              {!collapsed && title}
            </Link>
          )}

          {hasChildren && (
            <div
              className={clsx(
                collapsed
                  ? "absolute left-full top-0 ml-2 hidden group-hover:block bg-white dark:bg-gray-900 shadow-lg rounded-lg p-2 w-48 z-50"
                  : "ml-6 mt-1 overflow-hidden transition-all duration-300",
                !collapsed &&
                  (isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"),
              )}
            >
              {renderMenu(children!, level + 1)}
            </div>
          )}
        </div>
      );
    });

  return (
    <aside
      className={clsx(
        `${lato.className} min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-300`,
        collapsed ? "w-20" : "w-80",
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        {!collapsed && (
          <span className="text-2xl font-bold text-blue-800 dark:text-blue-400">
            Indruka tours & travels
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Party Info */}
      {isPartySidebar && (
        <div className="px-4 pt-3 pb-2">
          {/* Party details can go here */}
        </div>
      )}

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-6">
        {sidebarMenu.map(({ section, items }) => (
          <div key={section}>
            {!collapsed && (
              <p className="mb-3 text-xs uppercase text-gray-500 dark:text-gray-400">
                {section}
              </p>
            )}
            <div className="space-y-2">{renderMenu(items)}</div>
          </div>
        ))}
      </nav>
    </aside>
  );
}