/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Form, Formik } from "formik";
import { formloginFields, initialValues } from "./dataforms";
import { validationSignSchema } from "./validation";
import { useRouter } from "next/navigation";
import { SignInAttributes } from "./interface/interface";
import { useLoginMutation } from "./tanstack-function";
import { showToast } from "nextjs-toast-notify";
import Link from "next/link";
import FormikController from "@/app/components/custom-form";
import { RippleWaveButton } from "@/app/components/ripple-button";
import { Playfair_Display, DM_Sans } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function Login() {
  const router = useRouter();
  const { login, isLoading, error } = useLoginMutation({
    onSuccess: (data) => {
      showToast.success(data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
      window.dispatchEvent(new Event("auth-changed"));
      setTimeout(() => {
        router.push("/dashboard");
      }, 100);
    },
    onError: (error: any) => {
      showToast.error(error || error.data.message, {
        duration: 5000,
        position: "top-right",
        transition: "topBounce",
        icon: "",
        sound: true,
      });
    },
  });

  const handleSubmit = (values: SignInAttributes) => {
    login(values);
  };

  return (
    <div className={`${dmSans.className} flex min-h-screen items-center justify-center bg-gray-50 px-4`}>
      <div className="flex max-w-xl overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex flex-1 flex-col justify-center bg-white px-8 py-12 md:px-10">
          {/* Header */}
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-gray-400">
            Account access
          </p>
          <h1 className={`${playfair.className} mb-1 text-2xl font-medium tracking-tight text-gray-900`}>
            Sign in
          </h1>
          <p className="mb-8 text-sm font-light text-gray-500">
            Enter your credentials to continue
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSignSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-4">
                {formloginFields.map((field, index) => (
                  <FormikController
                    key={field.name ?? index}
                    fieldConfig={field}
                    className="flex flex-col gap-1.5"
                    inputWidthIconStyle="pl-9 w-full h-[42px] text-sm px-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:border-[#0F6E56] focus:ring-2 focus:ring-[#0F6E56]/10 transition-all"
                    label={field.label}
                    name={field.name}
                  />
                ))}

                {/* Remember me + Forgot */}
                <div className="flex items-center justify-between py-1">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-500">
                    <Checkbox className="border-gray-300 data-[state=checked]:bg-[#0F6E56] data-[state=checked]:border-[#0F6E56]" />
                    Keep me logged in
                  </label>
                  <a
                    href="#"
                    className="text-sm font-medium"
                    style={{ color: "#0F6E56" }}
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Primary CTA */}
                <RippleWaveButton
                  type="submit"
                  variant="default"
                  enableWave
                  enableRipple
                  disabled={isLoading}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg h-[44px] text-sm font-medium text-white shadow-none transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                  style={{ backgroundColor: "#0F6E56" }}
                >
                  {isLoading ? "Signing in…" : "Sign in"}
                </RippleWaveButton>

             

             
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

