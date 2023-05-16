import { createSlice } from "@reduxjs/toolkit";

export const loginData = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    error: false,
  },
  reducers: {
    loginStatus: (state: any, action: any) => {
      state.isLoggedIn = action.payload;
    },
    loginError: (state: any, action: any) => {
      state.error = action.payload;
    },
  },
});

export const { loginStatus, loginError } = loginData.actions;
export default loginData.reducer;
