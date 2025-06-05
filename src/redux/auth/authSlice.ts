import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "src/types/auth.type";
import { verifyOtp } from "./authThunks";

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const initialState: AuthState = {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
    extraReducers: builder => {
        builder
            .addCase(verifyOtp.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                verifyOtp.fulfilled,
                (state, action: PayloadAction<{ user: User; token: string }>) => {
                    state.loading = false;
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    localStorage.setItem("token", action.payload.token);
                    localStorage.setItem("user", JSON.stringify(action.payload.user));
                },
            )
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
