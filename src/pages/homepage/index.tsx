import { Box, Divider, useTheme } from "@mui/material";
<<<<<<< HEAD:src/pages/homepage/index.tsx
import FeatureSection from "./FeatureSection";
import HowItWorks from "./HowItWorks";
import TestimonialSection from "./TestimonialSection";
import Hero from "./components/Hero";
=======
import FeatureSection from "./feature-section";
import Hero from "./hero";
import HowItWorks from "./how-it-works";
import TestimonialSection from "./testimonial-section";
import FAQSection from "./faq-section";
import Footer from "./footer" ;

>>>>>>> 060d622 (faq,footer):src/pages/homepage/homepage.tsx

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
  <FAQSection />  
  <Footer/>
</div>

  );
};
export default Homepage;
