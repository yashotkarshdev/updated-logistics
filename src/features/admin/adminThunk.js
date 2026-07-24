// features/admin/adminThunk.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginAdminAPI } from "./adminService";

export const loginAdmin = createAsyncThunk(
  "admin/login",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await loginAdminAPI(formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Login failed"
      );
    }
  }
);