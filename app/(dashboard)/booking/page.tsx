"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useSearchBookingQuery } from "../party/tanstack-function";
import { DataTable } from "@/app/components/table";
import { PartyColumns } from "./dataform";
import { BookingData } from "../party/interface";
import { VerticalModalForm } from "@/app/components/vertical-modal-form";
import BookingCustomDialog from "../booking-detail/booking-custom-dialog";

const Booking = () => {
    const searchParams = useSearchParams();
    const urlBookingId = searchParams.get("partyId");

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<BookingData | null>(null);

    const { data, isLoading, error } = useSearchBookingQuery(urlBookingId ?? "");

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading booking</div>;

    const handleRowClick = (row: BookingData) => {
        setSelectedRow(row);
        setIsDialogOpen(true);
    };

    const handleClose = () => {
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
                <h1 className="text-2xl font-bold">Booking Details</h1>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg space-y-6 shadow-xl">
                <DataTable
                    data={data?.data ? [data.data] : []}
                    columns={PartyColumns}
                    onRowClick={handleRowClick}
                />
            </div>

            <VerticalModalForm isOpen={isDialogOpen} onClose={handleClose}>
                <BookingCustomDialog
                    isOpen={isDialogOpen}
                    onClose={handleClose}
                    selectedRow={selectedRow}
                />
            </VerticalModalForm>
        </motion.div>
    );
};

export default Booking;