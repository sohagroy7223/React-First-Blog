import React, { useEffect, useState } from "react";

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
      <h3>All blogs is here: {blogs.length}</h3>
    </div>
  );
};

export default Blogs;
