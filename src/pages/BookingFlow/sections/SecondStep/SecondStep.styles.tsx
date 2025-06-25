import { Divider, styled } from "@mui/material";

export const ProductCardContainer = styled("div")(({ theme }) => ({
    border: `1px solid ${theme.palette.outline.greyLow}`,
    padding: "12px",
    display: "flex",
    margin: "20px 0",
    borderRadius: "10px",

    [theme.breakpoints.down("lg")]: {
        margin: "16px 0",
    },

    "> div:first-of-type": {
        marginRight: "20px",

        [theme.breakpoints.down("lg")]: {
            marginRight: "16px",
        },
    },
}));

export const ProductInfoContainer = styled("div")({
    width: "100%",
});

export const ProductChipContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "6px",
    marginBottom: "12px",
    marginTop: "4px",
});

export const ProductEstimateFeeContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
}));

export const ProductEstimateFeeTitle = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    color: theme.palette.textCustom.greyHigh,
}));

export const ProductEstimateFeePricing = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "4px",
});

export const ProductDescription = styled("div")(({ theme }) => ({
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    color: theme.palette.textCustom.greyMed,
    textAlign: "right",

    [theme.breakpoints.down("lg")]: {
        textAlign: "left",
    },
}));

export const ProductDivider = styled(Divider)(({ theme }) => ({
    margin: "4px 0",
    borderColor: theme.palette.outline.greyLow,
}));

export const PlanDetailsContainer = styled("div")({
    marginBottom: "4px",
});
