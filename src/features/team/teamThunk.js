import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./teamService";

export const createTeam = createAsyncThunk("t/create", API.createTeamAPI);
export const getTeams = createAsyncThunk("t/getAll", API.getTeamsAPI);

export const updateTeam = createAsyncThunk(
  "t/update",
  ({ id, data }) => API.updateTeamAPI(id, data)
);

export const deleteTeam = createAsyncThunk("t/delete", async (id) => {
  await API.deleteTeamAPI(id);
  return id;
});