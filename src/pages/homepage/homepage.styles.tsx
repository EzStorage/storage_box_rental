import styled from "@emotion/styled";
import background from "../../assets/background-hero.jpg";

// Hero
export const HeroContainer = styled("section")(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  marginLeft: "-80px",
  marginRight: "-80px",
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  position: "relative",
  padding: "72px 122px 0px",

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
  },

  [theme.breakpoints.down("lg")]: {
    marginLeft: "-16px",
    marginRight: "-16px",
    padding: "56px 16px 0px",
    height: "100%",
  },
}));

export const HeroLeft = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  color: theme.palette.textCustom.white,

  h1: {
    fontSize: "64px",
    fontWeight: "600",
    lineHeight: "72px",
    letterSpacing: "-0.2px",
    alignSelf: "flex-start",
    margin: 0,

    [theme.breakpoints.down("lg")]: {
      fontSize: "32px",
      lineHeight: "40px",
      letterSpacing: "0px",
    },
  },

  p: {
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "26px",
    margin: 0,

    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      lineHeight: "24px",
      letterSpacing: "0px",
    },
  },
}));

// How It Works
export const HowItWorksContainer = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginLeft: "-80px",
  marginRight: "-80px",
  padding: "64px 122px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "64px",

  [theme.breakpoints.down("lg")]: {
    marginLeft: "-16px",
    marginRight: "-16px",
    padding: "32px 16px",
    gap: "32px",
  },
}));

export const HowItWorksHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "16px",

  h1: {
    color: theme.palette.textCustom.greyHigh,
    fontSize: "40px",
    lineHeight: "48px",
    fontWeight: "600",

    [theme.breakpoints.down("lg")]: {
      fontSize: "26px",
      lineHeight: "32px",
    },

    span: {
      color: theme.palette.textCustom.primary,
    },
  },

  p: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "26px",
    color: theme.palette.textCustom.greyMed,

    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      lineHeight: "24px",
    },
  },
}));
