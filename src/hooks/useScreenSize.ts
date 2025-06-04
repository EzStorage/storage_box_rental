import { useTheme } from "@mui/material";

export function useScreenSize() {
    const theme = useTheme();
    const isMobile = theme.breakpoints.down("md");
    const isTablet = theme.breakpoints.between("md", "lg");

    return {
        isMobile,
        isTablet,
        isDesktop: !isMobile && !isTablet,
    };
}
