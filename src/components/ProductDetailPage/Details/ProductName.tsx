import { Typography } from "@mui/material";
import React from "react";

const ProductName = ({ name }: { name: string }) => {
  return (
    <Typography
      variant="h2"
      sx={{
        width: "100%",
        fontFamily: "Integral CF",
        fontWeight: 700,
        fontSize: { md: "40px", xs: "24px" },
      }}
    >
      {name}
    </Typography>
  );
};

export default ProductName;
