import { Box } from "@mui/material";
import React from "react";
import HeadingText from "./HeadingText";
import Slider from "@/components/shop/Shared/Slider";

const PromotionSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingTop: { md: "50px", xs: "25px" },
        paddingBottom: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <HeadingText />
      <Slider />
    </Box>
  );
};

export default PromotionSection;
