import { createSlice } from "@reduxjs/toolkit";
import { createTeam, getTeams, updateTeam, deleteTeam } from "./teamThunk";

const initialState = {
  teams: [],
  loading: false,
  error: null,
  success: false,
};

const slice = createSlice({
  name: "team",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = action.payload.data || action.payload;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.teams.unshift(action.payload.data || action.payload);
      })
      .addCase(updateTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const updated = action.payload.data || action.payload;
        const index = state.teams.findIndex((t) => t._id === updated._id);
        if (index !== -1) state.teams[index] = updated;
      })
      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.loading = false;
        state.teams = state.teams.filter((t) => t._id !== action.payload);
      })
      .addMatcher((action) => action.type.endsWith("/pending"), (state) => {
        state.loading = true;
      })
      .addMatcher((action) => action.type.endsWith("/rejected"), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetStatus } = slice.actions;
export default slice.reducer;