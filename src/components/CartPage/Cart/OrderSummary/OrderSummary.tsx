"use client";

import CheckoutIcon from "@/Assets/CheckoutIcon";
import CuponIcon from "@/Assets/CuponIcon";
import { useCartStore } from "@/store/useCartStore";
import {
  Box,
  Button,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const testCoupon = "TEST-COUPON";

const OrderSummary = () => {
  const { items, getSubtotal, getTotal, discount, deliveryFee, setDiscount } =
    useCartStore();
  const [coupon, setCoupon] = useState("");
  const router = useRouter();

  // Wrap calculations in useEffect to avoid hydration mismatch
  const [values, setValues] = useState({
    subtotal: 0,
    total: 0,
    delivery: 0,
  });

  const applyCoupon = () => {
    if (coupon === testCoupon) {
      setDiscount(10);
      toast.success("Coupon applied successfully");
    } else {
      toast.error("Discount coupon is incorrect");
      return;
    }
  };

  useEffect(() => {
    const subtotal = getSubtotal();
    const total = getTotal();
    const delivery = subtotal > 0 ? deliveryFee : 0;

    setValues({
      subtotal,
      total,
      delivery,
    });
  }, [getSubtotal, getTotal, deliveryFee, items, discount]);

  return (
    <Box
      sx={{
        width: "100%",
        gridColumn: { md: "2 / 3", xs: "1 / 2" },
        borderRadius: "20px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        padding: { md: "20px 24px", xs: "14px" },
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: { md: "20px", xs: "10px" },
      }}
    >
      <Box
        sx={{
          width: "100%",
          m: 0,
          p: 0,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          Order Summary
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          m: 0,
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Subtotal
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          ${values.subtotal}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          m: 0,
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Discount(-{discount}%)
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 700,
            color: "rgba(255, 51, 51, 1)",
          }}
        >
          -${values.subtotal - values.total}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          m: 0,
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.6)",
          }}
        >
          Delivery fee
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          ${values.delivery}
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          width: "100%",
          m: 0,
          p: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          Total
        </Typography>
        <Typography
          sx={{
            fontFamily: "Satoshi Variable",
            fontSize: "24px",
            fontWeight: 700,
          }}
        >
          ${values.total}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          m: 0,
          p: 0,
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Add promo code"
          variant="outlined"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          disabled={discount > 0}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CuponIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "70%",
            "& .MuiOutlinedInput-root": {
              height: "48px", // ✅ set fixed height
              width: "100%",
              borderRadius: "62px",
              backgroundColor: "rgba(240, 240, 240, 1)",
              "& fieldset": { border: "none" },
            },
            "& .MuiInputBase-input": {
              padding: "0 14px", // ✅ vertical centering
            },
          }}
        />

        <Button
          sx={{
            width: "30%",
            height: "48px", // ✅ same height as TextField
            backgroundColor: "#000",
            color: "#fff",
            fontFamily: "Satoshi Variable",
            fontSize: "16px",
            fontWeight: 500,
            borderRadius: "62px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#222",
            },
            "&.Mui-disabled": {
              backgroundColor: "#000",
              color: "#fff",
              opacity: 1,
            },
          }}
          variant="contained"
          onClick={applyCoupon}
          disabled={discount > 0}
        >
          Apply
        </Button>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Button
          onClick={() => router.push("/checkout")}
          sx={{
            backgroundColor: "black",
            color: "#fff",
            fontSize: "16px",
            fontFamily: "Satoshi Variable",
            fontWeight: 500,
            width: "100%",
            height: { md: "60px", xs: "54px" },
            borderRadius: "62px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#222",
            },
          }}
          endIcon={<CheckoutIcon />}
        >
          Go to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSummary;
