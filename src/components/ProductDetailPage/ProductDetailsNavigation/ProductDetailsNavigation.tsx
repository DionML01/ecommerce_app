import React from "react";
import { Box, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductDetailsNavigation = () => {
  return (
    <Box
      sx={{
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "10px",
        margin: "0px",
        display: "flex",
        gap: "12px",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontWeight: 400,
          fontSize: { md: "16px", xs: "14px" },
        }}
      >
        Home
      </Typography>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <MdKeyboardArrowRight size={24} />
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <MdKeyboardArrowRight />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontSize: { md: "16px", xs: "14px" },
          fontWeight: 400,
        }}
      >
        Shop
      </Typography>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <MdKeyboardArrowRight size={24} />
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <MdKeyboardArrowRight />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontSize: { md: "16px", xs: "14px" },
          fontWeight: 400,
        }}
      >
        Men
      </Typography>
      <Box sx={{ display: { md: "block", xs: "none" } }}>
        <MdKeyboardArrowRight size={24} />
      </Box>
      <Box sx={{ display: { md: "none", xs: "block" } }}>
        <MdKeyboardArrowRight />
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: "rgba(0, 0, 0, 1)",
          fontFamily: "Satoshi Variable",
          fontSize: { md: "16px", xs: "14px" },
          fontWeight: 400,
        }}
      >
        T-shirts
      </Typography>
    </Box>
  );
};

export default ProductDetailsNavigation;
