import React from "react";
import Card from "./Card";
import blogsData from "../data/BlogData";
import Button from "./Button";
import { useContext } from "react";
import { ModeContext } from "../Context/ModeContext";
import { Link } from "react-router-dom";
const BlogsListing = ({ showAll = false }) => {
  const { mode } = useContext(ModeContext);
  const showAllBlogs = showAll ? blogsData : blogsData.slice(0, 6);
  return (
    <div className="flex flex-col space-y-5 w-full max-w-6xl min-h-screen mx-auto mt-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Latest Blogs</h2>
        <p className=" mb-12">
          Explore tutorials, projects, and tech insights to improve your coding
          skills.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {showAllBlogs.map((blog) => (
          <Card key={blog.id} blog={blog} mode={mode} />
        ))}
      </div>
      {!showAll && (
        <Link to="/blogs" className="flex justify-center items-center">
          <Button name="View More" />
        </Link>
      )}
    </div>
  );
};

export default BlogsListing;
