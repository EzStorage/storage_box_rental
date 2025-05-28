import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../types/auth.type";

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
