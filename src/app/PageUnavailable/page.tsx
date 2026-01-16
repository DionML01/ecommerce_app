"use client";

import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { BsExclamationOctagon } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const Page = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { md: "100px", xs: "10px" },
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: { md: "50%", xs: "100%" },
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: { md: "flex-start", xs: "center" },
          gap: "20px",
        }}
      >
        <Box sx={{ fontSize: "100px" }}>
          <BsExclamationOctagon color="#fff" />
        </Box>
        <Typography
          variant="h2"
          sx={{ fontFamily: "Satoshi Variable", fontWeight: 700 }}
        ></Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontFamily: "Satoshi Variable", fontWeight: 400 }}
        >
          This might be be because of a technical error that we&apos;re working
          to get fixed. Try reloading this page.
        </Typography>
        <Button
          sx={{
            height: "50px",
            width: { md: "250px", xs: "100%" },
            textTransform: "none",
            backgroundColor: "blue",
            color: "#fff",
          }}
          onClick={() => router.push("/")}
          startIcon={<FaArrowLeft />}
        >
          Go Back To HomePage
        </Button>
      </Box>
    </Box>
  );
};

export default Page;
