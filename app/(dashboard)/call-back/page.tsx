"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DataTable } from "@/app/components/table";
import { Breadcrumb } from "@/app/components/breadcrumb";
import { CallBackColumns } from "./dataform";
import { CallBack } from "./interface";
import { useGetAllCallBacks, useUpdateCallBackMutation } from "./tanstack-function";

const callBackBreadcrumb = [
    { label: "Home", href: "/" },
    { label: "Call Backs", href: "/call-backs" },
];

type CallBackStatus = "Active" | "Closed";

export default function CallBackPage() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState<CallBack | null>(null);
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [status, setStatus] = useState<CallBackStatus>("Active");

    // ✅ Fetch
    const { data, isLoading, isError, refetch } = useGetAllCallBacks();
    const callBackData: CallBack[] = data?.data ?? [];

    // ✅ Update mutation
    const { updateCallBack, isUpdating } = useUpdateCallBackMutation({
        onSuccess: () => {
            handleDialogClose();
            refetch();
        },
        onError: (err) => {
            console.error("Failed to update callBack:", err);
        },
    });

    const handleRowClick = (row: CallBack) => {
        setSelectedRow(row);
        setName(row.name);
        setContact(row.contact);
        setStatus((row.status as CallBackStatus) ?? "Active");
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedRow(null);
    };

    const handleSave = async () => {
        if (!selectedRow) return;
        await updateCallBack({ id: selectedRow.id, name, contact, status });
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
                <h1 className="text-2xl font-bold">Call Backs</h1>
                <Breadcrumb items={callBackBreadcrumb} />
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
                        {isLoading && <p className="text-center">Loading call backs...</p>}

                        {isError && (
                            <p className="text-red-500 text-center">Failed to fetch call backs</p>
                        )}

                        {!isLoading && !isError && callBackData.length > 0 && (
                            <DataTable
                                data={callBackData}
                                columns={CallBackColumns}
                                onRowClick={handleRowClick}
                            />
                        )}

                        {!isLoading && !isError && callBackData.length === 0 && (
                            <p className="text-center">No call backs found</p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dialog */}
            {isDialogOpen && selectedRow && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-lg space-y-4">
                        <h2 className="text-xl font-bold">Call Back Details</h2>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="col-span-2 flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Name</span>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Contact</span>
                                <input
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="col-span-2 flex flex-col gap-1">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Status</span>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value as CallBackStatus)}
                                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="Active">Active</option>
                                    <option value="Closed">Closed</option>
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