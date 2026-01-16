import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

const ItemCard = ({
  name,
  quantity,
  price,
  image,
}: {
  name: string;
  quantity: number;
  price: number;
  image: StaticImageData;
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px",
        display: "flex",
        justifyContent: "start",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Image src={image} alt={name} width={80} height={80} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography>{name}</Typography>
          <Typography>{quantity}x</Typography>
        </Box>

        <Typography sx={{ alignSelf: "flex-start" }}>${price}</Typography>
      </Box>
    </Box>
  );
};

export default ItemCard;
