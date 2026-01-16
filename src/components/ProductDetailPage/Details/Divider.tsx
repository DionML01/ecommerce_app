import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Line from "../../../Assets/ProductDetailsDivider.png";

const Divider = () => {
  return (
    <>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <Image src={Line} alt="line" width={590} />
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <Image src={Line} alt="line" width={358} />
      </Box>
    </>
  );
};

export default Divider;
