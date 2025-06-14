import { styled } from "@mui/material";

export const LoginCardContainer = styled("div")(({ theme }) => ({
    background: "white",
    borderRadius: "8px",
    border: `1px solid ${theme.palette.outline.greyMed}`,
    padding: "12px 16px",
}));

export const LoginHeader = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
});

export const LoginIconContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    background: theme.palette.surface.primaryBase,
    padding: "6px",
}));

export const LoginTextContainer = styled("div")(({ theme }) => ({
    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> div:nth-of-type(2)": {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
        color: theme.palette.textCustom.greyMed,
    },
}));
