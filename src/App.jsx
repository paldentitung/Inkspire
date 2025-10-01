import React from "react";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import AboutusPage from "./Pages/AboutusPage";
import ContactPage from "./Pages/ContactPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import { Route, Routes } from "react-router-dom";
import Header from "./Context/Header";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
