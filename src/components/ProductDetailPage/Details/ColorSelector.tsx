import { Box, Typography } from "@mui/material";
import { CirclePicker, ColorResult } from "react-color";
import { useState } from "react";

export default function ColorSelector() {
  const [color, setColor] = useState("rgba(79, 70, 49, 1)");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start", // center vertically
        gap: "16px", // spacing between picker and other elements
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "14px", md: "16px" },
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontWeight: 400,
        }}
      >
        Select colors:
      </Typography>
      <CirclePicker
        colors={[
          "rgba(79, 70, 49, 1)",
          "rgba(49, 79, 74, 1)",
          "rgba(49, 52, 79, 1)",
        ]}
        color={color}
        onChange={(c: ColorResult) => setColor(c.hex)}
      />
    </Box>
  );
}
