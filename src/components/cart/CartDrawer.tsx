import React from "react";
import { Box, Drawer, IconButton, Typography, Divider, Button, Stack } from "@mui/material";

import { IoClose, IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Product } from "../../types/product.type";
import Standard_Product from "../../assets/standard-box.png";
import { calculateUnitPrice } from "../../utils/calculate-unit-price";
import EmptyCartIcon from "../Icons/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { removeFromCart, updateQuantity, closeCart, CartItem } from "../../redux/auth/cartSlice";
import { Bold_text, Button_Cart, SuperScript } from "../../pages/Homepage/Homepage.styles";

const CartDrawer: React.FC = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.cart.isOpen);
    const cartItems = useSelector((state: RootState) => state.cart.items ?? []);

    const onClose = () => dispatch(closeCart());

    const onQuantityChange = (cartItemId: string, newQuantity: number) => {
        dispatch(updateQuantity({ id: cartItemId, quantity: newQuantity }));
    };

    const incrementQuantity = (cartItemId: string, currentQty: number = 1) => {
        onQuantityChange(cartItemId, currentQty + 1);
    };

    const decrementQuantity = (cartItemId: string, currentQty: number = 1) => {
        if (currentQty > 1) {
            onQuantityChange(cartItemId, currentQty - 1);
        }
    };

    const subtotal = cartItems.reduce((sum, item) => {
        const unitPrice = calculateUnitPrice(item.quantity, item.bulkPricingTiers ?? []);
        return sum + unitPrice * item.quantity;
    }, 0);

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            slotProps={{
                paper: {
                    sx: {
                        width: 480,
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        height: "100vh",
                    },
                },
            }}
        >
            <Box
                sx={{
                    height: "76px",
                    px: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <Bold_text>
                    Cart
                    <SuperScript>({cartItems.length})</SuperScript>
                </Bold_text>
                <IconButton onClick={onClose}>
                    <IoClose style={{ color: "black", fontSize: "22px" }} />
                </IconButton>
            </Box>

            <Box sx={{ p: 2, flexGrow: 1, overflowY: "auto", color: "black" }}>
                {cartItems.length === 0 ? (
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ mt: 6, mb: 4 }}
                    >
                        <Box sx={{ mt: 6, mb: -6.65 }}>
                            <EmptyCartIcon />
                        </Box>

                       
                    </Box>
                ) : (
                    cartItems.map((item, index) => {
                        const unitPrice = calculateUnitPrice(
                            item.quantity,
                            item.bulkPricingTiers ?? [],
                        );
                        return (
                            <Box
                                key={item.id}
                                mb={3}
                                sx={{
                                    mt: index === 0 ? 0 : 2,
                                }}
                            >
                                <Stack direction="row" spacing={2} alignItems="flex-start">
                                    <Box
                                        component="img"
                                        src={Standard_Product}
                                        alt={item.name}
                                        sx={{
                                            width: "27%",
                                            height: "auto",
                                            objectFit: "cover",
                                            borderRadius: 1,
                                        }}
                                    />

                                    <Box flexGrow={1} style={{ paddingRight: "8px" }}>
                                        <Box
                                            display="flex"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Typography fontWeight="bold">{item.name}</Typography>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <Box
                                                    border="1px solid #ccc"
                                                    borderRadius="6px"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <IconButton
                                                        size="small"
                                                        onClick={() =>
                                                            decrementQuantity(
                                                                item.cartItemId,
                                                                item.quantity || 1,
                                                            )
                                                        }
                                                        sx={{ color: "black", p: 0.5 }}
                                                    >
                                                        <IoRemoveOutline />
                                                    </IconButton>
                                                </Box>
                                                <Typography>{item.quantity || 1}</Typography>
                                                <Box
                                                    border="1px solid #ccc"
                                                    borderRadius="6px"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                >
                                                    <IconButton
                                                        size="small"
                                                        onClick={() =>
                                                            incrementQuantity(
                                                                item.cartItemId,
                                                                item.quantity || 1,
                                                            )
                                                        }
                                                        sx={{ color: "black", p: 0.5 }}
                                                    >
                                                        <IoAddOutline />
                                                    </IconButton>
                                                </Box>
                                            </Stack>
                                        </Box>

                                        <Typography
                                            style={{
                                                width: "135px",
                                                height: "20px",
                                                fontFamily: "Poppins, sans-serif",
                                                fontStyle: "normal",
                                                fontWeight: 400,
                                                fontSize: "13px",
                                                lineHeight: "20px",
                                                color: "#5B616D",
                                                flex: "none",
                                                order: 0,
                                                flexGrow: 0,
                                            }}
                                        >
                                          6 months (180 days)
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: "#CD0F28",
                                                fontWeight: 600,
                                                fontSize: "18px",
                                                py: "12.5px",
                                            }}
                                        >
                                            S${unitPrice.toFixed(2)}
                                            <span
                                                style={{
                                                    fontWeight: 400,
                                                    fontSize: "13px",
                                                    color: "grey",
                                                }}
                                            >
                                                /month
                                            </span>
                                        </Typography>

                                        <Box sx={{ mt: "-0px", mb: 3 }}>
                                            <Button_Cart
                                            >
                                                Book now
                                                    
                                                
                                            </Button_Cart>
                                        </Box>
                                    </Box>
                                </Stack>

                                {index < cartItems.length - 1 && (
                                    <Divider sx={{ borderColor: "#EBECF0" }} />
                                )}
                            </Box>
                        );
                    })
                )}
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
