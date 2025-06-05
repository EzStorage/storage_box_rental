import { IconButton, styled } from "@mui/material";

export const BoxCounterContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 0",
    borderTop: `1px solid ${theme.palette.outline.greyLow}`,
    borderBottom: `1px solid ${theme.palette.outline.greyLow}`,
}));

export const BoxCounterTitle = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
}));

export const BoxCounterQuality = styled("div")(({}) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
}));

export const BoxCounterButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.outline.greyLow}`,
    borderRadius: "4px",
    width: "40px",
    height: "40px",
}));
