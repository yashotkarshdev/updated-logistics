import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import HomeMain from "../pages/home/HomeMain";
import Layout from "../layout/layout";
import AboutMain from "../pages/about/AboutMain";
import TeamMain from "../pages/team/TeamMain";
// import AuditMain from "../pages/audit/AuditMain";

import AdminLogin from "../components/AdminLogin";
import ProductedLayout from "../layout/ProductedLayout";
import AllCategory from "../pages/category/AllCategory";
import AllTeam from "../pages/teamAdmin/AllTeam";
import AllContact from "../pages/ContactAdmin/AllContact";
import AllBlogs from "../pages/blog/AllBlogs";
// import Blogs from "../pages/blogs/Blogs";
import ServiceMain from "../pages/services/ServiceMain";
import Contact from "../pages/contact";
// import BlogDetails from "../pages/blogs/BlogDetails";
import NotFound from "../pages/NotFound";
import EventsMain from "../pages/events/EventsMain";
import EventDetails from "../pages/events/EventDetails";



const AppRoute = () => {
  const { token } = useSelector((state) => state.admin);

  return (
    <Routes>
      {/* 🌐 PUBLIC */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeMain />} />
        <Route path="about" element={<AboutMain />} />
        <Route path="team" element={<TeamMain />} />
        {/* <Route path="compliances" element={<AuditMain />} /> */}
        <Route path="services" element={<ServiceMain />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="blog/:id" element={<BlogDetails />} /> */}
        <Route path="contact" element={<Contact />} />

        {/* ✅ FIXED */}
        <Route path="events" element={<EventsMain />} />
        <Route path="event/:id" element={<EventDetails />} />

        <Route path="*" element={<NotFound />} />
      </Route>

      {/* 🔐 LOGIN */}
      <Route
        path="/admin/login"
        element={!token ? <AdminLogin /> : <Navigate to="/admin/category" />}
      />

      {/* 🔒 PROTECTED ADMIN */}
      <Route
        path="/admin"
        element={token ? <ProductedLayout /> : <Navigate to="/admin/login" />}
      >
        <Route path="blogs" element={<AllBlogs />} />
        <Route path="category" element={<AllCategory />} />
        <Route path="team" element={<AllTeam />} />
        <Route path="contact" element={<AllContact />} />

        {/* ❌ ADMIN NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* ❌ GLOBAL FALLBACK (optional but best practice) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoute;