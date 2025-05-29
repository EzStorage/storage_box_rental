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
