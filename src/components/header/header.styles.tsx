import styled from "@emotion/styled";

export const HeaderContainer = styled("header")(({ theme }) => ({
  width: "100%",
  height: "72px",
  padding: "0px 122px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 10,

  [theme.breakpoints.down("md")]: {
    height: "56px",
    padding: "8px 16px",
  },
}));

export const HeaderLeft = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));

export const HeaderLeftNav = styled("nav", {
  shouldForwardProp: prop => prop !== "isHomepage",
})<{ isHomepage: boolean }>(({ theme, isHomepage }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",

  a: {
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom[isHomepage ? "white" : "greyHigh"],
  },
}));

export const HeaderRight = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: "24px",
}));
