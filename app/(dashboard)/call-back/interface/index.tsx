export interface CallBack {
  id: number;
  name: string;
  contact: string;
   status: string;

}

export interface CallBackResponse {
  status: boolean;
  message: string;
  data: CallBack | null;
}

export interface CallBackListResponse {
  status: boolean;
  message: string;
  data: CallBack[] | null;
}