import CloseButton from "@/Assets/CloseButton";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const BreadCrumb = () => {
  const [visible, setVisible] = useState(true);

  const closeBreadCrumb = () => {
    setVisible(false);
  };

  return (
    <Box
      sx={{
        height: "38px",
        width: { xs: "100%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: { md: "0px", xs: "10px" },
        paddingRight: { md: "0px", xs: "10px" },
        backgroundColor: "rgba(0, 0, 0, 1)",
        color: "#fff",
        fontFamily: "Satoshi Variable",
        overflow: "hidden",
        transition: "opacity 0.5s ease, max-height 0.5s ease",
        opacity: visible ? 1 : 0,
        maxHeight: visible ? "38px" : "0px",
      }}
    >
      <Typography
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: { md: "14px", xs: "10px" },
          color: "#fff",
        }}
      >
        Sign up now and get 20% off on your first order.
        <Link
          href="/login"
          style={{
            textDecoration: "underline",
            fontWeight: "bold",
            paddingLeft: "15px",
            color: "#fff",
          }}
        >
          Sign up
        </Link>
      </Typography>
      <Button
        onClick={closeBreadCrumb}
        sx={{
          display: { xs: "none", md: "block" },
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <CloseButton />
      </Button>
    </Box>
  );
};

export default BreadCrumb;
