import { ButtonProps } from "@mui/material";
import { StyledButton } from "./my-button.styles";

export interface MyButtonProps extends ButtonProps {
  variantType: "login" | "primary" | "secondary";
}

const MyButton: React.FC<MyButtonProps> = ({ variantType = "primary", ...props }) => {
  return (
    <StyledButton variantType={variantType} {...props}>
      {props.children}
    </StyledButton>
  );
};
export default MyButton;
