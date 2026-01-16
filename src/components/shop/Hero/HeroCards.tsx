import React from "react";
import { Box, Typography } from "@mui/material";

const HeroCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "20px",
        gap: "20px",
        "@media (max-width: 900px)": {
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "20px",
          width: "100%",
          justifyItems: "center",
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "1px solid rgba(0, 0, 0, 0.1)",
          "@media (max-width: 900px)": {
            gridColumn: "1",
            gridRow: "1",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontWeight: 700,
            fontSize: "40px",
            margin: 0,
            "@media (max-width: 900px)": { fontSize: "24px" },
          }}
        >
          200+
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontWeight: 400,
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.6)",
            margin: 0,
          }}
        >
          International Brands
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          borderRight: "1px solid rgba(0, 0, 0, 0.1)",
          "@media (max-width: 900px)": {
            gridColumn: "2",
            gridRow: "1",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontWeight: 700,
            fontSize: "40px",
            margin: 0,
            "@media (max-width: 900px)": { fontSize: "24px" },
          }}
        >
          2,000+
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontWeight: 400,
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.6)",
            margin: 0,
          }}
        >
          High-Quality Products
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          "@media (max-width: 900px)": {
            gridColumn: "1 / span 2",
            gridRow: "2",
            justifySelf: "center",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontWeight: 700,
            fontSize: "40px",
            margin: 0,
            "@media (max-width: 900px)": { fontSize: "24px" },
          }}
        >
          30,000+
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontWeight: 400,
            fontSize: "16px",
            color: "rgba(0, 0, 0, 0.6)",
            margin: 0,
          }}
        >
          Happy Customers
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroCards;
