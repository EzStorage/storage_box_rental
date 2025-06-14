import { styled } from "@mui/material";

export const ProfileContainer = styled("div")(({ theme }) => ({
    height: "calc(100vh - 62px - 44px)",
    marginTop: "44px",
    padding: "0 16px",

    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "22px",
        lineHeight: "28px",
        color: theme.palette.textCustom.greyHigh,
        marginBottom: "16px",
    },
}));

export const ProfileInfoContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0 24px",
    background: "white",

    "> div:first-of-type": {
        display: "flex",
        alignItems: "center",
        gap: "8px",

        "> div:nth-of-type(2)": {
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "24px",
        },
    },

    button: {
        textTransform: "none",
        color: theme.palette.textCustom.greyMed,
        fontWeight: 600,
        fontSize: "11px",
        lineHeight: "16px",

        "&.MuiButton-endIcon": {
            marginLeft: "4px",
        },
    },
}));

export const ProfileSectionContainer = styled("div")(({ theme }) => ({
    marginTop: "24px",

    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyHigh,
        marginBottom: "8px",
    },
}));

export const ProfileMenuItemContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    padding: "14px 0",

    "> div:first-of-type": {
        display: "flex",
        alignItems: "center",
        gap: "8px",

        "> div:nth-of-type(2)": {
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "20px",
            color: theme.palette.textCustom.greyHigh,
        },
    },
}));
