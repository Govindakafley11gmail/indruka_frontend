"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "@/app/components/table";
import { Breadcrumb } from "@/app/components/breadcrumb";
import { initialSearchValues, partybreadcrumb, SearchFieldsFields, PartyColumns, SearchFields } from "../../party/dataform";
import { BookingParty, BookingSearchDto } from "../../party/interface";
import { useSearchPartyMutations } from "../../party/tanstack-function";
interface PartyInputPageProps {
  onSelect?: (payload: { selectedRow: BookingParty; amount: number }) => void;
}

export default function PartyInputPage({ onSelect }: PartyInputPageProps) {
  const { searchBooking, bookingData, isBookingLoading, isError } =
    useSearchPartyMutations();

  // ✅ Flatten all parties from all bookings into a single list
  const tableData: BookingParty[] = Array.isArray(bookingData)
    ? bookingData.flatMap((booking) => booking)
    : [];

  const [searchValues, setSearchValues] =
    useState<BookingSearchDto>(initialSearchValues);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    const payload: BookingSearchDto = {};
    for (const key in searchValues) {
      const k = key as keyof BookingSearchDto;
      if (searchValues[k]?.trim()) {
        payload[k] = searchValues[k]!.trim();
      }
    }
    if (Object.keys(payload).length === 0) return;
    setHasSearched(true);
    searchBooking(payload);
  };

  const handleRowClick = (row: BookingParty) => {
    // Sum all numeric "amount" fields across ALL rows in the table
    console.log('tableData', tableData)
    const totalAmount = tableData.reduce((sum, party) => sum + party.amount, 0);
    onSelect?.({ selectedRow: row, amount: totalAmount });
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Booking Search
        </h1>
        <Breadcrumb items={partybreadcrumb} />
      </div>

      <div className="bg-white w-full max-w-7xl dark:bg-gray-900 p-6 rounded-lg space-y-6 shadow-xl dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.1)]">

        {/* Search inputs */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-3 w-full">
            {SearchFields.map((field) => (
              <div key={field.name} className="relative">
                <field.Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder={field.placeholder}
                  value={searchValues[field.name] ?? ""}
                  onChange={(e) =>
                    setSearchValues((prev) => ({
                      ...prev,
                      [field.name]: e.target.value,
                    }))
                  }
                  className="w-100 pl-9"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSearch}
              disabled={isBookingLoading}
              className="h-9 px-6 bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-60"
            >
              {isBookingLoading ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>

        {/* Results */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isBookingLoading && (
                <p className="text-gray-500 py-2 text-center">Searching...</p>
              )}

              {!isBookingLoading && isError && (
                <p className="text-red-500 py-2 text-center">
                  Failed to fetch data. Please try again.
                </p>
              )}

              {!isBookingLoading && !isError && tableData.length > 0 && (
                <DataTable
                  data={tableData}
                  columns={PartyColumns}
                  onRowClick={handleRowClick}
                />
              )}

              {!isBookingLoading && !isError && tableData.length === 0 && (
                <p className="text-gray-500 py-2 text-center">
                  No results found.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}