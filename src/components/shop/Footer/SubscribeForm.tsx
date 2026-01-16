import { Box, Button, InputAdornment, TextField } from "@mui/material";
import React from "react";
import Envelope from "@/Assets/Envelope";
import { useFormik } from "formik";
import * as Yup from "yup";

const SubscribeForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      sx={{
        width: { md: "auto", xs: "100%" },
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        id="email"
        placeholder="Enter your email address"
        variant="outlined"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Envelope />
            </InputAdornment>
          ),
        }}
        sx={{
          width: { xs: "100%", sm: "100%", md: "400px" },
          "& .MuiOutlinedInput-root": {
            height: "42px",
            borderRadius: "62px",
            backgroundColor: "#fff",
            "& fieldset": { border: "none" },
            "& input:-webkit-autofill": {
              boxShadow: "0 0 0 100px white inset",
              WebkitTextFillColor: "black",
              height: "42px !important",
              borderRadius: "62px !important",
              fontSize: "16px !important",
              lineHeight: "normal !important",
              padding: "0 14px !important",
            },
          },
        }}
      />

      <Button
        onClick={formik.submitForm}
        sx={{
          width: { xs: "100%", sm: "100%", md: "400px" },
          backgroundColor: "#fff",
          color: "#000",
          fontFamily: "Satoshi Variable",
          textTransform: "none",
          fontSize: "16px",
          borderRadius: "62px",
          "&:hover": {
            backgroundColor: "#f2f2f2",
          },
        }}
      >
        Subscribe to Newsletter
      </Button>
    </Box>
  );
};

export default SubscribeForm;
