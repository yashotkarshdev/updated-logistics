// features/admin/adminSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { loginAdmin } from "./adminThunk";

const initialState = {
  admin: null,
  token: localStorage.getItem("adminToken") || null,
  loading: false,
  error: null
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logoutAdmin: (state) => {
      state.admin = null;
      state.token = null;
      localStorage.removeItem("adminToken");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload.admin;
        state.token = action.payload.token;

        localStorage.setItem("adminToken", action.payload.token);
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { logoutAdmin } = adminSlice.actions;
export default adminSlice.reducer;