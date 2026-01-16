import { SwipeableDrawer } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Filters from "../Filters/Filters";

export default function MobileDrawer({
  openDrawer,
  toggleDrawer,
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
  onApply,
}: {
  openDrawer: boolean;
  toggleDrawer: () => void;
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
  onApply?: () => void;
}) {
  const list = (
    <Box
      sx={{
        width: "100%",
        maxHeight: "80vh",
        overflowY: "auto",
        padding: "20px",
        backgroundColor: "white",
      }}
      role="presentation"
      //   onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <Filters
        value={value}
        handleChange={handleChange}
        closePrice={closePrice}
        toggleClosePrice={toggleClosePrice}
        closeColors={closeColors}
        toggleCloseColors={toggleCloseColors}
        closeSize={closeSize}
        toggleCloseSize={toggleCloseSize}
        closeDressStyle={closeDressStyle}
        toggleCloseDressStyle={toggleCloseDressStyle}
        color={color}
        setColor={setColor}
        active={active}
        setActive={setActive}
        mobile={true}
        onApply={onApply}
      />
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor="bottom"
        open={openDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        PaperProps={{
          sx: {
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          },
        }}
      >
        {list}
      </SwipeableDrawer>
    </div>
  );
}
