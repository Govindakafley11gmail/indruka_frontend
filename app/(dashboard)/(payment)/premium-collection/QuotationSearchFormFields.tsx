/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { FC } from "react";
import { Formik, Form } from "formik";
import { Quotationfields } from "../interface/data-form";
import FormikController from "@/app/components/custom-form";

interface QuotationFormFieldsProps {
    showCreateButton: boolean;
    initialValues: any; // initial form values
    onSubmit: (values: any) => void; // submit callback
    isSubmitting: boolean; // form submission state
}

const QuotationFormFields: FC<QuotationFormFieldsProps> = ({
    initialValues,
    showCreateButton,
    isSubmitting,
    onSubmit,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            enableReinitialize
            onSubmit={(values) => {
                onSubmit(values); // pass data to parent
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <div className="flex items-end gap-4 w-full">

                        {/* Fields */}
                        <fieldset className="flex-1 grid grid-cols-3 gap-4 rounded-lg p-5">
                            {Quotationfields().map((field) => (
                                <div key={field.name} className="flex flex-col min-w-[150px]">
                                    <FormikController
                                        label={field.label}
                                        name={field.name}
                                        fieldConfig={field}
                                        setFieldValue={setFieldValue} 
                                    />
                                </div>
                            ))}
                        </fieldset>

                        {/* Button */}
                        {showCreateButton && (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 h-10 mb-5 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        )}

                    </div>

                </Form>
            )}
        </Formik>
    );
};

export default QuotationFormFields;