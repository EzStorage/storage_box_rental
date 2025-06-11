import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProductById } from "./productServices";

export const fetchProductById = createAsyncThunk(
    "product/fetchById",
    async (productId: string, thunkAPI) => {
        try {
            const response = await getProductById(productId);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Not found data");
        }
    },
);
