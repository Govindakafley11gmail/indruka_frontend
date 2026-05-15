export interface BranchesAtributes {
  branch_pk_code: string;
  branch_name: string;
}

export interface BranchesGetResponse{
    success: boolean;
    message: string;
    status_code: number;
    data: BranchesAtributes[];
    timestamp: string;
}