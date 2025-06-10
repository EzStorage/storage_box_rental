import { styled } from "@mui/material";

export const ReturnInformationContainer = styled("div")(() => ({
    marginTop: "24px",
}));

export const ReturnInformationTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "26px",
    color: theme.palette.textCustom.greyHigh,
    marginBottom: "16px",
}));

export const ReturnStepInputContainer = styled("div")(({ theme }) => ({
    marginBottom: "20px",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        marginBottom: "8px",
        color: theme.palette.textCustom.greyHigh,
    },
}));

export const LocationCheckboxContainer = styled("div")(({}) => ({
    marginTop: "8px",
}));

export const PickupDescription = styled("p")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyMed,
}));

export const NoteContainer = styled("div")(({ theme }) => ({
    marginTop: "4px",
}));

export const ReturnSelectorContainer = styled("div")(({}) => ({
    marginBottom: "20px",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "24px",
        marginBottom: "8px",
    },
}));
