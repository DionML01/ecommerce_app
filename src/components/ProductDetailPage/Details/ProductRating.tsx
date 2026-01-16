import HalfRating from "@/components/shop/Shared/HalfRating";
import { Box } from "@mui/material";
import React from "react";

const ProductRating = () => {
  return (
    <Box
      sx={{
        "& .MuiRating-root": {
          fontSize: "2rem", // or 40px, etc.
        },
      }}
    >
      <HalfRating disabled={true} />
    </Box>
  );
};

export default ProductRating;
