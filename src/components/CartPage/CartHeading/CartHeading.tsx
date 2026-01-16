import { Box, Divider, Typography } from "@mui/material";
import React from "react";

const CartHeading = () => {
  return (
    <Box
      sx={{
        paddingRight: { md: "100px", xs: "10px" },
        paddingLeft: { md: "100px", xs: "10px" },
        paddingTop: "0px",
        paddingBottom: "0px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stert",
        gap: "20px",
        backgroundColor: "#fff",
      }}
    >
      <Divider sx={{ height: "1px", width: "100%" }} />
      <Typography
        sx={{
          fontFamily: "Integral CF",
          fontSize: "40px",
          fontWeight: 700,
        }}
      >
        YOUR CART
      </Typography>
    </Box>
  );
};

export default CartHeading;
