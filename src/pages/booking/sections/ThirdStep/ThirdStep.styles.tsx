import { styled } from "@mui/material";

export const ThirdStepNotesContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
    margin: "20px 0",

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        gridTemplateColumns: "1fr",
        gap: "12px",
    },
}));

export const ThirdStepInputContainer = styled("div")(({}) => ({
    marginBottom: "20px",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        marginBottom: "8px",
    },
}));

export const ThirdStepSelectorContainer = styled("div")(({}) => ({
    marginBottom: "20px",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "24px",
        marginBottom: "8px",
    },
}));
