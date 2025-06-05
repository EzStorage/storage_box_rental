import { Button } from "@components/Button";
import { styled } from "@mui/material";

export const ProductCardContainer = styled("div")(() => ({
    display: "flex",
    maxHeight: "137px",
    margin: "20px 0",

    "> div:first-of-type": {
        marginRight: "20px",
    },
}));

export const ProductChipContainer = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
}));

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

export const ProductList = styled("ul")(({}) => ({
    listStyleType: "disc",
    marginLeft: "16px",
}));

export const FirstStepNoteContainer = styled("div")(({}) => ({
    marginBottom: "20px",
}));

export const FirstStepStorageTitle = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyHigh,
    margin: "20px 0",
}));

export const FirstStepAddDuration = styled(Button)(({ theme }) => ({
    width: "fit-content",
    textTransform: "none",
    marginTop: "20px",
    color: theme.palette.surface.primaryHigh,
}));
