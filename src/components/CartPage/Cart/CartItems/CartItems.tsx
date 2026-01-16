import { Box, Divider } from "@mui/material";
import React from "react";
import Item from "./Item";
import { useCartStore } from "@/store/useCartStore";

const CartItems = () => {
  const { items, removeItem, updateQuantity } = useCartStore();

  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        gridColumn: "1 / 2",
        padding: { md: "20px 24px", xs: "14px" },
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: { md: "20px", xs: "10px" },
        alignContent: "start",
        alignItems: "start",
        overflowY: "scroll",
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <Item
            item={item}
            removeItem={removeItem}
            updateQuantity={updateQuantity}
          />
          {index !== items.length - 1 && (
            <Divider
              sx={{
                transition: "opacity 0.3s ease-out",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default CartItems;
