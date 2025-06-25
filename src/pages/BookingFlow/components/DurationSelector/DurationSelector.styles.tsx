import { Button, Dialog, styled } from "@mui/material";

export const DurationSelectorContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gap: "12px",
    gridTemplateColumns: "repeat(3, 1fr)",

    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
}));

interface DurationSelectorItemProps {
    isSelected?: boolean;
}

export const DurationSelectorItem = styled("div")<DurationSelectorItemProps>(
    ({ theme, isSelected }) => ({
        borderRadius: "4px",
        border: `1px solid ${isSelected ? "#FA8371" : theme.palette.outline.greyLow}`,
        background: isSelected ? theme.palette.surface.primaryBase : "transparent",
        padding: "12px 16px",

        [theme.breakpoints.down("lg")]: {
            padding: "12px",
        },
    }),
);

export const DurationSelectorTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyHigh,

    [theme.breakpoints.down("lg")]: {
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
    },

    span: {
        fontWeight: 400,
        fontSize: "11px",
        lineHeight: "16px",
        color: theme.palette.textCustom.greyMed,
    },
}));

export const DurationSelectorPrice = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
}));

export const CustomDurationButton = styled(Button)(({ theme }) => ({
    width: "fit-content",
    textTransform: "none",
    padding: 0,
    marginTop: "20px",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.surface.primaryHigh,
}));

export const DialogCustomDuration = styled(Dialog)({
    ".MuiPaper-root": {
        backgroundColor: "white",
        borderRadius: "20px",
        boxShadow: "none",
    },
});

// ----- Custom Duration Selector -----
export const CustomDurationSelectorItem = styled("div")(({ theme }) => ({
    borderRadius: "4px",
    border: "1px solid #FA8371",
    background: theme.palette.surface.primaryBase,
    padding: "12px 16px",
    marginTop: "20px",
}));

export const CustomDurationSelectorTitleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyHigh,

        [theme.breakpoints.down("lg")]: {
            fontWeight: 600,
            fontSize: "13px",
            lineHeight: "20px",
        },
    },

    "> div:nth-of-type(2)": {
        display: "flex",
        gap: "8px",

        button: {
            padding: 0,
        },
    },
}));

export const CustomDurationSelectorDate = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyHigh,
    marginTop: "8px",
}));
