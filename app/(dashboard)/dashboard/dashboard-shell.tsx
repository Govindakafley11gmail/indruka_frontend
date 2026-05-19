import { Suspense } from "react";
import { Header } from "@/app/components/travellie/Header";
import { Sidebar } from "@/app/components/travellie/Sidebar";

export function DashboardShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Suspense fallback={
                <aside className="w-20 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700" />
            }>
                <Sidebar />
            </Suspense>
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-6 bg-gray-50 dark:bg-gray-900 flex-1 text-gray-900 dark:text-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}