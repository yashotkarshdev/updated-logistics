import { createSlice } from "@reduxjs/toolkit";
import {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleBlogStatus,
} from "./blogThunk";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  success: false,
};

const blogSlice = createSlice({
  name: "blog",
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
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload.data || action.payload;
      })
      
      // CREATE
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const newBlog = action.payload.data || action.payload;
        state.blogs.unshift(newBlog);
      })

      // UPDATE
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const updated = action.payload.data || action.payload;
        const i = state.blogs.findIndex((b) => b._id === updated._id);
        if (i !== -1) state.blogs[i] = updated;
      })

      // DELETE
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = state.blogs.filter((b) => b._id !== action.payload);
      })

      // TOGGLE STATUS
      .addCase(toggleBlogStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload.data || action.payload;
        const i = state.blogs.findIndex((b) => b._id === updated._id);
        if (i !== -1) state.blogs[i] = updated;
      })

      // Global Loading & Error Handling
      .addMatcher(
        (action) => action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
          state.error = null;
          state.success = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action) => {
          state.loading = false;
          // Capture the error from rejectWithValue
          state.error = action.payload?.message || action.error?.message || "Something went wrong";
          state.success = false;
        }
      );
  },
});

export const { resetStatus } = blogSlice.actions;
export default blogSlice.reducer;