"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "@/app/components/table";
import { Breadcrumb } from "@/app/components/breadcrumb";
import { ContactColumns } from "./dataform";
import { Contact } from "./interface";
import { useGetAllContacts, useUpdateContactStatusMutation } from "./tanstack-function";

const contactBreadcrumb = [
    { label: "Home", href: "/" },
    { label: "Contacts", href: "/contacts" },
];

type ContactStatus = "active" | "closed";

export default function ContactPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<Contact | null>(null);
    const [status, setStatus] = useState<ContactStatus>("active");

    // ✅ Fetch
    const { data, isLoading, isError, refetch } = useGetAllContacts();
    const contactData: Contact[] = data?.data ?? [];

    // ✅ Update mutation
    const { updateContactStatus, isUpdating } = useUpdateContactStatusMutation({
        onSuccess: () => {
            handleDialogClose();
            refetch();
        },
        onError: (err) => {
            console.error("Failed to update status:", err);
        },
    });

    const handleRowClick = (row: Contact) => {
        setSelectedRow(row);
        setStatus((row.status as ContactStatus) ?? "active"); // ✅ set current status from row
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedRow(null);
    };

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value as ContactStatus);
    };

    const handleSave = async () => {
        if (!selectedRow) return;
        await updateContactStatus({ id: selectedRow.id, status });
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
                <h1 className="text-2xl font-bold">Contacts</h1>
                <Breadcrumb items={contactBreadcrumb} />
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg space-y-6 shadow-xl">
                <div className="flex justify-end">
                    <button
                        onClick={() => refetch()}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Refresh
                    </button>
                </div>

                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {isLoading && <p className="text-center">Loading contacts...</p>}

                        {isError && (
                            <p className="text-red-500 text-center">Failed to fetch contacts</p>
                        )}

                        {!isLoading && !isError && contactData.length > 0 && (
                            <DataTable
                                data={contactData}
                                columns={ContactColumns}
                                onRowClick={handleRowClick}
                            />
                        )}

                        {!isLoading && !isError && contactData.length === 0 && (
                            <p className="text-center">No contacts found</p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dialog */}
            {isDialogOpen && selectedRow && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-lg space-y-4">
                        <h2 className="text-xl font-bold">Contact Details</h2>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="col-span-2 flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Full Name</span>
                                <span className="font-medium text-base">{selectedRow.firstName} {selectedRow.lastName}</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Email</span>
                                <span className="font-medium text-base">{selectedRow.email}</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Phone / WhatsApp</span>
                                <span className="font-medium text-base">{selectedRow.phone ?? "-"}</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">No. of Travellers</span>
                                <span className="font-medium text-base">{selectedRow.numberOfTravellers ?? "-"}</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Trip Duration</span>
                                <span className="font-medium text-base">
                                    {selectedRow.tripDuration ? `${selectedRow.tripDuration} days` : "-"}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Planned Arrival Date</span>
                                <span className="font-medium text-base">
                                    {selectedRow.plannedArrivalDate
                                        ? new Date(selectedRow.plannedArrivalDate).toLocaleDateString("en-GB")
                                        : "-"}
                                </span>
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Message</span>
                                <span className="font-medium text-base leading-relaxed">{selectedRow.message}</span>
                            </div>

                            {/* Status Select */}
                            <div className="col-span-2 flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Status</span>
                                <select
                                    value={status}
                                    onChange={handleStatusChange}
                                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="active">Active</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={handleDialogClose}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                            >
                                {isUpdating ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
}