import { ACL_API_URL } from "@/app/connect-backend/api";
import apiClient from "@/app/connect-backend/api-client";
import { useQuery } from "@tanstack/react-query";
import { BranchesGetResponse } from "../interface/branch-interface";
import { DepartmentGetResponse } from "../interface/deparment-interface";
import { errorResponse } from "@/app/connect-backend/error-interface";

export const useGetBranches = () => {
  return useQuery<BranchesGetResponse, errorResponse>({
    queryKey: ["branches-list"],
    queryFn: () => getBranches(),
    enabled: true, // ✅ always fetch branches list
    staleTime: 5 * 60 * 1000, // 5 minutes
    // keepPreviousData: true,    // ✅ keep old data while fetching new page
  });
};

const getBranches = async (): Promise<BranchesGetResponse> => {
  const response = await apiClient.get(ACL_API_URL.Branches);

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};

export const useGetDepartment = () => {
  return useQuery<DepartmentGetResponse, errorResponse>({
    queryKey: ["Department-list"],
    queryFn: () => getDepartment(),
    enabled: true, // ✅ always fetch Department list
    staleTime: 5 * 60 * 1000, // 5 minutes
    // keepPreviousData: true,    // ✅ keep old data while fetching new page
  });
};

const getDepartment = async (): Promise<DepartmentGetResponse> => {
  const response = await apiClient.get(ACL_API_URL.Department);

  if (response.data?.success === false) {
    throw { data: response.data };
  }

  return response.data;
};
