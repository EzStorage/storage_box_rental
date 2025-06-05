import { styled } from "@mui/material";

export const ProgressBookingContainer = styled("div")(({}) => ({
    width: "100%",
    position: "fixed",

    ".MuiLinearProgress-root": {
        backgroundColor: "#FFF2EC",
    },
}));

export const StepContainer = styled("div")(() => ({
    maxWidth: "592px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    padding: "48px 0",
}));

export const StepHeaderProgress = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.surface.primaryHigh,
}));

export const StepHeaderTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "26px",
    lineHeight: "32px",
    color: theme.palette.textCustom.greyHigh,
}));
