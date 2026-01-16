import { useCartStore } from "@/store/useCartStore";
import { Box, Typography } from "@mui/material";
import React from "react";
import ItemCard from "./ItemCard";

const CartInfo = () => {
  const { items, discount, deliveryFee, getTotal, getSubtotal } =
    useCartStore();

  return (
    <Box
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
      <Typography sx={{ alignSelf: "flex-start" }} variant="subtitle1">
        Shipping Information
      </Typography>

      <Box sx={{ width: "100%", height: "500px", overflowY: "scroll" }}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
            price={item.price}
          />
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflowY: "auto",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Subtotal</Typography>
          <Typography>${getSubtotal()}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Shipping</Typography>
          <Typography>${deliveryFee}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Discount</Typography>
          <Typography>%{discount}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
            Total
          </Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 700 }}>
            ${getTotal()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CartInfo;
