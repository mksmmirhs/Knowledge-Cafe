import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">Knowledge Hub</div>
        <nav>
          <a href="\home">Home</a>
          <a href="\blog">Blog</a>
          <a href="\about_us">About Us</a>
        </nav>
      </div>
      <hr />
    </div>
  );
};

export default Header;
