import { Box, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import { categories } from "../constants";

const CategoryFilter = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
    }}
  >
    {categories.map((category) => (
      <Box
        key={category.id}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "16px",
            fontWeight: 400,
            fontFamily: "Satoshi Variable",
          }}
        >
          {category.name}
        </Typography>
        <MdKeyboardArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
      </Box>
    ))}
  </Box>
);

export default CategoryFilter;
