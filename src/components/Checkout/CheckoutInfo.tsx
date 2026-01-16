import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import MyRadioButton from "./MyRadioButton";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaTruck } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import MyTextInput from "@/app/login/MyTextInput";
import MySelect from "./MySelect";
import MyCheckbox from "./MyCheckbox";

const CheckoutInfo = () => {
  const [shipping, setShipping] = useState("Delivery");

  const initialValues = {
    email: "",
    name: "",
    country: "",
    phone: "",
    city: "",
    state: "",
    "zip-code": "",
    acceptedTerms: false,
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    name: Yup.string().required("Name is required"),
    country: Yup.string()
      .oneOf(
        ["kosovo", "albania", "north macedonia", "montenegro"],
        "Invalid Country"
      )
      .required("Country is Required"),
    phone: Yup.string()
      .required("Phone number is required")
      .test(
        "is-valid-phone",
        "Phone number must be in format: +383 XX XXX XXX or +355 XX XXX XXX or +382 XX XXX XXX or +389 XX XXX XXX",
        (value) => {
          if (!value) return false;
          const normalized = value.split(" ").join("");
          if (normalized.length !== 12) return false;
          const validPrefixes = ["+355", "+382", "+383", "+389"];
          if (!validPrefixes.some((p) => normalized.startsWith(p)))
            return false;
          return true;
        }
      ),
    acceptedTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ resetForm, handleSubmit, isSubmitting }) => (
        <Box
          component={"form"}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault();
          }}
          onSubmit={handleSubmit}
          sx={{
            height: { md: "100%", xs: "auto" },
            width: { md: "50%", xs: "100%" },
            padding: { md: "20px", xs: "10px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { md: "space-between", xs: "auto" },
            gap: { md: "0", xs: "20px" },
            alignItems: "center",
          }}
        >
          <Typography sx={{ alignSelf: "flex-start" }} variant="h3">
            Checkout
          </Typography>

          <Typography sx={{ alignSelf: "flex-start" }} variant="subtitle1">
            Shipping Information
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: { md: "space-between", xs: "auto" },
              gap: { md: "auto", xs: "20px" },
              alignItems: "center",
            }}
          >
            <MyRadioButton
              name="shipping-type"
              label="Delivery"
              icon={
                <FaTruck
                  size={20}
                  color={shipping === "Delivery" ? "#415BE7" : "#818EA2"}
                />
              }
              value="Delivery"
              checked={shipping === "Delivery"}
              onChange={(e) => setShipping(e.target.value)}
            />
            <MyRadioButton
              name="shipping-type"
              label="Pick-Up"
              icon={
                <GoPackage
                  size={20}
                  color={shipping === "Pick-Up" ? "#415BE7" : "#818EA2"}
                />
              }
              value="Pick-Up"
              checked={shipping === "Pick-Up"}
              onChange={(e) => setShipping(e.target.value)}
            />
          </Box>

          <MyTextInput name="name" label="Name" />
          <MyTextInput name="email" label="Email" />

          <MySelect label="Country" name="country">
            <option value="">Choose state</option>
            <option value="kosovo">Kosovo</option>
            <option value="albania">Albania</option>
            <option value="north macedonia">North Macedonia</option>
            <option value="montenegro">Montenegro</option>
          </MySelect>

          <MyTextInput name="phone" label="Phone" />

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: { md: "space-between", xs: "auto" },
              alignItems: { md: "center", xs: "center" },
              gap: { md: "auto", xs: "20px" },
            }}
          >
            <MyTextInput
              name="city"
              label="City"
              sx={{
                "& .MuiOutlinedInput-input": {
                  width: { md: "33%", xs: "100%" },
                },
              }}
            />
            <MyTextInput
              name="state"
              label="State"
              sx={{
                "& .MuiOutlinedInput-input": {
                  width: { md: "33%", xs: "100%" },
                },
              }}
            />
            <MyTextInput
              name="zip-code"
              label="Zip-code"
              sx={{
                "& .MuiOutlinedInput-input": {
                  width: { md: "33%", xs: "100%" },
                },
              }}
            />
          </Box>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <Button
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "blue",
              color: "#fff",
            }}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <CircularProgress
                size={20}
                color="inherit"
                sx={{ color: "#fff" }}
              />
            ) : (
              "Pay Now"
            )}
          </Button>

          <Button
            sx={{
              width: "100%",
              height: "50px",
              backgroundColor: "#fff",
              color: "blue",
            }}
            type="button"
            onClick={() => resetForm()}
            disabled={isSubmitting}
          >
            Clear
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default CheckoutInfo;
