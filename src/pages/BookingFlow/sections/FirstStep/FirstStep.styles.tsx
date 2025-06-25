import { styled } from "@mui/material";

export const ProductCardContainer = styled("div")(({ theme }) => ({
    display: "flex",
    margin: "20px 0",

    [theme.breakpoints.down("lg")]: {
        margin: "16px 0",
    },

    "> div:first-of-type": {
        marginRight: "20px",
    },
}));

export const ProductChipContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "6px",
    marginBottom: "12px",
    marginTop: "4px",
});

export const ProductDiscountedPeriod = styled("span")(({ theme }) => ({
    fontSize: "13px",
    fontWeight: "400",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
}));

export const ProductShowBulkPricing = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
    textDecoration: "underline",
    cursor: "pointer",

    "&:hover": {
        color: theme.palette.textCustom.primary,
    },
}));

export const ProductList = styled("ul")({
    listStyleType: "disc",
    marginLeft: "16px",
});

export const FirstStepNoteContainer = styled("div")({
    marginBottom: "20px",
});

export const FirstStepStorageTitle = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyHigh,
    margin: "20px 0",
}));
