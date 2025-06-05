import { Box, Divider, useTheme } from "@mui/material";
import { useState } from "react";

import FeatureSection from "./sections/Feature";
import Hero from "./components/Hero";
import HowItWorks from "./sections/HowItWorks";
import TestimonialSection from "./sections/Testimonial";
import FAQSection from "./sections/FAQ";
import Footer from "./sections/Footer";
import Header from "../../components/Header/header";
import CartDrawer from "../../components/cart/CartDrawer";
import { Product } from "../../types/product.type";

interface CartItem extends Product {
  quantity: number;
  cartItemId: string;
}

const Homepage: React.FC = () => {
  const theme = useTheme();

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

 
  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => [
      ...prev,
      { ...product, quantity, cartItemId: crypto.randomUUID() }, // or use uuidv4()
    ]);
    setCartOpen(true);
  };

  const handleCartOpen = () => setCartOpen(true);
  const handleCartClose = () => setCartOpen(false);

  const handleQuantityChange = (cartItemId: string, newQty: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  return (
    <>
      <Header onCartOpen={handleCartOpen}/>

      <div>
        {/* Pass onAddToCart down to Hero */}
        <Hero onAddToCart={handleAddToCart} />
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
