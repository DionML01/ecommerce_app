// src/app/login/page.tsx
"use client";

import {
  Box,
  FormControl,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { Formik } from "formik";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import {
  outerBox,
  formBox,
  formControl,
  titleSection,
  titleText,
  inputsSection,
  buttonsSection,
  submitButton,
  clearButton,
} from "./styles";
import MyTextInput from "./MyTextInput";
import { useAuthStore } from "@/store/useAuthStore";
import AuthRedirect from "@/components/AuthRedirect";

const Page = () => {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);

  const initialValues = { email: "", name: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .min(6, "At least 6 chars")
      .required("Password is required"),
  });

  return (
    <AuthRedirect>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setStatus, resetForm, setSubmitting }) => {
          setStatus(undefined);
          try {
            const result = await signIn("credentials", {
              email: values.email,
              name: values.name,
              password: values.password,
              redirect: false,
            });

            // Defensive checks:
            if (!result) {
              setStatus("Sign-in failed (no response from auth). Try again.");
              return;
            }

            if (result.error) {
              // result.error is often a short token (e.g. "CredentialsSignin") — map it to a friendly message:
              const friendly =
                result.error === "CredentialsSignin"
                  ? "Invalid email/name/password combination"
                  : // result.error might be a server-provided message in some setups
                    result.error ?? "Authentication failed";
              setStatus(friendly);
              return;
            }

            // Success path: hydrate session and Zustand store
            const session = await getSession();
            if (session?.user) {
              setUser(session.user);
              router.push("/");
            } else {
              setStatus(
                "Signed in but failed to read session. Try refreshing."
              );
            }
          } catch (err) {
            // unexpected runtime error (network etc.)
            console.warn("Unexpected login error:", err);
            setStatus("Unexpected error while signing in. Try again.");
          } finally {
            setSubmitting(false);
            resetForm();
          }
        }}
      >
        {({ handleSubmit, resetForm, isSubmitting, status }) => (
          <Box sx={outerBox}>
            <Box component="form" onSubmit={handleSubmit} sx={formBox}>
              <FormControl sx={formControl}>
                <Box sx={titleSection}>
                  <Typography sx={titleText}>Login</Typography>
                </Box>

                <Box sx={inputsSection}>
                  <MyTextInput name="email" label="Email" />
                  <MyTextInput name="name" label="Name" />
                  <MyTextInput
                    name="password"
                    label="Password"
                    type="password"
                  />
                </Box>

                <Box sx={buttonsSection}>
                  <Button
                    type="submit"
                    sx={submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <CircularProgress
                        size={20}
                        color="inherit"
                        sx={{ color: "#fff" }}
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>

                  <Button
                    type="button"
                    onClick={() => resetForm()}
                    sx={clearButton}
                  >
                    Clear
                  </Button>
                </Box>

                {/* friendly UI error message (no console.error) */}
                {status && (
                  <Typography color="error" sx={{ mt: 1 }}>
                    {status}
                  </Typography>
                )}
              </FormControl>
            </Box>
          </Box>
        )}
      </Formik>
    </AuthRedirect>
  );
};

export default Page;
