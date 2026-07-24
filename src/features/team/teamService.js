import API from "../../utils/api";

export const createTeamAPI = (data) =>
  API.post("/api/teams", data).then((r) => r.data);

export const getTeamsAPI = () =>
  API.get("/api/teams").then((r) => r.data);

export const updateTeamAPI = (id, data) =>
  API.put(`/api/teams/${id}`, data).then((r) => r.data);

export const deleteTeamAPI = (id) =>
  API.delete(`/api/teams/${id}`);