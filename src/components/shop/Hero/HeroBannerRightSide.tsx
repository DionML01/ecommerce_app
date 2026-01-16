import { Box } from "@mui/material";
import React from "react";
import HeroImgPhone from "../../../Assets/HeroImgPhone.png";
import HeroImg from "../../../Assets/heroBannerImg.png";

const HeroBannerRightSide = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "300px", md: "100%" },
        m: 0,
        p: 0,
        backgroundImage: {
          xs: `url(${HeroImgPhone.src})`,
          md: `url(${HeroImg.src})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default HeroBannerRightSide;
