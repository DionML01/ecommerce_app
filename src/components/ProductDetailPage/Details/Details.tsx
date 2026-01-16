import { Box } from "@mui/material";
import React from "react";
import ProductPhotos from "./ProductPhotos";
import Image from "next/image";
import ProductName from "./ProductName";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ColorSelector from "./ColorSelector";
import Divider from "./Divider";
import ChooseSize from "./ChooseSize";
import AddToCartSection from "./AddToCartSection";
import { Product } from "../../../store/useProductStore";

interface DetailsProps {
  product: Product;
}

const Details: React.FC<DetailsProps> = ({ product }) => {
  return (
    <Box
      sx={{
        display: "grid",
        height: "100%",
        width: "100%",
        gridTemplateColumns: { md: "1fr 3fr 5fr", xs: "1fr" },
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          gridColumn: { md: "1 / 2", xs: "1 / 2" },
          gridRow: { md: "1 / 2", xs: "2 / 3" },
        }}
      >
        <ProductPhotos />
      </Box>
      <Box
        sx={{
          gridColumn: { md: "2 / 3", xs: "1 / 2" },
          gridRow: { md: "1 / 2", xs: "1 / 2" },
          alignSelf: "center",
          display: { md: "block", xs: "none" },
        }}
      >
        {/* <Image src={MainImg} alt="main img" /> */}
        <Image src={product.image} alt="main img" />
      </Box>
      <Box
        sx={{
          gridColumn: { md: "2 / 3", xs: "1 / 2" },
          gridRow: { md: "1 / 2", xs: "1 / 2" },
          alignSelf: "center",
          justifySelf: "center",
          display: { md: "none", xs: "block" },
        }}
      >
        {/* <Image src={MainImgPhone} alt="main img" /> */}
        <Image src={product.image} alt="main img" />
      </Box>
      <Box
        sx={{
          gridColumn: { md: "3 / 4", xs: "1 / 2" },
          gridRow: { md: "1 / 2", xs: "3 / 4" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            justifyContent: "center",
            gap: { md: "auto", xs: "20px" },
          }}
        >
          <ProductName name={product.title} />
          <ProductRating />
          <ProductPrice
            price={product.price}
            oldPrice={product.oldPrice}
            discount={product.discount}
          />
          <ProductDescription />
          <Divider />
          <ColorSelector />
          <Divider />
          <ChooseSize />
          <Divider />
          <AddToCartSection product={product} />
        </Box>
      </Box>
    </Box>
  );
};

export default Details;
