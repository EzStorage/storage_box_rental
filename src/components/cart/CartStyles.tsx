import styled from "@emotion/styled";
import { Box, Stack, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { SURFACE, OUTLINE, TEXT_CUSTOM } from "../../constants/palette";

export const CartDrawerHeader = styled(Box)(({ theme }) => ({
    height: "76px",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: SURFACE.GREY_SURFACE_0,
}));

export const StyledCartDrawerPaper = styled(Paper)(({ theme }) => ({
    width: "100%",
    backgroundColor: SURFACE.GREY_SURFACE_0,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    [theme.breakpoints.up("sm")]: {
        width: 480,
    },
}));

export const CartDurationText = styled(Typography)({
    width: "135px",
    height: "20px",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "13px",
    lineHeight: "20px",
    color: TEXT_CUSTOM.PRIMARY_MED,
});

export const CartPrice = styled(Typography)({
    color: TEXT_CUSTOM.PRIMARY_HIGH,
    fontWeight: 600,
    fontSize: "18px",
    paddingTop: "12.5px",
    paddingBottom: "12.5px",
});

export const CartQuantityButtonWrapper = styled(Box)(() => ({
    border: `1px solid ${OUTLINE.GREY_MED}`,
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
});

export const QuantityButtonContainer = styled(Box)(() => ({
    border: `1px solid ${OUTLINE.GREY_MED}`,
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const Bold_text = styled("h5")(({ theme }) => ({
    fontWeight: 600,
    fontSize: "22px",
    display: "flex",
    alignItems: "center",
    color: TEXT_CUSTOM.GREY_HIGH,
    paddingLeft: "30px",
    fontFamily: '"Poppins", sans-serif',
    [theme.breakpoints.up("md")]: {
        paddingLeft: "0px",
    },
}));

export const Button_Cart = styled(Button)({
    fontWeight: 400,
    fontSize: "12px",
    pt: 1,
    backgroundColor: SURFACE.PRIMARY_MED,
    color: TEXT_CUSTOM.WHITE,
    textTransform: "none",
    "&:hover": { backgroundColor: SURFACE.PRIMARY_HIGH },
    width: "305px",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const SuperScript = styled("h5")({
    color: TEXT_CUSTOM.GREY_BASE,
    fontWeight: 600,
    fontSize: "18px",
    position: "relative",
    top: "-1px",
    padding: "6px",
});

export const BookingTryAgain = styled(Button)({
    width: "174px",
    height: "48px",
    textTransform: "none",
    fontFamily: '"Poppins", sans-serif',
    backgroundColor: SURFACE.PRIMARY_MED,
    color: TEXT_CUSTOM.WHITE,
});

export const paperSx = {
    width: {
        xs: "100%",
        sm: 480,
    },
    backgroundColor: SURFACE.GREY_SURFACE_0,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
};

export const ScrollableContent = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    flexGrow: 1,
    overflowY: "auto",
    color: TEXT_CUSTOM.GREY_HIGH,
}));

export const CenteredStack = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
}));

export const getItemContainerSx = (index: number) => ({
    mb: 3,
    mt: index === 0 ? 0 : 2,
});

export const HorizontalItemStack = styled(Stack)({
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
});

export const productImageSx = {
    width: {
        xs: "35%",
        sm: "27%",
    },
    height: "auto",
    objectFit: "cover",
    borderRadius: 1,
};

export const sectionBoxSx = {
    mt: 6,
    mb: -6.65,
    pb: 3.7,
};

export const cartIconButtonSx = {
    color: TEXT_CUSTOM.GREY_HIGH,
    p: 0.5,
};

export const mutedTextSx = {
    fontWeight: 400,
    fontSize: "13px",
    color: TEXT_CUSTOM.GREY_BASE,
};

export const lightDividerSx = {
    borderColor: OUTLINE.GREY_LOW,
};

export const EmptyCartBox = styled(Box)({
    mt: 6,
    mb: -6.65,
    paddingBottom: 3.7,
});
