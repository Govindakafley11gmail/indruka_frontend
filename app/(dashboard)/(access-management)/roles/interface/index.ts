
// ─── Generic API Response Wrapper ─────────────────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  status_code: number;
  data: T;
}

// ─── Role Form ─────────────────────────────────────────────────────────────────
export interface RoleInputFormValues {
  name: string;
  permissions: string[];
}

// ─── Role ──────────────────────────────────────────────────────────────────────
export interface RoleData {
  id: string;
  name: string;
  description: string | null;
  permissions: string[];
}

export interface RoleGetData {
  data: RoleData[];
}

export type RoleGetResponse = ApiResponse<RoleGetData>;

// ─── Role Permissions (all available) ─────────────────────────────────────────
export interface Permission {
  id: string;
  name: string;
}

export type RolePermissionGetResponse = ApiResponse<Permission[]>;

// ─── Role Permissions by Role ID ───────────────────────────────────────────────
export interface PermissionWithAssignment extends Permission {
  assigned: boolean;
}

export interface PermissionByRoleIdData {
  id: string;
  name: string;
  permissions: PermissionWithAssignment[];
}

export type PermissionByRoleIdResponse = ApiResponse<PermissionByRoleIdData>;