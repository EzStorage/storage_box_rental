import styled from "@emotion/styled";
import background from "../../assets/background-hero.jpg";
import { Box, Grid, Stack, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CrossCircleIcon } from "@components/Icons/CrossCircleIcon";
import { SURFACE, OUTLINE, TEXT_CUSTOM } from "../../constants/palette";

export const FullPageContainer = styled(Box)(({ theme }) => ({
    fontFamily: "Poppins",
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: SURFACE.DISABLED_BASE,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(6, 4),
    boxSizing: "border-box",
    paddingTop: theme.spacing(15),

    [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
    },
}));
export const LabelRow = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "8px",
    fontFamily: '"Poppins", sans-serif',
    color: SURFACE.BLACK,
}));
export const SuccessFailureHeading = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", sans-serif',
    fontWeight: "bold",
    color: SURFACE.BLACK,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(0.8),
    fontSize: "22px",
}));
export const IDText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", sans-serif',
    fontSize: "15px",
    marginBottom: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    gap: 0,
    color: TEXT_CUSTOM.PRIMARY_MED,
}));
export const ThankText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Poppins", sans-serif',
    color: TEXT_CUSTOM.PRIMARY_MED,
    marginBottom: theme.spacing(4),
}));
export const BorderBox = styled(Box)(({ theme }) => ({
    border: "1px solid #EBECF0",
    borderRadius: "8px",
    padding: theme.spacing(2),
    fontFamily: '"Poppins", sans-serif',
}));
export const BookingTryAgain = styled(Button)({
    width: "174px",
    height: "48px",
    textTransform: "none",
    fontFamily: '"Poppins", sans-serif',
    backgroundColor: SURFACE.PRIMARY_MED,
    color: TEXT_CUSTOM.WHITE,
});
export const ValueColumn = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
    fontFamily: '"Poppins", sans-serif',
});
export const LabelText = styled(Typography)(() => ({
    fontSize: "13px",
    fontWeight: 600,
    fontFamily: '"Poppins", sans-serif',
}));
export const StyledWhiteButton = styled(Button)(({ theme }) => ({
    backgroundColor: TEXT_CUSTOM.WHITE,
    width: "174px",
    height: "48px",
    color: theme.palette.grey[700],
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 600,

    boxShadow: "none",
    textTransform: "none",
    "&:hover": {
        backgroundColor: theme.palette.grey[100],
    },
}));
export const VerticalDivider = styled(Box)(({ theme }) => ({
    width: "1px",
    height: "16px",
    backgroundColor: OUTLINE.GREY_LIGHT,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
}));
export const DimensionText = styled(Typography)({
    fontFamily: '"Poppins", sans-serif',
    fontSize: "14px",
    fontWeight: 600,
    marginTop: "8px",
    color: TEXT_CUSTOM.PRIMARY_MED,
    textAlign: "left",
});
export const StatusText = styled(Box)(() => ({
    fontFamily: '"Poppins", sans-serif',
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "20px",
    color: SURFACE.GREEN,
}));
export const Bold_text = styled("h5")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    color: SURFACE.BLACK,
    paddingLeft: "30px",
    fontFamily: '"Poppins", sans-serif',
    [theme.breakpoints.up("md")]: {
        paddingLeft: "0px",
    },
}));
export const AddressText = styled(Typography)(({ theme }) => ({
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: TEXT_CUSTOM.GREY_HIGH,
    marginBottom: theme.spacing(0.2),
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
}));
export const TimeText = styled(Typography)({
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: "11px",
    lineHeight: "20px",
    color: TEXT_CUSTOM.PRIMARY_MED,
});
export const ResponsiveStack = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
    fontFamily: "Poppins",

    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        gap: theme.spacing(0.1),
    },

    "& > *": {
        margin: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            margin: theme.spacing(2),
        },
    },
}));
export const ResponsivePaper = styled(Paper)(({ theme }) => ({
    backgroundColor: TEXT_CUSTOM.WHITE,
    padding: theme.spacing(3),
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
        width: "400px",
    },
    [theme.breakpoints.up("md")]: {
        width: "480px",
        height: 380,
    },
}));
export const StyledBoxChip = styled(Chip)({
    fontSize: "12px",
    fontFamily: '"Poppins", sans-serif',
    height: "24px",

    color: TEXT_CUSTOM.PRIMARY_MED,
    fontWeight: 600,
    backgroundColor: SURFACE.GREY_SURFACE_2,
    borderRadius: "2px",
    paddingLeft: 8,
    paddingRight: 8,
    "& .MuiChip-label": {
        paddingLeft: 0,
        paddingRight: 0,
    },
});





