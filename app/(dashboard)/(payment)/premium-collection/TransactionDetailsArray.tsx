/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { FieldArray, useFormikContext } from "formik";
import { Plus, X } from "lucide-react";
import { baseField, getFieldsForMode } from "../interface/data-form";
import FormikController from "@/app/components/custom-form";

interface TransactionDetailsArrayProps {
  name: string;
  gridCols?: number;
}

export const TransactionDetailsArray: React.FC<
  TransactionDetailsArrayProps
> = ({ name, gridCols = 5 }) => {
  const { values } = useFormikContext<any>();

  const rows = values?.[name] || [];

  const gridClassMap: Record<number, string> = {
    1: "md:grid-cols-5",
    2: "md:grid-cols-5",
    3: "md:grid-cols-5",
    4: "md:grid-cols-5",
    5: "md:grid-cols-5",
  };

  return (
    <div className="space-y-4 bg-white p-4 my-5 rounded-lg shadow">
      {/* HEADER WITH BUTTON */}
      <FieldArray name={name}>
        {({ push, remove }) => (
          <>
            <div className="flex items-center gap-2 ">
              {/* <h1 className="text-lg font-semibold text-gray-800">
                Transaction Details
              </h1> */}

              {/* ADD BUTTON (MOVED HERE) */}
              <button
                type="button"
                onClick={() =>
                  push({
                    collection_mode: "",
                    instrument_number: "",
                    bank_name: "",
                    collection_date: "",
                  })
                }
                className="flex items-center bg-blue-600 text-white p-2 hover:bg-blue-700  cursor-pointer rounded-lg"
              >
                <Plus size={16} />
                Add  Transaction
              </button>
            </div>

            {/* ROWS */}
            <div className="space-y-4 mt-4">
              {rows.map((row: any, index: number) => (
                <div
                  key={row.id || `${name}-${index}`}
                  className={`grid grid-cols-1 sm:grid-cols-2 ${
                    gridClassMap[gridCols]
                  } gap-4 border p-4 rounded relative`}
                >
                  {/* collection_mode */}
                  <FormikController
                    label={baseField.label!}
                    name={`${name}.${index}.${baseField.name}`}
                    fieldConfig={baseField}
                  />

                  {getFieldsForMode(row.collection_mode || "").map((field) => (
                    <FormikController
                      key={field.name}
                      label={field.label!}
                      name={`${name}.${index}.${field.name}`}
                      fieldConfig={field}
                    />
                  ))}

                  {/* remove button */}
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded hover:bg-red-700"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </FieldArray>
    </div>
  );
};