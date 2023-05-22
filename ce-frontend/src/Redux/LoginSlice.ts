import { createSlice } from "@reduxjs/toolkit";

export const loginData = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    error: false,
    accessToken: "",
  },
  reducers: {
    loginStatus: (state: any, action: any) => {
      state.isLoggedIn = action.payload;
    },
    loginError: (state: any, action: any) => {
      state.error = action.payload;
    },
    Token: (state: any, action: any) => {
      state.accessToken = action.payload;
    },
  },
});

export const { loginStatus, loginError, Token } = loginData.actions;
export default loginData.reducer;
