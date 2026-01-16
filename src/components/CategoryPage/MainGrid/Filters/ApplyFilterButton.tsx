import { Button } from "@mui/material";

const ApplyFilterButton = ({ onApply }: { onApply?: () => void }) => (
  <Button
    onClick={() => onApply?.()}
    sx={{
      width: "100%",
      backgroundColor: "#000",
      textTransform: "none",
      color: "#fff",
      fontSize: "14px",
      fontFamily: "Satoshi Variable",
      fontWeight: 500,
      borderRadius: "20px",
    }}
  >
    Apply Filter
  </Button>
);

export default ApplyFilterButton;
