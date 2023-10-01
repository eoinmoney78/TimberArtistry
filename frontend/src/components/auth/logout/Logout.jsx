import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';

function Logout({ onLogout, onAdminUpdate, isAdmin }) {
  const navigate = useNavigate();

  const logout = () => {
    console.log('Starting logout process...');

    console.log('Removing token from local storage...');
    localStorage.removeItem('token');
    
    if (typeof onLogout === 'function') {
      console.log('Executing onLogout callback...');
      onLogout('');
    }

    if (isAdmin) {
      console.log('Logged in user is an admin...');
      window.alert('Admin has been logged out.');
    } else {
      console.log('Logged in user is NOT an admin.');
    }

    if (typeof onAdminUpdate === 'function') {
      console.log('Executing onAdminUpdate callback to set admin status to false...');
      onAdminUpdate(false);
      console.log('Admin status:', false);
    }
    console.log('Finished logout process. Navigating to root...');
    navigate('/');
  };

  return (
    <button className="logout-button" onClick={logout}>
      Logout
    </button>
  );
};

export default Logout;
