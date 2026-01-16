import React from "react";
import { Box } from "@mui/material";

import { Product } from "../../../../store/useProductStore";
import ProductCard from "@/components/shop/Shared/ProductCard";

type Props = {
  products: Product[];
};

const sliceProductName = (productName: string) => {
  return productName.length > 14
    ? productName.slice(0, 14) + "..."
    : productName;
};

const ProductList: React.FC<Props> = ({ products }) => (
  <Box
    sx={{
      gridRow: "2 / 3",
      display: "grid",
      gap: { md: "20px", xs: "10px" },
      gridTemplateColumns: {
        xs: "repeat(2, 1fr)", // 2 per row on mobile
        sm: "repeat(2, 1fr)", // also 2 per row on small tablets
        md: "repeat(3, 1fr)", // 3 per row on medium+
        lg: "repeat(3, 1fr)", // 4 per row on large+
      },
      // justifyItems: "center",
      // alignItems: "center",
      padding: { md: "20px", xs: "auto" },
    }}
  >
    {products?.map((product) => (
      <ProductCard
        key={product.id}
        id={product.id}
        img={product.image}
        title={sliceProductName(product.title)}
        price={product.price}
        oldPrice={product.oldPrice}
        discount={product.discount}
      />
    ))}
  </Box>
);

export default ProductList;
