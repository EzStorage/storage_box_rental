import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/product.type";

// 👇 Exported now
export interface CartItem extends Product {
    quantity: number;
    cartItemId: string;
}

// 👇 Exported now
export interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<{ product: Product; quantity: number }>) => {
            const item = {
                ...action.payload.product,
                quantity: action.payload.quantity,
                cartItemId: crypto.randomUUID(),
            };
            state.items.push(item);
            state.isOpen = true;
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.cartItemId !== action.payload);
        },
        updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
            const item = state.items.find(item => item.cartItemId === action.payload.id);
            if (item) item.quantity = action.payload.quantity;
        },
        openCart: state => {
            state.isOpen = true;
        },
        closeCart: state => {
            state.isOpen = false;
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, openCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
