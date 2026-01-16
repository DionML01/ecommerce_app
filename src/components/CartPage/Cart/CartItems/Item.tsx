import DecreaseQuantity from "@/Assets/DecreaseQuantity";
import DeleteIconCart from "@/Assets/DeleteIconCart";
import IncreaseQuantity from "@/Assets/IncreaseQuantity";
import { CartItem } from "../../../../store/useCartStore";
import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const Item = ({
  item,
  removeItem,
  updateQuantity,
}: {
  item: CartItem;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    // Wait for animation to complete before actually removing the item
    setTimeout(() => {
      removeItem(item.id);
    }, 300); // Match this with CSS transition duration
  };

  return (
    <Box
      sx={{
        p: 0,
        m: 0,
        width: "100%",
        // minHeight: "130px",
        height: "130px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        opacity: isDeleting ? 0 : 1,
        transform: isDeleting ? "translateX(-20px)" : "translateX(0)",
        transition: "all 0.3s ease-out",
        // height: isDeleting ? "0" : "130px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          m: 0,
          p: 0,
          display: "flex",
          gap: "20px",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          src={item.image}
          alt="Product Picture"
          width={100}
          height={100}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Satoshi Variable",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Satoshi Variable",
                fontWeight: 400,
              }}
            >
              Size: &nbsp;
              <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>{item.size}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "Satoshi Variable",
                fontWeight: 400,
              }}
            >
              Color: &nbsp;
              <span style={{ color: "rgba(0, 0, 0, 0.6)" }}>{item.color}</span>
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Satoshi Variable",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            ${item.price}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <IconButton onClick={handleDelete}>
          <DeleteIconCart />
        </IconButton>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: "flex",
            gap: "10px",
            backgroundColor: "rgba(240, 240, 240, 1)",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingLeft: "5px",
            paddingRight: "5px",
            borderRadius: "40px",
            height: { xs: "31px", md: "44px" },
            width: { md: "126px", xs: "105px" },
          }}
        >
          <IconButton
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <DecreaseQuantity width={15} height={15} />
          </IconButton>

          <Typography>{item.quantity}</Typography>

          <IconButton
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <IncreaseQuantity width={15} height={15} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
