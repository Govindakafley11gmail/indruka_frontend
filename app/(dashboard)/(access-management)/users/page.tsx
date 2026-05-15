/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Edit, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { showToast } from "nextjs-toast-notify";

import {
  useGetUserRolePermissionById,
  useGetUsers,
  useUserMutations,
} from "./tanstack-function";
import { Userbreadcrumb, UserFields } from "./dataform";
import { PermssionForm } from "../permissions/interface";
import {
  RolePermissionInputFormValues,
  UserGetDataAttributes,
  UserInputFormValues,
} from "./interface";
import {
  useGetBranches,
  useGetDepartment,
} from "./tanstack-function/branches-function";
import { ActionConfig, Column, DataTable } from "@/app/components/table";
import { Breadcrumb } from "@/app/components/breadcrumb";
import { CustomDialog } from "@/app/components/custom-dialog-box";

export default function User() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [editingRole, setEditingRole] = useState<UserGetDataAttributes | null>(null);

  // Branches List
  const { data: branchesData } = useGetBranches();

  // Department List
  const { data: departmentData } = useGetDepartment();

  // Convert branch options to strings
  const batchOptions = useMemo(
    () =>
      (branchesData?.data || []).map((batch: any) => ({
        label: batch.branch_name,
        value: String(batch.branch_pk_code),
      })),
    [branchesData],
  );

  // Convert department options to strings
  const departmentOptions = useMemo(
    () =>
      (departmentData?.data || []).map((dept: any) => ({
        label: dept.dept_name,
        value: String(dept.dept_pk_code),
      })),
    [departmentData],
  );

  const fields = useMemo(
    () => UserFields(batchOptions, departmentOptions),
    [batchOptions, departmentOptions],
  );

  // Fetch roles & permissions for selected user
  const { data: permissionByRoleIdData } = useGetUserRolePermissionById(
    editingRole?.id || "",
  );

  // Fetch users — response.data is a direct array
  const { data: UserData, isLoading: isUserLoading } = useGetUsers(
    currentPage,
    pageSize,
  );
  const UserGetData: UserGetDataAttributes[] = UserData?.data || [];

  // Filtered data based on search
  const filteredData: UserGetDataAttributes[] = useMemo(() => {
    if (!UserGetData.length) return [];
    if (!searchQuery.trim()) return UserGetData;

    const query = searchQuery.toLowerCase();
    return UserGetData.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.employee_id.toLowerCase().includes(query) ||
        user.identification_no.toLowerCase().includes(query),
    );
  }, [UserGetData, searchQuery]);

  // Dynamic fields for dialog
  const dynamicPermissionFields: PermssionForm[] = useMemo(() => {
    if (!fields.length) return [];

    const baseFields = fields.filter(
      (f) => !["roleIds", "rolePermissions"].includes(f.name),
    );

    const roleFieldTemplate = fields.find((f) => f.name === "roleIds");
    const permissionFieldTemplate = fields.find(
      (f) => f.name === "rolePermissions",
    );

    const roles = permissionByRoleIdData?.data?.roles || [];
    const permissions = permissionByRoleIdData?.data?.permissions || [];

    return [
      ...baseFields,
      roleFieldTemplate && {
        ...roleFieldTemplate,
        optionGroups: [
          {
            groupName: "Available Roles",
            options: roles.map((r) => ({
              label: r.name,
              value: r.id,
            })),
          },
        ],
      },
      permissionFieldTemplate && {
        ...permissionFieldTemplate,
        optionGroups: [
          {
            groupName: "Available Permissions",
            options: permissions.map((p) => ({
              label: p.name,
              value: p.id,
            })),
          },
        ],
      },
    ].filter(Boolean) as PermssionForm[];
  }, [fields, permissionByRoleIdData]);

  const { updateUser, isLoading } = useUserMutations({
    onSuccess: (data) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
      });
      setEditingRole(null);
    },
    onError: (error) => {
      showToast.error(error?.data?.message || "Error occurred", {
        duration: 5000,
        position: "top-right",
      });
    },
  });

  // Dialog open state
  const isDialogOpenComputed = !!editingRole && !!permissionByRoleIdData;

  // Edit user
  const handleEdit = (row: UserGetDataAttributes) => {
    setEditingRole(row);
  };

  // Default values for the dialog
  const dialogDefaultValues = useMemo(() => {
    if (!editingRole || !permissionByRoleIdData?.data) {
      return {
        name: "",
        email: "",
        phone_no: "",
        employee_id: "",
        identification_no: "",
        is_active: false,
        roleIds: [],
        rolePermissions: [],
        branch_id: "",
        department_id: "",
      };
    }

    return {
      name: editingRole.name || "",
      email: editingRole.email || "",
      phone_no: editingRole.phone_no || "",
      employee_id: editingRole.employee_id || "",
      identification_no: editingRole.identification_no || "",
      is_active: editingRole.is_active === true,

      branch_id: permissionByRoleIdData.data.branch?.branch_pk_code
        ? String(permissionByRoleIdData.data.branch.branch_pk_code)
        : "",
      department_id: permissionByRoleIdData.data.department?.dept_pk_code
        ? String(permissionByRoleIdData.data.department.dept_pk_code)
        : "",

      roleIds:
        permissionByRoleIdData.data.roles
          ?.filter((r) => r.assigned === true)
          .map((r) => r.id) || [],

      rolePermissions:
        permissionByRoleIdData.data.permissions
          ?.filter((p) => p.assigned === true)
          .map((p) => p.id) || [],
    };
  }, [editingRole, permissionByRoleIdData]);

  // Submit handler
  const handleCreateSubmit = (values: Record<string, any>) => {
    if (!editingRole?.id) return;

    const rolePermissions: RolePermissionInputFormValues[] = (
      values.roleIds || []
    ).map((roleId: string) => ({
      roleId,
      permissionIds: values.rolePermissions || [],
    }));

    const payload: UserInputFormValues = {
      name: editingRole.name || "",
      email: editingRole.email || "",
      phone_no: editingRole.phone_no || "",
      employee_id: editingRole.employee_id || "",
      identification_no: editingRole.identification_no || "",
      is_verified: editingRole.is_verified ?? false,
      is_active: values.is_active === true,
      branch_id: values.branch_id || "",
      department_id: values.department_id || "",
      roleIds: values.roleIds || [],
      rolePermissions,
    };

    updateUser({ id: editingRole.id, data: payload });
  };

  // Table columns
  const columns: Column<UserGetDataAttributes>[] = [
    {
      header: "S.No",
      render: (_, row) => {
        const rowIndex = filteredData.findIndex((r) => r.id === row.id);
        return (currentPage - 1) * pageSize + rowIndex + 1;
      },
    },
    { header: "Name", accessor: "name" },
    { header: "Employee ID", accessor: "employee_id" },
    { header: "Email", accessor: "email" },
    { header: "Phone No", accessor: "phone_no" },
    { header: "Identification No", accessor: "identification_no" },
    {
      header: "Status",
      render: (_, row) => (
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full border ${
            row.is_active
              ? "bg-green-100 text-green-700 border-green-200"
              : "bg-red-100 text-red-700 border-red-200"
          }`}
        >
          {row.is_active ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      header: "Verified",
      render: (_, row) => (
        <span
          className={`px-3 py-1 text-sm font-medium rounded-full border ${
            row.is_verified
              ? "bg-blue-100 text-blue-700 border-blue-200"
              : "bg-yellow-100 text-yellow-700 border-yellow-200"
          }`}
        >
          {row.is_verified ? "Verified" : "Unverified"}
        </span>
      ),
    },
    {
      header: "Role(s)",
      render: (_, row) => {
        if (!row.roles || row.roles.length === 0) {
          return <span className="text-gray-400">—</span>;
        }
        return (
          <div className="flex flex-wrap gap-2">
            {row.roles.map((role: any, index: number) => (
              <div
                key={index}
                className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 border border-blue-200"
              >
                {role.name ?? role}
              </div>
            ))}
          </div>
        );
      },
    },
  ];

  const getActions = (): ActionConfig<UserGetDataAttributes>[] => [
    { label: "Edit", icon: <Edit className="h-4 w-4" />, onClick: handleEdit },
  ];

  const totalRecords = UserGetData.length;
  const showingFrom = filteredData.length
    ? (currentPage - 1) * pageSize + 1
    : 0;
  const showingTo = Math.min(currentPage * pageSize, totalRecords);

  return (
    <>
      <div className="flex justify-end mr-8">
        <Breadcrumb items={Userbreadcrumb} />
      </div>

      <div className="min-h-screen w-full p-6">
        {/* Search */}
        <div className="flex justify-between items-center gap-4 pb-3">
          <div className="relative w-1/3">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <Input
              type="text"
              placeholder="Search by name, email, employee ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 h-12 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-slate-100 shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            {searchQuery && (
              <p className="text-xs text-gray-500 mt-1">
                Note: Search filters current page only. For global search,
                consider server-side filtering.
              </p>
            )}
          </div>
        </div>

        {isUserLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h1 className="text-lg text-gray-600 dark:text-gray-400">
                Loading users...
              </h1>
            </div>
          </div>
        ) : (
          <>
            <DataTable
              data={filteredData}
              columns={columns}
              actions={getActions()}
              selectable
              pageSize={pageSize}
            />

            {!filteredData.length && !isUserLoading && (
              <div className="text-center py-8 text-gray-500">
                {searchQuery
                  ? `No users found matching "${searchQuery}"`
                  : "No users available"}
              </div>
            )}
          </>
        )}
      </div>

      {/* Dialog */}
      <CustomDialog
        key={editingRole?.id + JSON.stringify(permissionByRoleIdData?.data)}
        isOpen={isDialogOpenComputed}
        onClose={() => setEditingRole(null)}
        title={"Edit User"}
        OnSubmitTitle={"Update User"}
        fields={dynamicPermissionFields}
        onSubmit={handleCreateSubmit}
        defaultValues={dialogDefaultValues}
        CustomDialogBoxStyle="px-8 py-6 flex flex-col flex-center gap-5 overflow-y-auto flex-1"
        DisableDivStyle="grid grid-cols-3 gap-4 mb-6"
      />
    </>
  );
}