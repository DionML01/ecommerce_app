import { Box, Typography } from "@mui/material";
import React from "react";
import CustomList from "./CustomList";

const ChooseSize = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        gap: "16px",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontWeight: 400,
          m: 0,
          p: 0,
        }}
      >
        Choose size:
      </Typography>
      <CustomList />
    </Box>
  );
};

export default ChooseSize;
