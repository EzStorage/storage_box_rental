import { Box, Divider, useTheme } from "@mui/material";
import FeatureSection from "./feature-section";
import Hero from "./hero";
import HowItWorks from "./how-it-works";
import TestimonialSection from "./testimonial-section";

const Homepage: React.FC = () => {
  const theme = useTheme();

  return (
    <div>
      <Hero />
      <HowItWorks />
      <FeatureSection />
      <Box sx={{ background: "white", padding: { xs: "0 16px", lg: "0 112px" } }}>
        <Divider color={theme.palette.outline.greyLow} />
      </Box>
      <TestimonialSection />
    </div>
  );
};
export default Homepage;
