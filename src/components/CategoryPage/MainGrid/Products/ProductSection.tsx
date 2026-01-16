import React, { useState } from "react";
import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import ProductHeader from "./ProductHeader";
import ProductList from "./ProductList";
import ProductsPagination from "./ProductsPagination";
import { Product } from "../../../../store/useProductStore";

type Props = {
  products: Product[];
  toggleDrawer: () => void;
  category: string;
};

const ProductSection: React.FC<Props> = ({
  products,
  toggleDrawer,
  category,
}) => {
  const [productFilter, setProductFilter] = useState("");

  const handleSelectChange = (event: SelectChangeEvent) => {
    setProductFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        gridColumn: "2 / 3",
        display: "grid",
        gridTemplateRows: "70px 1fr 70px",
        width: "100%",
      }}
    >
      <ProductHeader
        productFilter={productFilter}
        handleSelectChange={handleSelectChange}
        toggleDrawer={toggleDrawer}
        category={category}
      />
      <ProductList products={products} />
      <ProductsPagination />
    </Box>
  );
};

export default ProductSection;
