import { styled } from "@mui/material";

export const FAQContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.surface.greySurface1,
    padding: "96px 112px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",

    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: "1fr",
        padding: "48px 16px",
    },
}));

export const FAQHeader = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    paddingRight: "64px",

    h1: {
        color: theme.palette.textCustom.greyHigh,
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "600",

        [theme.breakpoints.down("lg")]: {
            fontSize: "26px",
            lineHeight: "32px",
        },

        span: {
            color: theme.palette.textCustom.primary,
        },
    },

    p: {
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "26px",
        color: theme.palette.textCustom.greyMed,

        [theme.breakpoints.down("lg")]: {
            fontSize: "15px",
            lineHeight: "24px",
        },
    },
}));

export const FAQAccordionContainer = styled("div")(({ theme }) => ({
    marginTop: "-24px",

    ".Mui-expanded": {
        margin: 0,
    },

    ".MuiAccordion-root": {
        backgroundColor: "transparent",
        padding: "24px 0",
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.outline.greyLow}`,
        button: {
            padding: 0,
        },
    },

    ".MuiAccordion-root:last-of-type": {
        borderBottom: "none",
    },

    ".MuiAccordion-root::before": {
        display: "none",
    },

    ".MuiAccordionSummary-root": {
        minHeight: "auto",
    },

    ".MuiAccordionSummary-content": {
        fontWeight: 600,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyHigh,
        fontFamily: "Poppins",
        margin: 0,
    },

    ".MuiAccordionDetails-root": {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyMed,
        padding: 0,
        marginTop: "8px",
    },
    // width: "100%",
    // display: "flex",
    // flexDirection: "column",
    // gap: "16px",
    // "& .MuiAccordion-root": {
    //     backgroundColor: theme.palette.surface.greySurface2,
    //     borderRadius: "8px",
    //     boxShadow: "none",
    //     "&.Mui-expanded": {
    //         margin: "0",
    //     },
    //     "& .MuiAccordionSummary-root": {
    //         padding: "16px 24px",
    //         minHeight: "48px",
    //         "& .MuiAccordionSummary-content": {
    //             margin: "0",
    //             fontSize: "16px",
    //             color: theme.palette.textCustom.greyHigh,
    //         },
    //     },
    //     "& .MuiAccordionDetails-root": {
    //         padding: "16px 24px",
    //         color: theme.palette.textCustom.greyMed,
    //     },
    // },
}));
