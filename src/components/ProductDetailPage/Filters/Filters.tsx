import FilterIcon from "@/Assets/FilterIcon";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

type FiltersProps = {
  onWriteReview?: () => void;
  filter?: "ASC" | "DESC";
  setFilter: React.Dispatch<React.SetStateAction<"ASC" | "DESC">>;
};

const Filters = ({ onWriteReview, setFilter }: FiltersProps) => {
  const [selectValue, setSelectValue] = useState("Latest");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSelect = (e: string) => {
    setSelectValue(e);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAsc = () => {
    setFilter("ASC");
    handleMenuClose();
  };

  const handleDesc = () => {
    setFilter("DESC");
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingTop: { md: "50px", xs: "25px" },
        paddingBottom: { md: "50px", xs: "25px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          gap: { md: "20px", xs: "10px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "24px", xs: "20px" },
            fontWeight: 700,
            fontFamily: "Satoshi Variable",
            m: 0,
            p: 0,
          }}
        >
          All Reviews
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "16px", xs: "14px" },
            color: "rgba(0, 0, 0, 0.6)",
            fontFamily: "Satoshi Variable",
            m: 0,
            p: 0,
          }}
        >
          (451)
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <IconButton
            onClick={handleMenuOpen}
            sx={{
              backgroundColor: "rgba(240, 240, 240, 1)",
              padding: "16px 20px",
            }}
          >
            <FilterIcon />
          </IconButton>
          <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleAsc}>Rating Ascending</MenuItem>
            <MenuItem onClick={handleDesc}>Rating Descending</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <IconButton
            sx={{
              backgroundColor: "rgba(240, 240, 240, 1)",
              padding: "10px 12px",
            }}
          >
            <FilterIcon width={20} height={20} />
          </IconButton>
        </Box>
        <Select
          value={selectValue}
          onChange={(e) => handleSelect(e.target.value)}
          sx={{ display: { md: "block", xs: "none" } }}
        >
          <MenuItem value={"Latest"}>Latest</MenuItem>
          <MenuItem value={"Most Popular"}>Most Popular</MenuItem>
          <MenuItem value={"Most Replies"}>Most Replies</MenuItem>
        </Select>
        <Button
          sx={{
            backgroundColor: "#000",
            textTransform: "none",
            color: "#fff",
            fontFamily: "Satoshi Variable",
            fontSize: { md: "16px", xs: "12px" },
            borderRadius: "20px",
          }}
          onClick={onWriteReview}
        >
          Write a Review
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
