/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import { Button } from "@/components/ui/button";
import { TransactionDetailsArray } from "./TransactionDetailsArray";
import { PremiumCollectionFields } from "../interface/data-form";
import {
  PremiumCollectionFormValues,
  getInitialValues,
  premiumCollectionValidationSchema,
} from "../interface";
import { useSearchParams } from "next/navigation";
import { set } from "date-fns";
import FormikController, { FieldConfig } from "@/app/components/custom-form";
import { VerticalModalForm } from "@/app/components/vertical-modal-form";
import { useGetBranches } from "../../(access-management)/users/tanstack-function/branches-function";
import SearchPolicies from "./search-policies";
import { BookingParty } from "../../party/interface";

// 👉 import your drawer (shadcn)


interface PremiumCollectionFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: PremiumCollectionFormValues) => void;
  defaultValues?: Partial<PremiumCollectionFormValues>;
}

export const PremiumCollectionForm: React.FC<PremiumCollectionFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  defaultValues = {},
}) => {
  if (!isOpen) return null;

  const [openDrawer, setOpenDrawer] = useState(false);
  // const [selectedQuotation, setSelectedQuotation] = useState<null>(null);
const [selectedQuotation, setSelectedQuotation] = useState<{
  selectedRow: BookingParty;
  amount: number;
} | null>(null);

  return (
    <div className="p-6 rounded-lg shadow-lg w-full max-w-[900px] mx-auto">
      <Formik
        initialValues={getInitialValues(defaultValues)}
        validationSchema={premiumCollectionValidationSchema}
        onSubmit={(
          values: PremiumCollectionFormValues,
          actions: FormikHelpers<PremiumCollectionFormValues>
        ) => {
          onSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => {
          // ✅ Auto-fill when policy_no changes
          useEffect(() => {
            if (selectedQuotation) {
              setFieldValue("collection_amount", selectedQuotation.amount);
              setFieldValue("booking_id", selectedQuotation.selectedRow.bookingId);
                            setFieldValue("registration_no", selectedQuotation.selectedRow.booking.quotation_number);

              
            }
          }, [selectedQuotation, setFieldValue]);

          return (
            <>
              <Form className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {PremiumCollectionFields().filter((f) => f.type !== "array").map((field: FieldConfig) => {
                  return (
                    <FormikController
                      key={field.name}
                      label={field.label!}
                      name={field.name!}
                      fieldConfig={{
                        ...field,
                        placeholder:
                          field.name === "registration_no"
                            ? "Click to select policy"
                            : field.placeholder,
                        onClick:
                          field.name === "registration_no"
                            ? () => setOpenDrawer(true)
                            : field.onClick,
                      }}
                    />
                  );
                })}

                <div className="col-span-full">
                  <TransactionDetailsArray
                    name="transactionDetails"
                    gridCols={4}
                  />
                </div>

                <div className="col-span-full flex justify-end gap-3 mt-4">

                  <Button type="submit" className="bg-blue-600 hover:bg-blue-600 cursor-pointer">Submit</Button>
                </div>
              </Form>
              <VerticalModalForm isOpen={openDrawer} onClose={() => setOpenDrawer(false)} >
                <h1 className="bg-blue-600 py-5 rounded-lg text-white pl-5">Search Policies</h1>

                <SearchPolicies
                  onSelect={({ selectedRow,amount  }) => {
                    setSelectedQuotation({ selectedRow,amount  });
                    setOpenDrawer(false);
                  }}
                />
              </VerticalModalForm>

            </>
          );
        }}
      </Formik>
    </div>
  );
};