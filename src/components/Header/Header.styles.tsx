import styled from "@emotion/styled";
import { MenuList, Popover } from "@mui/material";
import { Link } from "react-router";

export const HeaderContainer = styled("header")<{
    isChangeColor?: boolean;
}>(({ theme, isChangeColor }) => ({
    width: "100%",
    height: "72px",
    padding: "0 112px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: isChangeColor ? "transparent" : "white",

    position: "fixed",
    top: 0,
    zIndex: 20,
    transition: "all 0.3s ease-out",

    [theme.breakpoints.down("md")]: {
        height: "56px",
        padding: "0 16px",
    },
}));

export const HeaderLogo = styled(Link)<{ isChangeColor?: boolean }>(({ isChangeColor }) => ({
    color: isChangeColor ? "white" : "black",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
}));

export const HeaderLeftNav = styled("nav")<{ isChangeColor?: boolean }>(
    ({ theme, isChangeColor }) => ({
        display: "flex",
        alignItems: "center",
        gap: "20px",

        a: {
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "20px",
            color: theme.palette.textCustom[isChangeColor ? "white" : "greyHigh"],
        },
    }),
);

export const HeaderRight = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "24px",
}));

// ---- Profile Popover -----

export const ProfilePopoverContainer = styled("div")(({}) => ({
    display: "flex",
    flexDirection: "column",
    width: "426px",

    ".MuiPaper-root": {
        top: "68px",
    },
}));

export const ProfilePopoverHeader = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    borderBottom: `1px solid ${theme.palette.outline.greyLow}`,
    background: "white",

    "> div": {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },

    ".phone": {
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
    },

    ".edit-button": {
        textTransform: "none",
        gap: "4px",
        color: theme.palette.textCustom.greyMed,
        fontWeight: 600,
        fontSize: "11px",
        lineHeight: "16px",

        "&.MuiButton-endIcon": {
            marginLeft: "4px",
        },
    },
}));

export const ProfilePopoverInfo = styled("div")(({}) => ({
    display: "flex",
    padding: "16px",
    justifyContent: "space-between",
    gap: "8px",
}));

interface ProfilePopoverCardProps {
    background?: string;
    borderColor?: string;
}

export const ProfilePopoverCard = styled("div")<ProfilePopoverCardProps>(
    ({ theme, background, borderColor }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: background,
        border: `1px solid ${borderColor}`,
        width: "125px",
        height: "80px",
        padding: "8px 12px",

        "> div": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            ".title": {
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "20px",
                color: theme.palette.textCustom.greyHigh,
            },

            ".count": {
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: "28px",
                color: theme.palette.textCustom.greyHigh,
            },
        },

        ".view-all": {
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "11px",
            lineHeight: "16px",
            color: theme.palette.textCustom.greyMed,
        },
    }),
);

export const ProfilePopoverMenu = styled(MenuList)(({ theme }) => ({
    background: "white",
    borderTop: `1px solid ${theme.palette.outline.greyLow}`,

    ".MuiListItemIcon-root": {
        minWidth: "20px",
        padding: "8px",
    },

    ".MuiListItemText-root": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyMed,
    },
}));
