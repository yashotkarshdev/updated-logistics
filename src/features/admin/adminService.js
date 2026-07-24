// features/admin/adminService.js

import API from "../../utils/api";

export const loginAdminAPI = (data) => {
  return API.post("/api/admin/login", data);
};