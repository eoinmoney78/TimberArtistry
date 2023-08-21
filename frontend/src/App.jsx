import React, { useState, useEffect } from 'react';
// import Auth from './components/auth/Auth';
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Header from './layout/Header';  
import Footer from './layout/Footer';  
import HomePage from './components/pages/HomePage';  
import ServicesPage from './components/pages/ServicesPage';  

import { Routes, Route } from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setSessionToken(storedToken);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setSessionToken('');
  };

  return (
    <div>
      <Header isAuthenticated={!!sessionToken} logout={logout} />

      <Routes>
        <Route path="/" element={<HomePage />} />   
        <Route path="/services" element={<ServicesPage />} />
        
        <Route path="/login" element={<Login updateToken={updateToken} />} />
        <Route path="/register" element={<Register updateToken={updateToken} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
