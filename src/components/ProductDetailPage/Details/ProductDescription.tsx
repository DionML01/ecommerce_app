import { Box, Typography } from "@mui/material";
import React from "react";

const ProductDescription = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "Satoshi Variable",
          fontWeight: 400,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        This graphic t-shirt which is perfect for any occasion. Crafted from a
        soft and breathable fabric, it offers superior comfort and style.
      </Typography>
    </Box>
  );
};

export default ProductDescription;
