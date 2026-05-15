/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Delete, Edit, Search, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { showToast } from "nextjs-toast-notify";

import { RoleData, RoleInputFormValues } from "./interface";
import {
  useGetRolePermissions,
  useGetRolePermissionsById,
  useGetRoles,
  useRoleMutations,
} from "./tanstack-function";
import { PermissionFields, Rolebreadcrumb } from "./dataform";
import { PermssionForm } from "../permissions/interface";
import { Breadcrumb } from "@/app/components/breadcrumb";
import { CustomDialog } from "@/app/components/custom-dialog-box";
import { Column, ActionConfig, DataTable } from "@/app/components/table";

export default function RolePage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [editingRole, setEditingRole] = useState<RoleData | null>(null);

  // ─── Available permissions (for form checkboxes) ───────────────────────────
  const { data: permissionValues } = useGetRolePermissions();
  const allPermissions = permissionValues?.data ?? [];

  const dynamicPermissionFields: PermssionForm[] = useMemo(() => {
    const baseFields = PermissionFields.filter((f) => f.name !== "permissions");
    const permissionFieldTemplate = PermissionFields.find((f) => f.name === "permissions");

    if (!permissionFieldTemplate || !allPermissions.length) return baseFields;

    return [
      ...baseFields,
      {
        ...permissionFieldTemplate,
        optionGroups: [
          {
            groupName: "Available Permissions",
            options: allPermissions.map((p: any) => ({
              label: p.name,
              value: p.name,
            })),
          },
        ],
      },
    ];
  }, [allPermissions]);

  // ─── Mutations ─────────────────────────────────────────────────────────────
  const { createRole, updateRole, deleteRole, isLoading } = useRoleMutations({
    onSuccess: (data) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
      setIsDialogOpen(false);
      setEditingRole(null);
    },
    onError: (error) => {
      showToast.error(error?.data?.message ?? "Something went wrong", {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
  });

  // ─── Roles list ────────────────────────────────────────────────────────────
  const { data: rolesData, isLoading: isRolesLoading } = useGetRoles(currentPage, pageSize);
  const rolesGetData = rolesData?.data;

  const filteredData: RoleData[] = useMemo(() => {
    const roles = rolesGetData?.data ?? [];
    if (!searchQuery.trim()) return roles;
    const query = searchQuery.toLowerCase();
    return roles.filter((role: any) => role.name.toLowerCase().includes(query));
  }, [rolesGetData, searchQuery]);

  // ─── Permissions by role ID (for edit pre-fill) ────────────────────────────
  const { data: permissionByRoleIdData } = useGetRolePermissionsById(
    editingRole?.id ?? "",
  );

  // ─── Dialog default values ─────────────────────────────────────────────────
  const dialogDefaultValues = useMemo((): RoleInputFormValues => {
    if (!editingRole) return { name: "", permissions: [] };

    return {
      name: editingRole.name,
      permissions:
        permissionByRoleIdData?.data?.permissions
          ?.filter((p: any) => p.assigned)
          .map((p: any) => p.name) ?? [],
    };
  }, [editingRole, permissionByRoleIdData]);

  // ─── Handlers ──────────────────────────────────────────────────────────────
  const handleEdit = (row: RoleData) => {
    setEditingRole(row);
    setIsDialogOpen(true);
  };

  const handleDelete = (row: RoleData) => {
    const confirmed = window.confirm(
      `⚠️ Are you sure you want to delete the role "${row.name}"? This action cannot be undone.`,
    );
    if (!confirmed) return;
    deleteRole(row.id);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingRole(null);
  };

  const handleSubmit = (values: Record<string, unknown>) => {
    const typedValues = values as unknown as RoleInputFormValues;
    if (editingRole?.id) {
      updateRole({ id: editingRole.id, data: typedValues });
    } else {
      createRole(typedValues);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // ─── Table config ──────────────────────────────────────────────────────────
  const columns: Column<RoleData>[] = [
    {
      header: "S.No",
      render: (_, row) => {
        const index = filteredData.findIndex((r) => r.id === row.id);
        return (currentPage - 1) * pageSize + index + 1;
      },
    },
    {
      header: "Name",
      accessor: "name",
    },
  ];

  const actions: ActionConfig<RoleData>[] = useMemo(
    () => [
      {
        label: "Edit",
        icon: <Edit className="h-4 w-4" />,
        onClick: handleEdit,
      },
      {
        label: "Delete",
        icon: <Delete className="h-4 w-4" />,
        onClick: handleDelete,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  // ─── Pagination ────────────────────────────────────────────────────────────
  const showingFrom = filteredData.length > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const showingTo = Math.min(currentPage * pageSize);

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Breadcrumb */}
      <div className="flex justify-end mr-8">
        <Breadcrumb items={Rolebreadcrumb} />
      </div>

      <div className="min-h-screen w-full p-6">
        {/* Page heading */}
        <div className="flex items-center gap-2 mb-6">
          <ShieldCheck className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Role Management
          </h1>
        </div>

        {/* Toolbar */}
        <div className="flex justify-between items-center gap-4 pb-3">
          <div className="relative w-1/3">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <Input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 h-12 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-slate-100 shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
            />
            {searchQuery && (
              <p className="text-xs text-gray-500 mt-1">
                Search filters the current page only. For global search, consider server-side filtering.
              </p>
            )}
          </div>

          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-blue-500 text-white hover:bg-blue-600 h-12 px-6 rounded-md shadow-md"
          >
            Create Role
          </Button>
        </div>

        {/* Table */}
        {isRolesLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4" />
              <p className="text-lg text-gray-600 dark:text-gray-400">Loading roles...</p>
            </div>
          </div>
        ) : (
          <>
            <DataTable
              data={filteredData}
              columns={columns}
              actions={actions}
              selectable
              pageSize={pageSize}
            />

            {/* Pagination info + controls */}
         
              <div className="flex justify-between items-center mt-3 text-sm text-gray-500 dark:text-gray-400">
              
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>

            {/* Empty state */}
            {filteredData.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                {searchQuery
                  ? `No roles found matching "${searchQuery}"`
                  : "No roles available. Create one to get started."}
              </div>
            )}
          </>
        )}
      </div>

      {/* Create / Edit Dialog */}
      <CustomDialog
        isOpen={isDialogOpen}
        maxwidth={600}
        onClose={handleDialogClose}
        title={editingRole ? "Edit Role" : "Create Role"}
        OnSubmitTitle={editingRole ? "Update Role" : "Create Role"}
        fields={dynamicPermissionFields}
        defaultValues={dialogDefaultValues}
        onSubmit={handleSubmit}
        CustomDialogBoxStyle="px-8 py-6 flex flex-col gap-5 overflow-y-auto flex-1"
      />
    </>
  );
}