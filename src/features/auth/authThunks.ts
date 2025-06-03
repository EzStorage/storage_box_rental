import { createAsyncThunk } from "@reduxjs/toolkit";
import { postOtp } from "./authServices";

export const verifyOtp = createAsyncThunk(
    "auth/verifyOtp",
    async ({ phoneNumber, otp }: { phoneNumber: string; otp: string[] }, thunkAPI) => {
        try {
            const response = await postOtp(phoneNumber, otp);
            return {
                token: response.data.token,
                user: response.data.user,
            };
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Verification failed");
        }
    },
);
