import React from 'react';
import './Blog.css';
const Blog = props => {
  const {
    id,
    author_name,
    blog_title,
    author_image,
    blog_cover,
    read_time,
    published,
  } = props.blog;
  return (
    <div className="blog-container">
      <img src={blog_cover} alt="" />
      <div className="blog-info">
        <div className="author"></div>
        <div className="read-time-btn"></div>
      </div>
    </div>
  );
};

export default Blog;
