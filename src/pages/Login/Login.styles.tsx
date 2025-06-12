import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";

export const LoginWrapper = styled("section")(({ theme }) => ({
    background: theme.palette.surface.primaryHigh,
    paddingTop: "72px",

    [theme.breakpoints.down("lg")]: {
        background: "white",
        paddingTop: "0",
        height: "100vh",
    },
}));

export const LoginContainer = styled(Stack)(({ theme }) => ({
    padding: "96px 80px",
    display: "flex",
    justifyContent: "space-around",

    [theme.breakpoints.down("lg")]: {
        padding: "24px 16px",
    },
}));

export const LoginHeaderMobile = styled(Box)(({ theme }) => ({
    background: "white",
    height: "40px",
    borderBottom: `1px solid ${theme.palette.outline.greyLow}`,
    display: "flex",
    alignItems: "center",
    padding: "2px 8px",
}));

export const DesktopBranding = styled(Stack)({
    color: "white",

    ".title": {
        fontWeight: 600,
        fontSize: "76px",
        lineHeight: "88px",
        textAlign: "center",
    },

    ".subtitle": {
        fontWeight: 400,
        fontSize: "22px",
        lineHeight: "28px",
    },
});

export const FormContainer = styled(Stack)(({ theme }) => ({
    padding: "24px",
    background: "white",
    borderRadius: "24px",
    width: "440px",
    height: "fit-content",

    [theme.breakpoints.down("lg")]: {
        padding: 0,
        width: "100%",
    },

    ".icon-container": {
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        padding: "10px",
        background: theme.palette.surface.primaryBase,
        marginBottom: "24px",

        [theme.breakpoints.down("lg")]: {
            width: "64px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
    },

    ".header-section": {
        marginBottom: "24px",
        ".title": {
            fontWeight: 600,
            fontSize: "22px",
            lineHeight: "28px",
            color: theme.palette.textCustom.greyHigh,
        },
        ".subtitle": {
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "20px",
            color: theme.palette.textCustom.greyMed,
        },
        ".phone-number": {
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "20px",
            color: theme.palette.textCustom.greyHigh,
        },
    },

    ".back-button": {
        width: "40px",
        height: "40px",
        border: `1px solid ${theme.palette.outline.greyLow}`,
        padding: "6px",
        borderRadius: "10px",
        background: "white",
        marginBottom: "24px",
    },
}));

export const OTPResendCodeContainer = styled("div")(({ theme }) => ({
    textAlign: "center",
    marginTop: "16px",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",

    ".count-down": {
        color: theme.palette.textCustom.greyLow,
    },

    ".resend-code": {
        color: "#EF151E",
        textTransform: "unset",
    },
}));
