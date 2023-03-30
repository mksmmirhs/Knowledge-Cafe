import { faBookmark } from '@fortawesome/free-solid-svg-icons';
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
  } = props.blog;
  return (
    <div className="blog-container">
      <img src={blog_cover} alt="" />
      <div className="blog-info">
        <div className="author">
          <img src={author_image} alt="" />
          <div className="name">
            <h3>{author_name}</h3>
          </div>
        </div>
        <div className="read-time-btn">
          {read_time} min read
          <button className="btn-bookmark">
            {<FontAwesomeIcon icon={faBookmark} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
