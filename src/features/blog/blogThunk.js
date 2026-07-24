import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./blogService";

export const getBlogs = createAsyncThunk("blog/getAll", async (_, { rejectWithValue }) => {
  try {
    return await API.getBlogsAPI();
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const createBlog = createAsyncThunk("blog/create", async (data, { rejectWithValue }) => {
  try {
    return await API.createBlogAPI(data);
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const updateBlog = createAsyncThunk("blog/update", async ({ id, data }, { rejectWithValue }) => {
  try {
    return await API.updateBlogAPI(id, data);
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const deleteBlog = createAsyncThunk("blog/delete", async (id, { rejectWithValue }) => {
  try {
    await API.deleteBlogAPI(id);
    return id;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const toggleBlogStatus = createAsyncThunk("blog/toggleStatus", async (id, { rejectWithValue }) => {
  try {
    return await API.toggleBlogStatusAPI(id);
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});