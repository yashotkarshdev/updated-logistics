import API from "../../utils/api";

export const createContactAPI = (data) =>
  API.post("/api/contacts", data).then((r) => r.data);

export const getContactsAPI = () =>
  API.get("/api/contacts").then((r) => r.data);

export const deleteContactAPI = (id) =>
  API.delete(`/api/contacts/${id}`);
export const updateContactStatusAPI = (id) =>
  API.patch(`/api/contacts/${id}/status`).then((r) => r.data);
