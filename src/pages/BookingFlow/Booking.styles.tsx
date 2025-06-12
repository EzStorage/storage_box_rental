import { styled } from "@mui/material";

export const BookingContainer = styled("div")(({ theme }) => ({
    marginTop: "72px",
    position: "relative",

    [theme.breakpoints.down("lg")]: {
        marginTop: "44px",
    },
}));

export const StepsContainer = styled("div")(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        marginBottom: "72px",
    },
}));

export const StepContainer = styled("div")(({ theme }) => ({
    maxWidth: "592px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    padding: "48px 0",

    [theme.breakpoints.down("lg")]: {
        padding: "20px 16px",
    },
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

    [theme.breakpoints.down("lg")]: {
        fontSize: "22px",
        lineHeight: "28px",
    },
}));
