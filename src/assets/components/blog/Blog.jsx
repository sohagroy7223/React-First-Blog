import React from "react";
import "./blog.css";
const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <h3>name: {blog.title} </h3>
      <img className="img" src={blog.cover_Photo} alt="" />
    </div>
  );
};

export default Blog;
