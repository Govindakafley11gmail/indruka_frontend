export interface DepartmentAtributes {
  dept_pk_code: string;
  dept_name: string;
}

export interface DepartmentGetResponse {
  success: boolean;
  message: string;
  status_code: number;
  data: DepartmentAtributes[];
  timestamp: string;
}
