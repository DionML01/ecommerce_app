import { Box, Typography } from "@mui/material";
import React from "react";
import SubscribeForm from "./SubscribeForm";

const SubscribeBanner = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: { md: "86%", xs: "91%" },
        height: { md: "180px", xs: "315px" },
        backgroundColor: "#000",
        color: "#fff",
        left: "50%",
        transform: "translateX(-50%)",
        top: { md: "-90px", xs: "-147px" },
        borderRadius: "20px",
        px: { md: "64px", xs: "20px" },
        py: { md: "36px", xs: "20px" },
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: "20px", md: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { md: "40px", xs: "32px" },
          fontFamily: "Integral CF",
          fontWeight: 700,
        }}
      >
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </Typography>

      <SubscribeForm />
    </Box>
  );
};

export default SubscribeBanner;
