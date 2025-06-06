import { IconButton, styled } from "@mui/material";

export const CheckoutFooterContainer = styled("div")(({ theme }) => ({
    borderTop: `1px solid ${theme.palette.outline.greyLow}`,
    height: "80px",
    position: "sticky",
    bottom: 0,
    background: "white",

    [theme.breakpoints.down("lg")]: {
        height: "72px",
        padding: "0 16px",
    },

    "> div": {
        maxWidth: "592px",
        height: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

export const CheckoutFooterTitle = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyMed,
}));

export const CheckoutFooterPricing = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "28px",
    color: theme.palette.surface.primaryHigh,
}));

export const CheckoutFooterActions = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "16px",
    width: "300px",

    [theme.breakpoints.down("lg")]: {
        width: "200px",
        gap: "12px",
    },
}));

export const CheckoutFooterAddCardIconButton = styled(IconButton)(({ theme }) => ({
    background: "#000000E0",
    borderRadius: "4px",
}));
