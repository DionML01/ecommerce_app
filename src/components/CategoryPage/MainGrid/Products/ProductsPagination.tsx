import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import usePagination from "@mui/material/usePagination";
import PaginationItem from "@mui/material/PaginationItem";
import NextButtonArrow from "@/Assets/NextButtonArrow";
import PreviousButtonArrow from "@/Assets/PreviousButtonArrow";

const ProductsPagination = () => {
  const [page, setPage] = useState(1); // ✅ store selected page

  const { items } = usePagination({
    count: 10,
    page, // controlled page
    onChange: (event, value) => {
      setPage(value); // ✅ update state when user clicks
    },
  });

  return (
    <Box
      sx={{
        gridRow: "3 / 4",
        width: "100%",
        padding: { md: "20px", xs: "10px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 1,
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      {/* Left arrow */}
      {items
        .filter((item) => item.type === "previous")
        .map((item, idx) => (
          <Button
            key={idx}
            sx={{
              minWidth: "80px",
              padding: "8px 14px",
              backgroundColor: "rgba(255, 255, 255, 1)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
            }}
            startIcon={<PreviousButtonArrow />}
            onClick={item.onClick}
            disabled={item.disabled}
          >
            Previous
          </Button>
        ))}

      {/* Numbers in the middle */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          // flex: 1, // take remaining space
          // overflowX: "auto", // scroll if too wide
          justifyContent: "center",
          "&::-webkit-scrollbar": { display: "none" }, // optional: hide scrollbar
        }}
      >
        {items
          .filter(
            (item) => item.type === "page" || item.type.includes("ellipsis")
          )
          .map((item, idx) => (
            <PaginationItem key={idx} {...item} />
          ))}
      </Box>

      {/* Right arrow */}
      {items
        .filter((item) => item.type === "next")
        .map((item, idx) => (
          <Button
            key={idx}
            sx={{
              minWidth: "80px",
              padding: "8px 14px",
              backgroundColor: "rgba(255, 255, 255, 1)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
            }}
            endIcon={<NextButtonArrow />}
            onClick={item.onClick}
            disabled={item.disabled}
          >
            Next
          </Button>
        ))}
    </Box>
  );
};

export default ProductsPagination;
