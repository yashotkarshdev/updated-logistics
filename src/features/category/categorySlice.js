import { createSlice } from "@reduxjs/toolkit";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "./categoryThunk";

const initialState = {
  categories: [],
  loading: false,
  error: null,
  success: false,
};

const slice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // GET ALL
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload.data || action.payload;
      })
      // CREATE
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.categories.unshift(action.payload.data || action.payload);
      })
      // UPDATE
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const updated = action.payload.data || action.payload;
        const index = state.categories.findIndex((c) => c._id === updated._id);
        if (index !== -1) state.categories[index] = updated;
      })
      // DELETE
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter((c) => c._id !== action.payload);
      })
      // Matchers for global Pending and Rejected states
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export const { resetStatus } = slice.actions;
export default slice.reducer;