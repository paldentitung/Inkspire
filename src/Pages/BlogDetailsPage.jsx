import React from "react";
import { useParams } from "react-router-dom";
const BlogDetailsPage = () => {
  const { slug } = useParams();
  return <div>BlogDetailsPage{slug}</div>;
};

export default BlogDetailsPage;
