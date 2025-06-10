import { styled } from "@mui/material";

export const PickupEmptyBoxContainer = styled("div")(() => ({
    marginTop: "20px",
}));

export const PickupEmptyBoxTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "26px",
    color: theme.palette.textCustom.greyHigh,
    marginBottom: "16px",
}));

export const PickupChosenDurationContainer = styled("div")(({ theme }) => ({
    marginTop: "16px",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> div:nth-of-type(2)": {
        margin: "8px 0",
    },

    "> div:last-of-type": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyMed,

        "> span": { color: theme.palette.textCustom.greyHigh },
    },
}));
