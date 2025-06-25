import { styled } from "@mui/material";

// ----- Product ------

export const ProductCardContainer = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "16px",
    marginBottom: "20px",

    [theme.breakpoints.down("lg")]: {
        marginBottom: "16px",
    },
}));

export const ProductChipContainer = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "6px",
    marginTop: "4px",
    marginBottom: "12px",
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

// ----- Card Hero ------

export const CardHeroContainer = styled("div", {
    shouldForwardProp: prop => prop !== "isLogin",
})<{ isLogin: boolean }>(({ theme, isLogin }) => ({
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "24px",
    width: "464px",

    [theme.breakpoints.down("lg")]: {
        ...(isLogin && {
            borderTop: `1px solid ${theme.palette.outline.greyMed}`,
        }),
        width: "100%",
    },
}));

export const CardHeroPricingBreakdown = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    spacing: "8px",
    margin: "20px 0",

    div: {
        display: "flex",
        justifyContent: "space-between",
    },

    p: {
        fontSize: "15px",
        fontWeight: "400",
        lineHeight: "24px",
        color: theme.palette.textCustom.greyMed,
    },

    ".discount": {
        color: theme.palette.textCustom.success,
    },

    ".total": {
        fontWeight: "600",
        color: theme.palette.textCustom.greyHigh,
    },
}));

export const CardHeroActionsContainer = styled("div", {
    shouldForwardProp: prop => prop !== "isLogin",
})<{ isLogin: boolean }>(({ theme, isLogin }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",

    [theme.breakpoints.down("lg")]: {
        gridTemplateColumns: isLogin ? "1fr 1fr" : "1fr",
    },
}));
