/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "@/app/components/table";
import { Breadcrumb } from "@/app/components/breadcrumb";

import {
  initialSearchValues,
  partybreadcrumb,
  PartyColumns,
} from "../party/dataform";

import { BookingParty, BookingSearchDto } from "../party/interface";
import { useSearchPartyMutations } from "../party/tanstack-function";
import { BookingDialogFields } from "./dataform";
import BookingCustomDialog from "./booking-custom-dialog";
import { VerticalModalForm } from "@/app/components/vertical-modal-form";

function PartyInputContent() {
  const searchParams = useSearchParams();
  const urlBookingId = searchParams.get("partyId");

  const { searchBooking, bookingData, isBookingLoading, isError } =
    useSearchPartyMutations();

  const [searchValues, setSearchValues] =
    useState<BookingSearchDto>(initialSearchValues);

  const [hasSearched, setHasSearched] = useState(false);

  // ✅ Modal state
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<BookingParty | null>(null);

  // ✅ AUTO SEARCH FROM URL
  useEffect(() => {
    if (urlBookingId) {
      const payload: BookingSearchDto = { bookingId: urlBookingId };
      setSearchValues((prev) => ({ ...prev, bookingId: urlBookingId }));
      setHasSearched(true);
      searchBooking(payload);
    }
  }, [urlBookingId]);

  // ✅ Flatten data safely
  const tableData: BookingParty[] = Array.isArray(bookingData)
    ? bookingData.flatMap((booking) => booking ?? [])
    : [];

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

  // ✅ Open CustomDialog on row click
  const handleRowClick = (row: BookingParty) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedRow(null);
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
        <h1 className="text-2xl font-bold">Party Details</h1>
        <Breadcrumb items={partybreadcrumb} />
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg space-y-6 shadow-xl">
        {/* Search Inputs */}

        {/* Results */}
        <AnimatePresence>
          {hasSearched && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {isBookingLoading && <p className="text-center">Searching...</p>}

              {isError && (
                <p className="text-red-500 text-center">Failed to fetch data</p>
              )}

              {!isBookingLoading && !isError && tableData.length > 0 && (
                <DataTable
                  data={tableData}
                  columns={PartyColumns}
                  onRowClick={handleRowClick}
                />
              )}

              {!isBookingLoading && !isError && tableData.length === 0 && (
                <p className="text-center">No results found</p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <VerticalModalForm onClose={() => setIsDialogOpen(false)} isOpen={isDialogOpen}>
        <BookingCustomDialog
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          selectedRow={selectedRow}
        />
      </VerticalModalForm>
    </motion.div>
  );
}

export default function PartyInputPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <PartyInputContent />
    </Suspense>
  );
}