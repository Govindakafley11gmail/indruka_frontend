import { Column } from "@/app/components/table";
import { Contact } from "../interface";

export const ContactColumns: Column<Contact>[] = [
  {
    header: "First Name",
    accessor: "firstName",
  },
  {
    header: "Last Name",
    accessor: "lastName",
  },
  {
    header: "Email",
    accessor: "email",
  },
  {
    header: "Phone / WhatsApp",
    accessor: "phone",
    render: (_, row) => row.phone ? row.phone : "-",
  },
  {
    header: "No. of Travellers",
    accessor: "numberOfTravellers",
    render: (_, row) => row.numberOfTravellers ? row.numberOfTravellers : "-",
  },
  {
    header: "Trip Duration",
    accessor: "tripDuration",
    render: (_, row) => row.tripDuration ? `${row.tripDuration} days` : "-",
  },
  {
    header: "Planned Arrival",
    accessor: "plannedArrivalDate",
    render: (_, row) =>
      row.plannedArrivalDate
        ? new Date(row.plannedArrivalDate).toLocaleDateString("en-GB")
        : "-",
  },

  {
    header: "Date Submitted",
    accessor: "createdAt",
    render: (_, row) =>
      row.createdAt
        ? new Date(row.createdAt).toLocaleDateString("en-GB")
        : "-",
  },
];