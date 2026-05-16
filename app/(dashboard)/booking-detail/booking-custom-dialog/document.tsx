/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Formik, Form } from "formik";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/app/components/table";
import FormikController from "@/app/components/custom-form";

import {
    DocumentColumns,
    DocumentDialogFields,
} from "../dataform";
import { useGetDocuments, usePostDocument } from "../tanstack-function";

const DocumentCustomDialog = ({ selectedRow }: any) => {
    const { mutate: postDocument, isPending } = usePostDocument();

    // 👇 Fetch documents by selectedRow.id
    const { data: documents, isLoading } = useGetDocuments(selectedRow?.id);
    const documentFields = DocumentDialogFields;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Formik
            enableReinitialize
            initialValues={{
                type: "",
                document_number: "",
                expiry_date: "",
                file: null as any,
            }}
            onSubmit={(values) => {
                if (!selectedRow?.id) return;

                const formData = new FormData();
                formData.append("type", values.type);
                formData.append("document_number", values.document_number);
                formData.append("expiry_date", values.expiry_date);
                formData.append("party_id", selectedRow.id);

                if (values.file instanceof File) {
                    formData.append("file", values.file);
                } else if (values.file?.type === "new" && values.file?.file instanceof File) {
                    formData.append("file", values.file.file);
                } else if (values.file?.type === "existing") {
                    formData.append("existing_file_name", values.file.name);
                }

                postDocument(formData);
                setIsEditing(false);
            }}
        >
            {({ setValues, resetForm }) => (
                <Form>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {documentFields.map((field: any) => (
                            <div key={field.name} >
                                <FormikController
                                    name={field.name}
                                    label={field.label}
                                    fieldConfig={field}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end gap-2 py-5">
                        {isEditing && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => {
                                    resetForm();
                                    setIsEditing(false);
                                }}
                            >
                                Cancel
                            </Button>
                        )}
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="bg-blue-600 text-white px-4 py-2"
                        >
                            {isPending ? "Saving..." : isEditing ? "Update Document" : "Add Document"}
                        </Button>
                    </div>

                    {/* 👇 Table now uses fetched data instead of selectedRow.documents */}
                    {isLoading ? (
                        <p className="text-sm text-muted-foreground">Loading documents...</p>
                    ) : (
                        <DataTable
                            data={documents || []}
                            columns={DocumentColumns}
                            onRowClick={(row: any) => {
                                setValues({
                                    type: row.type || "",
                                    document_number: row.document_number || "",
                                    expiry_date: row.expiry_date || "",
                                    file: row.file ?? null,
                                });
                                setIsEditing(true);
                            }}
                        />
                    )}
                </Form>
            )}
        </Formik>
    );
};

export default DocumentCustomDialog;