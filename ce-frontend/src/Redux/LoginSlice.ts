import { createSlice } from "@reduxjs/toolkit";

export const loginData = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    loginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { loginStatus } = loginData.actions;
export default loginData.reducer;
