import { Typography } from "@mui/material";
import React from "react";

const HeadingText = () => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontFamily: "Integral CF",
        fontSize: { md: "48px", xs: "32px" },
        fontWeight: 700,
      }}
    >
      YOU MIGHT ALSO LIKE
    </Typography>
  );
};

export default HeadingText;
