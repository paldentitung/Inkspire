import React from "react";
import Hero from "../Components/Hero";
import BlogsListing from "../Components/BlogsListing";
const Home = () => {
  return (
    <div>
      <Hero />
      <BlogsListing showAll={false} />
    </div>
  );
};

export default Home;
