import { Box, List, ListItem } from "@mui/material";
import React, { useState } from "react";

const baseStyle = {
  flex: 1,
  fontFamily: "Satoshi Variable",
  fontSize: "20px",
  lineHeight: "22px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "20px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const activeStyle = {
  ...baseStyle,
  fontWeight: 500,
  color: "rgba(0, 0, 0, 1)",
  borderBottom: "3px solid rgba(0, 0, 0, 1)",
};

const inactiveStyle = {
  ...baseStyle,
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.6)",
  borderBottom: "2px solid rgba(0, 0, 0, 0.6)",
};

const ProductDetailsMenu = () => {
  const [active, setActive] = useState(1);

  const listItems = [
    { id: 1, title: "Product Details" },
    { id: 2, title: "Rating & Reviews" },
    { id: 3, title: "FAQs" },
  ];

  const handleClick = (id: number) => {
    setActive(id);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <List
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          backgroundColor: "#fff",
          paddingTop: "100px",
          paddingLeft: { md: "100px", xs: "10px" },
          paddingRight: { md: "100px", xs: "10px" },
        }}
      >
        {listItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleClick(item.id)}
            sx={{
              ...(item.id === active ? activeStyle : inactiveStyle),
              flex: 1,
              textAlign: "center",
              pb: 2,
            }}
          >
            {item.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ProductDetailsMenu;
