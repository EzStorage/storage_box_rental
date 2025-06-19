import React from "react";
import { Box, Drawer, IconButton, Typography, Divider, Stack } from "@mui/material";
import { IoClose, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { updateQuantity, closeCart } from "../../redux/auth/cartSlice";
import { calculateUnitPrice } from "../../helpers/calculateUnitPrice";
import Standard_Product from "../../assets/standard-box.png";
import {
    Bold_text,
    Button_Cart,
    CartDrawerHeader,
    CartDurationText,
    CartPrice,
    CartQuantityButtonWrapper,
    FlexBetween,
    QuantityButtonContainer,
    SuperScript,
    paperSx,
    ScrollableContent,
    HorizontalItemStack,
    productImageSx,
    cartIconButtonSx,
    mutedTextSx,
    lightDividerSx,
} from "./CartStyles";
import { EmptyCart } from "./EmptyCart";
import { SURFACE } from "../../constants/palette";
const CartDrawer: React.FC = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.cart.isOpen);
    const cartItems = useSelector((state: RootState) => state.cart.items ?? []);

    const onClose = () => dispatch(closeCart());
    const onQuantityChange = (cartItemId: string, newQuantity: number) =>
        dispatch(updateQuantity({ id: cartItemId, quantity: newQuantity }));
    const incrementQuantity = (cartItemId: string, currentQty = 1) =>
        onQuantityChange(cartItemId, currentQty + 1);
    const decrementQuantity = (cartItemId: string, currentQty = 1) =>
        currentQty > 1 && onQuantityChange(cartItemId, currentQty - 1);
    const handleIncrementClick = (cartItemId: string, quantity: number) => () => {
        incrementQuantity(cartItemId, quantity);
    };

    const handleDecrementClick = (cartItemId: string, quantity: number) => () => {
        decrementQuantity(cartItemId, quantity);
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: paperSx,
                },
            }}
        >
            <CartDrawerHeader>
                <Bold_text>
                    Cart<SuperScript>({cartItems.length})</SuperScript>
                </Bold_text>
                <IconButton onClick={onClose}>
                    <IoClose style={{ color: SURFACE.BLACK, fontSize: "22px" }} />
                </IconButton>
            </CartDrawerHeader>

            <ScrollableContent>
                {cartItems.length === 0 ? (
                    <EmptyCart />
                ) : (
                    cartItems.map((item, index) => {
                        const unitPrice = calculateUnitPrice(
                            item.quantity,
                            item.bulkPricingTiers ?? [],
                        );
                        return (
                            <Box key={item.id} mb={3} sx={{ mt: index === 0 ? 0 : 2 }}>
                                <HorizontalItemStack>
                                    <Box
                                        component="img"
                                        src={Standard_Product}
                                        alt={item.name}
                                        sx={productImageSx}
                                    />
                                    <Box flexGrow={1} pr={1}>
                                        <FlexBetween>
                                            <Typography fontWeight="bold">{item.name}</Typography>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <CartQuantityButtonWrapper justifyContent="center">
                                                    <IconButton
                                                        size="small"
                                                        onClick={handleDecrementClick(
                                                            item.cartItemId,
                                                            item.quantity || 1,
                                                        )}
                                                        sx={cartIconButtonSx}
                                                    >
                                                        <IoRemoveOutline />
                                                    </IconButton>
                                                </CartQuantityButtonWrapper>
                                                <Typography>{item.quantity || 1}</Typography>
                                                <QuantityButtonContainer>
                                                    <IconButton
                                                        size="small"
                                                        onClick={handleIncrementClick(
                                                            item.cartItemId,
                                                            item.quantity || 1,
                                                        )}
                                                        sx={cartIconButtonSx}
                                                    >
                                                        <IoAddOutline />
                                                    </IconButton>
                                                </QuantityButtonContainer>
                                            </Stack>
                                        </FlexBetween>

                                        <CartDurationText>6 months (180 days)</CartDurationText>

                                        <CartPrice>
                                            S${unitPrice.toFixed(2)}
                                            <Box component="span" sx={mutedTextSx}>
                                                /month
                                            </Box>
                                        </CartPrice>

                                        <Box sx={{ mt: 0, mb: 3 }}>
                                            <Button_Cart>Book now</Button_Cart>
                                        </Box>
                                    </Box>
                                </HorizontalItemStack>
                                {index < cartItems.length - 1 && <Divider sx={lightDividerSx} />}
                            </Box>
                        );
                    })
                )}
            </ScrollableContent>
        </Drawer>
    );
};

export default CartDrawer;
