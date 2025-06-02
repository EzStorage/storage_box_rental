import { Box, Divider, useTheme } from "@mui/material";
import FeatureSection from "./FeatureSection";
import HowItWorks from "./HowItWorks";
import TestimonialSection from "./TestimonialSection";
import Hero from "./components/Hero";
import Footer from "./Footer";
import FAQSection from "./FAQSection";

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
            <FAQSection />
            <Footer />
        </div>
    );
};
export default Homepage;
