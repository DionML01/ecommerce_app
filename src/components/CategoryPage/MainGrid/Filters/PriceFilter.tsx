import { Box, Typography, IconButton, Slider, Collapse } from "@mui/material";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React from "react";

type Props = {
  value: number[];
  onChange: (event: Event, newValue: number | number[]) => void;
  open: boolean;
  toggle: () => void;
};

const PriceFilter: React.FC<Props> = ({ value, onChange, open, toggle }) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontFamily: "Satoshi Variable",
          fontWeight: 700,
        }}
      >
        Price
      </Typography>
      <IconButton onClick={toggle}>
        {open ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </IconButton>
    </Box>
    <Collapse in={open} timeout={300}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={onChange}
        valueLabelDisplay="auto"
        valueLabelFormat={(val) => `$${val}`}
        min={20}
        max={250}
        sx={{
          color: "black",
          "& .MuiSlider-thumb": { backgroundColor: "black" },
          "& .MuiSlider-rail": { color: "rgba(0,0,0,0.2)" },
          "& .MuiSlider-track": { color: "black" },
        }}
      />
    </Collapse>
  </Box>
);

export default PriceFilter;
