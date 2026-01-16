import { SxProps, Theme } from "@mui/material";

export const outerBox: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  m: 0,
  p: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
};

export const formBox: SxProps<Theme> = {
  width: "100%",
  height: { xs: "100%", md: "90%" },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const formControl: SxProps<Theme> = {
  height: { md: "100%", xs: "100%" },
  width: { md: "500px", xs: "100%" },
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "20px",
  px: { md: "20px", xs: "10px" },
  py: { md: "20px", xs: "40px" },
  display: "flex",
  flexDirection: "column",
  justifyContent: { md: "space-between", xs: "flex-start" },
  gap: { xs: "20px", md: "auto" }, // xs = spacing, md = space-between
};

export const titleSection: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const titleText: SxProps<Theme> = {
  fontSize: "24px",
  fontFamily: "Satoshi Variable",
  fontWeight: 700,
};

export const inputsSection: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "30px", // space between inputs
  width: "100%",
};

export const fieldBox: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "8px", // space between label and input
};

export const buttonsSection: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "30px", // space between login and clear button
  width: "100%",
};

export const submitButton: SxProps<Theme> = {
  width: "100%",
  height: "55px",
  textTransform: "none",
  borderRadius: "40px",
  color: "white",
  fontSize: { md: "16px", sm: "14px" },
  fontWeight: 500,
  fontFamily: "Satoshi Variable",
  background: "linear-gradient(to right, black, white)",
  "&:hover": {
    background: "linear-gradient(to right, #222, #ddd)",
  },
};

export const clearButton: SxProps<Theme> = {
  width: "100%",
  height: "55px",
  textTransform: "none",
  borderRadius: "40px",
  backgroundColor: "inherit",
  color: "#000",
  fontSize: { md: "16px", sm: "14px" },
  fontWeight: 500,
  fontFamily: "Satoshi Variable",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  "&:hover": {
    background: "#ddd",
  },
};
