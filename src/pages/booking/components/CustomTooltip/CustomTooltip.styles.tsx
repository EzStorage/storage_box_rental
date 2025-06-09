import { styled, Tooltip, tooltipClasses } from "@mui/material";

import { TooltipProps } from "@mui/material";

export const CustomTooltipContainer = styled(
    ({ className, ...props }: TooltipProps & { className?: string }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ),
)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: "240px",
        padding: "12px",
        borderRadius: "4px",
        backgroundColor: "white",
        boxShadow: "0px 24px 24px -12px rgba(0,0,0,0.04), 0px 3px 3px -1.5px rgba(0,0,0,0.04)",
        border: `1px solid ${theme.palette.outline.greyBase}`,
        color: theme.palette.textCustom.greyMed,
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "16px",
    },

    [`& .${tooltipClasses.arrow}`]: {
        color: "white",
        "&::before": {
            border: `1px solid ${theme.palette.outline.greyBase}`,
            boxShadow: "0px 24px 24px -12px rgba(0,0,0,0.04), 0px 3px 3px -1.5px rgba(0,0,0,0.04)",
        },
    },
}));
