import {
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import React from "react";
import { SelectChangeEvent } from "@mui/material";
import FilterIconMobile from "@/Assets/FilterIconMobile";

type Props = {
  productFilter: string;
  category: string;
  handleSelectChange: (event: SelectChangeEvent) => void;
  toggleDrawer: () => void;
};

const ProductHeader: React.FC<Props> = ({
  productFilter,
  category,
  handleSelectChange,
  toggleDrawer,
}) => (
  <Box
    sx={{
      justifySelf: "space-between",
      gridRow: "1 / 2",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: { md: "30px", xs: "10px" },
    }}
  >
    <Typography
      sx={{
        fontFamily: "Satoshi Variable",
        fontSize: "24px",
        fontWeight: 700,
      }}
      variant="h2"
    >
      {/* capitalize the first letter of the category string */}
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Typography>
    <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Typography
        sx={{
          fontFamily: "Satoshi Variable",
          fontSize: "16px",
          fontWeight: 400,
          color: "rgba(0, 0, 0, 0.6)",
          display: { md: "block", xs: "none" },
        }}
        variant="subtitle1"
      >
        Showing 1-10 of 100 Products. <b>Sort By:</b>
      </Typography>
      <Typography
        sx={{
          fontFamily: "Satoshi Variable",
          fontSize: "14px",
          fontWeight: 400,
          color: "rgba(0, 0, 0, 0.6)",
          display: { md: "none", xs: "block" },
        }}
        variant="subtitle1"
      >
        Showing 1-10 of 100 Products.
      </Typography>
      <IconButton
        onClick={toggleDrawer}
        sx={{
          display: { md: "none", xs: "block" },
          padding: "5px 10px",
          backgroundColor: "rgba(240, 240, 240, 1)",
          "&:hover": {
            backgroundColor: "rgba(220, 220, 220, 1)", // slightly darker
          },
          "&:active": {
            backgroundColor: "rgba(200, 200, 200, 1)", // keeps it visible when pressed
          },
          "&:focus": {
            backgroundColor: "rgba(240, 240, 240, 1)", // keeps same bg on focus
          },
        }}
      >
        <FilterIconMobile height={24} width={24} />
      </IconButton>

      <FormControl
        variant="standard"
        sx={{ m: 0, p: 0, minWidth: 120, display: { md: "block", xs: "none" } }}
      >
        <Select
          value={productFilter}
          onChange={handleSelectChange}
          disableUnderline
        >
          <MenuItem value={""}>
            {" "}
            <em>None</em>{" "}
          </MenuItem>
          <MenuItem value={"Most Popular"}>Most Popular</MenuItem>
          <MenuItem value={"Best Seller"}>Best Seller</MenuItem>
          <MenuItem value={"New Arrivals"}>New Arrivals</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </Box>
);

export default ProductHeader;
