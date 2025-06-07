import { Box, Divider, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import FeatureSection from "./FeatureSection";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import TestimonialSection from "./TestimonialSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import Header from "../../components/header/header";
import CartDrawer from "../../components/cart/CartDrawer";
import { RootState } from "../../app/store";
import {
  openCart,
  closeCart,
  updateQuantity
} from "../../app/redux/cart/cartSlice";

const Homepage: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const cartOpen = useSelector((state: RootState) => state.cart.isOpen);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleCartOpen = () => dispatch(openCart());
  const handleCartClose = () => dispatch(closeCart());

  const handleQuantityChange = (cartItemId: string, newQty: number) => {
    dispatch(updateQuantity({ id: cartItemId, quantity: newQty }));
  };

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

      <CartDrawer
        open={cartOpen}
        onClose={handleCartClose}
        cartItems={cartItems}
        onQuantityChange={handleQuantityChange}
      />
    </>
  );
};

export default Homepage;
