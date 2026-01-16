import { Box } from "@mui/material";
import React from "react";
import ProductDetailsNavigation from "../ProductDetailsNavigation/ProductDetailsNavigation";
import { Product } from "../../../store/useProductStore";
import Details from "../Details/Details";
import { Toaster } from "react-hot-toast";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)",
        width: "100%",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ProductDetailsNavigation />
      <Details product={product} />
      <Toaster />
    </Box>
  );
};

export default ProductDetails;
