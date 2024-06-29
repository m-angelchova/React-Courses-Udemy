import { createSlice } from "@reduxjs/toolkit";

const initialAuthStaate = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthStaate,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    loguout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
