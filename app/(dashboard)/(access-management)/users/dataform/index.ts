import { RollerCoaster } from "lucide-react";
import { PermssionForm } from "../../permissions/interface";
import * as Yup from "yup";
import { FieldConfig } from "@/app/components/custom-dialog-box";

export const Userbreadcrumb = [
  { label: "Dashboard", href: "/" },
  { label: "Authentication", href: "/users" },
  { label: "Users" },
];

//form Data
export const UserFields = (
  batchOptions: { label: string; value: string }[],
  departmentOptions: { label: string; value: string }[],
): FieldConfig[] => [
  {
    name: "name",
    label: "User Name",
    type: "text",

    disabled: true, // ✅ this will show it as read-only
  },
  {
    name: "email",
    label: "Email Address",
    type: "text",

    disabled: true, // ✅ this will show it as read-only
  },
  {
    name: "emp_number",
    label: "Employee Number",
    type: "text",

    disabled: true, // ✅ this will show it as read-only
  },
  {
    name: "status",
    label: "Active Status",
    type: "checkbox",
    disabled: true, // ✅ this will show it as read-only
  },
  {
    name: "failed_attempts",
    label: "Failed Attempts",
    type: "checkbox",
    disabled: true, // ✅ this will show it as read-only
  },
  {
    name: "branch_id",
    label: "Branch",
    type: "select",
    options: batchOptions,
  },
  {
    name: "department_id",
    label: "Department",
    type: "select",
    options: departmentOptions,
  },
  {
    name: "roleIds",
    label: "Roles",
    type: "checkbox-group",
    optionGroups: [],
  },
  {
    name: "rolePermissions",
    label: "Permissions",
    type: "checkbox-group",
    optionGroups: [],
  },
];
