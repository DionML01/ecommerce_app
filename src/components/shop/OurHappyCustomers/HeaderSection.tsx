import React from "react";
import OurHappyCustomersTitle from "./OurHappyCustomersTitle";
import Arrows from "./Arrows";
import { Box } from "@mui/material";

interface HeaderSectionProps {
  onPrev: () => void;
  onNext: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ onPrev, onNext }) => {
  return (
    <Box
      sx={{
        paddingLeft: { xs: "10px", md: "100px" },
        paddingRight: { xs: "10px", md: "100px" },
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "70px",
      }}
    >
      <OurHappyCustomersTitle />
      <Arrows onPrev={onPrev} onNext={onNext} />
    </Box>
  );
};

export default HeaderSection;
