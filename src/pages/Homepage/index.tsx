import Feature from "./sections/Feature";
import HowItWorks from "./sections/HowItWorks";
import Testimonial from "./sections/Testimonial";
import Hero from "./components/Hero";
import FAQ from "./sections/FAQ";
import { SectionDivider } from "./components/SectionDivider";
import { Box, Divider, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import { openCart } from "../../redux/auth/cartSlice";
import Header from "../../components/Header/index";
import Footer from "../../pages/Homepage/sections/Footer"
import CartDrawer from "../../components/cart/CartDrawer"
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
        <Feature />
        <Box sx={{ background: "white", padding: { xs: "0 16px", lg: "0 112px" } }}>
          <SectionDivider/>
        </Box>
        <Testimonial />
        <FAQ />
        <Footer />
      </div>

      
      <CartDrawer />
    </>
  );
};
export default Homepage;
