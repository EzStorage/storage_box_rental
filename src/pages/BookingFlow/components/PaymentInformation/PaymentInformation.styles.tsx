import { styled } from "@mui/material";

export const PaymentInformationTitle = styled("h1")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    marginBottom: "12px",

    [theme.breakpoints.down("lg")]: {
        marginBottom: "8px",
    },
}));

export const PaymentInformationContainer = styled("div")(({ theme }) => ({
    padding: "16px",
    border: `1px solid ${theme.palette.outline.greyLow}`,
    borderRadius: "4px",
    marginBottom: "20px",
}));

export const PaymentInformationBoxFeeContainer = styled("div")(({ theme }) => ({
    padding: "12px 0",
    borderBottom: `1px solid ${theme.palette.outline.greyLow}`,

    "> div:first-of-type": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
    },

    "> div:nth-of-type(2)": {
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
        color: theme.palette.textCustom.greyMed,
        textAlign: "right",
    },
}));

export const PaymentInformationDeliveryFeeContainer = styled("div")({
    padding: "12px 0",

    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
    },
});

export const PaymentInformationDeliveryFeeItem = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> div:nth-of-type(2)": {
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyHigh,
    },
}));
