import { createSlice } from "@reduxjs/toolkit";
import {
  createContact,
  getContacts,
  deleteContact,
  updateContactStatus,
} from "./contactThunk";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
  success: false,
};

const slice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = action.payload.data || action.payload;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contacts.unshift(action.payload.data || action.payload);
      })
      .addCase(updateContactStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const updated = action.payload.data || action.payload;
        const index = state.contacts.findIndex((c) => c._id === updated._id);
        if (index !== -1) state.contacts[index] = updated;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter((c) => c._id !== action.payload);
      })
      // Global Matchers for standard states
      .addMatcher((action) => action.type.endsWith("/pending"), (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher((action) => action.type.endsWith("/rejected"), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = slice.actions;
export default slice.reducer;