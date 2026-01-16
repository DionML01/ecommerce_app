"use client";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import MyTextInput from "@/app/login/MyTextInput";
import { useAuthStore } from "@/store/useAuthStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ProfileDetails = () => {
  const { user, updateUser } = useAuthStore();
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
        padding: { md: "100px", xs: "10px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        fontFamily: "Satoshi Variable",
      }}
    >
      <Formik
        enableReinitialize
        initialValues={{ name: user?.name ?? "", email: user?.email ?? "" }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
        })}
        onSubmit={(values) => {
          updateUser(values.name, values.email);
          toast.success("Updated your Profile");
          router.push("/");
        }}
      >
        {({ handleSubmit, resetForm, isSubmitting, status }) => (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: { md: "800px", xs: "100%" },
              height: "80%",
              padding: { md: "20px", xs: "10px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Typography variant="h2" sx={{ marginBottom: "50px" }}>
              Profile Details Page
            </Typography>

            <MyTextInput name="email" label="Email" />
            <MyTextInput name="name" label="Name" />

            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              fullWidth
              sx={{
                height: "50px",
                borderRadius: "20px",
                fontWeight: 600,
                textTransform: "none",
                backgroundColor: "#141718",
                ":hover": { backgroundColor: "#23262F" },
              }}
            >
              {isSubmitting ? (
                <CircularProgress
                  size={20}
                  color="inherit"
                  sx={{ color: "#fff" }}
                />
              ) : (
                "Update profile"
              )}
            </Button>

            <Button
              type="button"
              onClick={() => resetForm()}
              variant="outlined"
              fullWidth
              sx={{
                height: "50px",
                borderRadius: "20px",
                fontWeight: 600,
                textTransform: "none",
                borderColor: "#141718",
                color: "#141718",
                ":hover": {
                  borderColor: "#23262F",
                  backgroundColor: "rgba(20, 23, 24, 0.04)",
                },
              }}
            >
              Clear
            </Button>

            {status && (
              <Typography color="error" sx={{ mt: 1 }}>
                {status}
              </Typography>
            )}
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ProfileDetails;
