import React from "react";
import HeroBannerLeftSide from "./HeroBannerLeftSide";
import HeroBannerRightSide from "./HeroBannerRightSide";
import { Box } from "@mui/system";

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "663px",
        padding: "0px 100px",
        display: "flex",
        gap: "0px",
        backgroundColor: "rgba(242, 240, 241, 1)",
        "@media (max-width: 900px)": {
          flexDirection: "column",
          padding: "0px",
        },
      }}
    >
      <HeroBannerLeftSide />
      <Box sx={{ width: { sx: "100%", md: "50%" } }}>
        <HeroBannerRightSide />
      </Box>
    </Box>
  );
};

export default HeroSection;
