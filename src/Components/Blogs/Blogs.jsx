import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/bookmarks';
import './Blogs.css';
const Blogs = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlog(data));
  }, []);
  const bookmarkHandler = id => {
    console.log(id);
  };
  return (
    <div className="blogs-container">
      <div className="blogs">
        {blog.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            bookmarkHandler={bookmarkHandler}
          ></Blog>
        ))}
      </div>
      <div className="bookmarks">
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default Blogs;
