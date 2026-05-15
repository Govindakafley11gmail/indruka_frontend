/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef, useState } from "react";
import { Formik, Form, FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import FormikController from "@/app/components/custom-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCreateParty, useUpdateBooking } from "../tanstack-function";
import DocumentCustomDialog from "./document";
import { DataTable } from "@/app/components/table";
import { BookingData, BookingParty } from "../../party/interface";
import { PartyColumns } from "../../party/dataform";

interface BookingFormValues {
    id: string;
    user_name: string;
    mobile_number: string;
    email: string;
    adults: string;
    amount: number | string;
}

interface PartyCustomDialogProps {
    selectedRow: BookingData | null;
}

const fields = [
    { name: "user_name", label: "User Name", type: "input" },
    { name: "mobile_number", label: "Mobile Number", type: "input" },
    { name: "email", label: "Email", type: "input" },
    { name: "adults", label: "Adults", type: "number" },
    { name: "amount", label: "Amount", type: "input" },
];

const PartyCustomDialog = ({ selectedRow }: PartyCustomDialogProps) => {
    const formikRef = useRef<FormikProps<BookingFormValues>>(null);
    const { mutate: updateBooking, isPending: isUpdating } = useUpdateBooking();
    const { mutate: createParty, isPending: isCreating } = useCreateParty();
    const [selectedParty, setSelectedParty] = useState<BookingParty | null>(null);
    const [openDocPartyId, setOpenDocPartyId] = useState<string | null>(null);

    if (!selectedRow) return null;

    const isPending = isUpdating || isCreating;
    const isEditMode = !!selectedParty;
    const defaultTab = selectedRow.parties?.[0]?.id ?? "";

    const initialValues: BookingFormValues = {
        id: selectedParty?.id || "",
        user_name: selectedParty?.user_name || "",
        mobile_number: selectedParty?.mobile_number || "",
        email: selectedParty?.email || "",
        adults: selectedParty?.adults?.toString() || "",
        amount: selectedParty?.amount || "",
    };

    const handleSubmit = (values: BookingFormValues) => {
        if (isEditMode) {
            // ✅ Update existing party
            updateBooking({
                booking_id: values.id,
                data: {
                    ...values,
                    adults: Number(values.adults),
                    amount: Number(values.amount),
                },
            });
        } else {
            // ✅ Create new party
            createParty({
                booking_id: selectedRow.id,
                data: {
                    ...values,
                    adults: Number(values.adults),
                    amount: Number(values.amount),
                },
            });
        }
    };

    const handleRowClick = (row: any) => {
        setSelectedParty(row);
    };

    const handleClear = () => {
        setSelectedParty(null);
        formikRef.current?.resetForm();
    };

    return (
        <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {() => (
                <div className="space-y-4">
                    <Tabs defaultValue={defaultTab}>

                        <TabsList className="flex flex-wrap gap-1 mb-4">
                            {selectedRow.parties.map((party) => (
                                <TabsTrigger key={party.id} value={party.id}>
                                    {party.user_name}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {selectedRow.parties.map((party) => (
                            <TabsContent key={party.id} value={party.id}>
                                <div className="space-y-4">

                                    <Form className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {fields.map((field) => (
                                            <FormikController
                                                key={field.name}
                                                name={field.name}
                                                label={field.label}
                                                fieldConfig={field}
                                            />
                                        ))}
                                    </Form>

                                    <div className="flex justify-end gap-2">
                                        {/* Show Clear button only in edit mode */}
                                        {isEditMode && (
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={handleClear}
                                            >
                                                Clear
                                            </Button>
                                        )}
                                        <Button
                                            type="button"
                                            disabled={isPending}
                                            onClick={() => formikRef.current?.submitForm()}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                                        >
                                            {isPending
                                                ? "Saving..."
                                                : isEditMode
                                                ? "Update Party"
                                                : "Add Party"}
                                        </Button>
                                    </div>

                                    <DataTable
                                        data={selectedRow.parties || []}
                                        columns={PartyColumns}
                                        onRowClick={handleRowClick}
                                    />

                                    <div className="w-full border rounded-lg overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setOpenDocPartyId(
                                                    openDocPartyId === party.id ? null : party.id
                                                )
                                            }
                                            className="w-full bg-blue-600 text-white px-4 py-3 text-left flex justify-between items-center"
                                        >
                                            <span>Documents — {party.user_name}</span>
                                            <span>{openDocPartyId === party.id ? "▲" : "▼"}</span>
                                        </button>

                                        {openDocPartyId === party.id && (
                                            <div className="p-5 space-y-4">
                                                <DocumentCustomDialog selectedRow={party} />
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            )}
        </Formik>
    );
};

export default PartyCustomDialog;