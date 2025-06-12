import { styled } from "@mui/material";

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
    }),
);

export const DurationSelectorTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyHigh,

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
