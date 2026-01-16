import { Box } from "@mui/material";
import React from "react";

import Img1 from "../../../Assets/ProductPhotos1.png";
import Img2 from "../../../Assets/ProductPhotos2.png";
import Img3 from "../../../Assets/ProductPhotos3.png";

import Img1Phone from "../../../Assets/ProductPhotosPhone1.png";
import Img2Phone from "../../../Assets/ProductPhotosPhone2.png";
import Img3Phone from "../../../Assets/ProductPhotosPhone3.png";

import Image from "next/image";

const ProductPhotos = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "column", xs: "row" },
        gap: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <Box sx={{ height: "100%", width: "100%", borderRadius: "20px" }}>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <Image src={Img1} alt="ProductPhotos1" />
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <Image src={Img1Phone} alt="ProductPhotos1" />
        </Box>
      </Box>

      <Box sx={{ height: "100%", width: "100%", borderRadius: "20px" }}>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <Image src={Img2} alt="ProductPhotos1" />
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <Image src={Img2Phone} alt="ProductPhotos1" />
        </Box>
      </Box>

      <Box sx={{ height: "100%", width: "100%", borderRadius: "20px" }}>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <Image src={Img3} alt="ProductPhotos1" />
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <Image src={Img3Phone} alt="ProductPhotos1" />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPhotos;
