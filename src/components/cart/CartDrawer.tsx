import React from "react";
import { Box, Drawer, IconButton, Typography, Divider, Stack } from "@mui/material";
import { IoClose, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { updateQuantity, closeCart } from "../../redux/auth/cartSlice";
import { calculateUnitPrice } from "../../helpers/calculateUnitPrice";
import Standard_Product from "../../assets/standard-box.png";
import EmptyCartIcon from "../../components/Icons/EmptyCart";
import {
  Bold_text, Button_Cart, CartDrawerHeader, CartDurationText, CartPrice, CartQuantityButtonWrapper,
  FlexBetween, QuantityButtonContainer, SuperScript, BookingTryAgain
} from "../../pages/Homepage/Homepage.styles";

const CartDrawer: React.FC = () => {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.cart.isOpen);
  const cartItems = useSelector((state: RootState) => state.cart.items ?? []);

  const onClose = () => dispatch(closeCart());
  const onQuantityChange = (cartItemId: string, newQuantity: number) => dispatch(updateQuantity({ id: cartItemId, quantity: newQuantity }));
  const incrementQuantity = (cartItemId: string, currentQty: number = 1) => onQuantityChange(cartItemId, currentQty + 1);
  const decrementQuantity = (cartItemId: string, currentQty: number = 1) => currentQty > 1 && onQuantityChange(cartItemId, currentQty - 1);

  const subtotal = cartItems.reduce((sum, item) => {
    const unitPrice = calculateUnitPrice(item.quantity, item.bulkPricingTiers ?? []);
    return sum + unitPrice * item.quantity;
  }, 0);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { sx: { width: { xs: "100%", sm: 480 }, backgroundColor: "white", display: "flex", flexDirection: "column", height: "100vh" } } }}
    >
      <CartDrawerHeader>
        <Bold_text>Cart<SuperScript>({cartItems.length})</SuperScript></Bold_text>
        <IconButton onClick={onClose}><IoClose style={{ color: "black", fontSize: "22px" }} /></IconButton>
      </CartDrawerHeader>

      <Box sx={{ p: 2, flexGrow: 1, overflowY: "auto", color: "black" }}>
        {cartItems.length === 0 ? (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ mt: 6, mb: 4 }}>
            <Box sx={{ mt: 6, mb: -6.65, pb: 3.7 }}><EmptyCartIcon /></Box>
            <Typography sx={{ pb: 3 }}>No storage yet!</Typography>
            <BookingTryAgain>Book new storage</BookingTryAgain>
          </Box>
        ) : (
          cartItems.map((item, index) => {
            const unitPrice = calculateUnitPrice(item.quantity, item.bulkPricingTiers ?? []);
            return (
              <Box key={item.id} mb={3} sx={{ mt: index === 0 ? 0 : 2 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Box component="img" src={Standard_Product} alt={item.name} sx={{ width: { xs: "35%", sm: "27%" }, height: "auto", objectFit: "cover", borderRadius: 1 }} />
                  <Box flexGrow={1} pr={1}>
                    <FlexBetween>
                      <Typography fontWeight="bold">{item.name}</Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CartQuantityButtonWrapper justifyContent="center">
                          <IconButton size="small" onClick={() => decrementQuantity(item.cartItemId, item.quantity || 1)} sx={{ color: "black", p: 0.5 }}><IoRemoveOutline /></IconButton>
                        </CartQuantityButtonWrapper>
                        <Typography>{item.quantity || 1}</Typography>
                        <QuantityButtonContainer>
                          <IconButton size="small" onClick={() => incrementQuantity(item.cartItemId, item.quantity || 1)} sx={{ color: "black", p: 0.5 }}><IoAddOutline /></IconButton>
                        </QuantityButtonContainer>
                      </Stack>
                    </FlexBetween>

                    <CartDurationText>6 months (180 days)</CartDurationText>

                    <CartPrice>
                      S${unitPrice.toFixed(2)}<span style={{ fontWeight: 400, fontSize: "13px", color: "grey" }}>/month</span>
                    </CartPrice>

                    <Box sx={{ mt: 0, mb: 3 }}><Button_Cart>Book now</Button_Cart></Box>
                  </Box>
                </Stack>
                {index < cartItems.length - 1 && <Divider sx={{ borderColor: "#EBECF0" }} />}
              </Box>
            );
          })
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
