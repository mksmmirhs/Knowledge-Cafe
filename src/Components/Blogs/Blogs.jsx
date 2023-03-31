import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarks from '../Bookmarks/bookmarks';
import './Blogs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);
  const notify = () => toast('Already bookmarked');
  const bookmarkHandler = id => {
    const exist = bookmarks.find(bookmark => bookmark.id === id);
    if (!exist) {
      const bookmarkFind = blogs.find(blog => blog.id === id);
      const tempBookmark = [...bookmarks, bookmarkFind];
      setBookmarks(tempBookmark);
    } else {
      notify();
    }
  };
  return (
    <div className="blogs-container">
      <div className="blogs">
        {blogs.map(blog => (
          <Blog
            key={blog.id}
            blog={blog}
            bookmarkHandler={bookmarkHandler}
          ></Blog>
        ))}
      </div>
      <div className="bookmarks">
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default Blogs;
