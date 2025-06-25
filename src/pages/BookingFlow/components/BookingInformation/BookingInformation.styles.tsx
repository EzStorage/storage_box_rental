import { styled } from "@mui/material";

// ---- Card -----
export const ProductCardContainer = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "20px",
    marginBottom: "24px",

    [theme.breakpoints.down("lg")]: {
        marginRight: "16px",
        marginBottom: "12px",
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

export const ProductDescription = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyMed,
}));

// ---- Booking Info -----
interface BookingInfoContainerProps {
    isBorder?: boolean;
}

export const BookingInfoContainer = styled("div")<BookingInfoContainerProps>(
    ({ theme, isBorder }) => ({
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0",
        borderBottom: isBorder ? `1px solid ${theme.palette.outline.greyLow}` : "none",

        [theme.breakpoints.down("lg")]: {
            flexDirection: "column",
        },
    }),
);

export const BookingInfoTitle = styled("div")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "13px",
    lineHeight: "20px",
    color: theme.palette.textCustom.greyHigh,
}));

export const BookingInfoDesc = styled("div")(({ theme }) => ({
    textAlign: "right",

    "> div:first-of-type": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> div:nth-of-type(2)": {
        fontWeight: 400,
        fontSize: "11px",
        lineHeight: "16px",
        color: theme.palette.textCustom.greyMed,

        "> span": {
            display: "inline-block",
            width: "2px",
            height: "2px",
            background: "#AFB3BB",
            borderRadius: "50%",
            verticalAlign: "middle",
            margin: "0 4px",
        },
    },

    [theme.breakpoints.down("lg")]: {
        textAlign: "left",
    },
}));

// ---- Container -----
export const BookingInformationTitle = styled("h1")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    marginBottom: "12px",

    [theme.breakpoints.down("lg")]: {
        marginBottom: "8px",
    },
}));

export const BookingInformationContainer = styled("div")(({ theme }) => ({
    padding: "16px",
    border: `1px solid ${theme.palette.outline.greyLow}`,
    borderRadius: "4px",
    marginBottom: "20px",
}));
