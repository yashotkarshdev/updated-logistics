import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./categoryService";

export const createCategory = createAsyncThunk("cat/create", API.createCategoryAPI);
export const getCategories = createAsyncThunk("cat/getAll", API.getCategoriesAPI);

export const updateCategory = createAsyncThunk(
  "cat/update",
  ({ id, data }) => API.updateCategoryAPI(id, data)
);

export const deleteCategory = createAsyncThunk(
  "cat/delete",
  async (id) => {
    await API.deleteCategoryAPI(id);
    return id;
  }
);