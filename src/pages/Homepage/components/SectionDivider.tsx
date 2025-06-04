import { Box, Divider, useTheme } from "@mui/material";

export function SectionDivider() {
    const theme = useTheme();

    return (
        <Box sx={{ background: "white", padding: { xs: "0 16px", lg: "0 112px" } }}>
            <Divider sx={{ borderColor: theme.palette.outline.greyLow }} />
        </Box>
    );
}
