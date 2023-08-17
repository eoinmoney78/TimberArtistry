import React, { useState, useEffect } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Auth from './components/auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  console.log("App.jsx:", sessionToken);

  const updateToken = (newToken) => {
    console.log("updateToken called with newToken:", newToken);
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("useEffect storedToken:", storedToken);
    if (storedToken) {
      setSessionToken(storedToken);
    }
  }, []);

  return (
 
      <Routes>
      <Route path="/" element={<Auth updateToken={updateToken} />} />
      <Route path="/dashboard" element={<Dashboard token={sessionToken} />} />
      </Routes>

  );
}

export default App;
