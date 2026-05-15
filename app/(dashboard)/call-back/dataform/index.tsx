import { Column } from "@/app/components/table";
import { CallBack } from "../interface";

export const CallBackColumns: Column<CallBack>[] = [
  {
    header: "Name",
    accessor: "name",
  },
  {
    header: "Contact",
    accessor: "contact",
  },
  {
    header: "Status",
    accessor: "status",
  },
];