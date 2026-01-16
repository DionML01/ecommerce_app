import { Box } from "@mui/material";
import React from "react";

interface MyRadioButtonProps {
  label: string;
  name: string;
  type?: string;
  icon?: React.ReactNode;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MyRadioButton: React.FC<MyRadioButtonProps> = ({
  label,
  name,
  type = "radio",
  icon,
  value,
  checked,
  onChange,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <Box
      sx={{
        width: { md: "45%", xs: "100%" },
        height: "50px",
        border: "1px solid #666",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        gap: "8px",
        paddingLeft: { md: "20px", xs: "10px" },
        paddingRight: { md: "20px", xs: "10px" },
        cursor: "pointer",
        backgroundColor: checked ? "#e6f2ff" : "#fff",
      }}
      onClick={() => inputRef.current?.click()}
    >
      {label}
      <input
        ref={inputRef}
        style={{ cursor: "pointer" }}
        type={type}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {icon}
    </Box>
  );
};

export default MyRadioButton;
