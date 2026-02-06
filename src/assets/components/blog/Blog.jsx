import React from "react";
import "./blog.css";
import { BiSolidBookmarkStar } from "react-icons/bi";
const Blog = ({ blog, handleBookMarked, handleMarkAsRead }) => {
  return (
    <div className="blog ">
      <img className="img" src={blog.cover_Photo} alt="cover" />
      <h3 className="text-sm text-start">Title: {blog.title} </h3>
      <div className="flex justify-between">
        {blog.hashTags.map((has, index) => (
          <p key={index}>{has}</p>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="avatar flex gap-3  items-center mt-4">
          <div className="ring-primary  w-7 rounded-full ring-2 ">
            <img src={blog.author_img} />
          </div>
          <h2 className="text-xl font-medium ">{blog.author}</h2>
        </div>
        <BiSolidBookmarkStar onClick={() => handleBookMarked(blog)} size={25} />
      </div>
      <button onClick={() => handleMarkAsRead(blog.reading_time)}>
        mark as read
      </button>
    </div>
  );
};

export default Blog;
