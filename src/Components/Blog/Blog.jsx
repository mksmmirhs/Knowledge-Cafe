import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    hash,
  } = props.blog;
  const bookmarkHandler = props.bookmarkHandler;
  const readTimeHandler = props.readTimeHandler;
  return (
    <div className="blog-container">
      <img src={blog_cover} alt="" />
      <div className="blog-info">
        <div className="author">
          <img src={author_image} alt="" />
          <div className="name">
            <h3>{author_name}</h3>
            <h4>{published}</h4>
          </div>
        </div>
        <div className="read-time-btn">
          {read_time} min read
          <button onClick={() => bookmarkHandler(id)} className="btn-bookmark">
            {<FontAwesomeIcon icon={faBookmark} />}
          </button>
        </div>
      </div>
      <div className="blog-title">
        <h1>{blog_title}</h1>
        <h3>{hash}</h3>
      </div>
      <p className="mark-read" onClick={() => readTimeHandler(id)}>
        Mark as read
      </p>
      <hr />
    </div>
  );
};

export default Blog;
