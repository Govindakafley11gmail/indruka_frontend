import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import apiClient from "@/app/connect-backend/api-client";
import { CreateResponseAttributes } from "@/app/connect-backend/error-interface/successresponse";
import { errorResponse } from "@/app/connect-backend/error-interface";
import {
  RoleInputFormValues,
  RoleGetResponse,
  RolePermissionGetResponse,
  PermissionByRoleIdResponse,
} from "../interface";
import ACL_API_URL from "@/app/connect-backend/api/acl-route";

// ─── Mutation Options ──────────────────────────────────────────────────────────
export interface MutationOptions {
  onSuccess?: (data: CreateResponseAttributes) => void;
  onError?: (error: errorResponse) => void;
}

// ─── API Calls ─────────────────────────────────────────────────────────────────

const createRole = async (data: RoleInputFormValues): Promise<CreateResponseAttributes> => {
  const response = await apiClient.post(`${ACL_API_URL.Role}`, data);
  if (response.data?.success === false) throw { data: response.data };
  return response.data;
};

const updateRole = async ({
  id,
  data,
}: {
  id: string | number;
  data: RoleInputFormValues;
}): Promise<CreateResponseAttributes> => {
  const response = await apiClient.put(`${ACL_API_URL.Role}/${id}`, data);
  if (response.data?.success === false) throw { data: response.data };
  return response.data;
};

const deleteRole = async (id: string | number): Promise<CreateResponseAttributes> => {
  const response = await apiClient.delete(`${ACL_API_URL.Role}/${id}`);
  if (response.data?.success === false) throw { data: response.data };
  return response.data;
};

const getRoles = async (page: number, limit: number): Promise<RoleGetResponse> => {
  const response = await apiClient.get(
    `${ACL_API_URL.Role}?page=${page}&limit=${limit}`,
  );
  if (response.data?.success === false) throw { data: response.data };
  return response.data;
};

const getPermissions = async (): Promise<RolePermissionGetResponse> => {
  const response = await apiClient.get(`${ACL_API_URL.Permission}`);
  if (response.data?.success === false) throw { data: response.data };
  return response.data;
};

const getPermissionsById = async (id: string): Promise<PermissionByRoleIdResponse> => {
  const response = await apiClient.get(`${ACL_API_URL.Role}/${id}/role-permission`);
  if (response.data?.success === false) throw { data: response.data };
  return response.data;
};

// ─── Hooks ─────────────────────────────────────────────────────────────────────

export const useRoleMutations = (options?: MutationOptions) => {
  const queryClient = useQueryClient();

  const invalidateRoles = () => {
    queryClient.invalidateQueries({ queryKey: ["roles"] });
  };

  const createMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    RoleInputFormValues
  >({
    mutationFn: createRole,
    onSuccess: (data) => {
      invalidateRoles();
      options?.onSuccess?.(data);
    },
    onError: (error) => options?.onError?.(error),
  });

  const updateMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    { id: string | number; data: RoleInputFormValues }
  >({
    mutationFn: updateRole,
    onSuccess: (data) => {
      invalidateRoles();
      options?.onSuccess?.(data);
    },
    onError: (error) => options?.onError?.(error),
  });

  const deleteMutation = useMutation<
    CreateResponseAttributes,
    errorResponse,
    string | number
  >({
    mutationFn: deleteRole,
    onSuccess: (data) => {
      invalidateRoles();
      options?.onSuccess?.(data);
    },
    onError: (error) => options?.onError?.(error),
  });

  return {
    createRole: createMutation.mutate,
    isCreating: createMutation.isPending,
    updateRole: updateMutation.mutate,
    isUpdating: updateMutation.isPending,
    deleteRole: deleteMutation.mutate,
    isDeleting: deleteMutation.isPending,
    isLoading:
      createMutation.isPending ||
      updateMutation.isPending ||
      deleteMutation.isPending,
  };
};

export const useGetRoles = (page: number = 1, limit: number = 10) => {
  return useQuery<RoleGetResponse, errorResponse>({
    queryKey: ["roles", page, limit],
    queryFn: () => getRoles(page, limit),
    placeholderData: (prev) => prev, // keeps previous page data while fetching next
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetRolePermissions = () => {
  return useQuery<RolePermissionGetResponse, errorResponse>({
    queryKey: ["permissions"],
    queryFn: getPermissions,
    staleTime: 5 * 60 * 1000,
  });
};

export const useGetRolePermissionsById = (id: string) => {
  return useQuery<PermissionByRoleIdResponse, errorResponse>({
    queryKey: ["role-permissions", id],
    queryFn: () => getPermissionsById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};