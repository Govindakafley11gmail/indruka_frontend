/* eslint-disable @typescript-eslint/no-explicit-any */

import { FieldConfig, FieldType } from "@/app/components/custom-dialog-box";

export interface PermissionInputFormValues {
  name: string;
  description?: string;
}

export interface PermissionAttributes {
  id: string;
  name: string;
  description?: string;
}

export interface PermissionGetResponseAttributes {
  success: boolean;
  data: PermissionAttributes[]; // flat array — matches { success, data: [...] }
}

export interface PermssionForm extends FieldConfig {
  name: string;
  label: string;
  placeholder?: string;
  type: FieldType;
  options?: { label: string; value: string }[];
  Icon?: React.ComponentType<any>;
  validation?: any;
  defaultValue?: any;
}