"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PDFDownloadLink, Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer";
import { InvoiceData } from "../interface";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: InvoiceData[] | null;
}

const GST_RATE = 0.05;

// PDF Styles
const pdfStyles = StyleSheet.create({
  page: { padding: 20, fontSize: 10, fontFamily: "Helvetica" },
  header: { fontSize: 14, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  table: { width: "auto", marginBottom: 5 },
  tableRow: { flexDirection: "row" },
  tableColHeader: {
    width: "20%",
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "#2563eb",
    color: "#fff",
    padding: 2,
    fontSize: 10,
  },
  tableCol: { width: "20%", borderWidth: 1, borderColor: "#000", padding: 2, fontSize: 10 },
  totals: { marginTop: 5, padding: 5, borderWidth: 1, borderColor: "#dbeafe", fontSize: 10 },
  signature: { marginTop: 20, alignItems: "flex-end", fontSize: 10 },
  logo: { width: 250, height: 60 },
  center: { alignItems: "center", marginBottom: 10 },
});

// PDF Component
const InvoicePDF: React.FC<{ data: InvoiceData[] }> = ({ data }) => (
  <Document>
    {data.map((invoice, idx) => {
      const totalPremium =
        invoice.items?.reduce(
          (sum, item) => sum + item.amount / (invoice.gstApplicable==='YES' ? 1 + GST_RATE : 1),
          0
        ) || 0;
      const gstAmount = invoice.gstApplicable ==='YES'? Number((totalPremium * GST_RATE).toFixed(2)) : 0;
      const grandTotal = totalPremium + gstAmount;

      return (
        <Page key={idx} size="A4" style={pdfStyles.page}>
          {/* Logo Centered */}
          <View style={pdfStyles.center}>
            <Image
              src={`${typeof window !== "undefined" ? window.location.origin : ""}/images/assets/headers.jpg`}
              style={pdfStyles.logo}
            />
          </View>

          <Text style={pdfStyles.header}>Tax Invoice</Text>

          {/* Company & Invoice Details */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5 }}>
            <View>
              <Text>Bhutan Insurance Ltd.</Text>
              <Text>Phuntsholing, Bhutan</Text>
              <Text>TollFreeNo: 2011</Text>
            </View>
            <View>
              <Text>Invoice No: {invoice.invoiceNo}</Text>
              <Text>Date: {invoice.invoiceDate}</Text>
              <Text>GST: {invoice.gstApplicable ==='YES' ? "Applied" : "No GST"}</Text>
            </View>
          </View>

          {/* Table */}
          <View style={pdfStyles.table}>
            <View style={pdfStyles.tableRow}>
              {["#", "Description", "Identity No", "Amount", "GST"].map((h, i) => (
                <Text key={i} style={pdfStyles.tableColHeader}>
                  {h}
                </Text>
              ))}
            </View>
            {invoice.riskDetails?.map((item, i) => (
              <View key={i} style={pdfStyles.tableRow}>
                <Text style={pdfStyles.tableCol}>{i + 1}</Text>
                <Text style={pdfStyles.tableCol}>{item.party_name}</Text>
                <Text style={pdfStyles.tableCol}>{item.party_identity_no}</Text>
                <Text style={pdfStyles.tableCol}>{item.policy_premium.toFixed(2)}</Text>
                <Text style={pdfStyles.tableCol}>
                  {invoice.gstApplicable==='YES' ? (item.policy_premium * GST_RATE).toFixed(2) : "0"}
                </Text>
              </View>
            ))}
          </View>

          {/* Totals */}
          <View style={pdfStyles.totals}>
            <Text>Subtotal: Nu. {totalPremium.toFixed(2)}</Text>
            <Text>GST (5%): Nu. {gstAmount.toFixed(2)}</Text>
            <Text style={{ fontWeight: "bold", marginTop: 2 }}>Grand Total: Nu. {grandTotal.toFixed(2)}</Text>
            {/* <Text>Amount in Words: {toWords(grandTotal)} Ngultrum</Text> */}
          </View>

          {/* Signature */}
          <View style={pdfStyles.signature}>
            <Text>Bhutan Insurance Ltd.</Text>
            <Text>Authorized Signature</Text>
            <Text>____________________</Text>
          </View>

          <View style={pdfStyles.center}>
            <Image
              src={`${typeof window !== "undefined" ? window.location.origin : ""}/images/assets/footer.jpg`}
              style={pdfStyles.logo}
            />
          </View>
        </Page>
      );
    })}
  </Document>
);

