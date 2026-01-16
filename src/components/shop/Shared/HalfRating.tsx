import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface RatingProps {
  initialValue?: number; // optional prop
  showRating?: boolean; // optional prop
  disabled?: boolean; // optional prop
}

export default function FullRating({
  initialValue = 3, // better to use an integer since only full stars are allowed
  showRating = true,
  disabled = true,
}: RatingProps) {
  const [value, setValue] = React.useState<number>(initialValue);

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Rating
        name="full-rating"
        value={value}
        defaultValue={initialValue}
        precision={1} // 👈 only full numbers
        disabled={disabled}
        onChange={(_, newValue) => {
          if (newValue !== null) {
            setValue(newValue);
          }
        }}
      />
      {showRating && <Typography>{value}/5</Typography>}
    </Stack>
  );
}
