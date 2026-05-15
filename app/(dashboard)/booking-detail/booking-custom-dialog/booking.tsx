/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateBooking, useUpdateRegBooking } from "../tanstack-function";
import { BookingData } from "../../party/interface";

interface BookingCustomDialogProps {
    selectedRow: BookingData | null;
}

const readOnlyFields: { label: string; key: string }[] = [
    { label: "Trip Name", key: "trip_name" },
    { label: "Country", key: "country" },
    { label: "Number of Travellers", key: "number_of_travellers" },
    { label: "Total Price", key: "total_price" },
    { label: "Paid Amount", key: "paid_amount" },
    { label: "Due Amount", key: "due_amount" },
    { label: "Quotation Number", key: "quotation_number" },
    { label: "Status", key: "status" },
    { label: "Payment Status", key: "payment_status" },
];

const BookingCustomComponent = ({ selectedRow }: BookingCustomDialogProps) => {
    const { mutate: updateRegBooking, isPending } = useUpdateRegBooking();

    const [startDate, setStartDate] = useState<string>(selectedRow?.start_date ?? "");
    const [endDate, setEndDate] = useState<string>(selectedRow?.end_date ?? "");

    if (!selectedRow) return null;

    const handleUpdate = () => {
        updateRegBooking({
            booking_id: selectedRow.id,
            data: {
                
                trip_name: selectedRow.trip_name,
                country: selectedRow.country,
                number_of_travellers: selectedRow.number_of_travellers,
                total_price: Number(selectedRow.total_price),
                paid_amount: Number(selectedRow.paid_amount),
                due_amount: Number(selectedRow.due_amount),
                quotation_number: selectedRow.quotation_number,
                status: selectedRow.status,

                start_date: startDate,
                end_date: endDate,
            } as any,
        });
    };

    return (
        <div className="space-y-6">

            {/* Read-only fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {readOnlyFields.map((field) => {
                    const value = (selectedRow as any)[field.key];
                    return (
                        <div key={field.key} className="flex flex-col gap-1">
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                                {field.label}
                            </span>
                            <span className="text-sm font-medium text-foreground">
                                {value !== null && value !== undefined && value !== ""
                                    ? String(value)
                                    : "—"}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Editable date fields */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1">
                    <Label htmlFor="start_date" className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        Start Date
                    </Label>
                    <Input
                        id="start_date"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <Label htmlFor="end_date" className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                        End Date
                    </Label>
                    <Input
                        id="end_date"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex justify-end">
                <Button
                    type="button"
                    disabled={isPending}
                    onClick={handleUpdate}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                >
                    {isPending ? "Saving..." : "Update Booking"}
                </Button>
            </div>

        </div>
    );
};

export default BookingCustomComponent;