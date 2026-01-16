import { Box, Divider } from "@mui/material";
import FilterHeader from "./FilterHeader";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import SizeFilter from "./SizeFilter";
import DressStyleFilter from "./DressStyleFilter";
import ApplyFilterButton from "./ApplyFilterButton";
import React from "react";

type Props = {
  value: number[];
  handleChange: (event: Event, newValue: number | number[]) => void;
  closePrice: boolean;
  toggleClosePrice: () => void;
  closeColors: boolean;
  toggleCloseColors: () => void;
  closeSize: boolean;
  toggleCloseSize: () => void;
  closeDressStyle: boolean;
  toggleCloseDressStyle: () => void;
  color: string;
  setColor: (c: string) => void;
  active: number;
  setActive: (id: number) => void;
  mobile?: boolean;
  onApply?: () => void;
};

const Filters: React.FC<Props> = ({
  value,
  handleChange,
  closePrice,
  toggleClosePrice,
  closeColors,
  toggleCloseColors,
  closeSize,
  toggleCloseSize,
  closeDressStyle,
  toggleCloseDressStyle,
  color,
  setColor,
  active,
  setActive,
  mobile = false,
  onApply,
}) => (
  <Box
    sx={{
      display: mobile ? "block" : { md: "block", xs: "none" },
      gridColumn: "1 / 2",
      width: "100%",
      border: mobile ? "none" : "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: mobile ? "0px" : "20px",
      padding: "20px",
    }}
  >
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <FilterHeader />
      <Divider />
      <CategoryFilter />
      <Divider />
      <PriceFilter
        value={value}
        onChange={handleChange}
        open={closePrice}
        toggle={toggleClosePrice}
      />
      <Divider />
      <ColorFilter
        color={color}
        setColor={setColor}
        open={closeColors}
        toggle={toggleCloseColors}
      />
      <Divider />
      <SizeFilter
        active={active}
        setActive={setActive}
        open={closeSize}
        toggle={toggleCloseSize}
      />
      <Divider />
      <DressStyleFilter open={closeDressStyle} toggle={toggleCloseDressStyle} />
      <Divider />
      <ApplyFilterButton onApply={onApply} />
    </Box>
  </Box>
);

export default Filters;
