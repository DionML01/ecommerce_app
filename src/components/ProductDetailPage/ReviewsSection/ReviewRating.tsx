import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface ReviewRatingProps {
  value: number | null;
  onChange: (value: number | null) => void;
  showRating?: boolean; // optional prop
  disabled?: boolean; // optional prop
}

export default function ReviewRating({
  value,
  onChange,
  showRating = true,
  disabled = true,
}: ReviewRatingProps) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Box
        sx={{
          "& .MuiRating-root": {
            fontSize: "2rem", // or 40px, etc.
          },
        }}
      >
        <Rating
          name="half-rating"
          value={value}
          disabled={disabled}
          onChange={(_, newValue) => {
            onChange(newValue);
          }}
        />
      </Box>
      {showRating && <Typography>{value}/5</Typography>}
    </Stack>
  );
}
