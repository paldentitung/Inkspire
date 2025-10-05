import React from "react";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import AboutusPage from "./Pages/AboutusPage";
import ContactPage from "./Pages/ContactPage";
import BlogDetailsPage from "./Pages/BlogDetailsPage";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import { useContext } from "react";
import { ModeContext } from "./Context/ModeContext";
import PageNotFound from "./Pages/PageNotFound";
const App = () => {
  const { mode, setMode } = useContext(ModeContext);
  return (
    <div
      className={` min-h-screen ${
        mode ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <Header mode={mode} setMode={setMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:slug" element={<BlogDetailsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
