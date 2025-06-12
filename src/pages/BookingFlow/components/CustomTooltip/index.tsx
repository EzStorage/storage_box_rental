import { ReactElement } from "react";
import { CustomTooltipContainer } from "./CustomTooltip.styles";
import { useScreenSize } from "@hooks/useScreenSize";

interface CustomTooltipProps {
    children: ReactElement;
    title: string;
}

export function CustomTooltip({ children, title }: CustomTooltipProps) {
    const { isDesktop } = useScreenSize();
    const tooltipPlacement = isDesktop ? "top-start" : "top-end";

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
