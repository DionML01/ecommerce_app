import { Box } from "@mui/material";
import React from "react";
import CartItems from "./CartItems/CartItems";
import OrderSummary from "./OrderSummary/OrderSummary";

const Cart = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingTop: { md: "50px", xs: "25px" },
        paddingBottom: "200px",
        display: "grid",
        gap: "20px",
        gridTemplateColumns: { md: "4fr 3fr", xs: "1fr" },
      }}
    >
      <CartItems />
      <OrderSummary />
    </Box>
  );
};

export default Cart;
