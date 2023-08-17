import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet is used to render nested routes

function Dashboard({ token, isAdmin }) {
  // You can use the 'token' and 'isAdmin' props to conditionally render content

  return (
    <div>
      <h2>Welcome to the Dashboard!</h2>
      {isAdmin && <p>You have admin privileges.</p>}
      <Outlet /> {/* Render nested routes within the Dashboard */}
    </div>
  );
}

export default Dashboard;
