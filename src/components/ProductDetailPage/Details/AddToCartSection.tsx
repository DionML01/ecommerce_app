import DecreaseQuantity from "@/Assets/DecreaseQuantity";
import IncreaseQuantity from "@/Assets/IncreaseQuantity";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Product } from "../../../store/useProductStore";
import { useCartStore } from "../../../store/useCartStore";
import toast from "react-hot-toast";

const AddToCartSection = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCartStore();

  const addToCart = () => {
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      size: "Medium",
      color: "Black",
      quantity,
    });
    toast.success(`Successfully added product ${product.title} in your cart.`);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "50px",
        width: "100%",
      }}
    >
      {/* Quantity Selector */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          gap: "10px",
          backgroundColor: "rgba(240, 240, 240, 1)",
          padding: "8px 10px",
          borderRadius: "40px",
          height: { xs: "44px", md: "52px" },
          width: { md: "170px", xs: "110px" },
        }}
      >
        <IconButton onClick={decreaseQuantity}>
          <DecreaseQuantity />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton onClick={increaseQuantity}>
          <IncreaseQuantity />
        </IconButton>
      </Box>

      {/* Add to Cart Button */}
      <Button
        variant="contained"
        sx={{
          flex: 1,
          borderRadius: "40px",
          textTransform: "none",
          backgroundColor: "#000",
          color: "#fff",
          fontFamily: "Satoshi Variable",
          height: { xs: "44px", md: "52px" },
        }}
        onClick={addToCart}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default AddToCartSection;
