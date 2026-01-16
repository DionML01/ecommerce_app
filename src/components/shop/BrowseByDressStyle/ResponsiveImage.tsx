import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ResponsiveImageProps {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  alt: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  desktopSrc,
  mobileSrc,
  alt,
  style,
  onClick,
}) => {
  return (
    <>
      {/* Desktop image */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "relative",
          width: "100%",
          height: "100%",
          cursor: style?.cursor,
        }}
        onClick={onClick}
      >
        <Image
          src={desktopSrc}
          alt={alt}
          fill
          sizes="(max-width: 900px) 0px, 100vw"
          style={{ objectFit: "cover", borderRadius: "20px" }}
        />
      </Box>

      {/* Mobile image */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "relative",
          width: "100%",
          height: "100%",
          cursor: style?.cursor,
        }}
      >
        <Image
          src={mobileSrc}
          alt={alt}
          fill
          sizes="100vw"
          style={{ objectFit: "cover", borderRadius: "20px" }}
        />
      </Box>
    </>
  );
};

export default ResponsiveImage;
