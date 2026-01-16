import { Box } from "@mui/material";
import { useField } from "formik";
import React from "react";

interface MySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
}

const MySelect: React.FC<MySelectProps> = ({
  label,
  name,
  children,
  ...props
}) => {
  const [field, meta] = useField({ name });
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <label htmlFor={name}>{label}</label>
      <select
        style={{
          height: "50px",
          border: "1px solid #666",
          borderRadius: "40px",
          paddingLeft: "20px",
          paddingRight: "40px",
        }}
        id={name}
        {...field}
        {...props}
      >
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div style={{ fontSize: "0.85rem", color: "red" }}>{meta.error}</div>
      ) : null}
    </Box>
  );
};

export default MySelect;
