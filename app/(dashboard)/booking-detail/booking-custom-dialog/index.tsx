/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useUpdateBooking } from "../tanstack-function";
import PartyCustomDialog from "./party-registration";
import BookingCustomComponent from "./booking";

const BookingCustomDialog = ({ selectedRow }: any) => {
    const { mutate: updateBooking } = useUpdateBooking();
    const [partyOpen, setPartyOpen] = useState(false);

    return (
        <div className="space-y-6">
             <BookingCustomComponent selectedRow={selectedRow} />
            {/* ✅ Simple toggle — no Accordion clipping */}
            <div className="w-full border rounded-lg overflow-hidden">
                <button
                    type="button"
                    onClick={() => setPartyOpen((prev) => !prev)}
                    className="w-full bg-blue-600 text-white px-4 py-3 text-left flex justify-between items-center"
                >
                    <span>Party</span>
                    <span>{partyOpen ? "▲" : "▼"}</span>
                </button>

                {partyOpen && (
                    <div className="p-5 space-y-4">
                        <PartyCustomDialog selectedRow={selectedRow} />
                    </div>
                )}
            </div>

        </div>
    );
};

export default BookingCustomDialog;