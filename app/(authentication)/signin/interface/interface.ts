export interface SignInAttributes {
  username: string;
  password: string;
}

export interface SignUpResponseAttributes {
    success: boolean;
    message: string;
    status_code: number;
}