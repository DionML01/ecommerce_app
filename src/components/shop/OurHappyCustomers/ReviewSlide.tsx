import React from "react";
import { Box } from "@mui/system";
import HalfRating from "../Shared/HalfRating";
import GreenIcon from "@/Assets/GreenIcon";

interface ReviewSlideProps {
  name: string;
  review: string;
}

const ReviewSlide: React.FC<ReviewSlideProps> = ({ name, review }) => {
  return (
    <Box
      sx={{
        width: "400px",
        height: "240px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        paddingTop: "28px",
        paddingBottom: "28px",
        paddingRight: "32px",
        paddingLeft: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <HalfRating />
      <p
        style={{
          fontSize: "20px",
          fontFamily: "Satoshi Variable",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {name} <GreenIcon />
      </p>
      <p
        style={{
          fontFamily: "Satoshi Variable",
          fontSize: "16px",
          color: "rgba(0, 0, 0, 0.6)",
          fontWeight: 400,
        }}
      >
        {review}
      </p>
    </Box>
  );
};

export default ReviewSlide;
