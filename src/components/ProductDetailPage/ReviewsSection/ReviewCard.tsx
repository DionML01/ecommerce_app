import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";

import ThreeDotsIcon from "@/Assets/ThreeDotsIcon";
import GreenIcon from "@/Assets/GreenIcon";
import HalfRating from "@/components/shop/Shared/HalfRating";

type ReviewItem = {
  id: number;
  rating: number;
  name: string;
  content: string;
  date: string;
};

const ReviewCard = ({
  item,
  deleteReview,
}: {
  item: ReviewItem;
  deleteReview: (id: number) => void;
  addReview: (review: ReviewItem) => void;
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleHideClick = () => {
    deleteReview(item.id);
    handleMenuClose();
  };

  return (
    <Box
      sx={{
        flex: {
          xs: "1 1 100%",
          md: "1 1 calc(50% - 20px)",
        },
        backgroundColor: "#fff",
        minHeight: "240px",
        gap: "20px",
        borderRadius: "20px",
        padding: { md: "28px 32px", xs: "24px" },
        border: "1px solid rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: { md: "space-between", xs: "start" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            "& .MuiRating-root": {
              fontSize: "22px",
            },
          }}
        >
          <HalfRating initialValue={item.rating} showRating={false} />
        </Box>

        {/* Three dots menu */}
        <IconButton
          sx={{ display: { md: "block", xs: "none" } }}
          onClick={handleMenuOpen}
        >
          <ThreeDotsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleHideClick}>Hide</MenuItem>
        </Menu>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { md: "20px", xs: "16px" },
            fontFamily: "Satoshi Variable",
            fontWeight: 700,
          }}
        >
          {item.name}
        </Typography>
        <GreenIcon />
      </Box>

      <Typography
        sx={{
          fontSize: { md: "16px", xs: "14px" },
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontWeight: 400,
        }}
      >
        {item.content}
      </Typography>

      <Typography
        sx={{
          fontSize: { md: "16px", xs: "14px" },
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Satoshi Variable",
          fontWeight: 500,
        }}
      >
        Posted on: {item.date}
      </Typography>
    </Box>
  );
};

export default ReviewCard;
