import * as Yup from "yup";
import {  RollerCoaster } from "lucide-react";
import { PermssionForm } from "../../permissions/interface";
//form Data
export const PermissionFields: PermssionForm[] = [
  {
    name: "name",
    label: "Role Name",
    type: "text",
    placeholder: "Enter your Role Name",
    validation: Yup.string().required("Role is required"),
    Icon: RollerCoaster,
  },
  {
    name: "permissions",
    label: "Permissions",
    type: "checkbox-group",
    optionGroups: [],
  },
];



export const Rolebreadcrumb = [
    { label: "Dashboard", href: "/" },
    { label: "Authentication", href: "/roles" },
    { label: "Roles" },
]
  