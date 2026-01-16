// Reviews.tsx
import { Box, Button } from "@mui/material";
import React from "react";
import ReviewCard from "./ReviewCard";
import { useRouter } from "next/navigation";

type ReviewItem = {
  id: number;
  rating: number;
  name: string;
  content: string;
  date: string;
};

interface ReviewsProps {
  reviews: ReviewItem[];
  deleteReview: (id: number) => void;
  addReview: (review: ReviewItem) => void;
}

const Reviews = ({ reviews, deleteReview, addReview }: ReviewsProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        paddingLeft: { md: "100px", xs: "10px" },
        paddingRight: { md: "100px", xs: "10px" },
        paddingBottom: { md: "50px", xs: "25px" },
        display: "flex",
        flexWrap: "wrap",
        gap: { md: "20px", xs: "10px" },
      }}
    >
      {reviews.map((item) => (
        <ReviewCard
          key={item.id}
          item={item}
          deleteReview={deleteReview}
          addReview={addReview}
        />
      ))}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: { md: "50px", xs: "25px" },
        }}
      >
        <Button
          onClick={() => router.push("/PageUnavailable")}
          sx={{
            width: { md: "270px", xs: "220px" },
            height: { md: "52px", xs: "47px" },
            padding: { md: "16px 54px", xs: "14px, 36px" },
            textTransform: "none",
            backgroundColor: "#fff",
            color: "#000",
            fontFamily: "Satoshi Variable",
            fontSize: "16px",
            fontWeight: 500,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "62px",
          }}
        >
          Load More Reviews
        </Button>
      </Box>
    </Box>
  );
};

export default Reviews;
