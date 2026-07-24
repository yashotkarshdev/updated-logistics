import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "../features/admin/adminSlice";
import blogReducer from "../features/blog/blogSlice";
import categoryReducer from "../features/category/categorySlice";
import contactReducer from "../features/contact/contactSlice";
import teamReducer from "../features/team/teamSlice";

export const store = configureStore({
  reducer: {
    admin: adminReducer,
    blog: blogReducer,
    category: categoryReducer,
    contact: contactReducer,
    team: teamReducer,
  },
});