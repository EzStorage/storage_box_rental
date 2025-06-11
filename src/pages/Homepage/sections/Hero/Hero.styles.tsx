import { styled } from "@mui/material";
import background from "@assets/background-hero.jpg";

export const DHeroContainer = styled("section")(() => ({
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    position: "relative",
    padding: "72px 112px",

    display: "flex",
    gap: "32px",

    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        zIndex: 1,
    },

    "& > *": {
        position: "relative",
        zIndex: 2,
        height: "100%",
    },
}));

export const MHeroContainer = styled("section", {
    shouldForwardProp: prop => prop !== "isLogin",
})<{ isLogin?: boolean }>(({ theme, isLogin }) => ({
    width: "100%",
    height: "100%",
    padding: "56px 16px",
    position: "relative",

    ...(!isLogin && {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",

        "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
        },

        "& > *": {
            position: "relative",
            zIndex: 2,
            height: "100%",
        },
    }),

    ...(isLogin && {
        backgroundColor: theme.palette.surface.greySurface1,
        paddingBottom: "8px",
    }),
}));

export const HeroTitleContainer = styled("div")(({ theme }) => ({
    paddingRight: "64px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: theme.palette.textCustom.white,

    h1: {
        fontSize: "64px",
        fontWeight: "600",
        lineHeight: "72px",
        letterSpacing: "-0.2px",
        marginBottom: "16px",

        [theme.breakpoints.down("lg")]: {
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "0px",
            marginBottom: "8px",
        },
    },

    p: {
        fontSize: "18px",
        fontWeight: "400",
        lineHeight: "26px",

        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
            lineHeight: "24px",
            letterSpacing: "0px",
        },
    },

    [theme.breakpoints.down("lg")]: {
        marginBottom: "24px",
    },
}));

export const HeroCardContainer = styled("div", {
    shouldForwardProp: prop => prop !== "isLogin",
})<{ isLogin: boolean }>(({ theme, isLogin }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("lg")]: {
        display: "block",
    },

    ...(isLogin && {
        margin: "0 -16px",
    }),
}));

export const HeroIntro = styled("div")(({ theme }) => ({
    padding: "24px 16px",

    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "18px",
        lineHeight: "26px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> div:second-of-type": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyMed,
    },

    "> div:nth-of-type(3)": {
        display: "flex",
        gap: "8px",
        paddingTop: "16px",
    },
}));
