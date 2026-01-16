import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import HeroCarts from "./HeroCards";

const HeroBannerLeftSide = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontSize: "clamp(32px, 6vw, 64px)",
          fontFamily: "Integral CF",
          marginBottom: "0px",
        }}
      >
        FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
      </Typography>
      <Typography
        component="p"
        sx={{
          fontFamily: "Satoshi Variable",
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "clamp(14px, 2vw, 16px)",
          lineHeight: 1.4,
          fontWeight: 400,
        }}
      >
        Browse through our diverse range of meticulously crafted garments,
        designed <br /> to bring out your individuality and cater to your sense
        of style.
      </Typography>
      <Button
        component={Link}
        href="#top-selling"
        sx={{
          width: "210px",
          height: "52px",
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderRadius: "62px",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontFamily: "Satoshi Variable",
            fontSize: "16px",
            fontWeight: 500,
          }}
        >
          Shop Now
        </span>
      </Button>
      <HeroCarts />
    </Box>
  );
};

export default HeroBannerLeftSide;
