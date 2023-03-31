import React from 'react';
import './Bookmark.css';
const Bookmark = ({ bookmark }) => {
  return (
    <div className="bookmark-compo">
      <p>{bookmark.blog_title}</p>
    </div>
  );
};

export default Bookmark;
