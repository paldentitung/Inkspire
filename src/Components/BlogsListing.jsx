import React, { useState, useContext } from "react";
import Card from "./Card";
import blogsData from "../data/BlogData";
import Button from "./Button";
import { ModeContext } from "../Context/ModeContext";
import { ThemeContext } from "../Context/ThemeContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogsListing = ({ showAll = false }) => {
  const { mode } = useContext(ModeContext);
  const { colors } = useContext(ThemeContext);
  const { primary } = colors;

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  // 🔍 Filter + Search Logic
  const matchedData = blogsData.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filter
      ? blog.category.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesSearch && matchesFilter;
  });

  const visibleBlogs = showAll ? matchedData : matchedData.slice(0, 6);

  return (
    <div className="flex flex-col space-y-8 w-full max-w-6xl min-h-screen mx-auto mt-10 px-4">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Latest Blogs</h2>
        <p className="text-gray-500 dark:text-gray-300">
          Explore tutorials, projects, and tech insights to improve your coding
          skills.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="w-full flex flex-col md:flex-row md:justify-between gap-4 items-center">
        {showAll && (
          <input
            type="search"
            className={`w-full md:w-3/4 p-2 rounded-md shadow-sm border outline-none transition duration-200 ${
              mode ? "bg-white text-black" : "bg-gray-800 text-white"
            }`}
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: `1px solid ${primary}` }}
          />
        )}

        <div className="flex items-center gap-2">
          <label htmlFor="filter-blogs" className="font-medium">
            Category:
          </label>
          <select
            name="filter-blogs"
            id="filter-blogs"
            onChange={(e) => setFilter(e.target.value)}
            className={`rounded-md border cursor-pointer p-2 outline-none transition ${
              mode ? "bg-white text-black" : "bg-gray-800 text-white"
            }`}
            style={{ border: `1px solid ${primary}` }}
          >
            <option value="">All</option>
            <option value="Projects & Tutorials">Projects & Tutorials</option>
            <option value="Tips / Tools">Tips / Tools</option>
            <option value="Programming & JavaScript">
              Programming & JavaScript
            </option>
            <option value="Frontend / Web Development">
              Frontend / Web Development
            </option>
            <option value="Backend / Full Stack">Backend / Full Stack</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div>
        {visibleBlogs.length === 0 ? (
          <p
            className="text-center text-2xl mt-10 font-medium"
            style={{ color: primary }}
          >
            No blogs found 😕
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
            {visibleBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <Card blog={blog} mode={mode} primary={primary} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* View More Button */}
      {!showAll && (
        <Link to="/blogs" className="flex justify-center mt-8">
          <Button name="View More" />
        </Link>
      )}
    </div>
  );
};

export default BlogsListing;
