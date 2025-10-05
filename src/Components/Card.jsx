import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = ({ blog, mode }) => {
  return (
    <div
      className="  rounded-md cursor-pointer  h-[400px]
    shadow-md duration-300 hover:shadow-lg mt-10"
    >
      {/* blog image */}
      <div className="h-1/2">
        <img src={blog.image} alt="" className="h-full w-full object-contain" />
      </div>
      {/* blog content */}
      <div className="p-6 flex flex-col h-1/2 space-y-4 items-center justify-center text-center">
        <span className="font-bold">{blog.title}</span>
        <p className={`flex-1 ${mode ? "text-gray-700" : "text-white"}`}>
          {blog.excerpt}
        </p>
        <Link
          className=" flex gap-1 items-center text-blue-500 hover:underline"
          to={`/blog/${blog.slug}`}
        >
          <span> Read More</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
