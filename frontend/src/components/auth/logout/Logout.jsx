import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logout.css';

function Logout({ onLogout, onAdminUpdate, isAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Starting logout process...');

    // 1. Removing token from local storage
    console.log('Removing token from local storage...');
    localStorage.removeItem('token');
    
    // 2. If onLogout is passed as a prop and is a function, execute it.
    if (typeof onLogout === 'function') {
      console.log('Executing onLogout callback...');
      onLogout('');
    }

    // 3. Check if the logged-in user is an admin
    if (isAdmin) {
      console.log('Logged in user is an admin...');
      window.alert('Admin has been logged out.');

      // 4. If onAdminUpdate is passed as a prop and is a function, execute it to update the isAdmin state.
      if (typeof onAdminUpdate === 'function') {
        console.log('Executing onAdminUpdate callback to set admin status to false...');
        onAdminUpdate(false);
      }
      console.log('Admin status:', false);
    } else {
      console.log('Logged in user is NOT an admin.');
    }

    // 5. Navigate to the root route after logout.
    console.log('Finished logout process. Navigating to root...');
    navigate('/');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
