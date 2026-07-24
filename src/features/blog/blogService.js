import API from "../../utils/api";

// GET ALL
export const getBlogsAPI = async () => {
  const res = await API.get("/api/blogs");
  return res.data;
};

// GET BY ID
export const getBlogByIdAPI = async (id) => {
  const res = await API.get(`/api/blogs/${id}`);
  return res.data;
};

// CREATE (Missing in your snippet)
export const createBlogAPI = async (data) => {
  const res = await API.post("/api/blogs", data);
  return res.data;
};

// UPDATE
export const updateBlogAPI = async (id, data) => {
  const res = await API.put(`/api/blogs/${id}`, data);
  return res.data;
};

// DELETE
export const deleteBlogAPI = async (id) => {
  await API.delete(`/api/blogs/${id}`);
};

// TOGGLE STATUS
export const toggleBlogStatusAPI = async (id) => {
  const res = await API.patch(`/api/blogs/${id}/status`);
  return res.data;
};