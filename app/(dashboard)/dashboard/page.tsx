import { ConfirmedBookingsWidget } from "@/app/components/travellie/MessagesWidgetConfirm";
import { CalendarWidget } from "../../components/travellie/CalendarWidget";
import { Header } from "../../components/travellie/Header";
import { PendingBookingsWidget } from "../../components/travellie/MessagesWidget";
import { RevenueChart } from "../../components/travellie/RevenueChart";
import { StatsCards } from "../../components/travellie/StatsCards";
import { TopDestinations } from "../../components/travellie/TopDestinations";
import { TotalTrips } from "../../components/travellie/TotalTrips";
import { TravelPackages } from "../../components/travellie/TravelPackages";
import { UpcomingTrips } from "../../components/travellie/UpcomingTrips";
import { PartiallyPaidBookingsWidget } from "@/app/components/travellie/MessagesWidgetPartiallyPaid";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">

        <main className="flex-1 p-5 overflow-auto">
          <div className="flex gap-5 max-w-[1400px] mx-auto">


            {/* Messages column (between main and right sidebar) */}
            <div className="w-72 shrink-0 flex flex-col gap-4">
              <PendingBookingsWidget />
            </div>
            <div className="w-72 shrink-0 flex flex-col gap-4">
              <ConfirmedBookingsWidget />
            </div>
            <div className="w-72 shrink-0 flex flex-col gap-4">
              <PartiallyPaidBookingsWidget />
            </div>
          </div>
         
        </main>
      </div>

      {/* Right Sidebar */}
      {/* <div className="w-64 shrink-0 bg-white border-l border-gray-100 p-4 flex flex-col gap-4 overflow-auto">
        <CalendarWidget />
        <UpcomingTrips />
      </div> */}
    </div>
  );
}
