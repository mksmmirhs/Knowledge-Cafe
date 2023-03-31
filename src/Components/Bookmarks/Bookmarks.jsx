import React from 'react';
import Bookmark from '../Bookmark/Bookmark';
import './Bookmarks.css';

const Bookmarks = props => {
  const { bookmarks, readTime } = props;
  return (
    <div className="Bookmarks">
      <div className="total-read">
        <p>Spent time on read : {readTime} min</p>
      </div>
      <div className="bookmark">
        <h1>Bookmarked Blogs : {bookmarks.length}</h1>
        <div className="blog-titles">
          {bookmarks.map(bookmark => (
            <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
