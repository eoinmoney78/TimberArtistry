import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/dashboard/artworks">Artworks</Link>
        </li>
        <li>
          <Link to="/dashboard/projects">Projects</Link>
        </li>
        {/* Add more navigation links as needed */}
        <li>
            <Link to="/dashboard/blog">Blog</Link> {/* Add the link to the Blog component */}
          </li>
      </ul>
    </div>
  );
  
}

export default Sidebar;
