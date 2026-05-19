// DashboardShell.tsx — verify it looks like this
import { Suspense } from "react";
import { Header } from "@/app/components/travellie/Header";
import { Sidebar } from "@/app/components/travellie/Sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">                          {/* ← flex row */}
      <Suspense fallback={
        <aside className="w-20 min-h-screen bg-white border-r border-gray-200" />
      }>
        <Sidebar />                                 {/* ← sidebar here */}
      </Suspense>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-50 flex-1">
          {children}                               {/* ← your page content */}
        </main>
      </div>
    </div>
  );
}

