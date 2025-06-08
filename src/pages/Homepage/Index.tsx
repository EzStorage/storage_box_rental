import { Box, Divider, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";

import FeatureSection from "./sections/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./sections/HowItWorks";
import TestimonialSection from "./sections/Testimonial";
import FAQSection from "./sections/FAQ";
import Footer from "./sections/Footer";
import Header from "../../components/Header/header";
import CartDrawer from "../../components/cart/CartDrawer";
import { openCart } from "../../redux/auth/cartSlice";

const Homepage: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleCartOpen = () => dispatch(openCart());

  return (
    <>
      <Header onCartOpen={handleCartOpen} />

      <div>
        <Hero />
        <HowItWorks />
        <FeatureSection />
        <Box sx={{ background: "white", padding: { xs: "0 16px", lg: "0 112px" } }}>
          <Divider color={theme.palette.outline.greyLow} />
        </Box>
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </div>

      {/* ❌ No props needed now since CartDrawer reads from Redux */}
      <CartDrawer />
    </>
  );
};

export default Homepage;
