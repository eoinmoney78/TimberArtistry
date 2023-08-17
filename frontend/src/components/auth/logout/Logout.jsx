import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';
function Logout({ onLogout, onAdminUpdate }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    if (typeof onLogout === 'function') {
      onLogout('');
    }
    if (typeof onAdminUpdate === 'function') {
      onAdminUpdate(false);  // Set the admin status to false when the user logs out
      console.log('Admin status:', false);  // Log the admin status
    }
    console.log('logout');
    navigate('/');
  };

  return (
    <button className="logout-button" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
