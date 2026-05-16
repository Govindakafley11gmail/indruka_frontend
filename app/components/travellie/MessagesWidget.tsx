"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useGetPendingBookings } from "@/app/(dashboard)/party/tanstack-function";
import { Skeleton } from "@/components/ui/skeleton";

export function PendingBookingsWidget() {
  const router = useRouter();
  const { data, isLoading, isError } = useGetPendingBookings("PENDING");

  const pendingBookings = data?.data ?? [];
  const handleBookingClick = (bookingId: string) => {
    router.push(`/booking?partyId=${bookingId}`);
  };

  return (
    <Card className="border border-gray-100 shadow-none rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4 px-5">
        <div className="flex items-center gap-2">
          <CardTitle className="text-sm font-semibold text-gray-800">
            Pending Bookings
          </CardTitle>
          <span className="w-5 h-5 bg-amber-400 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {pendingBookings.length}
          </span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </CardHeader>

      <CardContent className="px-3 pb-3">
        <div className="flex flex-col gap-1">

          {/* Loading State */}
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 px-2 py-2.5">
                <Skeleton className="w-9 h-9 rounded-full" />
                <div className="flex-1 space-y-1">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-3 w-48" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            ))}

          {/* Error State */}
          {isError && (
            <p className="text-xs text-red-500 text-center py-4">
              Failed to load bookings.
            </p>
          )}

          {/* Empty State */}
          {!isLoading && !isError && pendingBookings.length === 0 && (
            <p className="text-xs text-gray-400 text-center py-4">
              No pending bookings found.
            </p>
          )}

          {/* Data */}
          {!isLoading &&
            !isError &&
            pendingBookings.map((booking) => (
              <button
                key={booking.id}
                onClick={() => handleBookingClick(booking.id)}
                className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left w-full"
              >
                <Avatar className="w-9 h-9 shrink-0">
                  <AvatarFallback className="text-xs bg-blue-100 text-blue-600 font-semibold">
                    {booking.trip_name?.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-800 truncate">
                    {booking.trip_name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {booking.country} · {booking.number_of_travellers} travellers
                  </p>
                  <p className="text-xs text-gray-400 truncate">
                    {booking.quotation_number}
                  </p>
                </div>

                <span className="shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-300">
                  {booking.status}
                </span>
              </button>
            ))}
        </div>

        <div className="mt-2 pt-2 border-t border-gray-100 text-center">
          <button
            onClick={() => router.push("/booking")}
            className="text-xs text-blue-500 font-semibold hover:text-blue-700 transition-colors"
          >
            View all bookings →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}