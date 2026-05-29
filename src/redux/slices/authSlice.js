import { createSlice } from "@reduxjs/toolkit";

// check token initially
const token = localStorage.getItem("token");

const initialState = {
  isLoggedIn: !!token,
  token: token || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;

      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;