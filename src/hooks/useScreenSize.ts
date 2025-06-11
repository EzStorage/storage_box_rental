import { useMediaQuery, useTheme } from "@mui/material";

export function useScreenSize() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

    return {
        isMobile,
        isTablet,
        isDesktop: !isMobile && !isTablet,
    };
}
