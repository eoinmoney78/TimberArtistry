import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img className="headerImg" src="https://images.pexels.com/photos/9387207/pexels-photo-9387207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/artworks">Artworks</Link>
          </li>
          <li>
            <Link to="/dashboard/projects">Projects</Link>
          </li>
          <li>
            <Link to="/dashboard/blog">Blog</Link> {/* Add the link to the Blog component */}
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
