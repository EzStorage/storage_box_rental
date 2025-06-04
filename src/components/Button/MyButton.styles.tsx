import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MyButtonProps } from "./MyButton";

export const StyledButton = styled(Button, {
    shouldForwardProp: prop => prop !== "variantType",
})<MyButtonProps>(({ theme, variantType, fullWidth }) => {
    const genericStyles = {
        fontWeight: 600,
        fontSize: "15px",
        width: fullWidth ? "100%" : "auto",
        textDecoration: "none",
    };
    switch (variantType) {
        case "login": {
            return {
                ...genericStyles,
                backgroundColor: "white",
                color: theme.palette.textCustom.greyMed,
                border: `1px solid ${theme.palette.outline.greyMed}`,
                fontSize: "13px",
                textTransform: "capitalize",
                padding: "8px 16px",
                borderRadius: "4px",
                "&:hover": {
                    backgroundColor: theme.palette.surface.primaryMed,
                    color: "white",
                },
            };
        }

        case "primary": {
            return {
                ...genericStyles,
                textTransform: "none",
                backgroundColor: theme.palette.surface.primaryMed,
                color: theme.palette.textCustom.white,

                "&.Mui-disabled": {
                    backgroundColor: theme.palette.surface.disabledLow,
                    color: theme.palette.textCustom.greyBase,
                },
            };
        }

        case "secondary": {
            return {
                ...genericStyles,
                textTransform: "none",
                backgroundColor: `${theme.palette.surface.black}E0`,
                color: theme.palette.textCustom.white,
            };
        }

        default:
            return genericStyles;
    }
});
