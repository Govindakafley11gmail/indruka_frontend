"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { usePathname } from "next/navigation";
import { DashboardShell } from "./(dashboard)/dashboard/dashboard-shell";
import { sidebarMenuMain, sidebarMenuParty } from "./components/travellie/SidebarItem";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const dashboardRoutes = [
    ...sidebarMenuMain,
    ...sidebarMenuParty,
  ]
    .flatMap(section => section.items)
    .flatMap(item => [item.href, ...(item.children?.map(c => c.href) ?? [])])
    .filter(Boolean) as string[];

  const isDashboardRoute = dashboardRoutes.some(route => pathname.startsWith(route));
  return (
    <QueryClientProvider client={queryClient}>
        {/* {isDashboardRoute ? ( */}
          <DashboardShell>{children}</DashboardShell>
        {/* // ) : ( */}
        {/* //   children */}
        {/* // )} */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
