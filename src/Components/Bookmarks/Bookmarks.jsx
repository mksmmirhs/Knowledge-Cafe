import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css';

const Bookmarks = props => {
  const { bookmarks } = props;
  return (
    <div className="Bookmarks">
      <div className="total-read">
        <p>Spent time on read : 177 min</p>
      </div>
      <div className="bookmark">
        <h1>Bookmarked Blogs : {bookmarks.length}</h1>
        <div className="blog-titles">
          <Bookmark></Bookmark>
          <Bookmark></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
