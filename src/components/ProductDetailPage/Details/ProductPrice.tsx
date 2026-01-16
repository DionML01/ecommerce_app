import { Box, Typography } from "@mui/material";
import React from "react";

const ProductPrice = ({
  price,
  oldPrice,
  discount,
}: {
  price: number;
  oldPrice: number;
  discount: number;
}) => {
  const itemDiscount = discount;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "Satoshi Variable",
          fontSize: { md: "32px", xs: "24px" },
          fontWeight: 700,
          color: "rgba(0, 0, 0, 0.3)",
        }}
      >
        ${price}
      </Typography>
      {discount > 0 && (
        <>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Satoshi Variable",
              fontSize: { md: "32px", xs: "24px" },
              fontWeight: 700,
              color: "rgba(0, 0, 0, 0.1)",
              textDecoration: "line-through",
              textDecorationColor: "rgba(0, 0, 0, 0.1)",
            }}
          >
            ${oldPrice}
          </Typography>

          <Box
            sx={{
              color: "rgba(255, 51, 51, 1)",
              backgroundColor: "rgba(255, 51, 51, 0.1)",
              padding: "6px 12px",
              borderRadius: "20px",
            }}
          >
            -{itemDiscount}%
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProductPrice;