// UI Component (Browser)
const InvoiceUI: React.FC<{ data: InvoiceData[] }> = ({ data }) => {
  const totalPremium =
    data[0].items?.reduce((sum, item) => sum + item.amount / (data[0].gstApplicable==='YES' ? 1 + GST_RATE : 1), 0) || 0;
  const gstAmount = data[0].gstApplicable ==='YES'? Number((totalPremium * GST_RATE).toFixed(2)) : 0;
  const grandTotal = totalPremium + gstAmount;

  return (
    <div style={{ padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}>
        <img src="/images/assets/headers.jpg" alt="Company Logo" style={{ maxWidth: "250px", height: "auto" }} />
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "0.5rem", fontSize: "1.2rem" }}>Tax Invoice</h2>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", fontSize: "0.85rem" }}>
        <div>
          <strong>Bhutan Insurance Ltd.</strong>
          <br />
          Phuntsholing, Bhutan
          <br />
          TollFreeNo: 2011
        </div>
        <div style={{ textAlign: "right" }}>
          <div>Invoice No: {data[0].invoiceNo}</div>
          <div>Date: {data[0].invoiceDate}</div>
          <div>GST: {data[0].gstApplicable ? "Applied" : "No GST"}</div>
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "0.5rem", fontSize: "0.85rem" }}>
        <thead>
          <tr style={{ backgroundColor: "#2563eb", color: "#fff" }}>
            {["#", "Description", "Identity No", "Amount", "GST"].map((h, i) => (
              <th key={i} style={{ padding: "0.25rem", border: "1px solid #000" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data[0].riskDetails?.map((item, i) => (
            <tr key={i}>
              <td style={{ padding: "0.25rem", border: "1px solid #000", textAlign: "center" }}>{i + 1}</td>
              <td style={{ padding: "0.25rem", border: "1px solid #000" }}>{item.party_name}</td>
              <td style={{ padding: "0.25rem", border: "1px solid #000" }}>{item.party_identity_no}</td>
              <td style={{ padding: "0.25rem", border: "1px solid #000", textAlign: "right" }}>
                {item.policy_premium.toFixed(2)}
              </td>
              <td style={{ padding: "0.25rem", border: "1px solid #000", textAlign: "right" }}>
                {data[0].gstApplicable ==='YES'? (item.policy_premium * GST_RATE).toFixed(2) : "0"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "0.5rem", backgroundColor: "#dbeafe", padding: "0.5rem", borderRadius: "0.25rem", fontSize: "0.85rem" }}>
        <div>Subtotal: Nu. {totalPremium.toFixed(2)}</div>
        <div>GST (5%): Nu. {gstAmount.toFixed(2)}</div>
        <div style={{ fontWeight: "bold", marginTop: 2 }}>Grand Total: Nu. {grandTotal.toFixed(2)}</div>
        {/* <div>Amount in Words: {toWords(grandTotal)} Ngultrum</div> */}
      </div>

      <div style={{ textAlign: "right", marginTop: "1rem", fontSize: "0.85rem" }}>
        <div>Bhutan Insurance Ltd.</div>
        <div>Authorized Signature</div>
        <div>____________________</div>
      </div>

      <div className="flex justify-center">
        <img
          src="/images/assets/footer.jpg"
          alt="Footer"
          style={{ maxWidth: "250px", height: "auto", marginTop: "1rem" }}
        />
      </div>
    </div>
  );
};

// Main Dialog
const InvoiceDialog: React.FC<Props> = ({ open, onOpenChange, data }) => {
  if (!data || data.length === 0) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent style={{ maxWidth: "950px", maxHeight: "95vh", overflowY: "auto", padding: "1rem" }}>
        <DialogHeader>
          <DialogTitle style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 800 }} className="bg-blue-600 p-4 rounded-lg text-white">
            Life Insurance Tax Invoice
          </DialogTitle>
        </DialogHeader>

        <InvoiceUI data={data} />

        <div style={{ textAlign: "center", marginTop: 15 }}>
          <PDFDownloadLink document={<InvoicePDF data={data} />} fileName={`invoice-${data[0].invoiceNo}.pdf`}>
            {({ loading }) =>
              loading ? <Button disabled>Loading...</Button> : <Button style={{ backgroundColor: "#2563eb", color: "#fff" }}>Download PDF</Button>
            }
          </PDFDownloadLink>

          <Button
            variant="outline"
            style={{ marginLeft: 10, backgroundColor: "#ef4444", color: "#fff" }}
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvoiceDialog;