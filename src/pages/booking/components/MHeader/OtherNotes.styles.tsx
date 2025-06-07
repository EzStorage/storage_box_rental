import { styled } from "@mui/material";

export const OtherNotesContainer = styled("div")(({ theme }) => ({
    padding: "14px 16px 10px",

    [theme.breakpoints.down("lg")]: {
        padding: "10px 16px",
    },
}));

export const OtherNotesTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyHigh,
    marginBottom: "8px",
}));

export const OtherNotesList = styled("ul")(({}) => ({
    listStyleType: "disc",
    marginLeft: "20px",
}));

export const OtherNotesListLabel = styled("span")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
}));

export const OtherNotesListDesc = styled("span")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
}));
