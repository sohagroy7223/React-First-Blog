import React, { useEffect, useState } from "react";
import Blog from "../blog/blog";
import "./blogs.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //   console.log(blogs);

  return (
    <div>
      <h2 className="font-bold text-2xl">All blogs item: {blogs.length}</h2>
      <div className="grid grid-cols-2">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
