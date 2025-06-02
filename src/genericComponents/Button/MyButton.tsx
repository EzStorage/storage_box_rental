import { ButtonProps } from "@mui/material";
import { StyledButton } from "./MyButton.styles";

export interface MyButtonProps extends ButtonProps {
    variantType?: "login" | "primary" | "secondary";
}

const MyButton: React.FC<MyButtonProps> = ({ variantType, ...props }) => {
    return (
        <StyledButton variantType={variantType} {...props}>
            {props.children}
        </StyledButton>
    );
};
export default MyButton;
