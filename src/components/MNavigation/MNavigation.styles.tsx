import { styled } from "@mui/material";
import { Link } from "react-router";

export const MNavigationContainer = styled("nav")(({ theme }) => ({
    position: "sticky",
    bottom: 0,
    background: "white",
    width: "100%",
    zIndex: 20,
    border: `0.5px solid ${theme.palette.outline.greyMed}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

export const MNavigationItem = styled(Link)<{ isSelected?: boolean }>(({ theme, isSelected }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    width: "calc(100% / 3)",
    padding: "12px 0",
    textDecoration: "none",

    div: {
        fontWeight: 400,
        fontSize: "11px",
        lineHeight: "14px",
        color: isSelected ? theme.palette.surface.primaryMed : theme.palette.textCustom.greyMed,
        marginTop: "4px",
    },
}));
