import styled from "@emotion/styled";
import { Box, Button, Chip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { OUTLINE, SURFACE, TEXT_CUSTOM } from "src/constants/palette";

export const FullPageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",

    [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(4),
    },
}));

export const LabelRow = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: "8px",

    color: SURFACE.BLACK,
});

export const IDText = styled(Box)(({ theme }) => ({
    fontSize: "15px",
    marginBottom: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    gap: 0,
    color: TEXT_CUSTOM.PRIMARY_MED,
}));

export const BorderBox = styled(Box)(({ theme }) => ({
    border: "1px solid #EBECF0",
    borderRadius: "8px",
    padding: theme.spacing(2),
}));

export const BookingTryAgain = styled(Button)({
    width: "174px",
    height: "48px",
    textTransform: "none",
    margin: 0,
    backgroundColor: SURFACE.PRIMARY_MED,
    color: TEXT_CUSTOM.WHITE,
});

export const ValueColumn = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    textAlign: "right",
});

export const LabelText = styled(Typography)({
    fontSize: "13px",
    fontWeight: 600,
});

export const StyledWhiteButton = styled(Button)(({ theme }) => ({
    backgroundColor: TEXT_CUSTOM.WHITE,
    width: "174px",
    height: "48px",
    color: theme.palette.grey[700],
    fontWeight: 600,
    boxShadow: "none",
    textTransform: "none",
    margin: 0,
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
    fontSize: "14px",
    fontWeight: 600,
    marginTop: "8px",
    color: TEXT_CUSTOM.PRIMARY_MED,
    textAlign: "left",
});

export const StatusText = styled(Box)({
    fontSize: "15px",
    fontWeight: 600,
    lineHeight: "20px",
    color: SURFACE.GREEN,
});

export const BoldText = styled("h5")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    color: SURFACE.BLACK,
    paddingLeft: "30px",

    [theme.breakpoints.up("md")]: {
        paddingLeft: "0px",
    },
}));

export const AddressText = styled(Typography)(({ theme }) => ({
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
    fontWeight: 400,
    fontSize: "11px",
    lineHeight: "20px",
    color: TEXT_CUSTOM.PRIMARY_MED,
});

export const ResponsiveStack = styled("div")({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    marginTop: "24px",
});

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
