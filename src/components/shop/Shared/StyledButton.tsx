import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

const CustomButton = styled(Button)(({ theme }) => ({
  height: "52px",
  width: "218px",
  padding: "16px 54px",
  backgroundColor: "#fff",
  color: "#000",
  fontFamily: "Satoshi Variable",
  textTransform: "none",
  borderRadius: "62px",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  fontSize: "16px",
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: {
    height: "48px",
    width: "100%",
    fontSize: "14px",
  },
}));

const StyledButton: React.FC<ButtonProps> = (props) => {
  return <CustomButton {...props} />;
};

export default StyledButton;
