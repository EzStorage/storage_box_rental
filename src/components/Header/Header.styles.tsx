import styled from "@emotion/styled";
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
