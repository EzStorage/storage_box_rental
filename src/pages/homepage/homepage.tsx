import { Box, Divider, useTheme } from "@mui/material";
import FeatureSection from "../Homepage/FeatureSection";
import HowItWorks from "../Homepage/HowItWorks";
import TestimonialSection from "../Homepage/TestimonialSection";
import Hero from "../Homepage/Hero";

const Homepage: React.FC = () => {
    const theme = useTheme();

    return (
        <div>
            <Hero />
            <HowItWorks />
            <FeatureSection />
            <Box sx={{ background: "white", padding: { xs: "0 16px", lg: "0 112px" } }}>
                <Divider sx={{ borderColor: theme.palette.outline.greyLow }} />
            </Box>
            <TestimonialSection />
        </div>
    );
};
export default Homepage;
