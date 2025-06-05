import { styled } from "@mui/material";

export const MHeaderContainer = styled("header")(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    width: "100%",
    maxHeight: "44px",
    background: "white",
    position: "fixed",
    top: 0,
    zIndex: 10,
}));

export const MHeaderTitle = styled("div")(() => ({
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
}));
