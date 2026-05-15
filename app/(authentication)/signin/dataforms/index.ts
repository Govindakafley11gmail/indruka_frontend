import { Mail, Lock, Icon, User } from "lucide-react";
import { SignInAttributes } from "../interface/interface";
export const formloginFields = [
  {
    type: "inputwithicon",
    name: "username",
    label: "User Name",
    placeholder: "Enter your User Name",

    Icon: User,
  },
  {
    type: "inputwithicon",
    name: "password", // Changed from "Password" to "password"
    label: "Password",
    Icon: Lock,
    placeholder: "Enter your Password",

    subType: "password",
  },
  {
    type: "checkbox",
    name: "checkbox",
    label: "Remember me", // Also consider changing this label
  },
];

export const initialValues: SignInAttributes = {
  username: "",
  password: "",
};