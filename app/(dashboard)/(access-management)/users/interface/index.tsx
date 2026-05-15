import { BranchesAtributes } from "./branch-interface";
import { DepartmentAtributes } from "./deparment-interface";

export interface RolePermissionInputFormValues {
  roleId: string;
  permissionIds: string[];
}

export interface UserInputFormValues {
  name: string;
  email: string;
  phone_no: string;
  employee_id: string;
  identification_no: string;
  is_active: boolean;
  is_verified: boolean;
  branch_id: string;
  department_id: string;
  roleIds: string[];
  rolePermissions: RolePermissionInputFormValues[];
}

interface UserRolesAttributes {
  id: string;
  name: string;
}

interface UserPermissionsAttributes {
  id: string;
  name: string;
}

export interface UserGetDataAttributes {
  id: string;
  name: string;
  email: string;
  phone_no: string;
  employee_id: string;
  identification_no: string;
  is_active: boolean;
  is_verified: boolean;
  last_login: string | null;
  refresh_token: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  roles: UserRolesAttributes[];
  permissions: UserPermissionsAttributes[];
}

export interface UserGetResponse {
  success: boolean;
  message: string;
  data: UserGetDataAttributes[];
}

export interface rolesAttributes {
  id: string;
  name: string;
  assigned: boolean;
}

export interface permissionsAttributes {
  id: string;
  name: string;
  assigned: boolean;
}

export interface UserRolePermissionByIdAttributes {
  id: string;
  name: string;
  email: string;
  branch: BranchesAtributes;
  department: DepartmentAtributes;
  roles: rolesAttributes[];
  permissions: permissionsAttributes[];
}

export interface UserRolePermissionByIdGetResponse {
  success: boolean;
  message: string;
  data: UserRolePermissionByIdAttributes;
}