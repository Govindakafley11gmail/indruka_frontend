import { Dessert, RollerCoaster } from "lucide-react";
import * as Yup from "yup";
import { PermssionForm } from "../interface";

export const fields: PermssionForm[] = [
    {
      name: "name",
      label: "Permission Name",
      type: "text",
      placeholder: "Enter your name",
      validation: Yup.string().required("Name is required"),
      Icon: RollerCoaster,
    },
  
  ];

export const permissionbreadcrumb = [
    { label: "Dashboard", href: "/" },
    { label: "Authentication", href: "/permissions" },
    { label: "Permissions" },
]
  