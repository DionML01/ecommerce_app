import { Box, IconButton, List, SxProps, Typography } from "@mui/material";
import React, { useState } from "react";
import SubscribeBanner from "./SubscribeBanner";
import ShopCOLogo from "@/Assets/ShopCOLogo";
import VisaIcon from "@/Assets/VisaIcon";
import MasterCardIcon from "@/Assets/MasterCardIcon";
import PayPalIcon from "@/Assets/PayPalIcon";
import ApplePayIcon from "@/Assets/ApplePayIcon";
import GooglePayIcon from "@/Assets/GooglePayIcon";
import FacebookIcon from "@/Assets/FacebookIcon";
import TwitterIcon from "@/Assets/TwitterIcon";
import InstagramIcon from "@/Assets/InstagramIcon";
import GithubIcon from "@/Assets/GithubIcon";
import FooterLinkSection from "./FooterLinkSection";
import {
  footerContainerStyles,
  footerGridStyles,
  footerBottomStyles,
  descriptionTextStyles,
  copyrightTextStyles,
} from "./styles";
import { Theme } from "@emotion/react";

interface Footer {
  sx?: SxProps<Theme>;
  gridColumn?: React.CSSProperties["gridColumn"];
  gridRow?: React.CSSProperties["gridRow"];
}

const paymentIcons = [
  { id: 1, icon: <VisaIcon />, selected: false },
  { id: 2, icon: <MasterCardIcon />, selected: false },
  { id: 3, icon: <PayPalIcon />, selected: false },
  { id: 4, icon: <ApplePayIcon />, selected: false },
  { id: 5, icon: <GooglePayIcon />, selected: false },
];

const Footer: React.FC<Footer> = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Box sx={footerContainerStyles}>
      {/* Banner with headline + subscription form */}
      <SubscribeBanner />

      {/* Grid content */}
      <Box sx={footerGridStyles}>
        {/* Logo + description */}
        <Box
          sx={{
            gridColumn: { md: "1 / 2", xs: "1 / span 2" },
            gridRow: { md: "1 / 2", xs: "1 / 2" },
            gap: { md: "auto", xs: "20px" },
            paddingBottom: { md: "auto", xs: "20px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <ShopCOLogo />
          <Typography variant="subtitle1" sx={descriptionTextStyles}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Typography>
          <Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
            <IconButton
              aria-label="Twitter"
              sx={{
                color: "black",
                "& svg path": { fill: "#000" },
                "& svg circle:first-of-type": { fill: "#fff" },
                "& svg circle:nth-of-type(2)": { stroke: "#000" },
                "&:hover": { backgroundColor: "transparent" },
                "&:hover svg path": { fill: "#fff" },
                "&:hover svg circle:first-of-type": { fill: "#000" },
                "&:hover svg circle:nth-of-type(2)": { stroke: "#fff" },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Facebook"
              sx={{
                color: "black",
                "& svg path": { fill: "#000" },
                "& svg circle:first-of-type": { fill: "#fff" },
                "& svg circle:nth-of-type(2)": { stroke: "#000" },
                "&:hover": { backgroundColor: "transparent" },
                "&:hover svg path": { fill: "#fff" },
                "&:hover svg circle:first-of-type": { fill: "#000" },
                "&:hover svg circle:nth-of-type(2)": { stroke: "#fff" },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              sx={{
                color: "black",
                "& svg path": { fill: "#000" },
                "& svg circle:first-of-type": { fill: "#fff" },
                "& svg circle:nth-of-type(2)": { stroke: "#000" },
                "&:hover": { backgroundColor: "transparent" },
                "&:hover svg path": { fill: "#fff" },
                "&:hover svg circle:first-of-type": { fill: "#000" },
                "&:hover svg circle:nth-of-type(2)": { stroke: "#fff" },
              }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="Github"
              sx={{
                color: "black",
                "& svg path": { fill: "#000" },
                "& svg circle:first-of-type": { fill: "#fff" },
                "& svg circle:nth-of-type(2)": { stroke: "#000" },
                "&:hover": { backgroundColor: "transparent" },
                "&:hover svg path": { fill: "#fff" },
                "&:hover svg circle:first-of-type": { fill: "#000" },
                "&:hover svg circle:nth-of-type(2)": { stroke: "#fff" },
              }}
            >
              <GithubIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Link sections */}
        <FooterLinkSection
          title="COMPANY"
          links={["About", "Features", "Works", "Career"]}
          sx={{
            gridColumn: { md: "2 / 3", xs: "1 / 2" },
            gridRow: { md: "1 / 2", xs: "2 / 3" },
          }}
        />
        <FooterLinkSection
          title="HELP"
          links={[
            "Customer Support",
            "Delivery Details",
            "Terms & Conditions",
            "Privacy Policy",
          ]}
          sx={{
            gridColumn: { md: "3 / 4", xs: "2 / 3" },
            gridRow: { md: "1 / 2", xs: "2 / 3" },
          }}
        />
        <FooterLinkSection
          title="FAQ"
          links={["Account", "Manage Deliveries", "Orders", "Payments"]}
          sx={{
            gridColumn: { md: "4 / 5", xs: "1 / 2" },
            gridRow: { md: "1 / 2", xs: "3 / 4" },
          }}
        />
        <FooterLinkSection
          title="RESOURCES"
          links={[
            "Free eBooks",
            "Development Tutorial",
            "How to - Blog",
            "Youtube Playlist",
          ]}
          sx={{
            gridColumn: { md: "5 / 6", xs: "2 / 3" },
            gridRow: { md: "1 / 2", xs: "3 / 4" },
          }}
        />
      </Box>

      {/* Bottom section */}
      <Box sx={footerBottomStyles}>
        <Typography variant="subtitle1" gutterBottom sx={copyrightTextStyles}>
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>
        <List
          sx={{
            display: "flex",
            gap: { md: "10px", xs: "auto" },
            width: { xs: "100%" },
            justifyContent: { xs: "center", md: "auto" },
          }}
        >
          {paymentIcons.map((item) => (
            <IconButton
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                cursor: "pointer",
                color: hoveredId === item.id ? "white" : "black",
                "& svg path": {
                  fill: hoveredId === item.id ? "white" : "black",
                },
                "& svg rect:first-of-type": {
                  fill: hoveredId === item.id ? "#000" : "#fff",
                },
                "& svg rect:nth-of-type(2)": {
                  stroke: hoveredId === item.id ? "#fff" : "#000",
                },
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Footer;
