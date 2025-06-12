import {
    Dialog,
    DialogTitle,
    IconButton,
    styled,
    TableBody,
    TableContainer,
    TableHead,
} from "@mui/material";

export const BulkPricingDialogContainer = styled(Dialog)({
    ".MuiPaper-root": {
        width: "100%",
        borderRadius: "12px",
        position: "relative",
        background: "white",
    },
});

export const BulkPricingCloseButton = styled(IconButton)(({ theme }) => ({
    borderRadius: "1000px",
    border: `1px solid ${theme.palette.outline.greyLow}`,
    padding: "8px 12px",
    width: "40px",
    height: "40px",
    boxShadow: "0px 24px 24px -12px rgba(0, 0, 0, 0.04), 0px 3px 3px -1.5px rgba(0, 0, 0, 0.04)",

    position: "absolute",
    right: "12px",
    top: "12px",
}));

export const BulkPricingDialogTitle = styled(DialogTitle)(({ theme }) => ({
    padding: "24px 24px 20px",

    h1: {
        fontWeight: 600,
        fontSize: "22px",
        lineHeight: "28px",
        color: theme.palette.textCustom.greyHigh,
    },

    p: {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyMed,
    },
}));

// ----- Table -----
export const BulkPricingTableContainer = styled(TableContainer)(({ theme }) => ({
    borderRadius: "8px",
    border: `1px solid ${theme.palette.outline.greyLow}`,
}));

export const BulkPricingRowHead = styled(TableHead)(({ theme }) => ({
    tr: {
        background: "#F9F9FA",
    },

    th: {
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "16px",
        color: "#535862",
        border: `1px solid ${theme.palette.outline.greyLow}`,
    },
}));

export const BulkPricingRowBody = styled(TableBody)(({ theme }) => ({
    td: {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: "#535862",
        border: `1px solid ${theme.palette.outline.greyLow}`,
    },
}));
