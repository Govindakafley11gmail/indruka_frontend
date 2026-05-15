import { Header } from "@/app/components/travellie/Header";
import { Sidebar } from "@/app/components/travellie/Sidebar";


export function DashboardShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                {/* <Header /> */}
                <Header />
                <main className="p-6 bg-gray-50 dark:bg-gray-900 flex-1 text-gray-900 dark:text-gray-100">
                    {children}
                </main>
            </div>
        </div>
    );
}
