/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
"use client";

import { useState, useMemo, Suspense } from "react";

import { collectionbreadcrumb, PremiumCollectionData } from "../interface";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useGetPremiumCollectionByPolicy, usePremiumCollectionMutations } from "../tanstack-function";
import { PremiumCollectionForm } from "../premium-collection/PremiumCollectionForm";
import { showToast } from "nextjs-toast-notify";
import { useQueryClient } from "@tanstack/react-query";
import { getCollectionColumns, mapResponseToInvoiceData } from "../interface/data-form";
import CollectionReceiptDialog from "./download-document";
import InvoiceDialog from "./tax-invoice-document";
import { Breadcrumb } from "@/app/components/breadcrumb";
import { DataTable } from "@/app/components/table";
import { VerticalModalForm } from "@/app/components/vertical-modal-form";

function CollectionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const partyIdFromParams = searchParams.get("partyId");
  const [isOpen, setIsOpen] = useState(false);
  const [downloadRow, setDownloadRow] = useState(false);

  const [selectedRow, setSelectedRow] = useState<PremiumCollectionData | null>(null);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [Invoice, setInvoice] = useState(false);
  const search = partyIdFromParams || "";
  const page = parseInt(searchParams.get("page") ?? "1", 10);
  const limit = parseInt(searchParams.get("limit") ?? "10", 10);
  const queryClient = useQueryClient();

  const { data: collectionResponse, isLoading } = useGetPremiumCollectionByPolicy({
    search,
    page,
    limit,
  });

  const { createCollectionAsync, isCreating, isError, error } = usePremiumCollectionMutations({
    onSuccess: (response) => {
      if (response.status === 'success') {
        showToast.error(response.message, { duration: 5000, position: "top-right" });
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["premium-collection"] });
      showToast.success(response.message, { duration: 5000, position: "top-right" });
      setIsOpen(false);
    },
    onError: (error) => {
      const message = error.message || error?.data?.errors || error?.data?.message;
      showToast.error(message, { duration: 5000, position: "top-right" });
    },
  });

  const collectionList: PremiumCollectionData[] = useMemo(() => {
    if (!collectionResponse?.data || !Array.isArray(collectionResponse.data.data)) return [];
    return collectionResponse.data.data;
  }, [collectionResponse]);

  const filteredData = useMemo(() => {
    if (!searchText) return collectionList;
    const lowerSearch = searchText.toLowerCase();
    return collectionList.filter((item) =>
      [item.collection_amount].some((val) => val && String(val).toLowerCase().includes(lowerSearch))
    );
  }, [collectionList, searchText]);

  function onReverse(row: PremiumCollectionData): void {}

  const onDownload = (row: PremiumCollectionData) => {
    setSelectedRow(row);
    setDownloadRow(true);
  };

  const onGenerateInvoice = (row: PremiumCollectionData) => {
    setSelectedRow(row);
    setInvoice(true);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Premium Collection</h1>
        <Breadcrumb items={collectionbreadcrumb} />
      </div>

      <div className="p-6 rounded-lg space-y-6 shadow-xl">
        {/* Search & Add */}
        <div className="flex justify-between items-center">
          <input
            type="text"
            placeholder="Search collection..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border rounded-md p-2 w-80"
          />
          <Button
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            + Add Collection
          </Button>
        </div>

        {/* Table */}
        {isLoading ? (
          <div className="text-center py-10">Loading...</div>
        ) : filteredData.length === 0 ? (
          <div className="text-center py-10 text-gray-500">No collections available</div>
        ) : (
          <DataTable<PremiumCollectionData>
            data={filteredData}
            columns={getCollectionColumns(onReverse, onGenerateInvoice, onDownload)}
          />
        )}
      </div>

      {downloadRow && (
        <VerticalModalForm isOpen={downloadRow} onClose={() => setDownloadRow(false)}>
          <CollectionReceiptDialog
            open={downloadRow}
            onOpenChange={setDownloadRow}
            data={selectedRow}
          />
        </VerticalModalForm>
      )}

      {Invoice && (
        <VerticalModalForm isOpen={Invoice} onClose={() => setInvoice(false)}>
          <InvoiceDialog
            open={Invoice}
            onOpenChange={setInvoice}
            data={selectedRow ? mapResponseToInvoiceData([selectedRow]) : null}
          />
        </VerticalModalForm>
      )}

      {isOpen && (
        <VerticalModalForm isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h1 className="bg-blue-600 py-2 rounded-lg text-white pl-5">Premium Collection Form</h1>
          <PremiumCollectionForm
            isOpen={true}
            onClose={() => setIsOpen(false)}
            onSubmit={async (values: any) => {
              const collectionData = {
                ...values,
                collection_mode: values.transactionDetails[0]?.collection_mode as "CASH" | "CHEQUE" | "ONLINE",
                transactionDetails: values.transactionDetails.map((item: any) => ({
                  collection_mode: item.collection_mode as "CASH" | "CHEQUE" | "ONLINE",
                  amount: item.amount || 0,
                  instrument_date: item.instrument_date || "",
                  instrument_number: item.instrument_number || "",
                  bank_name: item.bank_name || "",
                })),
              };
              await createCollectionAsync(collectionData);
              setIsOpen(false);
            }}
          />
        </VerticalModalForm>
      )}
    </div>
  );
}

export default function CollectionPage() {
  return (
    <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
      <CollectionContent />
    </Suspense>
  );
}