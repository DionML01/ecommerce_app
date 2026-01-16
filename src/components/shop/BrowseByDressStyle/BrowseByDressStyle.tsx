import { Box, Typography } from "@mui/material";
import React from "react";

import Img1MD from "../../../Assets/BrowseImg1.jpg";
import Img2MD from "../../../Assets/BrowseImg2.jpg";
import Img3MD from "../../../Assets/BrowseImg3.jpg";
import Img4MD from "../../../Assets/BrowseImg4.jpg";

import BrowseImgPhone1 from "../../../Assets/BrowseImgPhone1.png";
import BrowseImgPhone2 from "../../../Assets/BrowseImgPhone2.png";
import BrowseImgPhone3 from "../../../Assets/BrowseImgPhone3.png";
import BrowseImgPhone4 from "../../../Assets/BrowseImgPhone4.png";
import GridCell from "./GridCell";
import ResponsiveImage from "./ResponsiveImage";
import { useRouter } from "next/navigation";

const BrowseByDressStyle = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        px: { xs: "20px", md: "100px" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(240, 240, 240, 1)",
          width: "100%",
          borderRadius: "40px",
          p: { xs: "20px", md: "60px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            fontFamily: "Integral CF",
            fontSize: { xs: "28px", md: "48px" },
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          BROWSE BY DRESS STYLE
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, 1fr)",
            },
            gridAutoRows: { xs: "200px", md: "300px" },
            gap: "20px",
          }}
        >
          <GridCell gridColumn={{ md: "1 / 2" }}>
            <ResponsiveImage
              desktopSrc={Img1MD}
              mobileSrc={BrowseImgPhone1}
              alt="Style 1"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/category/0")}
            />
          </GridCell>

          <GridCell gridColumn={{ md: "2 / span 2" }}>
            <ResponsiveImage
              desktopSrc={Img2MD}
              mobileSrc={BrowseImgPhone2}
              alt="Style 2"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/category/1")}
            />
          </GridCell>

          <GridCell gridColumn={{ md: "1 / span 2" }}>
            <ResponsiveImage
              desktopSrc={Img3MD}
              mobileSrc={BrowseImgPhone3}
              alt="Style 3"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/category/2")}
            />
          </GridCell>

          <GridCell gridColumn={{ md: "3 / 4" }}>
            <ResponsiveImage
              desktopSrc={Img4MD}
              mobileSrc={BrowseImgPhone4}
              alt="Style 4"
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/category/3")}
            />
          </GridCell>
        </Box>
      </Box>
    </Box>
  );
};

export default BrowseByDressStyle;
