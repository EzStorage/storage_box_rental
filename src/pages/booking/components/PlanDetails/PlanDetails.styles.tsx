import { styled } from "@mui/material";

export const PlanDetailsContainer = styled("div")(() => ({}));

export const PlanDetailsTitle = styled("div")(({ theme }) => ({
    background: "#F9F9FA",
    padding: "8px 16px",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    marginBototm: "8px",
}));

export const PlanDetailsInfoContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 16px",
    borderBottom: `1px solid ${theme.palette.outline.greyLow}`,

    "&:last-child": {
        borderBottom: "none",
    },

    "> div:first-of-type": {
        fontWeight: 600,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyHigh,
    },

    "> div:last-of-type": {
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "20px",
        color: theme.palette.textCustom.greyMed,
    },
}));
