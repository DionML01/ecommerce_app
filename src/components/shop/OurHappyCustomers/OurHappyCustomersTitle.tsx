import { Typography } from "@mui/material";
import React from "react";

const OurHappyCustomersTitle = () => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "32px", md: "48px" },
        fontWeight: 700,
        fontFamily: "Integral CF",
        marginTop: "50px",
      }}
      gutterBottom
    >
      Our Happy Customers
    </Typography>
  );
};

export default OurHappyCustomersTitle;
