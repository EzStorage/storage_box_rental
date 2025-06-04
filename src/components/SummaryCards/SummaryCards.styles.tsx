import { styled } from "@mui/material";

interface SummaryCardProps {
    background?: string;
    borderColor?: string;
}

export const SummaryCard = styled("div")<SummaryCardProps>(
    ({ theme, background, borderColor }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: background,
        border: `1px solid ${borderColor}`,
        width: "125px",
        height: "80px",
        padding: "8px 12px",

        "> div": {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            ".title": {
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "20px",
                color: theme.palette.textCustom.greyHigh,
            },

            ".count": {
                fontWeight: 600,
                fontSize: "22px",
                lineHeight: "28px",
                color: theme.palette.textCustom.greyHigh,
            },

            [theme.breakpoints.down("md")]: {
                flexDirection: "column",
                alignItems: "flex-start",
            },
        },

        ".view-all": {
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "11px",
            lineHeight: "16px",
            color: theme.palette.textCustom.greyMed,
        },

        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    }),
);
