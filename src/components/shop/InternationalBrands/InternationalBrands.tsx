"use client";

import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import Versache from "../../../Assets/Versache.png";
import Zara from "../../../Assets/Zara.png";
import Gucci from "../../../Assets/Gucci.png";
import Prada from "../../../Assets/Prada.png";
import CalvinClain from "../../../Assets/CalvinClain.png";

import VersachePhone from "../../../Assets/VersacheLogoPhone.png";
import ZaraPhone from "../../../Assets/ZaraLogoPhone.png";
import GucciPhone from "../../../Assets/GucciLogoPhone.png";
import PradaPhone from "../../../Assets/PradaLogoPhone.png";
import CalvinClainPhone from "../../../Assets/CalvinCleinLogoPhone.png";

const InternationalBrands = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "space-around", md: "space-between" },
        flexWrap: "wrap",
        px: { xs: "10px", md: 0 },
        pl: { md: "100px" },
        pr: { md: "100px" },
        gap: { xs: "10px", md: 0 },
      }}
    >
      {/* Desktop / tablet */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: { xs: "space-around", md: "space-between" },
          gap: "24px",
          flexWrap: "wrap",
          height: "122px",
          width: "100%",
        }}
      >
        <Image src={Versache} alt="Versace" />
        <Image src={Zara} alt="Zara" />
        <Image src={Gucci} alt="Gucci" />
        <Image src={Prada} alt="Prada" />
        <Image src={CalvinClain} alt="Calvin Klein" />
      </Box>

      {/* Mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "space-around",
          gap: "24px",
          flexWrap: "wrap",
          height: "122px",
          width: "100%",
        }}
      >
        <Image src={VersachePhone} alt="Versace" />
        <Image src={ZaraPhone} alt="Zara" />
        <Image src={GucciPhone} alt="Gucci" />
        <Image src={PradaPhone} alt="Prada" />
        <Image src={CalvinClainPhone} alt="Calvin Klein" />
      </Box>
    </Box>
  );
};

export default InternationalBrands;
