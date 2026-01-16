import { IconButton } from "@mui/material";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface ArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const Arrows: React.FC<ArrowsProps> = ({ onPrev, onNext }) => {
  return (
    <div
      style={{
        width: "150px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <IconButton onClick={onPrev}>
        <FaArrowLeft size={30} />
      </IconButton>
      <IconButton onClick={onNext}>
        <FaArrowRight size={30} />
      </IconButton>
    </div>
  );
};

export default Arrows;
