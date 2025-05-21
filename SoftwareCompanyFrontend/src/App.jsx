import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/pages/HomePage";
import ContactUsPage from "./views/pages/ContactUsPage";
import BlogsPage from "./views/pages/BlogsPage";
import ProjectsPage from "./views/pages/ProjectsPage";
import ServicesPage from "./views/pages/ServicesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
      </Routes>
    </>
  );
};

export default App;
