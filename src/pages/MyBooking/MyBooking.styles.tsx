import { styled } from "@mui/material";

export const MyBookingContainer = styled("div")(({ theme }) => ({
    height: "calc(100vh - 62px - 44px)",
    marginTop: "72px",
    padding: "0 16px",

    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "22px",
        lineHeight: "28px",
        color: theme.palette.textCustom.greyHigh,
        marginBottom: "16px",
    },
    [theme.breakpoints.down("lg")]: {
        marginTop: "44px",
    },
}));
