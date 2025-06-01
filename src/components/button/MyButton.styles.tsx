import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { MyButtonProps } from "./MyButton";

export const StyledButton = styled(Button, {
    shouldForwardProp: prop => prop !== "variantType",
})<MyButtonProps>(({ theme, variantType }) => {
    switch (variantType) {
        case "login": {
            return {
                backgroundColor: "white",
                color: theme.palette.textCustom.greyMed,
                border: `1px solid ${theme.palette.outline.greyMed}`,
                fontWeight: 600,
                fontSize: "13px",
                textDecoration: "none",
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
                textTransform: "none",
                backgroundColor: theme.palette.surface.primaryMed,
                color: theme.palette.textCustom.white,
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
            };
        }

        case "secondary": {
            return {
                textTransform: "none",
                backgroundColor: `${theme.palette.surface.black}E0`,
                color: theme.palette.textCustom.white,
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
            };
        }

        default:
            return {};
    }
});
