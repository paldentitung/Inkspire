import React from "react";
import Hero from "../Components/Hero";
import BlogsListing from "../Components/BlogsListing";
import About from "../Components/About";
import Contact from "../Components/Contact";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { ThemeContext } from "../Context/ThemeContext";
import Footer from "../Components/Footer";
const Home = () => {
  const { mode } = useContext(ModeContext);
  const { colors } = useContext(ThemeContext);
  const { primary } = colors;
  return (
    <div className="flex flex-col  space-y-10">
      <Hero />
      <BlogsListing showAll={false} />
      <About mode={mode} primary={primary} />
      <Contact mode={mode} primary={primary} />
      <Footer />
    </div>
  );
};

export default Home;
