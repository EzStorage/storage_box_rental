import { Chip, styled } from "@mui/material";

export const ProductImageContainer = styled("div")(({}) => ({
    backgroundColor: "#F4F4F6",
    borderRadius: "4px",
    height: "137px",
    width: "137px",

    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
}));

export const ProductTitleContainer = styled("h3")(() => ({
    fontWeight: 600,
    fontSize: "22px",
    lineHeight: "28px",
    color: "#1F1F1F",
}));

export const ProductChipContainer = styled(Chip)(({ theme }) => ({
    backgroundColor: "#F4F4F6",
    borderRadius: "4px",
    padding: "4px 6px",

    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "16px",
    color: theme.palette.textCustom.greyMed,
}));

export const ProductOriginalPriceContainer = styled("span")(({ theme }) => ({
    textDecoration: "line-through",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
}));

export const ProductDiscountedPriceContainer = styled("span")(({ theme }) => ({
    fontSize: "22px",
    fontWeight: 600,
    lineHeight: "28px",
    color: theme.palette.surface.primaryHigh,
}));
