import { useMediaQuery, useTheme } from "@mui/material";

import { ReactElement, useState } from "react";
import { CustomTooltipContainer } from "./CustomTooltip.styles";

interface CustomTooltipProps {
    children: ReactElement;
    title: string;
}

export function CustomTooltip({ children, title }: CustomTooltipProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const tooltipPlacement = isMobile ? "top-end" : "top-start";

    return (
        <CustomTooltipContainer
            title={title}
            placement={tooltipPlacement}
            enterTouchDelay={100}
            arrow
        >
            {children}
        </CustomTooltipContainer>
    );
}
