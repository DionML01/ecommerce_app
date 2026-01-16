import { Box, Typography, IconButton } from "@mui/material";
import FilterIconGray from "@/Assets/FilterIconGray";
import React from "react";

const FilterHeader = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography
      sx={{ fontFamily: "Satoshi Variable", fontSize: "20px", fontWeight: 700 }}
    >
      Filters
    </Typography>
    <IconButton>
      <FilterIconGray />
    </IconButton>
  </Box>
);

export default FilterHeader;
