import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductState } from "src/types/product.type";
import { fetchProductById } from "./productThunks";

const initialState: ProductState = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProductById.pending, state => {
                state.loading = true;
                state.error = null;
                state.selectedProduct = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<Product>) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.selectedProduct = null;
            });
    },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
