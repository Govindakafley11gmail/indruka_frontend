// app/dashboard/page.tsx ✅ clean
import { ConfirmedBookingsWidget } from "@/app/components/travellie/MessagesWidgetConfirm";
import { PendingBookingsWidget } from "@/app/components/travellie/MessagesWidget";
import { PartiallyPaidBookingsWidget } from "@/app/components/travellie/MessagesWidgetPartiallyPaid";

export default function DashboardPage() {
  return (
    <div className="flex gap-5 max-w-[1400px] mx-auto">
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
  );
}