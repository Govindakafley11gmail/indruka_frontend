"use client";

import { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname } from "next/navigation";
import { DashboardShell } from "./(dashboard)/dashboard/dashboard-shell";

const DASHBOARD_PREFIX = "/dashboard"; // adjust to your actual route prefix

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();

  const isDashboardRoute = pathname.startsWith(DASHBOARD_PREFIX);

  return (
    <QueryClientProvider client={queryClient}>
      {isDashboardRoute ? (
        <DashboardShell>{children}</DashboardShell>
      ) : (
        children
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}