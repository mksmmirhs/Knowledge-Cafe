import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';
const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlog(data));
  }, []);
  return (
    <div className="blogs-container">
      <div className="blogs">
        {blog.map(blog => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div className="bookmarks"></div>
    </div>
  );
};

export default Blogs;
