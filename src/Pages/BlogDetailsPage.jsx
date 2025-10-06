// src/components/BlogDetailsPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import blogsData from "../data/BlogData";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const selectedBlog = blogsData.find((blog) => blog.slug === slug);

  // Handle case where blog is not found
  if (!selectedBlog) {
    return (
      <div className="max-w-4xl mx-auto p-5 text-center">
        <h1 className="text-3xl font-bold text-red-600">Blog Not Found</h1>
        <p className="text-gray-600 mt-4">
          Sorry, the blog post you're looking for doesn't exist.
        </p>
      </div>
    );
  }
  const navigate = useNavigate();
  const { colors } = useContext(ThemeContext);
  const { primary } = colors;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <button
        onClick={() => navigate(-1)}
        style={{ color: primary, borderBottomColor: primary }}
        className="flex gap-1  items-center border-b-2 mb-4  hover:cursor-pointer"
      >
        <FaArrowLeft />
        <span>Go Back</span>
      </button>
      {/* Blog Title */}
      <h1 className="md:text-3xl font-bold mb-4 text-center text-gray-800">
        {selectedBlog.title}
      </h1>

      {/* Blog Excerpt */}
      <p className="italic text-center mb-4">{selectedBlog.description}</p>

      {/* Blog Image */}
      <img
        src={selectedBlog.image}
        alt={selectedBlog.title}
        className="w-full h-[400px] object-contain rounded-lg mb-4"
      />

      {/* Meta Information */}
      <div className="flex gap-4 text-gray-500 mb-6">
        <span>Category: {selectedBlog.category}</span>
        <span>
          Published: {new Date(selectedBlog.publishedDate).toLocaleDateString()}
        </span>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg prose-blue">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {selectedBlog.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
