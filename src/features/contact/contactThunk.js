import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./contactService";

export const createContact = createAsyncThunk("c/create", API.createContactAPI);
export const getContacts = createAsyncThunk("c/getAll", API.getContactsAPI);

export const deleteContact = createAsyncThunk("c/delete", async (id) => {
  await API.deleteContactAPI(id);
  return id;
});



export const updateContactStatus = createAsyncThunk(
  "contact/updateStatus",
  async ({ id, status }, thunkAPI) => {
    try {
      const res = await API.updateContactStatusAPI({ id, status });
      return res;
    } catch (err) {
      console.log("ERROR:", err);
      return thunkAPI.rejectWithValue(err.response?.data);
    }
  }
);