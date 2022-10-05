import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const CustomButton = styled(MuiButton)(() => ({
  borderRadius: "0",
  // padding: "15px 30px",
  color: "black",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
  backgroundColor: "#F8F8FF",
  minWidth: "80px",
  "&:hover": {
    backgroundColor: "#006400",
    color: "white",
  },
}));

export default CustomButton;
