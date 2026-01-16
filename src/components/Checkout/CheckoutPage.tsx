import { Box } from "@mui/material";
import React from "react";
import CheckoutInfo from "./CheckoutInfo";
import CardInfo from "./CartInfo";

const CheckoutPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        height: "1000px",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingBottom: "200px",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CheckoutInfo />
      <CardInfo />
    </Box>
  );
};

export default CheckoutPage;
