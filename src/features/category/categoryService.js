import API from "../../utils/api";

export const createCategoryAPI = (data) =>
  API.post("/api/categories", data).then((res) => res.data);

export const getCategoriesAPI = () =>
  API.get("/api/categories").then((res) => res.data);

export const updateCategoryAPI = (id, data) =>
  API.put(`/api/categories/${id}`, data).then((res) => res.data);

export const deleteCategoryAPI = (id) =>
  API.delete(`/api/categories/${id}`);