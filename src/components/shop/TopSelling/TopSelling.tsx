import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "../Shared/Slider";
import StyledButton from "../Shared/StyledButton";
import { useRouter } from "next/navigation";

const TopSelling = () => {
  const router = useRouter();

  return (
    <Box
      id="top-selling"
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingTop: { md: "50px", xs: "25px" },
        paddingBottom: { md: "50px", xs: "25px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { md: "50px", xs: "25px" },
      }}
    >
      <Typography
        sx={{ fontFamily: "Integral CF", fontSize: "48px", fontWeight: 700 }}
      >
        TOP SELLING
      </Typography>
      <Slider />
      <StyledButton onClick={() => router.push("/PageUnavailable")}>
        View All
      </StyledButton>
    </Box>
  );
};

export default TopSelling;
