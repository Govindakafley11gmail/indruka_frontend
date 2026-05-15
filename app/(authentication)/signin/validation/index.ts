import * as Yup from "yup";

export const validationSignSchema = Yup.object().shape({
  username: Yup.string()
    .required("User Name is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});