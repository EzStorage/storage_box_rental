import { createSlice } from "@reduxjs/toolkit";

const AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
