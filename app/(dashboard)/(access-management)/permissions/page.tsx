/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Delete, Edit, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useGetPermissions, usePermissionMutations } from "./tanstack-function";
import { showToast } from "nextjs-toast-notify";
import { PermissionAttributes, PermissionInputFormValues } from "./interface";
import { fields, permissionbreadcrumb } from "./dataform";

import { CustomDialog } from "@/app/components/custom-dialog-box";
import { Column, ActionConfig, DataTable } from "@/app/components/table";
import { Breadcrumb } from "@/app/components/breadcrumb";

export default function Permission() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingRole, setEditingRole] = useState<PermissionAttributes | null>(null);

  const { createPermission, updatePermission, deletePermission, isLoading } =
    usePermissionMutations({
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
        showToast.error(error?.data?.message, {
          duration: 5000,
          position: "top-right",
          transition: "topBounce",
          icon: "",
          sound: true,
        });
      },
    });

  // Fetch all permissions (no pagination — API returns flat array)
  const { data: permissionData, isLoading: isPermissionLoading } =
    useGetPermissions();

  // permissionData.data is the flat PermissionAttributes[] array
  const filteredData: PermissionAttributes[] = useMemo(() => {
    const list: PermissionAttributes[] = permissionData?.data ?? [];

    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase();
    return list.filter((permission) =>
      permission.name.toLowerCase().includes(query)
    );
  }, [permissionData, searchQuery]);

  const handleEdit = (row: PermissionAttributes) => {
    setIsDialogOpen(true);
    setEditingRole(row);
  };

  const handleDelete = (row: PermissionAttributes) => {
    const confirmed = window.confirm(
      `⚠️ Are you sure you want to delete the permission "${row.name}"? This action cannot be undone.`
    );
    if (!confirmed) return;
    deletePermission(row.id);
  };

  const dialogDefaultValues = useMemo(() => {
    if (!editingRole) {
      return { name: "", description: "" };
    }
    return {
      name: editingRole.name,
      description: editingRole.description ?? "",
    };
  }, [editingRole]);

  const columns: Column<PermissionAttributes>[] = [
    {
      header: "S.No",
      render: (_, row) => {
        // Simple index since there's no server-side pagination
        const index = filteredData.findIndex((r) => r.id === row.id);
        return index + 1;
      },
    },
    {
      header: "Name",
      accessor: "name",
    },
    {
      header: "Description",
      accessor: "description",
    },
  ];

  const getActions = (): ActionConfig<PermissionAttributes>[] => [
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
  ];

  const handleCreateSubmit = (values: Record<string, any>) => {
    if (editingRole?.id) {
      updatePermission({
        id: editingRole.id,
        data: values as PermissionInputFormValues,
      });
    } else {
      createPermission(values as PermissionInputFormValues);
    }
  };

  return (
    <>
      <div className="flex justify-end mr-8">
        <Breadcrumb items={permissionbreadcrumb} />
      </div>

      <div className="min-h-screen w-full p-6">
        <div className="flex justify-between items-center gap-4 pb-3">
          {/* Search input */}
          <div className="relative w-1/3">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <Input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 h-12 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm text-gray-900 dark:text-slate-100 shadow-sm dark:shadow-none focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              disabled={editingRole !== null}
            />
          </div>

          {/* Create button */}
          <Button
            onClick={() => setIsDialogOpen(true)}
            className="bg-blue-500 text-white hover:bg-blue-600 h-12 px-6 rounded-md shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={editingRole !== null}
          >
            Create Permission
          </Button>
        </div>

        {isPermissionLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h1 className="text-lg text-gray-600 dark:text-gray-400">
                Loading permissions...
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
            />

            {filteredData.length === 0 && !isPermissionLoading && (
              <div className="text-center py-8 text-gray-500">
                {searchQuery
                  ? `No permissions found matching "${searchQuery}"`
                  : "No permissions available"}
              </div>
            )}
          </>
        )}
      </div>

      {/* Dialog for creating/editing permissions */}
      <CustomDialog
        isOpen={isDialogOpen}
        maxwidth={800}
        onClose={() => {
          setIsDialogOpen(false);
          setEditingRole(null);
        }}
        title={editingRole ? "Edit Permission" : "Create Permission"}
        OnSubmitTitle={editingRole ? "Update Permission" : "Create Permission"}
        fields={fields}
        defaultValues={dialogDefaultValues}
        onSubmit={handleCreateSubmit}
        CustomDialogBoxStyle="px-8 py-6 flex flex-col flex-center gap-5 overflow-y-auto flex-1"
      />
    </>
  );
}